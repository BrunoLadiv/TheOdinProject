const createError = require("http-errors")
const express = require("express")
const path = require("path")
const helmet = require("helmet")
const compression = require("compression")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const mongoose = require("mongoose")
mongoose.set("strictQuery", false)

const mongDB = process.env.MONGODB_URI

async function main() {
  await mongoose.connect(mongDB)
}

main().catch((err) => console.log(err))

const catalogRouter = require("./routes/catalog")
const indexRouter = require("./routes/index")
const usersRouter = require("./routes/users")

const app = express()
const RateLimit = require("express-rate-limit")
const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20,
})
app.use(limiter)

// view engine setup
app.use(compression())
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
    },
  })
)
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", indexRouter)
app.use("/users", usersRouter)
app.use("/catalog", catalogRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render("error")
})

module.exports = app
