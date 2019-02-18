const merge = require('webpack-merge');
const base = require('./webpack.config.base');

module.exports = merge(base, {
  devtool: 'source-map',
  mode: 'production',

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
              configFile: 'tsconfig-client.json',
              happyPackMode: false,
            },
          },
        ],
      },
    ],
  },
});
