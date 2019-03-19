module.exports = {
    games: [
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
    ],
    zipURL: 'https://s3-eu-west-1.amazonaws.com/cap-acade-public/artifacts/build.zip',
};
