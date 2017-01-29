var orm = require('../config/orm.js');

var burger= {

	selectAll: function(callback) {

		orm.selectAll(function(res) {
			callback(res);
		});
	},
	insertOne: function(callback) {

		orm.insertOne(function(res) {
			callback(res);
		});
	},
	updateOne: function(callback) {

		orm.updateOne(function(res) {
			callback(res);
		});
	}
};

module.exports = burger;
