const path = require('path');
// eslint-disable-next-line no-unused-vars
const webpack = require('webpack');

const SRC_DIR = path.join(__dirname, './frontend/src');
const DIST_DIR = path.join(__dirname, './public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'review-bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      { // 1
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  // devServer: {
  //   inline: false,
  //   contentBase: path.join(__dirname, '../public'),
  // },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
