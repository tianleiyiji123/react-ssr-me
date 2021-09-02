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
const nodeExternals = require('webpack-node-externals')
const theme = require('../package.json').theme
const serverConfig = {
  entry: path.resolve(process.cwd(), './src/index-node.tsx'),
  output: {
    path: path.resolve(__dirname, '../server-bundle'),
    filename: 'js/[name].js',
    chunkFilename: "js/[name].js",
    publicPath: '/',
    libraryTarget: 'commonjs2'
  },
  // mode: 'development',
  target: "node",
  module: {
    rules: [{
        test: /\.(js|tsx|jsx|ts|mjs)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          caller: { target: 'node' },
        },
      },
      {
        test: /\.less$/,
        include: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              emit: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: false,
              // esModule: false,
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
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              emit: true
            }
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
            loader: MiniCssExtractPlugin.loader,
            options: {
              emit: true
            }
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
  // externals: ['@loadable/component'],
  optimization: {
    // minimizer: [new UglifyJsPlugin()],
    runtimeChunk: false,
    splitChunks: {
      chunks: 'all',
      // minSize: 30000,
      // minChunks: 1,
      // maxAsyncRequests: 5,
      // maxInitialRequests: 3,
      // automaticNameDelimiter: '~',
      // name: true,
      // cacheGroups: {
      //   vendor: {
      //     test: /[\\/]node_modules[\\/]/,
      //     name: "vendors",
      //     priority: -20,
      //     chunks: "all"
      //   }
      // }
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
  ],
}
module.exports = merge(baseConfig, serverConfig)