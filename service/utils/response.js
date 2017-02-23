var response = module.exports;


response.ok = function (err, res, result) {
    res.status(200);
    res.json({
        errMsg: err,
        data: result
    });
};

response.err = function (errMsg, res) {
    res.status(500);
    res.json({
        errMsg: errMsg
    });
};