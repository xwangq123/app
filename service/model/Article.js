var mysqlPool = require('../utils/mysqlPool.js');

Article = {};

Article.find = (args, callback) => {
    var sql = 'select * from Article';
    mysqlPool.query(sql, args, callback(res, result));
};


module.exports = Article;