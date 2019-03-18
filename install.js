const copyDir = require('copy-dir');
const extract = require('extract-zip');
const fs = require('fs');
const rf = require('rimraf');
const rp = require('request-promise-native');

const games = [
    {
        from: './node_modules/capmangalaxy/docs',
        to: './public/games/capmangalaxy',
    },
    {
        from: './node_modules/capmancrashingbugs/docs',
        to: './public/games/capmancrashingbugs',
    },
    {
        from: './node_modules/phaser-league/src',
        to: './public/games/phaser-league',
    },
    {
        from: './node_modules/break-down',
        to: './public/games/break-down',
    },
    {
        from: './node_modules/capball',
        to: './public/games/capball',
    },
];

const createDir = () => new Promise((resolve, reject) => {
    console.log('creating new tmp directory');
    if (!fs.existsSync('tmp')) {
        resolve(fs.mkdirSync('tmp', { mode: 0o777 }));
    } else {
        rf('tmp', (err) => {
            if (err) {
                console.log('error: ', err);
                reject(err);
            } else {
                resolve(fs.mkdirSync('tmp', { mode: 0o777 }));
            }
        });
    }
});

const getUpdatesZip = () => new Promise((resolve, reject) => {
    const options = {
        uri: 'https://s3-eu-west-1.amazonaws.com/cap-acade-public/artifacts/build.zip',
        method: 'GET',
        encoding: 'binary',
        headers: {
            'Content-type': 'application/zip',
        },
    };
    rp(options)
        .then((body) => {
            const writeStream = fs.createWriteStream('tmp/update.zip');
            writeStream.write(body, 'binary');
            console.log('Downloading Update ...');
            writeStream.on('finish', () => {
                console.log('Update Download Completed');
                resolve();
            });
            writeStream.end();
        })
        .catch((err) => {
            console.log('error: ', err);
            reject(err);
        });
});

const unzip = () => new Promise((resolve, reject) => {
    extract('./tmp/update.zip', { dir: `${__dirname}/tmp/` }, (err) => {
        if (err) {
            console.log('error: ', err);
            reject(err);
        } else {
            resolve();
        }
    });
});

const cpProd = () => new Promise((resolve, reject) => {
    console.log('copying public directory');
    copyDir('./tmp/public', './public', (err) => {
        if (err) {
            console.log('error: ', err);
            reject(err);
        } else {
            console.log('Finished copy public directory');
            resolve();
        }
    });
});

const cpDev = () => new Promise((resolve) => {
    const promiseMap = games.map((game) => {
        const promise = new Promise((res, rej) => {
            copyDir(game.from, game.to, (err) => {
                if (err) {
                    rej(err);
                } else {
                    res();
                }
            });
        });
        return promise;
    });
    Promise.all(promiseMap).then(() => {
        resolve();
    });
});

const handler = async () => {
    if (process.env.NODE_ENV === 'prod') {
        await createDir();
        await getUpdatesZip();
        await unzip();
        await cpProd();
    } else {
        await cpDev();
    }
};

handler();
