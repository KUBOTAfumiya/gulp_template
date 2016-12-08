const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.ejs'],
    root: './node_modules/'
    },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.html$/, loader: 'underscore-template-loader' },
      { test: /\.ejs$/, loader: 'ejs-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(), //重複削除しているらしい
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.ProvidePlugin({ //jqueryはグローバルに出す設定。これでrequireせず使えるのでjqueryプラグインもそのまま動く。
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      _: 'lodash'
    })
  ]
};

