var config = require('../config');
var mysql = require('mysql');
var mysqlPool = module.exports;
var _pool = null;

mysqlPool.init = function () {
    if (!_pool) {
        _pool = mysql.createPool(config.mysql);
    }
    return mysqlPool;
};

mysqlPool.query = function (sql, args, callback) {
    _pool.getConnection((err, connection) => {
        if (err) {
            console.log('getConnection err!' + err);
            return;
        }
        connection.query(sql, args, (err, result) => {
            _pool.releaseConnection(connection);
            callback(err, result)
        });
    });
};
mysqlPool.beginTransaction = function (callback) {
    _pool.getConnection((err, connection) => {
        if (err) {
            console.log('getConnection err!' + err);
            return;
        }
        connection.beginTransaction((err) => {
            if (err) {
                throw err;
            }
            callback(connection, (err) => {
                if (err) {
                    connection.rollback(() => {
                        throw err;
                    });
                }
                connection.commit(function (err) {
                    if (err) {
                        connection.rollback(function () {
                            throw err;
                        });
                    }
                    console.log('success!');
                });
            });

        });
    });
};

mysqlPool.end = function () {
    if (_pool)
        _pool.end();
};
