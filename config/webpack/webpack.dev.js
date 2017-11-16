module.exports = require('./webpack.base')({

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    // hot: true,
    port: 3000,
    noInfo: true,
    // uncomment if you want to bind to 0.0.0.0
    // disableHostCheck: true,
  }
});
