/**
 * Require Browsersync along with webpack and middleware for it
 */
const browserSync = require('browser-sync').create();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const stripAnsi = require('strip-ansi');

/**
 * Require ./webpack.config.js and make a bundler from it
 */
const config = require('../webpack.config.dev');
const bundler = webpack(config);

/**
 * Reload all devices when bundle is complete
 * or send a fullscreen error message to the browser instead
 */
bundler.plugin('done', function(stats) {
    if (stats.hasErrors() || stats.hasWarnings()) {
        return browserSync.sockets.emit('fullscreen:message', {
            title: 'Webpack Error:',
            body: stripAnsi(stats.toString()),
            timeout: 100000
        });
    }
    browserSync.reload();
});

/**
 * Run Browsersync and use middleware for Hot Module Replacement
 */
browserSync.init({
    server: {
        baseDir: 'src',
    },
    middleware: [
        webpackDevMiddleware(bundler, {
            publicPath: config.output.publicPath,

            // These settings suppress noisy webpack output so only errors are displayed to the console.
            noInfo: false,
            quiet: false,
            stats: {
                assets: false,
                colors: true,
                version: false,
                hash: false,
                timings: false,
                chunks: false,
                chunkModules: false
            }
        })
    ],
    plugins: ['bs-fullscreen-message'],
    files: ['src/*.html']
});
