var connection = require('../config/connection.js');

var orm = {

	selectAll: function(table, callback) {
		var query = 'SELECT * FROM ' + table + ';';
		connection.query(query, function(err, result) {
			callback(result);
		});

	}


	insertOne: function