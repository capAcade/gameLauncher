const AutoLoad = require('fastify-autoload');

const path = require('path');

module.exports = (fastify, opts, next) => {
    console.log('starting server ...');
    // Place here your custom code!
    fastify.register(require('fastify-static'), {
        root: path.join(__dirname, 'public'),
        // optional: default '/'
        prefix: '/',
    });

    // Do not touch the following lines

    /*
     * This loads all plugins defined in plugins
     * those should be support plugins that are reused
     * through your application
     */
    fastify.register(AutoLoad, {
        dir: path.join(__dirname, 'plugins'),
        options: Object.assign({}, opts),
    });

    /*
     * This loads all plugins defined in services
     * define your routes in one of these
     */
    fastify.register(AutoLoad, {
        dir: path.join(__dirname, 'services'),
        options: Object.assign({}, opts),
    });

    // Make sure to call next when done
    next();
};
