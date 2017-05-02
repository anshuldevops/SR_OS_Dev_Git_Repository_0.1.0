var express= require('express');
var router= express.Router();
var mongojs= require('mongojs');
var db= mongojs('mongodb://srankings:srankings123@ds145750.mlab.com:45750/school-rankings',['quotes']);

//GET All School Information
router.get('/tasks', (req, res, next)=>{
  db.quotes.find().skip(0).limit(20,(err, quotes)=>{
    if(err){
      res.send(err);
    }
    res.json(quotes);
  });
});

module.exports= router;
