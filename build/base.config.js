const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const vueTemplate = require('vue-template-compiler')

const env = process.env.NODE_ENV

let plugins = []

if (env == 'production') {
  // for example: minify js with uglifyjs
}

// configuration
module.exports = {
  // Options related to how webpack emits results
  // and webpack starts bundling
  output: {
    path: path.resolve('./dist'),
    publicPath: 'http://localhost:8000/dist/',
    filename: '[name].[hash].js'
  },

  // Configuration regarding modules
  module: {

    // rules for modules (configure loaders, parser options, etc.)
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
          }
        }
      },
    ]
  },

  // Options for resolving module requests
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

  // list of additional plugins
  plugins: plugins,
};
