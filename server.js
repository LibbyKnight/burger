var express = require ("express");
var methodOverride = require ("method-override");
var bodyParser = require ("body-parser");


var app = express();
var port = 3000;

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});
