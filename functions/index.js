const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')
const express = require('express')
const contact = require('./contact')

const app = express()
app.use(express.json())

const config = {
  /**
   * Development mode
   */
  dev: false
}

const nuxt = new Nuxt(config)

let isReady = false
const readyPromise = nuxt
  .ready()
  .then(() => {
    isReady = true
  })
  .catch(() => {
    process.exit(1)
  })

async function handleRequest(req, res) {
  if (!isReady) {
    await readyPromise
  }
  res.set('Cache-Control', 'public, max-age=1, s-maxage=1')
  await nuxt.render(req, res)
}

app.post('/api/contact', contact)
app.get('*', handleRequest)
app.use(handleRequest)
exports.nuxtssr = functions.https.onRequest(app)
