const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CheckerPlugin } = require('awesome-typescript-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = env => (
  {
    context: path.resolve(__dirname, "src"),
    devtool: 'none',

    entry: {
        index: "./index.tsx"
    },

    output: {
        filename: "js/bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    
    optimization: {
      minimizer: [new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        cache: true,
        parallel: true,
        extractComments: false,
      })],
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
            test: /\.(css|scss|sass)$/,
            exclude: /\.module\.*\.(css|scss|sass)$/,
            use: [
              env && env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                },
              },
              'sass-loader',
            ],
          },
          {
            test: /\.module\.*\.(css|scss|sass)$/,
            use: [
              env && env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  modules: true,
                },
              },
              'sass-loader',
            ],
          },
          {
              test: /\.(ttf|eot|woff)$/,
              loader: "file-loader",
              options: {
                  name: "[path][name].[ext]"
              }
          },
          {
            test: /\.(jpe?g|png|svg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                },
              },
              {
                loader: 'image-webpack-loader',
                options: {
                  bypassOnDebug: true,
                  mozjpeg: {
                    trellis: true,
                    progressive: true,
                    quality: 25,
                    maxMemory: 230,
                    overshoot: true,
                  },
                  optipng: {
                    enabled: false,
                  },
                  pngquant: {
                    quality: [0.3, 0.8],
                    speed: 4,
                  },
                  gifsicle: {
                    interlaced: false,
                    optimizationLevel: 1,
                  },
                  webp: {
                    quality: 75,
                  },
                },
              },
            ],
          },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
          template: '../public/index.html',
          title: 'Movie DB'
        }),
        new MiniCssExtractPlugin({
          chunkFilename: '[id].css',
          filename: '[name].css' 
        }),
        new CheckerPlugin()
    ],

    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 3000,
        overlay: true,
        stats: 'errors-only',
        clientLogLevel: 'none',
        hot: true,
    },
}
)
module.exports = env => config(env);