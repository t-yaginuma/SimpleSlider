const path = require('path');

module.exports = {
  entry: './src/ts/index.ts',
  output: {
    filename: './assets/js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node-modules/',
      },
    ],
  },
};
