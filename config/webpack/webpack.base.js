const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = (options) => {
  const componentsCss = new ExtractTextPlugin('[name].[hash].css');
  return {

    entry: './src/app.tsx',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, '../../build'),
      publicPath: '/',
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

        {
          test: /^[^_].*scss$/,
          loader: componentsCss.extract([

            {
              loader: 'typings-for-css-modules-loader',
              options: {
                modules: true,
                namedExport: true,
                sourceMap: true,
                localIdentName: '[local]__[path][name]__[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: [
                  autoprefixer(),
                ],
              }
            },
            {
              // compile sass
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                // add here include paths
                includePaths: [
                  path.join(__dirname, '../../src/sass'),
                  path.join(__dirname, '../../node_modules'),
                ],
              },
            }]),

        },
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        // favicon: 'app/favicon.png',
        minify: options.minifyIndexHtml,
        inject: true,
      }),
      componentsCss,
    ],


    devtool: options.devtool,
    devServer: options.devServer,

  }

};
