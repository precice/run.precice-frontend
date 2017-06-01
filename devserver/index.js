const express = require('express');
const argv = require('minimist')(process.argv.slice(2));
var webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackDevConfig = require('../config/webpack/webpack.dev');
const fs = require('fs');
const path = require('path');

const server = express();

const comp = webpack(webpackDevConfig);

server.use(webpackMiddleware(comp, {
  // publicPath is required, whereas all other options are optional

  publicPath: webpackDevConfig.output.publicPath ,
  // public path to bind the middleware to
  // use the same as in webpack

  stats: 'errors-only',
}));


// redirect all requests to react app
server.get('*', (req, res) => {
  fs.readFile(path.join(comp.outputPath, 'index.html'), (err, file) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(file.toString());
    }
  });
});


const port = argv.port || process.env.PORT || 3000;

server.listen(port);
