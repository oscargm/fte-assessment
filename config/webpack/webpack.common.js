/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConstants = require('./webpack.constants');

const commonRules = [
  {
    test: /\.(tsx?)|(js)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
  },
  {
    test: /\.css$/,
    use: [
      {
        loader: 'css-loader',
      },
    ],
  },
  {
    test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader',
    options: {
      mimetype: 'application/font-woff',
    },
  },
];

const commonPlugins = (env) => {
  return [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      hash: true,
      favicon: webpackConstants.assetsPath + '/favicon.ico',
    }),
    new webpack.DefinePlugin({
      ...webpackConstants.endpoints,
      'process.env.NODE_ENV': JSON.stringify(env.environment),
    }),
  ];
};

module.exports = (env = {}) => {
  const config = {
    plugins: env.plugins
      ? commonPlugins(env).concat(env.plugins)
      : commonPlugins(env),
    mode: env.environment,
    cache: env.cache,
    context: webpackConstants.srcPath,
    devtool: env.devtool,
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
      alias: {
        app: webpackConstants.srcPath,
        pods: webpackConstants.podsPath,
        // common: webpackConstants.commonPath,
        // assets: webpackConstants.assetsPath
      },
    },
    entry: {
      app: [webpackConstants.srcPath + '/index.tsx'],
    },
    module: {
      rules: commonRules,
    },
    output: {
      ...env.output,
    },
  };
  if (env.devServer) {
    config.devServer = env.devServer;
  }
  return config;
};
