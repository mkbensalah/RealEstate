var db = require("../helpers/db-setup");


// create offre 
exports.create = function (offre, done) {
    console.log(offre);
    var values = [offre.prix, offre.mode_paiement, offre.Description, offre.IDClient, offre.IDService_Bien];
    db.get().query(
        "INSERT INTO offre (prix, mode_paiement, Description, IDClient, IDService_Bien) VALUES(?, ?, ?, ?, ?)",
        values,
        function (err, result) {
            if (err) return done(err);
            console.log(result.insertId);
            db.get().query(
                "INSERT INTO offre_non_verif (IDoffre , IDagence) VALUES(?, ?)",
                [result.insertId, offre.IDService_Bien],
                function (err, result) {
                    if (err) return done(err);
                    done(null, result.insertId);
                });
        });
}




// admin bech yvalidi l offre -> offre valide
exports.validate = function (offre, done) {
    console.log(offre);
    var values = [offre.IDoffre, offre.IDagence];
    db.get().query("INSERT INTO offre_en_cours (IDoffre , IDagence) VALUES(?, ?)",
        values,
        function (err, result) {
            if (err) return done(err);
            db.get().query(
                "DELETE FROM offre_non_verif where IDoffre=?",
                offre.IDoffre,
                function (err, result) {
                    if (err) return done(err);
                    console.log("non verifie -> en cours");
                    done(null, result.insertId);
                })
        })

    // ajouter l offre  à la table offre_en_cours
        
}