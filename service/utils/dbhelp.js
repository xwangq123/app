var mysql = require('mysql');

var config = {
    host: 'localhost',
    user: 'root',
    password: '900718',
    database: 'my_schema',
    port: 3306
};

var execute = function (queryFun) {
    var connection = mysql.createConnection(config);

    connection.connect((err) => {
        if (err) {
            console.log(err);
            return
        }
    });

    queryFun(connection);

    connection.end((err) => {
        if (err) {
            return;
        }
    })
};

module.exports = execute;