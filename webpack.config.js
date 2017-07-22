var path = require('path')

var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')

module.exports = {

  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, {
          loader: 'css-loader',
          options: {
            modules: true,
            camelCase: true,
            localIdentName: '[path]__[name]__[local]__[hash:base64:5]',
          },
        }],
      },
      {
        test: /\.scss$/,
        use: [{ loader: 'style-loader' }, {
          loader: 'css-loader',
          options: {
            modules: true,
            camelCase: true,
            localIdentName: '[path]__[name]__[local]__[hash:base64:5]',
          },
        }, {
          loader: 'sass-loader',
        }],
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['babel-preset-es2015', 'babel-preset-react', 'babel-preset-stage-0'],
        },
      },

      { enforce: 'pre', test: /\.jsx?$/, loader: 'eslint-loader', exclude: [/node_modules/, /dist/] },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          configFile: path.join(__dirname, 'eslintrc.js'),
          failOnWarning: false,
          failOnError: true,
          exclude: [/node_modules/, /\/dist/],
        },
      },
    }),
    new HtmlWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    inline: true,
  },
}
