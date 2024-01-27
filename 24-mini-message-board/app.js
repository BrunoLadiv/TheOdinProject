const express = require("express")
const app = express()
const port = 3000

app.set("view engine", "ejs")

app.set("views", __dirname + "/views")

app.get("/", (req, res) => {
  res.render("index", { message: "Hello, Express with EJS!" })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
