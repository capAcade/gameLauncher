'use strict'
const path = require('path')
const AutoLoad = require('fastify-autoload')
var copydir = require('copy-dir');

var games = [
  {
    from: './node_modules/capmangalaxy/docs',
    to: './public/games/capmangalaxy'
  },
  {
    from: './node_modules/capmancrashingbugs/docs',
    to: './public/games/capmancrashingbugs'
  },
  {
    from: './node_modules/phaser-league/src',
    to: './public/games/phaser-league'
  },
  {
    from: './node_modules/break-down',
    to: './public/games/break-down'
  },
  {
    from: './node_modules/capball',
    to: './public/games/capball'
  }
];

module.exports = function (fastify, opts, next) {

  const promiseMap = games.map(game => {
    let promise = new Promise(function(resolve){
      copydir(game.from, game.to, function(err){
        resolve();
      });
    });
    return promise;
  });

  Promise.all(promiseMap).then(function(values) {
    // Place here your custom code!
    fastify.register(require('fastify-static'), {
      root: path.join(__dirname, 'public'),
      prefix: '/', // optional: default '/'
    })

    // Do not touch the following lines

    // This loads all plugins defined in plugins
    // those should be support plugins that are reused
    // through your application
    fastify.register(AutoLoad, {
      dir: path.join(__dirname, 'plugins'),
      options: Object.assign({}, opts)
    })

    // This loads all plugins defined in services
    // define your routes in one of these
    fastify.register(AutoLoad, {
      dir: path.join(__dirname, 'services'),
      options: Object.assign({}, opts)
    })

    // Make sure to call next when done
    next()
  });

}
