const express = require("express");
const passport = require("passport");
const router = express.Router();

const profileModel = require("../../modals/profile");

// @route   GET api/profiles/test
// @desc    Tests profile routes
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

// @route   GET api/profiles/surname
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

// @route   GET api/profiles/id
// @desc    Get profile by id
// @access  Private
router.get("/id/:id", (req, res) => {
  profileModel.findById((err, rows) => {
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

// @route   GET api/profile/edit
// @desc    Edit profile 
// @access  Private
router.post("edit", (req, res) => {
  profile = {};
  if (req.params.age) profile.age = req.params.age;
  if (req.params.gender) profile.gender = req.params.gender;
  if (req.params.address) profile.address = req.params.address;
  if (req.params.education) profile.education = req.params.education;
  if (req.params.job) profile.job = req.params.job;
  if (req.params.contact_social) profile.contact_social = req.params.contact_social;
  if (req.params.surname) profile.surname = req.params.surname;
  if (req.params.workplace) profile.workplace = req.params.workplace;
  if (req.params.timestamp) profile.timestamp = req.params.timestamp;

  

});


module.exports = router;
