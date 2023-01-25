const express = require('express')
const app = express()
const port = 5000
const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware => res
/* app.use('/api', logger) */
// works for url with base /api
// works for /api, /api/products, /api/items

app.use([logger, authorize])

app.get('/', (req, res) => {
  res.send('Home page')
})

app.get('/about', (req, res) => {
  res.send('About page')
})

app.get('/api/products', (req, res) => {
  res.send('Products')
})

app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(port, (req, res) => {
    console.log(`Server is listening on port ${port}`)
})