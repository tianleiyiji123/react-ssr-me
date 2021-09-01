/**
 * Author: Zhou Ht
 * Date: 2018/11/28 0028
 * Time: 23:35
 *
 */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const theme = require('../package.json').theme
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const {
  merge
} = require('webpack-merge')
const baseConfig = require('./webpack.config')
const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'

const clientConfig = {
  entry: path.join(__dirname, '../src/client/index'),
  output: {
    path: path.join(__dirname, '../client-bundle/'),
    filename: 'js/[name].js',
    // chunkFilename: "js/[name].[contenthash:8].js",
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.(js|tsx|jsx|ts|mjs)$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }]
  },
  devtool: 'cheap-module-source-map',
  plugins: []
}
if (isDev) {
  const devRules = [{
    test: /\.less$/,
    include: /node_modules/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader
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
      // {
      //   loader: 'style-loader'
      // },
      // "isomorphic-style-loader",
      {
        loader: MiniCssExtractPlugin.loader
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          esModule: false,
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
        loader: 'style-loader'
      },
      {
        loader: 'css-loader'
      },
      "postcss-loader"
    ]
  }]
  clientConfig.entry = [
    "react-hot-loader/patch",
    path.join(__dirname, '../src/client/index'),
  ]
  clientConfig.output = {
    path: path.join(__dirname, '../public'),
    filename: '[name].client.js',
    chunkFilename: "[name].js",
    publicPath: '/'
  }
  clientConfig.mode = 'development'
  clientConfig.module.rules = clientConfig.module.rules.concat(devRules)
  clientConfig.devServer = {
    host: '0.0.0.0',
    port: '9000',
    client: {
      overlay: {
        errors: true,
      },
      progress: true,
    },
    open: true,
    static: path.join(__dirname, '../public'),
    proxy: {
      '/api': 'http://localhost:3000'
    },
    historyApiFallback: true,
    hot: true,
  }
  clientConfig.plugins = clientConfig.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'music',
      filename: path.join(__dirname, '../public/index.html'),
      template: path.join(__dirname, '../public/index.html'),
      inject: true,
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
      attributes: {
        id: "target",
        "data-target": "example",
      },
    }),
  ])
}
if (isProd) {
  const prodRules = [{
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
        loader: MiniCssExtractPlugin.loader,
      },
      {
        loader: 'css-loader',
        options: {
          modules: false
        }
      },
      "postcss-loader"
    ]
  }]
  clientConfig.mode = 'development'
  clientConfig.devtool = false
  clientConfig.module.rules = clientConfig.module.rules.concat(prodRules)
  clientConfig.optimization = {
    // minimizer: [new UglifyJsPlugin()],
    runtimeChunk: {
      name: 'runtime'
    },
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
  }

  clientConfig.plugins = clientConfig.plugins.concat([
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
    }),
    new HtmlWebpackPlugin ({
      title: '周海涛的个人网',
      filename: path.join(__dirname, '../client-bundle/static/index.html'),
      template: path.join(__dirname, '../public/index.html'),
      // favicon: path.join(__dirname, '../public/favicon.ico'),
    }),
  ])

}
module.exports = merge(baseConfig, clientConfig)