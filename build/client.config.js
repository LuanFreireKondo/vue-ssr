const merge = require('webpack-merge')
const baseConfig = require('./base.config.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(baseConfig, {
  // Point entry to your app's client entry file
  entry: './src/entry-client.js',

  // Important: this splits the webpack runtime into a leading chunk
  // so that async chunks can be injected right after it.
  // this also enables better caching for your app/vendor code.
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  
  plugins: [
    // This plugins generates `vue-ssr-client-manifest.json` in the
    // output directory.
    new VueSSRClientPlugin()
  ]
})
