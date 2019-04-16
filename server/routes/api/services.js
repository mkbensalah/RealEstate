const express = require("express");
const passport = require("passport");
const router = express.Router();

const serviceModel = require("../../modals/service");

// @route   GET api/service
// @desc    Show selected service details
// @access  Private
router.get("/", passport.authenticate('jwt', { session: false }), (req, res) => {
    serviceModel.findById(req.params.id, (err, rows) => {
        if (rows == undefined || rows.length == 0) {
            return res.status(404).json({ msg: "no service found!" })
        }
        else {
            return res.json({ service: rows })
        }
    })
});

// @route   GET api/service/test
// @desc    Test service routes
// @access  Private
router.get("/test", passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        auth: "Success!",
        user: req.user
    })
});

// @route   GET api/service/all
// @desc    Get all services
// @access  Public
router.get("/all", (req, res) => {
    serviceModel.getAll((err, rows) => {
        res.json({
            services: rows
        })
    })
});

// @route   GET api/service/leasing/all
// @desc    Get all leasing services
// @access  Public
router.get("/leasing/all", (req, res) => {
    serviceModel.getALLeasing((err, rows) => {
        res.json({
            leasing: rows
        })
    })
});


// @route   GET api/service/re-construct/all
// @desc    Get all reconstruction services
// @access  Public
router.get("/re-construct/all", (req, res) => {
    serviceModel.getAllReconstruction((err, rows) => {
        res.json({
            "re-construction": rows
        })
    })
});


// @route   GET api/service/agence
// @desc    Get service by agence
// @access  Private
router.get("/agence/:agence", (req, res) => {
    serviceModel.findByAgence(req.params.agence, (err, rows) => {
        if (rows == undefined || rows.length == 0) {
            return res
                .status(400)
                .json({ info: `no service associated with " ${req.params.agence} " did exist` });
        } else {
            // hash the password
            res.json(rows);
        }
    })
});

// @route   GET api/service/id
// @desc    Get service by id
// @access  Private
router.get("/id/:id", (req, res) => {
    serviceModel.findById(req.params.id, (err, rows) => {
        if (rows == undefined || rows.length == 0) {
            return res
                .status(400)
                .json({ info: `service with id " ${req.params.id} " did not exist` });
        } else {
            res.json(rows);
        }
    })
});
// @route   POST api/service
// @desc    Add or Edit service 
// @access  Private
router.post("/", passport.authenticate('jwt', { session: false }), (req, res) => {
    // get all fields from request body
    service = {};
    // get service type embedded in the url 
    if (req.body.type) service.type = req.body.type;

    // general service
    if (req.body.agenceid) service.agenceid = req.body.agenceid;
    if (req.body.prix) service.prix = req.body.prix;
    if (req.body.adresse) service.adresse = req.body.adresse;
    if (req.body.Description) service.Description = req.body.Description;
    if (req.body.serviceID) service.serviceID = req.body.serviceID; // if request an update
    // for leasing (location)
    if (req.body.nb_chambre) service.nb_chambre = req.body.nb_chambre;
    if (req.body.haut_standing) service.haut_standing = req.body.haut_standing;
    if (req.body.meuble) service.meuble = req.body.meuble;
    // for reconstruction
    if (req.body.bien_terraincol) service.bien_terraincol = req.body.bien_terraincol;
    if (req.body.prix_metre) service.prix_metre = req.body.prix_metre;
    if (req.body.type_terrain) service.type_terrain = req.body.type_terrain;

    if (Object.entries(service).length !== 0 && service.constructor === Object) {
        serviceModel.findById(req.body.serviceID, (err, rows) => {
            if (rows == undefined || rows.length == 0) {
                // add location service
                if (service.type == "location") {
                    serviceModel.addLeasingService(service, (err, result) => {
                        // created successfully
                        res.json({ result: "service added successfully", "service": result })
                    })
                }
                // add reconstruction service
                else if (service.type == "reconstruction") {
                    serviceModel.addReconstructService(service, (err, result) => {
                        // created successfully
                        res.json({ result: "service added successfully", "service": result })
                    })
                }
            }
            else {
                // update buiding 
                if (service.type == "location") {
                    serviceModel.updateLeasingService(service, rows, (err, result) => {
                        // update terminated successfully
                        res.json({ result: "update complete", "service": result })
                    })
                }
                // update terrain
                else {
                    serviceModel.updateReconstructService(service, rows, (err, result) => {
                        // update terminated successfully
                        res.json({ result: "update complete", "service": result })
                    })
                }
            }
        })
    } else {
        // additional client side input-validation is required 
        res.status(401).json({ error: "Could not complete the request" });
    }
});


module.exports = router;
