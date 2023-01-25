const express = require('express')
const app = express()
const { products } = require('./data')
const port = 5000

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Check Products</a>')
})

app.get('/api/products', (req, res) => {
  const productsWithoutDesc = products.map(product => {
    const copyOfProduct = {...product}
    delete copyOfProduct.desc
    return copyOfProduct
  })
  res.send(productsWithoutDesc)
})

app.get('/api/products/:productID', (req, res) => {
  /* console.log(req) */
  console.log(req.params)
  const singleProduct = products.find(product => product.id === 1)
  res.json(singleProduct)
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}....`)
})