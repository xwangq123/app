var execute = require('../utils/dbhelp.js');


function User(user) {
    this.username = user.username;
    this.password = user.password;
}

User.getUserByUserName = function (username, callback) {
    var selectSql = 'select * from user_info where username = ? and password = ?';
    execute((connection) => {
        connection.query(selectSql, [username, '123456'], function (err, result) {
            callback(err, result);
        });
    });
}


module.exports = User;