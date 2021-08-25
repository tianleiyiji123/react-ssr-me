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
    path: path.join(__dirname, '../public/static/'),
    filename: 'js/[name].[hash:5].js',
    // chunkFilename: "js/[name].js",
    publicPath: '/static/'
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
        loader: 'style-loader'
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
      "isomorphic-style-loader",
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          esModule: false,
          modules: {
            getLocalIdent: (context, localIdentName, localName, options) => {
              return `${localName}_${Date.now()}`
            },
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
    include: /node_modules/,
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
    path: path.join(__dirname, '../dev-public'),
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
    static: path.join(__dirname, '../dev-public'),
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
      filename: path.join(__dirname, '../dev-public/index.html'),
      template: path.join(__dirname, '../dev-public/index.html'),
      inject: true,
    }),
  ])
}
if (isProd) {
  const prodRules = [{
    test: /\.less$/,
    include: /node_modules/,
    use: [
      {
        loader: 'style-loader'
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
      "isomorphic-style-loader",
      {
        loader: MiniCssExtractPlugin.loader
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
          modules: {
            getLocalIdent: (context, localIdentName, localName, options) => {
              return `${localName}_${Date.now()}`
            },
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
      "isomorphic-style-loader",
      {
        loader: 'css-loader',
        options: {
          modules: {
            getLocalIdent: (context, localIdentName, localName, options) => {
              return `${localName}_${Date.now()}`
            },
          },
        }
      },
      "postcss-loader"
    ]
  }]
  clientConfig.mode = 'production'
  clientConfig.devtool = false
  clientConfig.module.rules = clientConfig.module.rules.concat(prodRules)
  clientConfig.optimization = {
    minimizer: [new UglifyJsPlugin()],
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: -20,
          chunks: "all"
        }
      }
    }
  }

  clientConfig.plugins = clientConfig.plugins.concat([
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css'
    }),
    new HtmlWebpackPlugin({
      title: '周海涛的个人网',
      filename: path.join(__dirname, '../public/static/index.html'),
      template: path.join(__dirname, '../dev-public/index.html'),
      // favicon: path.join(__dirname, '../dev-public/favicon.ico'),
    })
  ])

}
module.exports = merge(baseConfig, clientConfig)