const express = require('express')
const path = require('path')
const app = express()
const port = 5000

//setup static and middleware
app.use(express.static('./public'))

// static file -> the server won't change it
// dynamic file -> the server MUST change it

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
  res.status(404).send('Resource Not Found')
})

app.listen(port, () => {
  console.log(`server is listening on port ${5000}`)
})