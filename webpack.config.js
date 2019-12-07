const path = require('path');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      path.resolve(__dirname, 'src/index.js'),
    ],
  },
  output: {
    publicPath: '/',
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    watchContentBase: true,
    progress: false,
    historyApiFallback: true,
  },
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns: ['dist']}),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
    new CopyPlugin([
      {
        from: path.resolve(__dirname, '_redirects'),
        to: path.join(__dirname, 'dist'),
      },
    ]),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: 4,
        cache: path.join(__dirname, '.cache'),
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
    namedChunks: true,
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: Infinity,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
        momentVendor: {
          test: /[/]node_modules[/](moment)[/]/,
          name: 'momentvendor',
          chunks: 'all',
        },
        lodashVendor: {
          test: /[/]node_modules[/](lodash)[/]/,
          name: 'lodashVendor',
          chunks: 'all',
        },
        reactVendor: {
          test: /[/]node_modules[/](react|react-dom)[/]/,
          name: 'reactvendor',
          chunks: 'all',
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'], // include eslint-loader
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]',
        },
      },
    ],
  },
};
