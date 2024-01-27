const express = require("express")
const router = express.Router()

const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    date: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    date: new Date(),
  },
]

router.get("/", (req, res) => {
  res.render("index", { messages })
})

router.get("/new", (req, res) => {
  res.render("new-message")
})

router.post("/new", (req, res) => {
  console.log(req.body)
  const { user, message } = req.body

  if (user && message) {
    const newMessage = {
      id: messages.length + 1,
      user,
      text: message,
      date: new Date(),
    }

    messages.push(newMessage)

    res.redirect("/")
  } else {
    res.status(400).send("Invalid input")
  }
})

module.exports = router
