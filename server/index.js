const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.sendfile(__dirname + "/public/home.html")
});
app.get('/main', function (req, res) {
    res.sendfile(__dirname + "/public/main.html")
});
app.get('/contact', function (req, res) {
    res.sendfile(__dirname + "/public/contact.html")
});

app.listen(3000)
