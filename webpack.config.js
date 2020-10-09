const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CheckerPlugin } = require('awesome-typescript-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname, "src"),

    mode: "development",
    devtool: 'none',

    entry: {
        index: "./index.tsx"
    },

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "all",
                    minSize: 0,
                    minChunks: 2
                }
            }
        }
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader',
            exclude: /node_modules/,
            options: {
                useCache: true
            }
          },
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          },
          {
              test: /\.(jpe?g|gif|ttf|eot|svg|woff|png)$/,
              loader: "file-loader",
              options: {
                  name: "[path][name].[ext]"
              }
          }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
          template: '../public/index.html',
          title: 'Movie DB'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
          }),
        new CheckerPlugin()
    ],

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        overlay: true,
        stats: 'errors-only',
        clientLogLevel: 'none',
        hot: true,
    },
};