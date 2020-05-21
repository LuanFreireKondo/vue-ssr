const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const env = process.env.NODE_ENV

// configuration
module.exports = {
  mode: env === 'production' ? 'production' : 'development',

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
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  // Options for resolving module requests
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

  // list of additional plugins
  plugins: [
    new VueLoaderPlugin()
  ],
};
