var db = require("../helpers/db-setup");

// add profile to db
exports.create = function (profileSet, done) {

    var values = [
        profileSet.id_user,
        profileSet.age,
        profileSet.gender,
        profileSet.education,
        profileSet.job,
        profileSet.social_contact,
        profileSet.surname,
        profileSet.workplace,
        profileSet.address,
        new Date()
    ];

    db.get().query(
        "INSERT INTO profile (id_user, age, gender, education, job, contact_social, surname, workplace, adresse, timestamp)"
        + "VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
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


// update profile to db
exports.update = function (profileSet, profileSetOld, done) {

    var values = [
        profileSet.age ? profileSet.age : profileSetOld.age,
        profileSet.gender ? profileSet.gender : profileSetOld.gender,
        profileSet.education ? profileSet.education : profileSetOld.education,
        profileSet.job ? profileSet.job : profileSetOld.job,
        profileSet.social_contact ? profileSet.social_contact : profileSetOld.social_contact,
        profileSet.surname ? profileSet.surname : profileSetOld.handle,
        profileSet.workplace ? profileSet.workplace : profileSetOld.workplace,
        profileSet.address ? profileSet.address : profileSetOld.address,
        new Date(),
        profileSet.id_user
    ];

    db.get().query(
        "UPDATE profile SET age =?, gender =?, education =?, job =?, contact_social =?, surname =?, workplace =?, adresse =?, timestamp =? WHERE id_user=?",
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
    db.get().query("SELECT * FROM profile WHERE id_user =?", id, function (
        err,
        rows
    ) {
        if (err) return done(err);
        done(null, rows);
    });
};

// find user by email
exports.findByHandle = function (handle, done) {
    db.get().query("SELECT * FROM profile WHERE surname =?", handle, function (
        err,
        rows
    ) {
        if (err) return done(err);
        done(null, rows);
    });
};
