const express = require("express")
const session = require("express-session")

// setup server
const app = express()
const port = 3005

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

//routes
app.get("/", function (req, res) {
  res.redirect("myAboutMe")
})

app.get("/myAboutMe", function (req, res) {
  if (session.login) {
    res.render("myAboutMe.pug", { login: session.login, name: session.user })
  } else {
    res.render("myAboutMe.pug", { login: session.login })
  }
})

app.get("/contactMe", function (req, res) {
  if (session.login) {
    res.render("contactMe.pug", { login: session.login, name: session.user })
  } else {
    res.render("contactMe.pug", { login: session.login })
  }
})

app.get("/myContacts", function (req, res) {
  if (session.login) {
    res.render("myContacts.pug", { login: session.login, name: session.user })
  } else {
    res.render("myContacts.pug", { login: session.login })
  }
})

app.get("/myWidgets", function (req, res) {
  if (session.login) {
    res.render("myWidgets.pug", { login: session.login, name: session.user })
  } else {
    res.render("myWidgets.pug", { login: session.login })
  }
})

app.get("/login", function (req, res) {
  res.render("login.pug")
})

app.get("/logout", function (req, res) {
  res.render("logout.pug", { name: session.user })
})

app.post("/login", function (req, res) {
  console.log("login clicked")
  session.login = true
  session.user = req.body.username
  res.redirect("myAboutMe")
})

app.post("/logout", function (req, res) {
  console.log("logout clicked")
  session.login = false
  session.user = null
  res.redirect("login")
})

// Start the server
app.listen(port, () => console.log(`HW5 server listening on port ${port}!`))
