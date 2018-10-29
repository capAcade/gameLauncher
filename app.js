'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')


var copydir = require('copy-dir');
 
copydir.sync('./node_modules/capmangalaxy/docs', './public/games/capmangalaxy');
copydir.sync('./node_modules/capmancrashingbugs/docs', './public/games/capmancrashingbugs');
copydir.sync('./node_modules/phaser-racer/dist', './public/games/phaser-racer');

module.exports = function (fastify, opts, next) {
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
}
