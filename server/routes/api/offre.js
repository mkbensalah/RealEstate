const express = require("express");
const router = express.Router();

var offreModal = require("../../modals/offre_non_validate.js");

// new offre 
router.get("/new_offre", (req, res) => {
	console.log("dans le corps d offre "); 
// travaill à completer
// recupere  l id de user à partir de la session

const newoffre = offreModal.create(req.query,function(err, insertId){
          if (err) console.log(err) ;
          else
          res.json({ msg: `Succeed! offre added with id# ${insertId}` });

});
});

//
router.get("/validate_offre", (req, res) => {
	console.log("dans le corps de validate_offre "); 
// travaill à completer
// recupere  l id de user à partir de la session

const newoffre = offreModal.validate(req.query,function(err, insertId){
          if (err) console.log(err) ;
          else
          res.json({ msg: `Succeed! offre added with id# ${insertId}` });

});
});


module.exports = router;
