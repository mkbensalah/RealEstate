var db = require("../helpers/db-setup");

// add property(building) to db
exports.addBuildingProperty = function (propertySet, done) {

    var values = [
        propertySet.ville,
        propertySet.adresse,
        propertySet.surface,
        propertySet.prix,
        new Date()
    ];

    db.get().query(
        "INSERT INTO bien (ville, adresse, surface, prix, date)"
        + "VALUES(?, ?, ?, ?, ?)",
        values,
        function (err, _result) {
            if (err) {
                console.log(err);
                return done(err);
            }
            var values = [
                _result.insertId,
                propertySet.nbchambre,
                propertySet.haut_standing,
                propertySet.meuble
            ];
            db.get().query(
                "INSERT INTO bien_immeuble (idbien, nbchambre, haut_standing, meuble)"
                + "VALUES(?, ?, ?, ?)",
                values,
                function (err, result) {
                    if (err) {
                        console.log(err);
                        return done(err);
                    }
                    done(null, { property: _result, building: result });
                }
            );
        }
    );
};


// add property(terrain) to db
exports.addTerrainProperty = function (propertySet, done) {

    var values = [
        propertySet.ville,
        propertySet.adresse,
        propertySet.surface,
        propertySet.prix,
        new Date()
    ];

    db.get().query(
        "INSERT INTO bien (ville, adresse, surface, prix, date)"
        + "VALUES(?, ?, ?, ?, ?)",
        values,
        function (err, _result) {
            if (err) {
                console.log(err);
                return done(err);
            }
            var values = [
                _result.insertId,
                propertySet.bien_terraincol,
                propertySet.prix_metre,
                propertySet.type_terrain
            ];
            db.get().query(
                "INSERT INTO bien_terrain (idbien, bien_terraincol, prix_metre, type_terrain)"
                + "VALUES(?, ?, ?, ?)",
                values,
                function (err, result) {
                    if (err) {
                        console.log(err);
                        return done(err);
                    }
                    done(null, { property: _result, terrain: result });
                }
            );
        }
    );
};



// update property(building) to db
exports.updateBuildingProperty = function (propertySet, propertySetOld, done) {

    var values = [
        propertySet.ville ? propertySet.ville : propertySetOld.ville,
        propertySet.adresse ? propertySet.adresse : propertySetOld.adresse,
        propertySet.surface ? propertySet.surface : propertySetOld.surface,
        propertySet.prix ? propertySet.prix : propertySetOld.prix,
        new Date(),
        propertySet.id_property
    ];

    db.get().query(
        "UPDATE bien SET ville =?, adresse =?, surface =?, prix =?, date =?" +
        "WHERE idbien=?",
        values,
        function (err, _result) {
            if (err) {
                console.log(err);
                return done(err);
            }
            var values = [
                propertySet.nbchambre ? propertySet.nbchambre : propertySetOld.nbchambre,
                propertySet.haut_standing ? propertySet.haut_standing : propertySetOld.haut_standing,
                propertySet.meuble ? propertySet.meuble : propertySetOld.meuble,
                propertySet.id_property
            ];
            db.get().query(
                "UPDATE bien_immeuble SET nbchambre =?, haut_standing =?, meuble =?" +
                "WHERE idbien=?",
                values,
                function (err, result) {
                    if (err) {
                        console.log(err);
                        return done(err);
                    }
                    done(null, { property: _result, building: result });
                }
            )
        }
    );
};


// update property(terrain) to db
exports.updateTerrainProperty = function (propertySet, propertySetOld, done) {

    var values = [
        propertySet.ville ? propertySet.ville : propertySetOld.ville,
        propertySet.adresse ? propertySet.adresse : propertySetOld.adresse,
        propertySet.surface ? propertySet.surface : propertySetOld.surface,
        propertySet.prix ? propertySet.prix : propertySetOld.prix,
        new Date(),
        propertySet.id_property
    ];

    db.get().query(
        "UPDATE bien SET ville =?, adresse =?, surface =?, prix =?, date =?" +
        "WHERE idbien=?",
        values,
        function (err, _result) {
            if (err) {
                console.log(err);
                return done(err);
            }
            var values = [
                propertySet.bien_terraincol ? propertySet.bien_terraincol : propertySetOld.bien_terraincol,
                propertySet.prix_metre ? propertySet.prix_metre : propertySetOld.prix_metre,
                propertySet.type_terrain ? propertySet.type_terrain : propertySetOld.type_terrain,
                propertySet.id_property
            ];
            db.get().query(
                "UPDATE bien_terrain SET bien_terraincol =?, prix_metre =?, type_terrain =?" +
                "WHERE idbien=?",
                values,
                function (err, result) {
                    if (err) {
                        console.log(err);
                        return done(err);
                    }
                    done(null, { property: _result, terrain: result });
                }
            )
        }
    );
};

// list all properties
exports.getAll = function (done) {
    db.get().query("SELECT * FROM bien", function (err, rows) {
        if (err) return done(err);
        done(null, rows);
    });
};


// list all terrain properties
exports.getAllTerrains = function (done) {
    db.get().query(
        "SELECT * FROM bien b, bien_terrain _b " +
        "WHERE b.idbien = _b.idbien",
        function (err, rows) {
            if (err) return done(err);
            done(null, rows);
        });
};

// list all building properties
exports.getAllBuildings = function (done) {
    db.get().query(
        "SELECT * FROM bien b, bien_immeuble _b " +
        "WHERE b.idbien = _b.idbien",
        function (err, rows) {
            if (err) return done(err);
            done(null, rows);
        });
};

// find property by ID
exports.findById = function (id, done) {
    db.get().query("SELECT * FROM bien a , bien_immeuble b   WHERE a.idbien =? AND a.idbien=b.idbien", id, function (
        err,
        rows
    ) {
        if (err) return done(err);
        done(null, rows);
    });
};

// find property by id_agence
exports.findByAgence = function (handle, done) {
    db.get().query("SELECT * FROM offer WHERE id_agence =?", handle, function (
        err,
        rows
    ) {
        if (err) return done(err);
        done(null, rows);
    });
};
