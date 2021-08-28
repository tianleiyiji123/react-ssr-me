/**
 * Author: Zhou Ht
 * Date: 2018/11/28 0028
 * Time: 23:42
 *
 */
const path = require('path')
const {
  merge
} = require('webpack-merge')
const LoadablePlugin = require('@loadable/webpack-plugin')
const baseConfig = require('./webpack.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const theme = require('../package.json').theme
const serverConfig = {
  entry: path.resolve(__dirname, '../src/serve/index'),
  output: {
    path: path.resolve(__dirname, '../server-bundle'),
    // filename: 'js/root.server.js',
    filename: 'js/[name].js',
    publicPath: '/'
  },
  mode: 'development',
  target: "node",
  module: {
    rules: [{
        test: /\.(js|tsx|jsx|ts|mjs)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        include: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: false,
              esModule: false,
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: theme,
                javascriptEnabled: true
              }
            }
          },
        ]
      }, {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          // "isomorphic-style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:7]",
              },
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: theme,
                javascriptEnabled: true
              }
            }
          },
        ]
      }, {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          },
          "postcss-loader"
        ]
      }
    ]
  },
  optimization: {
    // minimizer: [new UglifyJsPlugin()],
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      // chunks: 'async',
      // minSize: 30000,
      // minChunks: 1,
      // maxAsyncRequests: 5,
      // maxInitialRequests: 3,
      // automaticNameDelimiter: '~',
      // name: true,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: -20,
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].chunk.css'
    }),
    new LoadablePlugin(),
  ]
}
module.exports = merge(baseConfig, serverConfig)