const webpack = require('webpack');

module.exports = {
  output: {
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.ejs']
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.html$/, loader: 'underscore-template-loader' },
      { test: /\.ejs$/, loader: 'ejs-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'jshint-loader'}
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.ProvidePlugin({ //jqueryはグローバルに出す設定。これでrequireせず使えるのでjqueryプラグインもそのまま動く。
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      _: 'lodash'
    })
  ]
};
