const express = require("express");
const passport = require("passport");
const router = express.Router();

const profileModel = require("../../modals/profile");

// @route   GET api/profile
// @desc    Show current profile details
// @access  Private
router.get("/", passport.authenticate('jwt', { session: false }), (req, res) => {
  profileModel.findById(req.user[0].id, (err, rows) => {
    if (rows == undefined || rows.length == 0) {
      return res.status(404).json({ error: "no profile found for this user! " })
    }
    else {
      return res.json({ profile: rows })
    }
  })
});

// @route   GET api/profiles/test
// @desc    Tests profile auth
// @access  Private
router.get("/test", passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    auth: "Success!",
    profile: req.user
  })
});

// @route   GET api/profiles/all
// @desc    Get all profiles
// @access  Public
router.get("/all", (req, res) => {
  profileModel.getAll((err, rows) => {
    res.json({
      rows
    })
  })
});

// @route   GET api/profile/surname
// @desc    Get profile by surname
// @access  Private
router.get("/surname/:surname", (req, res) => {
  profileModel.findByHandle(req.params.surname, (err, rows) => {
    if (rows == undefined || rows.length == 0) {
      return res
        .status(400)
        .json({ info: `profile with surname " ${req.params.surname} " did not exist` });
    } else {
      // hash the password
      res.json(rows);
    }
  })
});

// @route   GET api/profile/id
// @desc    Get profile by id
// @access  Private
router.get("/id/:id", (req, res) => {
  profileModel.findById(req.params.id, (err, rows) => {
    if (rows == undefined || rows.length == 0) {
      return res
        .status(400)
        .json({ info: `profile with id " ${req.params.id} " did not exist` });
    } else {
      // hash the password
      res.json(rows);
    }
  })
});

// @route   POST api/profile
// @desc    Create or Edit profile 
// @access  Private
router.post("/", passport.authenticate('jwt', { session: false }), (req, res) => {
  // get all fields from request body
  profile = {};

  profile.id_user = req.user[0].id;

  if (req.query.age) profile.age = req.body.age;
  if (req.query.gender) profile.gender = req.body.gender;
  if (req.query.address) profile.address = req.body.address;
  if (req.query.education) profile.education = req.body.education;
  if (req.query.job) profile.job = req.body.job;
  if (req.query.social_contact) profile.social_contact = req.body.social_contact;
  if (req.query.surname) profile.surname = req.body.surname;
  if (req.query.workplace) profile.workplace = req.body.workplace;
  if (req.query.timestamp) profile.timestamp = req.body.timestamp;

  profileModel.findById(req.user[0].id, (err, rows) => {
    if (rows == undefined || rows.length == 0) {
      // create
      profileModel.create(profile, (err, result) => {
        // update terminated successfully
        res.json({ result: "profile created successfully", "profile": result })
      })
    }
    else {
      // update
      profileModel.update(profile, rows, (err, result) => {
        // update terminated successfully
        res.json({ result: "update complete", "profile": result })
      })
    }
  })
});

module.exports = router;
