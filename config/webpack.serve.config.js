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
const baseConfig = require('./webpack.config')
const theme = require('../package.json').theme
const serverConfig = {
  entry: path.resolve(__dirname, '../src/serve/index'),
  output: {
    path: path.resolve(__dirname, '../server-bundle'),
    filename: 'root.server.js',
    publicPath: '/static/'
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
        use: [
          "isomorphic-style-loader",
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                getLocalIdent: (context, localIdentName, localName, options) => {
                  return `${localName}_${Date.now()}`
                },
              },
              esModule: false
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
      },
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                getLocalIdent: (context, localIdentName, localName, options) => {
                  return `${localName}_${Date.now()}`
                },
              },
              esModule: false
            }
          },
          'postcss-loader'
        ],
      }

    ]
  }

}
module.exports = merge(baseConfig, serverConfig)