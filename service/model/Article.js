var mysqlPool = require('../utils/mysqlPool.js');

Article = {};

Article.find = (args, callback) => {
    var sql = 'select * from Article';
    mysqlPool.query(sql, args, callback(res, result));
};

Article.insert = (article, callback) => {
    mysqlPool.beginTransaction((query) => {
        var sql = 'insert into Article(TITLE,READNUMBER,SUMMARY,CONTENT,TYPE,STATUS,CREATETIME,CREATENAME) value(?,0,?,?,?,1,now(),?)';
        query(sql, [article.TITLE, article.SUMMARY, article.CONTENT, article.TYPE, 'admin'], (e, rows) => {
            if (e) {
                callback(e, rows);
                return;
            }
            var sql1 = 'INSERT INTO ARTICLECATEGORYRELATED (ARTICLEID, ARTICLECATEGORYID) VALUES (?,?)';
            for (var i = 0; i < article.ARTICLE.length; i++) {
                query(sql1, [rows.insertId, article.ARTICLE[i]], (e, r) => {
                    if (e) {
                        callback(e, r);
                        return;
                    }

                }, (i === article.ARTICLE.length - 1), callback)
            }
        });
    });
};

Article.find = () => {
    var sql='select  * from ';
    mysqlPool.query();

};

module.exports = Article;