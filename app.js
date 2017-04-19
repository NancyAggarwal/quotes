var express = require("express");
var app = express();

app.get("/", function(req,res){
	res.sendFile(__dirname + '/index.html');

});

var server = app.listen("8080", function(req,res){
  console.log("server is starting at 8080");
});
