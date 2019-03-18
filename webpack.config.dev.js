const webpack = require('webpack');
const path = require('path');
const getMyIp = require('get-my-ip');
const merge = require('webpack-merge');
const base = require('./webpack.config.base');
const serverOptions = require('./src/server/config/development.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const httpsOptions = serverOptions.httpsOptions;

const IP = getMyIp();

module.exports = merge(base, {
  devServer: {
    contentBase: path.join(__dirname, './dist/public'),
    hot: true,
    host: IP,
    https: httpsOptions,
    historyApiFallback: true,
  },
  devtool: 'cheap-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    `webpack-dev-server/client?https://${IP}:8080`,
    // bundle the client for webpack dev server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
  ],
  module: {
    rules: [
      // Type Script
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'cache-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: false,
              configFile: 'tsconfig-client.json',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        IP: `"${IP}"`,
      },
    }),
    new BrowserSyncPlugin(
      {
        open: false,
        host: IP,
        port: 3001,
        proxy: `https://${IP}:8080/`,
      },
      {
        reload: false,
      }
    ),
  ],
});
