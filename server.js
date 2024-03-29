const fs  = require('fs')
const express = require('express')
const { createBundleRenderer } = require('vue-server-renderer')

const template = fs.readFileSync('./src/template.html', 'utf-8')

const serverBundlePanel = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

const rendererPanel = createBundleRenderer(serverBundlePanel, {
  template,
  clientManifest,
  // runInNewContext: false, // recommended
})

const port = 8010
const server = express()

server.use('/dist', express.static('./dist'));

server.get('*', (req, res) => {

  const context = {
    url: req.url,
    title: 'Vue.js + SSR'
  }

  rendererPanel.renderToString(context, (err, html) => {

    if (err) {
       if (err.code === 404) {
         res.status(404).end('Page not found')
       } else {
         console.log(err)
         res.status(500).end('Internal Server Error', err)
       }
     } else {
       res.end(html)
     }
  })
})

server.listen(port)
console.log(`Server run in port ${port}`)
