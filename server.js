const express = require('express')
const session = require('express-session')

// setup server
const app = express()
const port = 3005

app.use(express.static('resources'))
// Parse URL-encoded bodies requires express 4.16+
// (older versions of express had external libraries for this)
app.use(express.urlencoded({extended:true})); 
app.use(session({secret:"oauhsdlmfnaliustydfialjbkwegf"}))

// Setup the view engine
app.set("views", "templates");
app.set("view engine", "pug");

//routes
app.get('/', function(req, res) {
    res.redirect('myAboutMe')
})

app.get('/myAboutMe', function(req, res) {
    res.render('myAboutMe.pug')
})


app.get('/contactMe', function(req, res) {
    res.render('contactMe.pug')
})

app.get('/myContacts', function(req, res) {
    res.render('myContacts.pug')
})

app.get('/myWidgets', function(req, res) {
    res.render('myWidgets.pug')
})

app.get('/login', function(req, res) {
    res.render('login.pug')
})

// Start the server
app.listen(port, () => console.log(`HW5 server listening on port ${port}!`))