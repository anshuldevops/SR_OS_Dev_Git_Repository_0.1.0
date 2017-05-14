var express = require('express');
var router = express.Router();

router.get('', (req, res, next)=>{
  res.render('pagenotfound.html');
});

module.exports= router;
