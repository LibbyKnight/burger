var connection = require('../config/connection.js');



function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}


var orm = {
	//read/select
	selectAll: function(callback) {
		var queryString = ('SELECT * FROM `burgers`');
			 connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
	//create
	insertOne: function(cols, vals, callback) {

		var queryString = ('INSERT INTO `burgers` (cols.toString()) VALUES (printQuestionMarks(vals.length))');

			 console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
	//update
	updateOne: function(objColVals, condition, callback) {

		var queryString = ('UPDATE `burgers` SET (objToSql(objColVals)) WHERE condition');

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      callback(result);
    });
  }
}

module.exports = orm;