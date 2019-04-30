var db = require("../helpers/db-setup");

// add service(Builder) to db
exports.addBuilderService = function (serviceSet, done) {

    var values = [
        serviceSet.agenceid,
        new Date(),
        serviceSet.prix,
        serviceSet.adresse,
        serviceSet.Description
    ];

    console.log("at create");
    //console.log(values);


    db.get().query(
        "INSERT INTO service (agenceid, date_creation, prix, adresse, Description)"
        + "VALUES(?, ?, ?, ?, ?)",
        values,
        function (err, _result) {
            if (err) {
                console.log(err);
                return done(err);
            }
            let deco = 0;
            (serviceSet.decoration == "yes") ? deco = 1 : deco = 0 ;
            var values = [
                _result.insertId,
                serviceSet.buildingType,
                serviceSet.workerNumber,
                serviceSet.priceWorker,
                serviceSet.maxArea,
                serviceSet.minTotalPrice,
                deco,
                serviceSet.zone
            ];
            console.log(values);
            db.get().query(
                "INSERT INTO BuilderService (serviceID, BuildingType, WorkerNumber, WorkerPrice, MaxArea, MinTotalPrice,Decoration, Zone)"
                + "VALUES(?, ?, ?, ?, ?, ?, ?, ?)",
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


// add service(Repair) to db
exports.addRepairService = function (serviceSet, done) {

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

            let inc = 0;
            (serviceSet.piecesIncluded == "yes") ? inc = 1 : inc = 0 ;

            var values = [
                _result.insertId,
                serviceSet.repairType,
                serviceSet.priceWorker,
                serviceSet.damageType,
                serviceSet.minTotalPrice,
                inc,
                serviceSet.zone,
            ];
            db.get().query(
                "INSERT INTO RepairService (serviceID, RepairType, WorkerPrice, DamageType, MinTotalPrice, PiecesIncluded, Zone)"
                + "VALUES(?, ?, ?, ?, ?, ?, ?)",
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



// add service(Leasing) to db
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
                serviceSet.buildingType,
                serviceSet.fromDate,
                serviceSet.duration,
                serviceSet.price,
                serviceSet.increase,
                serviceSet.zone,
            ];
            db.get().query(
                "INSERT INTO LeasingService (serviceID, BuildingType, FromDate, Duration, Price, Increase, Zone)"
                + "VALUES(?, ?, ?, ?, ?, ?, ?)",
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
