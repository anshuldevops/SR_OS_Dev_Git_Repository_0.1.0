var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
  res.render('school_rankings.html');
});

module.exports= router;
