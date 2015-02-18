var express = require('express')
var path = require('path')

var app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, 'public/test.html'))
})

var bikeshare = require("./bikeshare")

app.get("/stations", bikeshare.stations)

module.exports = app
