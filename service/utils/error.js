function handleError(err, req, res) {
    if (err) {
        console.error(req.url);
        console.error(req.body);
        console.error(req.query);
        console.error(err);
        res.status(500);
        res.json({
            status: 0,
            msg: "Database Error ... ",
            data: err
        });
    }
}
function BusinessError(msg, req, res) {
    if (msg) {
        console.error(req.url);
        console.error(req.body);
        console.error(req.query);
        console.error(msg);
        res.status(200);
        res.json({
            errorMsg: msg
        });
    }
}
module.exports = {handleError, BusinessError};
