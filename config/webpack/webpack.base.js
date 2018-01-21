const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const COMPONENTS_DIRS = [
  path.resolve(__dirname, '../../src/components'),
  path.resolve(__dirname, '../../src/containers'),
];
console.log(COMPONENTS_DIRS);
module.exports = (options) => {
  const componentsCss = new ExtractTextPlugin('[name].[hash].components.css');
  const globalCss = new ExtractTextPlugin('[name].[hash].global.css');
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
          loaders: [
           // 'babel-loader?presets[]=es2015', // necessary for uglifyjs see https://github.com/joeeames/WebpackFundamentalsCourse/issues/3#issuecomment-252950772
            'awesome-typescript-loader'
          ],
        },

        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader',
        },

        {
          test: /^[^_].*scss$/,
          include: COMPONENTS_DIRS,
          loader: componentsCss.extract([

            {
              loader: 'typings-for-css-modules-loader',
              options: {
                modules: true,
                namedExport: true,
                camelCase: true,
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
        {
          test: /^[^_].*scss$/,
          exclude: COMPONENTS_DIRS,
          loader: globalCss.extract([
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
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
            },


          ]),

        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
          loader: [
             'file-loader',

          ],
        }
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        // favicon: 'app/favicon.png',
        minify: options.minifyIndexHtml,
        inject: true,
      }),
      componentsCss,
      globalCss,
    ],


    devtool: options.devtool,
    devServer: options.devServer,

  }

};
