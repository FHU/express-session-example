var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  if( !req.session.names) {
    req.session.names = [];
  }

  // get names from session
  let names = req.session.names;

  res.render('index', { 
    names:names
  });
});

router.post('/', function(req, res) {

  if(!req.session.names) {
    req.session.names = [];
  }
  const newName = req.body.name;
  req.session.names.push(newName);

  res.render('index', {names: req.session.names});

});

module.exports = router;
