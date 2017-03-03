var express = require('express');
var router = express.Router();
var ArticleCategory = require('../model/ArticleCategory.js');
var Article = require('../model/Article.js');
var response = require('../utils/response');


router.get('/articleManage/getArticleCategory', (req, res) => {
    ArticleCategory.findAll((err, result) => {
        if (err) {
            response.err(err, res);
        }
        res.render('articleManage/article_category_manage.html', {data: result, err: ''});
    })
});

router.get('/articleManage/getArticleManage', (req, res) => {
    res.render('articleManage/article_manage.html');
});

router.get('/articleManage/deleteById', (req, res) => {
    ArticleCategory.deleteById(req.query.id, (err) => {
        if (err) {
            response.err(err, res);
        }
        res.redirect('/articleManage/getArticleCategory');
    });
});

router.get('/articleManage/articleAdd', (req, res) => {
    ArticleCategory.findAll((err, result) => {
        res.render('articleManage/article_add', {
            data: result
        });
    });
});

router.post('/articleManage/insert', (req, res) => {
    var name = req.body.name;
    if (name.trim() == '') {
        response.err('请输入类别名称!', res);
    }
    ArticleCategory.insert(name, (err, result) => {
        response.ok(err, res, result);
    });
});

router.post('/articleManage/articleInsert', (req, res) => {
    Article.insert(JSON.parse(req.body.article), (err, result) => {
        response.ok(err, res, result);
    });
});

router.get('/articleManage/getArticle', (req, res) => {

});

module.exports = router;