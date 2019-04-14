const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/key");

// request data modal
var userModal = require("../../modals/user");

// @route   GET api/users/test
// @desc    Tests user routes
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "test user works fine!" }));

// @route   POST api/users/login
// @desc    sign in user
// @access  Public
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  userModal.findByEmail(email, function (err, rows) {
    if (rows == undefined || rows.length == 0) {
      return res
        .status(400)
        .json({ email: `User with email "${req.body.email}" did not exist!` });
    } else {
      // using bcrypt api to secure your password
      bcrypt.compare(password, rows[0].password).then(isMatch => {
        if (isMatch) {
          // res.json({ msg: "Success!" });
          // create payload -> user indicator
          var payload = {
            id: rows[0].id,
            username: rows[0].name,
            email: rows[0].email,
            state: rows[0].state,
            telephone: rows[0].tel,
          };
          // sign the token  
          jwt.sign(payload, keys.secretKey, { expiresIn: 3600 }, (err, token) => {
            if (err) throw err
            else res.json({ success: true, token: 'Bearer ' + token }); // Bearer encryption
          });
        }
        else return res.status(400).json({ msg: "Password not correct" });
      });
    }
  });
});


// @route   POST api/users/register
// @desc    register user
// @access  Public
router.get("/register", (req, res) => {
  userModal.findByEmail(req.query.mail, function (err, rows) {
    if (rows !== undefined && rows.length > 0) {
      return res
        .status(400)
        .json({ email: `email "${req.body.email}" already exist` });
    } else {
      // hash the password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;
          else {
            const newUser = userModal.create(
              req.query,
              hash,
              function (err, insertId) {
                res.json({ msg: `Succeed! user added with id# ${insertId}` });
              }
            );
          }
        });
      });
    }
  });
});

module.exports = router;
