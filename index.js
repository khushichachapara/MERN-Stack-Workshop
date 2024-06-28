var express = require('express');
const usermodel = require('../modals/users');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/add', function(req, res, next) {
  res.render('add', { title: 'Express' });
});

router.post('/add', function(req, res, next) {
  var bodydata={
    uname:req.body.txt1,
    uage:req.body.txt2,
    umobile:req.body.txt3,
  }
  var mydata=usermodel(bodydata);
  mydata.save(req.body)
 .then(data=>{
  res.send('record added');
 })
 .catch(err=> console.log('error in queary'+err));
});
router.get('/display', function(req, res, next) {
  usermodel.find()
  .then(data=>{
    console.log(data);
    res.render('Display',{mydata:data})
  })
  .catch(err=>console.log("error"+err));

});

router.post('/process', function(req, res, next) {
  var a =parseInt(req.body.txt1);
  var b =parseInt(req.body.txt1);
  var c =a+b;

  res.render('ans', { mya:a,myb:b,myc:c });
});

module.exports = router;
