var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const keys = require('./key'); // secret key that reference your api
const userModel = require('../modals/user'); // add user modal

// JWT auth header config
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretKey;

module.exports = passport => {
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        // first check if the user was registred
        // @var jwt_payload: contain user payload embedded in the token  
        userModel.findById(jwt_payload.id, function (err, user) {
            if (err) {
                return done(err, false);
            }
            if (user != undefined && user.length > 0) {
                return done(null, user); // exist
            } else {
                return done(null, false); // did not exist -> redirect register page
                // or you could create a new account
            }
        });
    }));
}