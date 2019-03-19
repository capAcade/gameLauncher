const copyDir = require('copy-dir');
const extract = require('extract-zip');
const fs = require('fs');
const rf = require('rimraf');
const rp = require('request-promise-native');

const { games, zipURL } = require('./config');

const createDir = () => new Promise((resolve, reject) => {
    if (!fs.existsSync('tmp')) {
        console.log('Creating new tmp dir');
        resolve(fs.mkdirSync('tmp', { mode: 0o777 }));
    } else {
        console.log('Removing old tmp');
        rf('tmp', (err) => {
            if (err) {
                console.log('error: ', err);
                reject(err);
            } else {
                console.log('Creating new tmp dir');
                resolve(fs.mkdirSync('tmp', { mode: 0o777 }));
            }
        });
    }
});

const getUpdatesZip = () => new Promise((resolve, reject) => {
    const options = {
        uri: zipURL,
        method: 'GET',
        encoding: 'binary',
        headers: {
            'Content-type': 'application/zip',
        },
    };
    console.log('Downloading Update ...');
    rp(options)
        .then((body) => {
            const writeStream = fs.createWriteStream('tmp/update.zip');
            writeStream.write(body, 'binary');
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
    console.log('Unzipping ...');
    extract('./tmp/update.zip', { dir: `${__dirname}/tmp/` }, (err) => {
        if (err) {
            console.log('error: ', err);
            reject(err);
        } else {
            console.log('Unzipping Completed');
            resolve();
        }
    });
});

const cp = (source, target) => new Promise((resolve, reject) => {
    console.log(`Copying from ${source} to ${target} ...`);
    copyDir(source, target, (err) => {
        if (err) {
            console.log('error: ', err);
            reject(err);
        } else {
            console.log('Finished Copying');
            resolve();
        }
    });
});

const cpDev = () => new Promise((resolve, reject) => {
    console.log('Copying games into public directory ...');
    const promiseMap = games.map(game => cp(game.from, game.to));
    Promise.all(promiseMap)
        .then(() => {
            console.log('Finished copying games', promiseMap);
            resolve();
        })
        .catch((err) => {
            console.log('Error: ', err);
            reject(err);
        });
});

(async () => {
    console.log('Start install');
    if (process.env.NODE_ENV === 'prod') {
        await createDir();
        await getUpdatesZip();
        await unzip();
        await cp('./tmp/public', './public');
    } else {
        await cpDev();
    }
    console.log('Finished install');
})();
