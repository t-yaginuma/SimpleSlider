const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  target: ['web', 'es5'],
  output: {
    assetModuleFilename: './assets/images/[name][ext][query]',
    clean: true,
  },
});
