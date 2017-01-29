var express = require("express");
var burgersJS = require('../models/burger.js');



module.exports = function(app, connection) {

	//read/select
	app.get('/', function(req, res) {
		queries.selectAll(connection, function(err, data) {
			console.log(err, data);
			res.render('index', {
				burgers: data
			})
		}),
	//create/insert
	app.post('/', function(req, res) {
		var burger_name = req.body.burger_name;
		queries.insertOne(connection, burger_name, function(err, results) {
			res.redirect('/');
		})
	});
	//update
	app.post('/devour', function(req, res) {

		var id = req.params.id;
		queries.updateOne(connection, id, function(err, data) {
			console.log(err, data);
			res.redirect('/');
			})

		})
};

