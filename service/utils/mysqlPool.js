var config = require('../config');
var mysql = require('mysql');
var mysqlPool = module.exports;
var _pool = null;

mysqlPool.init = () => {
    if (!_pool) {
        _pool = mysql.createPool(config.mysql);
    }
    return mysqlPool;
};

mysqlPool.query = (sql, args, callback) => {
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
mysqlPool.beginTransaction = (callback) => {
    _pool.getConnection((err, connection) => {
        if (err) {
            console.log('getConnection err!' + err);
            return;
        }
        connection.beginTransaction((err) => {
                if (err) {
                    throw err;
                }
                callback((sql, args, callback,  isCommit,commitCallback) => {
                    connection.query(sql, args, (err, rows) => {
                        if (err) {
                            connection.rollback(() => {
                                commitCallback(err,rows);
                            });
                        }
                        callback(err, rows);
                        if (isCommit) {
                            connection.commit((err) => {
                                if (err) {
                                    connection.rollback(() => {
                                        throw err;
                                    });
                                }
                                console.log('success!');
                            });
                            _pool.releaseConnection(connection);
                            commitCallback(err,rows);
                        }
                    })
                });

            }
        );
    });
};

mysqlPool.end = () => {
    if (_pool)
        _pool.end();
};
