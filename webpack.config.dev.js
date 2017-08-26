// For instructions about this file refer to
// webpack and webpack-hot-middleware documentation
import webpack from "webpack";

import path from "path";

export default {
    debug: true,
    devtool: '#eval-source-map',

    entry: [
        path.resolve(__dirname, 'src/index.js')
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    module: {
        loaders: [
            {
                loader: 'babel-loader',

                // Only run `.js` and `.jsx` files through Babel
                test: /\.jsx?$/,

                exclude: /node_modules/,

                // Options to configure babel with
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0']
                }
            }
        ]
    }
};
