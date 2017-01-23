var TapWebpackPlugin = require('tap-webpack-plugin');

module.exports = {
    target: 'node',

    entry: ['./tests/welcome.test.js'],

    output: {
        path: 'output',
        filename: 'test.js'
    },

    plugins: [
        new TapWebpackPlugin()
    ],

    devtool: 'inline-source-map',

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['angular2-template-loader']
      }
    ]
  }
};