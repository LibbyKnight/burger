var connection = require('../config/connection.js');


var orm = {

	selectAll: function(callback) {
		cconnection.query('SELECT * FROM ' + `burgers`, (err, res)
			callback(result);
		});

	}

	insertOne: function(callback) {
		var query = 'INSERT INTO ' + `burgers` + (`burger_name`, `devoured`) + 'VALUES' + (?, false);

		console.log(query);


		connection.query(query, function(err, result){
			callback(result);
		});
	},

	updateOne: function(callback) {
		var query = 'UPDATE ' + `burgers` + ' SET ' + devoured = true + ' WHERE ' + id = ?;

		console.log(query);

		connection.query(query, function(err, result){
			callback(result);
		});
	}
};

module.exports = orm;