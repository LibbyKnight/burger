var mysql = require('mysql');

var connection =  mysql.createConnection ({

	port: 3306,
	host: 'localhost',
	user: 'root',
	password: '@ndroid4LIFE',
	database: 'burgers_db'
});


connection.connect();

	if (err) throw err;


module.exports = connection;



app.listen(PORT);