var mysqlPool = require('../utils/dbhelp.js');

function ArticleCategory(articleCategory) {
    this.id = articleCategory.id;
    this.name = articleCategory.name;
    this.article = articleCategory.article;
    this.state = articleCategory.state;
};

ArticleCategory.insert = function (categoryName, callback) {
    var sql = 'insert into ArticleCategory(NAME,ARTICLE,STATUS) value(?,0,1)';
    mysqlPool.query(sql, [categoryName], function (err, result) {
        callback(err, result);
    });
};

ArticleCategory.findByName = function (categoryName, callback) {

};

module.exports = ArticleCategory;