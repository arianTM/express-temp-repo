const http = require('http')
const { readFileSync } = require('fs')

// get all files
const homePage = readFileSync('./index.html', 'utf8')

const server = http.createServer((req, res) => {
  const { url } = req
  switch(url) {
    case '/': // HOME PAGE!!!
      res.writeHead(200, { 'content-type': 'text/html' })
      res.write(homePage)
      res.end()
      break
    case '/about': // ABOUT PAGE!!!
      res.writeHead(200, { 'content-type': 'text/html' })
      res.write('<h1>About us</h1>')
      res.end()
      break
    default:
      res.writeHead(404, { 'content-type': 'text/html' })
      res.write('<h1>404: Not Found</h1>')
      res.end()
  }
})

server.listen(5000)