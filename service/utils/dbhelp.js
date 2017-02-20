var mysql = require('mysql');


var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1359764',
    database: 'my_schema',
    port: 3306,
    queueLimit: 8
});

var config = {
    host: 'localhost',
    user: 'root',
    password: '1359764',
    database: 'my_schema',
    port: 3306
};
/*

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
 */

module.exports = pool;