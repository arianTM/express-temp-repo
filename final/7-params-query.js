const express = require("express")
const app = express()
const { products } = require("./data")
const port = 5000

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Check Products</a>')
})

app.get("/api/products", (req, res) => {
  const productsWithoutDesc = products.map((product) => {
    const copyOfProduct = { ...product }
    delete copyOfProduct.desc
    return copyOfProduct
  })
  res.json(productsWithoutDesc)
})

app.get("/api/products/:productID", (req, res) => {
  /* console.log(req) */
  /* console.log(req.params) */
  const numberRegex = /^\d+$/
  const { productID } = req.params
  const isANumber = numberRegex.test(Number(productID))
  if (isANumber) {
    const singleProduct = products.find(
      (product) => product.id === Number(productID)
    )
    if (singleProduct) {
      res.json(singleProduct)
    } else {
      res.status(404).send('<h1>404 Not Found!</h1><a href="/api/products">Return to products</a>')
    }
  } else {
    res.status(404).send('<h1>404 Not Found!</h1><a href="/api/products">Return to products</a>')
  }
})

app.get('/api/products/:productsID/reviews/:reviewID', (req, res) => {
  console.log(req.params)
  res.send('hi')
})

app.get('/api/v1/query', (req, res) => {
  console.log(req.query)
  const { search, limit } = req.query
  let sortedProducts = [...products]
  if (search) {
    sortedProducts = sortedProducts.filter(product => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length) {
    res.status(200).json(sortedProducts)
  } else {
    res.status(200).send('<h1>Product(s) not found!</h1><a href="/api/v1/query">Return to search</a>')
  }
  
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}....`)
})
