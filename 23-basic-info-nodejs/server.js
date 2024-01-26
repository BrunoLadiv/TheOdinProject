const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html")

  let path = "./views/"

  switch (req.url) {
    case "/":
      path += "index.html"
      break
    case "/about":
      path += "about.html"
      break
    case "/contact-me":
      path += "contact-me.html"
      break
    default:
      path += "404.html"
      break
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      res.end()
    } else {
      res.end(data)
    }
  })
})

const PORT = 3000

server.listen(PORT, "localhost", () => {
  console.log(`Server is running at http://localhost:${PORT}/`)
})
