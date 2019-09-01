'use strict'
const path = require('path')
const args = process.argv.slice(2)
const distFolder = args[0] || 'dist';

var copydir = require('copy-dir');
var games = [
    {
      from: './src/client',
      to: `./${distFolder}/public`
    },
    {
      from: './src/server',
      to: `./${distFolder}`
    },
    {
      from: './node_modules/capmangalaxy/docs',
      to: `./${distFolder}/public/games/capmangalaxy`
    },
    {
      from: './node_modules/capmancrashingbugs/docs',
      to: `./${distFolder}/public/games/capmancrashingbugs`
    },
    {
      from: './node_modules/phaser-league/src',
      to: `./${distFolder}/public/games/phaser-league`
    },
    {
      from: './node_modules/break-down',
      to: `./${distFolder}/public/games/break-down`
    },
    {
      from: './node_modules/@capacade/keymapper/dist',
      to: `./${distFolder}/public/games/keymapper`
    },
    {
      from: './node_modules/capball',
      to: `./${distFolder}/public/games/capball`
    }
  ];

  console.log('copy files');
  const promiseMap = games.map(game => {
    let promise = new Promise(function(resolve){
      copydir(game.from, game.to, function(err){
        resolve();
      });
    });
    return promise;
  });

Promise.all(promiseMap).then(function(values) {
    console.log('files are copied');
});