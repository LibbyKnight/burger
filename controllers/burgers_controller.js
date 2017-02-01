var express = require("express");
var router = express.Router();
var burgerJS = require('../models/burger.js');


router.get('/', function(req, res) {
  res.redirect('/index');
});
//read/selectall
router.get('/', function(req, res) {
		burgerJS.selectAll(function(data) {
			var hbsObject = {
				burgers: data
		};
   console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//create/insert
router.post('/burgers/create', function(req, res) {
		burgerJS.insertOne([
			"burger_name", "devoured"
		], [
		    req.body.name, false
  ], function() {
    res.redirect("/");
  });
});

//update
router.put('/burgers/update/:id', function(req, res) {

		var condition = "id = " + req.params.id;
	console.log("condition", condition);

  burgerJS.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});


module.exports = router;
