/**
 * @author: @AngularClass
 */

// Look in ./config folder for webpack.dev.js

switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./config/webpack.prod');
    break;
  case 'test':
  case 'testing':
    module.exports = require('./config/webpack.test');
    break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./config/webpack.dev');
}

var webpack = require("webpack");

module.exports = {
  entry: {
    'polyfills': 'src/polyfills.browser.js',
    'vendor': 'src/vendor.browser.js',
    'app': 'src/main.browser.js'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    })]

};
