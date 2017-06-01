const express = require('express');
const argv = require('minimist')(process.argv.slice(2));
var webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackDevConfig = require('../config/webpack/webpack.dev');

const server = express();

server.use(webpackMiddleware(webpack(webpackDevConfig), {
  // publicPath is required, whereas all other options are optional

  publicPath: webpackDevConfig.output.publicPath ,
  // public path to bind the middleware to
  // use the same as in webpack

  stats: 'errors-only',
}));


// app.get('*', (req, res) => {
//   fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
//     if (err) {
//       res.sendStatus(404);
//     } else {
//       res.send(file.toString());
//     }
//   });
// });


const port = argv.port || process.env.PORT || 3000;

server.listen(port);
