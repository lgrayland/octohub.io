/**
 * Require Browsersync along with webpack and middleware for it
 */
import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../webpack.config.dev';

const bundler = webpack(config);

/**
 * Run Browsersync and use middleware for Hot Module Replacement
 */
browserSync({
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
