var mysql = require("mysql"),
  async = require("async");

var config = require("../config/key").mysqlUri;

var PRODUCTION_DB = "8Eg172KG7R",
  TEST_DB = "8Eg172KG7R";

exports.MODE_TEST = "mode_test";
exports.MODE_PRODUCTION = "mode_production";

var state = {
  pool: null,
  mode: null
};

// access to the database whenever is needed
// without constantly entering credentials
exports.connect = function(mode, done) {
  config.database = mode === exports.MODE_PRODUCTION ? PRODUCTION_DB : TEST_DB;
  state.pool = mysql.createPool(config);
  state.mode = mode;
  done();
};

exports.get = function() {
  return state.pool;
};

// run tests which access the database
exports.fixtures = function(data) {
  var pool = state.pool;
  if (!pool) return done(new Error("Missing database connection."));

  var names = Object.keys(data.tables);
  async.each(
    names,
    function(name, cb) {
      async.each(
        data.tables[name],
        function(row, cb) {
          var keys = Object.keys(row),
            values = keys.map(function(key) {
              return "'" + row[key] + "'";
            });

          pool.query(
            "INSERT INTO " +
              name +
              " (" +
              keys.join(",") +
              ") VALUES (" +
              values.join(",") +
              ")",
            cb
          );
        },
        cb
      );
    },
    done
  );
};

// only for test purposes
exports.drop = function(tables, done) {
  var pool = state.pool;
  if (!pool) return done(new Error("Missing database connection."));

  async.each(
    tables,
    function(name, cb) {
      pool.query("DELETE * FROM " + name, cb);
    },
    done
  );
};
