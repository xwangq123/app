var mysqlPool = require('../utils/mysqlPool.js');

function ArticleCategory(articleCategory) {
    this.id = articleCategory.id;
    this.name = articleCategory.name;
    this.article = articleCategory.article;
    this.state = articleCategory.state;
};

ArticleCategory.insert = (categoryName, callback) => {
    ArticleCategory.findByName(categoryName, (err, result) => {
        if (err)
            callback(err, result);
        if (result.length === 0) {
            var sql = 'insert into ArticleCategory(NAME,ARTICLE,STATUS,CREATETIME) value(?,0,1,now())';
            mysqlPool.query(sql, [categoryName], function (err, result) {
                callback(err, result);
            });
        } else
            callback('数据库已存在类型: ' + categoryName, result);
    });
};

ArticleCategory.findByName = (categoryName, callback) => {
    var sql = 'select * from ArticleCategory where status=1 and name=?';
    mysqlPool.query(sql, [categoryName], function (err, result) {
        callback(err, result);
    })
};

ArticleCategory.findAll = (callback) => {
    var sql = 'select * from ArticleCategory where status = 1 order by createtime';
    mysqlPool.query(sql, [], function (err, result) {
        callback(err, result);
    })
};

ArticleCategory.deleteById = (id, callback) => {
    var sql = 'update ArticleCategory set status=99 where id=?';
    mysqlPool.query(sql, [id], (err, result) => {
        callback(err);
    });
};

module.exports = ArticleCategory;