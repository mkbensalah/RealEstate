const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/key");
const { body, check } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');


// auth middleware
const passport = require("passport");

// request data modal
var userModal = require("../../modals/user");


const checkAuthorization = function (req, res, done) {
  passport.authenticate('jwt', { session: false });
  // 1. See if there is a token on the request...if not, reject immediately
  //
  const userJWT = req.cookies.realEstateAccessJwt
  if (!userJWT) {
    res.status(401).json({ msg: 'Invalid or missing authorization token' });
  }
  done()
}

// @route   GET api/users/test
// @desc    Tests user routes
// @access  Public
router.get("/test", (req, res) => {

  // const cookieOptions = {
  //   httpOnly: true,
  //   expires: 0
  // }
  // res.cookie('realEstateAccessJwt', "token", cookieOptions)
  res.json({ msg: "test user works fine!" })

});

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
          console.log(payload);
          // sign the token  
          jwt.sign(payload, keys.secretKey, { expiresIn: 3600 }, (err, token) => {
            if (err) throw err
            else {
              const cookieOptions = {
                httpOnly: true,
                expires: 0
              }
              res.cookie('realEstateAccessJwt', token, cookieOptions)
              res.sendStatus(200)
              res.json({ success: true, token: 'Bearer ' + token }); // Bearer encryption
            }
          });
        }
        else return res.status(400).json({ msg: "Password not correct" });
      });
    }
  });
});

// @route   GET api/users/logout
// @desc    Sign out the user
// @access  Private
router.get("/logout", checkAuthorization, (req, res) => {

  const userJWT = req.cookies;
  res.clearCookie('realEstateAccessJwt');
  const userJWTafter = req.cookies;
  res.json({
    before: userJWT,
    after: userJWTafter
  })
})

// @route   POST api/users/register
// @desc    register user
// @access  Public
router.post("/register",[
  body('email')
    .isEmail()
    .normalizeEmail(),
  body('password')
    .not().isEmpty()
    .trim()
    .escape(),
  sanitizeBody('notifyOnReply').toBoolean()
] ,(req, res) => {
  userModal.findByEmail(req.body.email, function (err, rows) {
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
              req.body,
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
