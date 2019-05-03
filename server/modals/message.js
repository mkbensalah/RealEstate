var db = require("../helpers/db-setup");
// add user to db
exports.create = function (user, done) {
    var userID = 0;
    console.log("at create");
    console.log(user);
    var values = [user.Content, user.AgeID];

    db.get().query(
        "INSERT INTO Message (Content, AgeID) VALUES(?, ?)",
        values,
        function (err, result) {
            if (err) {
                console.log(err);
                return done(err);
            }



        }
    );

};

// // list all users
// exports.getAll = function (done) {
//     db.get().query("SELECT * FROM user", function (err, rows) {
//         if (err) return done(err);
//         done(null, rows);
//     });
// };
//
// // find user by ID
// exports.findById = function (id, done) {
//     db.get().query("SELECT * FROM user WHERE id = ?", id, function (
//         err,
//         rows
//     ) {
//         if (err) return done(err);
//         done(null, rows);
//     });
// };
//
