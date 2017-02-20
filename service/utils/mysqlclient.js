// mysql CRUD
var sqlclient = module.exports;
var _pool = null;
var NND = {};

/*
 * Innit sql connection pool
 * [@param](/user/param) {Object} app The app for the server.
 */
NND.init = function () {
    console.log("init");
    console.log(_pool);
    if (!_pool)
        _pool = require('./mysql-pool').createMysqlPool();
};

/**
 * Excute sql statement
 * [@param](/user/param) {String} sql Statement The sql need to excute.
 * [@param](/user/param) {Object} args The args for the sql.
 * [@param](/user/param) {fuction} callback Callback function.
 *
 */
NND.query = function (sql, args, callback) {
    console.log('query');
    console.log(_pool);
    _pool.getConnection(function (err, client) {

        /* if (!!err) {
         console.error('[sqlqueryErr] ' + err.stack);
         return;
         }
         client.query(sql, args, function (err, res) {
         _pool.releaseConnection(client);
         callback.apply(null, [err, res]);
         });*/
    });
};

/**
 * Close connection pool.
 */
NND.shutdown = function () {
    _pool.end();
};

/**
 * init database
 */
sqlclient.init = function () {
    console.log('functioninit');
    if (!!_pool) {
        console.log("直接返回");
        return sqlclient;
    } else {
        console.log("初始化");
        NND.init();
        sqlclient.insert = NND.query;
        sqlclient.update = NND.query;
        //sqlclient.delete = NND.query;
        sqlclient.query = NND.query;
        return sqlclient;
    }
};

/**
 * shutdown database
 */
sqlclient.shutdown = function () {
    NND.shutdown();
};