var express = require('express');
var router = express.Router();
var ArticleCategory = require('../service/model/ArticleCategory.js');
var error = require('../service/utils/error.js');

router.post('/insert', (req, res) => {
    var name = req.body.name;
    if (name.trim() == '') {
        error.BusinessError('请输入类别名称!', req, res);
    }

    ArticleCategory.insert(name, (err, result) => {
        if (err) {
            error.handleError(err, req, res);
        } else {
            //保存成功 刷新页面
        }
    });
});

module.exports = router;