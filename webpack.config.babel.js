import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import merge from 'webpack-merge';
import path from 'path';

import { siteTitle } from './src/config';

module.exports = (env, argv) => {
  const mode = argv.mode || 'development';

  let config = {};
  switch (mode) {
    case 'production':
      config = require('./webpack.config.production.babel.js');
      break;
    case 'development':
    default:
      config = require('./webpack.config.development.babel.js');
      break;
  }

  const common = {
    target: 'web',
    context: __dirname,
    entry: {
      bundle: './src/index.jsx',
    },
    output: {
      path: `${__dirname}/public`,
      publicPath: '/',
      filename: '[name].js',
    },
    devServer: {
      hot: false,
      inline: true,
      disableHostCheck: true,
      headers: { 'Access-Control-Allow-Origin': '*' },
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          enforce: 'pre',
          include: path.resolve(__dirname, 'src'),
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.jsx?$/,
          include: path.resolve(__dirname, 'src'),
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          loader: 'file-loader?name=material-design-icons/iconfont/[name].[ext]',
        },
        { test: /\.(jpe?g|png|gif|svg)$/, loader: 'url-loader?limit=10000' },
      ],
    },
    stats: {
      colors: true,
      reasons: false,
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'src/static/config/*',
          to: './',
          flatten: true,
        },
      ]),

      new HtmlWebpackPlugin({
        hash: true,
        title: siteTitle,
        filename: 'index.html',
        favicon: './src/static/favicon.png',
        template: './src/index.template.ejs',
        inject: 'body',
      }),

      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: mode,
        },
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    optimization: {
      splitChunks: {
        name: 'vendor',
        chunks: 'initial',
      },
    },
  };

  return merge(common, config);
};
