const express = require("express");
const db = require("./helpers/db-setup");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const passport = require("passport");

// import routes
const users = require("./routes/api/users");
const profiles = require("./routes/api/profiles");
const offres = require("./routes/api/offre");
const services = require("./routes/api/services");
const properties = require("./routes/api/properties");

// custom entrypoint
const app = express();

// default dev-server port
const port = 5000;

// echo msg for startup
app.get("/", (req, res) => res.send("Node server running!"));

// configure middleware
app.set("port", process.env.port || port); // set express to use this port
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(cookieParser()); // parse form data client
app.use(express.static(path.join(__dirname, "public"))); // configure express to use public folder

// passport middleware init
app.use(passport.initialize());

// passport config
require("./config/passport")(passport);

// use routes
app.use("/api/users", users);
app.use("/api/profile", profiles);
app.use("/api/offre", offres);
app.use("/api/service", services);
app.use("/api/property", properties);

// connect to mysql db
db.connect(db.MODE_PRODUCTION, function (err) {
  if (err) {
    console.log("Unable to connect to MySQL.\n" + err);
    process.exit(1);
  } else {
    app.listen(port, () => console.log(`Server running on port ${port}`));
    console.log("Connected to MySQL server on port 3306.");
  }
});
