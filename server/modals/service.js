var db = require("../helpers/db-setup");

// add service(leasing) to db
exports.addLeasingService = function (serviceSet, done) {

    var values = [
        serviceSet.agenceid,
        new Date(),
        serviceSet.prix,
        serviceSet.adresse,
        serviceSet.Description
    ];

    db.get().query(
        "INSERT INTO service (agenceid, date_creation, prix, adresse, Description)"
        + "VALUES(?, ?, ?, ?, ?)",
        values,
        function (err, _result) {
            if (err) {
                console.log(err);
                return done(err);
            }
            var values = [
                _result.insertId,
                serviceSet.nb_chambre,
                new Date(),
                serviceSet.haut_standing,
                serviceSet.meuble
            ];
            db.get().query(
                "INSERT INTO service_location (serviceID, nb_chambre, date, haute_standing, meuble)"
                + "VALUES(?, ?, ?, ?, ?)",
                values,
                function (err, result) {
                    if (err) {
                        console.log(err);
                        return done(err);
                    }
                    done(null, { service: _result, building: result });
                }
            );
        }
    );
};


// add service(reconstruction) to db
exports.addReconstructService = function (serviceSet, done) {

    var values = [
        serviceSet.agenceid,
        new Date(),
        serviceSet.prix,
        serviceSet.adresse,
        serviceSet.Description
    ];

    db.get().query(
        "INSERT INTO service (agenceid, date_creation, prix, adresse, Description)"
        + "VALUES(?, ?, ?, ?, ?)",
        values,
        function (err, _result) {
            if (err) {
                console.log(err);
                return done(err);
            }
            var values = [
                _result.insertId,
                serviceSet.service_reconstructioncol,
                serviceSet.prix_metre,
                serviceSet.type_reconstruction
            ];
            db.get().query(
                "INSERT INTO service_reconstruction (idservice, service_reconstructioncol, prix_metre, type_reconstruction)"
                + "VALUES(?, ?, ?, ?)",
                values,
                function (err, result) {
                    if (err) {
                        console.log(err);
                        return done(err);
                    }
                    done(null, { service: _result, reconstruction: result });
                }
            );
        }
    );
};

// update service(leasing) to db
exports.updateLeasingService = function (serviceSet, serviceSetOld, done) {

    var values = [
        serviceSet.agenceid ? serviceSet.agenceid : serviceSetOld.agenceid,
        new Date(),
        serviceSet.prix ? serviceSet.prix : serviceSetOld.prix,
        serviceSet.adresse ? serviceSet.adresse : serviceSetOld.adresse,
        serviceSet.Description ? serviceSet.Description : serviceSetOld.Description,
        serviceSet.serviceID
    ];

    db.get().query(
        "UPDATE service SET agenceid =?, date_creation =?, prix =?, adresse =?, Description =? " +
        "WHERE serviceID=?",
        values,
        function (err, _result) {
            if (err) {
                console.log(err);
                return done(err);
            }
            var values = [
                serviceSet.nb_chambre ? serviceSet.nb_chambre : serviceSetOld.nb_chambre,
                new Date(),
                serviceSet.haut_standing ? serviceSet.haut_standing : serviceSetOld.haut_standing,
                serviceSet.meuble ? serviceSet.meuble : serviceSetOld.meuble,
                serviceSet.serviceID
            ];
            db.get().query(
                "UPDATE service_location SET nb_chambre =?, date =?, haute_standing =?, meuble =?" +
                "WHERE serviceID=?",
                values,
                function (err, result) {
                    if (err) {
                        console.log(err);
                        return done(err);
                    }
                    done(null, { service: _result, building: result });
                }
            )
        }
    );
};


// update service(reconstruction) to db
exports.updateReconstructService = function (serviceSet, serviceSetOld, done) {

    var values = [
        serviceSet.agenceid ? serviceSet.agenceid : serviceSetOld.agenceid,
        new Date(),
        serviceSet.prix ? serviceSet.prix : serviceSetOld.prix,
        serviceSet.adresse ? serviceSet.adresse : serviceSetOld.adresse,
        serviceSet.Description ? serviceSet.Description : serviceSetOld.Description,
        serviceSet.serviceID
    ];

    db.get().query(
        "UPDATE service SET ville =?, adresse =?, surface =?, prix =?, date =?" +
        "WHERE serviceID=?",
        values,
        function (err, _result) {
            if (err) {
                console.log(err);
                return done(err);
            }
            var values = [
                serviceSet.service_reconstructioncol ? serviceSet.service_reconstructioncol : serviceSetOld.service_reconstructioncol,
                serviceSet.prix_metre ? serviceSet.prix_metre : serviceSetOld.prix_metre,
                serviceSet.type_reconstruction ? serviceSet.type_reconstruction : serviceSetOld.type_reconstruction,
                serviceSet.id_service
            ];
            db.get().query(
                "UPDATE service_reconstruction SET service_reconstructioncol =?, prix_metre =?, type_reconstruction =?" +
                "WHERE serviceID=?",
                values,
                function (err, result) {
                    if (err) {
                        console.log(err);
                        return done(err);
                    }
                    done(null, { service: _result, reconstruction: result });
                }
            )
        }
    );
};

// list all services
exports.getAll = function (done) {
    db.get().query("SELECT * FROM service", function (err, rows) {
        if (err) return done(err);
        done(null, rows);
    });
};


// list all reconstruction services
exports.getAllReconstruction = function (done) {
    db.get().query(
        "SELECT * FROM service b, service_reconstruction _b " +
        "WHERE b.serviceID = _b.serviceID",
        function (err, rows) {
            if (err) return done(err);
            done(null, rows);
        });
};

// list all leasing services 
exports.getALLeasing = function (done) {
    db.get().query(
        "SELECT * FROM service b, service_location _b " +
        "WHERE b.serviceID = _b.serviceID",
        function (err, rows) {
            if (err) return done(err);
            done(null, rows);
        });
};

// find service by ID
exports.findById = function (id, done) {
    db.get().query("SELECT * FROM service WHERE serviceID =?", id, function (
        err,
        rows
    ) {
        if (err) return done(err);
        done(null, rows);
    });
};

// find service by id_agence
exports.findByAgence = function (handle, done) {
    db.get().query("SELECT * FROM offer WHERE id_agence =?", handle, function (
        err,
        rows
    ) {
        if (err) return done(err);
        done(null, rows);
    });
};
