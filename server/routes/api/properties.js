const express = require("express");
const passport = require("passport");
const router = express.Router();

const propertyModel = require("../../modals/property");

// @route   GET api/property
// @desc    Show selected property details
// @access  Private
router.get("/", passport.authenticate('jwt', { session: false }), (req, res) => {
    propertyModel.findById(req.params.id, (err, rows) => {
        if (rows == undefined || rows.length == 0) {
            return res.status(404).json({ msg: "no property found!" })
        }
        else {
            return res.json({ property: rows })
        }
    })
});

// @route   GET api/property/test
// @desc    Test property routes
// @access  Private
router.get("/test", passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        auth: "Success!",
        user: req.user
    })
});

// @route   GET api/property/all
// @desc    Get all properties
// @access  Public
router.get("/all", (req, res) => {
    propertyModel.getAll((err, rows) => {
        res.json({
            rows
        })
    })
});

// @route   GET api/property/terrain/all
// @desc    Get all terrain properties
// @access  Public
router.get("/terrain/all", (req, res) => {
    propertyModel.getAllTerrains((err, rows) => {
        res.json({
            rows
        })
    })
});


// @route   GET api/property/building/all
// @desc    Get all building properties
// @access  Public
router.get("/building/all", (req, res) => {
    propertyModel.getAllBuildings((err, rows) => {
        res.json({
            rows
        })
    })
});


// @route   GET api/property/agence
// @desc    Get property by agence
// @access  Private
router.get("/agence/:agence", (req, res) => {
    propertyModel.findByAgence(req.params.agence, (err, rows) => {
        if (rows == undefined || rows.length == 0) {
            return res
                .status(400)
                .json({ info: `no property associated with " ${req.params.agence} " did exist` });
        } else {
            // hash the password
            res.json(rows);
        }
    })
});

// @route   GET api/property/id
// @desc    Get property by id
// @access  Private
router.get("/id/:id", (req, res) => {
    propertyModel.findById(req.params.id, (err, rows) => {
        if (rows == undefined || rows.length == 0) {
            return res
                .status(400)
                .json({ info: `property with id " ${req.params.id} " did not exist` });
        } else {
            res.json(rows);
        }
    })
});

// @route   POST api/property
// @desc    Create or Edit property 
// @access  Private
router.post("/", passport.authenticate('jwt', { session: false }), (req, res) => {
    // get all fields from request body
    property = {};
    // get property type embedded in the url 
    if (req.body.type) property.type = req.body.type;
    // general property
    if (req.body.ville) property.ville = req.body.ville;
    if (req.body.adresse) property.adresse = req.body.adresse;
    if (req.body.surface) property.surface = req.body.surface;
    if (req.body.prix) property.prix = req.body.prix;
    if (req.body.id_property) property.id_property = req.body.id_property; // if request an update
    // for building (immeuble)
    if (req.body.nbchambre) property.nbchambre = req.body.nbchambre;
    if (req.body.haut_standing) property.haut_standing = req.body.haut_standing;
    if (req.body.meuble) property.meuble = req.body.meuble;
    // for terrain
    if (req.body.bien_terraincol) property.bien_terraincol = req.body.bien_terraincol;
    if (req.body.prix_metre) property.prix_metre = req.body.prix_metre;
    if (req.body.type_terrain) property.type_terrain = req.body.type_terrain;

    if (Object.entries(property).length !== 0 && property.constructor === Object) {
        propertyModel.findById(req.body.id_property, (err, rows) => {
            if (rows == undefined || rows.length == 0) {
                // add building
                if (property.type == "immeuble") {
                    propertyModel.addBuildingProperty(property, (err, result) => {
                        // created successfully
                        res.json({ result: "property added successfully", "property": result })
                    })
                }
                // add terrain 
                else if (property.type == "terrain") {
                    propertyModel.addTerrainProperty(property, (err, result) => {
                        // created successfully
                        res.json({ result: "property added successfully", "property": result })
                    })
                }
            }
            else {
                // update buiding 
                if (property.type == "immeuble") {
                    propertyModel.updateBuildingProperty(property, rows, (err, result) => {
                        // update terminated successfully
                        res.json({ result: "update complete", "property": result })
                    })
                }
                // update terrain
                else {
                    propertyModel.updateTerrainProperty(property, rows, (err, result) => {
                        // update terminated successfully
                        res.json({ result: "update complete", "property": result })
                    })
                }
            }
        })
    } else {
        res.status(401).json({ error: "Could not complete the request" });
    }
});


module.exports = router;
