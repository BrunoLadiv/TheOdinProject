const express = require("express")
const path = require("path")
const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.use(express.static(path.join(__dirname + "/public")))

const indexRouter = require("./routes/index")
app.use("/", indexRouter)

app.listen(port)
