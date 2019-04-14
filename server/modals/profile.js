var db = require("../helpers/db-setup");

// add profile to db
exports.create = function (
    id_user, age, gendre, job,
    education, address, job_location,
    social_contact, handle, done) {

    var values = [id_user, age, gendre, education, job, social_contact, handle, job_location, address, new Date().getTime()];

    db.get().query(
        "INSERT INTO profile (id_user, age, gendre, education, job, contact_social, surname, lieu de travail, adresse, timestamp)"
        + "VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        values,
        function (err, result) {
            if (err) {
                console.log(err);
                return done(err);
            }
            done(null, result.insertId);
        }
    );
};


// update profile to db
exports.update = function (
    id_user, age, gendre, job,
    education, address, job_location,
    social_contact, handle, done) {

    var values = [age, gendre, education, job, social_contact, handle, job_location, address, new Date().getTime(), id_user];

    db.get().query(
        "UPDATE profile SET age=?, gendre=?, education=?, job=?, contact_social=?, surname=?, lieu de travail=?, adresse=?, timestamp=?"
        + "WHERE user_id=?",
        values,
        function (err, result) {
            if (err) {
                console.log(err);
                return done(err);
            }
            done(null, result);
        }
    );
};

// list all users
exports.getAll = function (done) {
    db.get().query("SELECT * FROM profile", function (err, rows) {
        if (err) return done(err);
        done(null, rows);
    });
};

// find user by ID
exports.findById = function (id, done) {
    db.get().query("SELECT * FROM profile WHERE user_id = ?", id, function (
        err,
        rows
    ) {
        if (err) return done(err);
        done(null, rows);
    });
};

// find user by email
exports.findByHandle = function (handle, done) {
    db.get().query("SELECT * FROM user WHERE surname = ?", handle, function (
        err,
        rows
    ) {
        if (err) return done(err);
        done(null, rows);
    });
};
