const express = require('express')
const app = express()
const port = 5000

// req => middleware => res

const logger = (req, res, next) => {
  const { method, url } = req
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

app.get('/', logger, (req, res) => {
  res.send('Home page')
})

app.get('/about', logger, (req, res) => {
  res.send('About page')
})

app.listen(port, (req, res) => {
    console.log(`Server is listening on port ${port}`)
})