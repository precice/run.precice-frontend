const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (options) => {
  return {
    entry: './src/app.tsx',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, '../../build'),
    },

    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },

    module: {
      rules: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
        },

        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader',
        },
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        // favicon: 'app/favicon.png',
        minify: options.minifyIndexHtml,
        inject: true,
      })
    ],


    devtool: options.devtool,

  }

};
