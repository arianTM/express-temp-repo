const http = require('http')
const { readFileSync } = require('fs')

// get all files
const homePage = readFileSync('./navbar-app/index.html', 'utf8')
const homeStyles = readFileSync('./navbar-app/styles.css', 'utf8')
const homeLogo = readFileSync('./navbar-app/logo.svg', 'utf8')
const homeJS = readFileSync('./navbar-app/browser-app.js', 'utf8')

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
    case '/styles.css':
      res.writeHead(200, { 'content-type': 'text/css' })
      res.write(homeStyles)
      res.end()
      break
    case '/logo.svg':
      res.writeHead(200, { 'content-type': 'image/svg+xml' })
      res.write(homeLogo)
      res.end()
      break
    case '/browser-app.js':
      res.writeHead(200, { 'content-type': 'text/js' })
      res.write(homeJS)
      res.end()
      break
    default:
      res.writeHead(404, { 'content-type': 'text/html' })
      res.write('<h1>404: Not Found</h1>')
      res.end()
  }
})

server.listen(5000)