const express = require("express");
const router = express.Router();
const passport = require("passport");

var offreModal = require("../../modals/offre_non_validate.js");

// @route   POST api/offer/new
// @desc    Create new real estate offer
// @access  Private
router.post("/new", passport.authenticate("jwt", { session: false }), (req, res) => {
    console.log("dans le corps d'offre ");
    // récuperer l'id user à partir de la session
    var id_user = req.user[0].id;

    const newoffre = offreModal.create(req.body, function (err, insertId) {
        if (err) console.log(err);
        else res.json({ msg: `Succeed! offre added with id# ${insertId}` });

    });
});

// @route   POST api/validate_offer
// @desc    validate the selected offer
// @access  Private
router.post("/validate_offer", passport.authenticate("jwt", { session: false }), (req, res) => {
    console.log("dans le corps de validate_offre ");
    // recupere  l id de user à partir de la session
    var id_user = req.user[0].id;

    const newoffre = offreModal.validate(req.query, function (err, insertId) {
        if (err) console.log(err);
        else res.json({ msg: `Succeed! offre added with id# ${insertId}` });
    });
});


module.exports = router;
