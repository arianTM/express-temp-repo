const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  console.log('user hit the home page')
  res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
  console.log('user hit the about page')
  res.status(200).send('About Page')
})

app.all('*', (req, res) => {
  console.log('user tried to access a resource with no success')
  res.status(404).send('<h1>Resource Not Found</h1>')
})

app.listen(port, () => {
  console.log(`server is listening on port: ${port}....`)
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen