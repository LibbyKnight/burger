var mysql = require('mysql');

var connection =  mysql.createConnection ({

	port: 3306,
	host: 'localhost',
	user: 'root',
	password: '@ndroid4LIFE',
	database: 'burgers_db'
});


connection.connect(function(err) {

	if (err) throw err;

	console.log("connected as id " + connection.threadID);

};


module.exports = connection;
