var express = require('express');
var router = express.Router();
var User = require('../service/model/User.js');
var error = require('../service/utils/error.js');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/getUser', (req, res) => {
    User.getUserByUserName('mtjss2', (err, result) => {
        if (err) {
            HandleErrorIfAny(err, req, res);
        } else {
            res.json({
                status: 1, data: result,
                msg: "query success ... "
            });
        }
    });
})
module.exports = router;

