
import webpack from "webpack";
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import path from "path";

export default {
    devtool: 'eval-source-map',

    entry: [
        path.resolve(__dirname, 'src/index.js')
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: true,
            noInfo: true, // set to false to see a list of every file being bundled.
            options: {
                sassLoader: {
                    includePaths: [path.resolve(__dirname, 'src', 'scss')]
                },
                context: '/',
            }
        }),
        new webpack.IgnorePlugin(/vertx/),
    ],

    module: {
        rules: [
            {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader']},
            {test: /(\.css|\.scss|\.sass)$/, loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'sass-loader?sourceMap']}
        ]
    }
};
