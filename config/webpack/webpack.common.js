/* eslint-disable @typescript-eslint/no-var-requires */
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

const commonPlugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html',
    hash: true,
    favicon: webpackConstants.assetsPath + '/favicon.ico',
  }),
];

module.exports = (env = {}) => {
  const config = {
    plugins: env.plugins ? commonPlugins.concat(env.plugins) : commonPlugins,
    mode: env.environment,
    cache: env.cache,
    context: webpackConstants.srcPath,
    devtool: env.devtool,
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
      alias: {
        app: webpackConstants.srcPath,
        // common: webpackConstants.commonPath,
        // pods: webpackConstants.podsPath,
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
