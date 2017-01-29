var connection = require('../config/connection.js');


module.exports = {

	selectAll: function(connection, columns, callback) {
		cconnection.query('SELECT * FROM `burgers`', [columns || '*'], callback)
		},

	insertOne: function(connection, burger, callback) {

		connection.query('INSERT INTO `burgers` (burger_name, devoured) VALUES (?, false)', [burger], callback)
	},

	updateOne: function(connection, id, callback) {

		connection.query('UPDATE `burgers` SET `devoured` = true WHERE `id` = ?', [id], callback)
	}
};
