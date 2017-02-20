var mysql = require('mysql');


exports.createMysqlPool = module.exports.createMysqlPool = function () {
    return mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '1359764',
        database: 'my_schema',
        port: 3306,
        queueLimit: 8
    });
};