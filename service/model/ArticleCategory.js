var pool = require('../utils/dbhelp.js');
var mysqlClient = require('../utils/mysqlclient.js').init();

function ArticleCategory(articleCategory) {
    this.id = articleCategory.id;
    this.name = articleCategory.name;
    this.article = articleCategory.article;
    this.state = articleCategory.state;
};

ArticleCategory.insert = function (categoryName, callback) {
    mysqlClient.query("select * from ArticleCategory", [], (err, res) => {

    });

    var sql = 'insert into ArticleCategory(NAME,ARTICLE,STATUS) value(?,0,1)';
    pool.getConnection((err, connection) => {
        connection.query(sql, [categoryName], function (err, result) {
            callback(err, result)
        });
    });
};

ArticleCategory.findByName = function (categoryName, callback) {
    var sql = 'select * from ArticleCategory where name=?';
    pool.getConnection((err, connection) => {
        connection.query(sql, [categoryName], function (err, result) {
            callback(err, result)
        });
    });
};

module.exports = ArticleCategory;