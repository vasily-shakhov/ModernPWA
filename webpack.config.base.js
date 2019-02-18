const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').TsconfigPathsPlugin;
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const BASE_DIR = './src';
const OUTPUR_DIR = './dist';
const BINARY_FILE_MAX_SIZE = 8192;

module.exports = {
  entry: [path.resolve(__dirname, BASE_DIR, 'client/index.tsx')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, OUTPUR_DIR, 'public'),
    publicPath: '/',
  },
  plugins: [
    new webpack.NamedChunksPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: path.resolve(__dirname, BASE_DIR, 'client/assets/index.html'),
    }),
    /*new BundleAnalyzerPlugin({
      analyzerPort: 8089
    })*/
  ],
  module: {
    rules: [
      // Fonts
      // always as inline base64 URLs
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)/,
        loader: 'url-loader',
      },
      {
        test: /\.(css)$/,
        loaders: ['style-loader', 'css-loader'],
      },
      // Images | Audio
      // inline base64 URLs for <=8k binary files, direct URLs for the rest
      {
        test: /\.(png|jpg|jpeg|gif|svg|mp3)$/,
        loader: 'url-loader',
        query: {
          limit: BINARY_FILE_MAX_SIZE,
          name: 'images/[name].[ext]?[hash]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [path.join(__dirname, BASE_DIR), 'node_modules'],
    plugins: [new TsconfigPathsPlugin({ configFile: 'tsconfig-client.json' })],
  },
};
