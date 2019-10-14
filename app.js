var express = require("express");
var app = express();


app.get("/", function(req, res){
	res.send("Hi there!");
});

app.get("/:Name", function(req, res){

	res.send("Hello"+req.params.Name);
})

app.get("/bye", function(req, res){
	res.send("BYE!!");
});

app.get("/dog", function(req, res){
	res.send("Bow!!");
});

app.get("*", function(req, res){
	res.send("ALERT!!");
});


app.listen(3000, process.env.IP, function(){

	console.log("Server started");

});  









/* NOTE
process.env.PORT
process.env.IP
postman - app to test http
package contains info on the node app. --save add dependency entries to package.json
dry : dont repeat yourself
wet : write everything twice
*/