var express = require("express");
var app=express();
var bodyParser= require("body-parser");

app.use(bodyParser.urlencoded({extented: true}));
app.set("view-engine","ejs");
app.use(express.static("/public"));

app.get("/",function(req,res){
	res.render("landing.ejs");
});



app.listen(process.env.PORT || 1234 ,process.env.IP,function(){
	console.log("The EDC server has started");
});