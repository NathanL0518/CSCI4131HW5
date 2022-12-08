const express = require("express")
const session = require("express-session")

// setup server
const app = express()
const port = 3306
var db = require("./db")

app.use(express.static("resources"))
// Parse URL-encoded bodies requires express 4.16+
// (older versions of express had external libraries for this)
app.use(express.urlencoded({ extended: true }))
app.use(session({ secret: "oauhsdlmfnaliustydfialjbkwegf" }))

// Setup the view engine
app.set("views", "templates")
app.set("view engine", "pug")
session.login = false
session.user = null
var counter = 0

//routes
app.get("/", function (req, res) {
  res.redirect("myAboutMe")
})

app.get("/myAboutMe", function (req, res) {
  if (session.login) {
    res.render("myAboutMe.pug", { isLogin: session.login, name: session.user })
  } else {
    res.render("myAboutMe.pug", { isLogin: session.login })
  }
})

app.get("/contactMe", function (req, res) {
  if (session.login) {
    res.render("contactMe.pug", { isLogin: session.login, name: session.user })
  } else {
    res.render("contactMe.pug", { isLogin: session.login })
  }
})

app.get("/myContacts", function (req, res) {
  if (session.login) {
    res.render("myContacts.pug", { isLogin: session.login, name: session.user })
  } else {
    res.render("myContacts.pug", { isLogin: session.login })
  }
})

app.get("/myWidgets", function (req, res) {
  if (session.login) {
    res.render("myWidgets.pug", {
      isLogin: session.login,
      name: session.user,
      count: session.counter,
    })
  } else {
    res.render("myWidgets.pug", {
      isLogin: session.login,
      count: session.counter,
    })
  }
})

app.get("/login", function (req, res) {
  if (session.login) {
    res.render("login.pug", { isLogin: session.login, name: session.user })
  } else {
    res.render("login.pug", { isLogin: session.login })
  }
})

app.get("/logout", function (req, res) {
  res.render("login.pug", { isLogin: true, name: session.user })
})

app.post("/login", function (req, res) {
  session.login = true
  session.user = req.body.username
  res.redirect("myAboutMe")
})

app.post("/logout", function (req, res) {
  session.login = false
  session.user = null
  res.redirect("myAboutMe")
})

app.get("/api/click", async function (req, res) {
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify({ clickCount: counter }))
})

app.post("/api/click", async function (req, res) {
  counter++
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify({ clickCount: counter }))
})

app.get("api/getContact", async function (req, res) {})

app.post("/api/addContact", async function (req, res) {
  const title = req.body.postTitle
  const email = req.body.email
  const username = req.body.username
  const link = req.body.link == undefined ? "" : req.body.link
  const category = req.body.category
  const msg = req.body.message
  console.log(title)
  console.log(email)
  console.log(username)
  console.log(link)
  console.log(category)
  console.log(msg)
  await db.addContact({ title, email, username, link, category, msg })
  res.render("/contactMe", { isSubmitted: true })
})

// Start the server
app.listen(port, () => console.log(`HW5 server listening on port ${port}!`))
