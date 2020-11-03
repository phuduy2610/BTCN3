var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res)=> {
  let firstnumber = req.body.firstnum;
  let secondnumber = req.body.secondnum;
  firstnum = Number(firstnumber);
  secondnum = Number(secondnumber); 
  const cal = req.body.radiocal;
  let result = 0;
  if(cal=="cong"){
    result = firstnum + secondnum;
  }
  else if(cal=="tru"){
    result = firstnum - secondnum;
  }
  else if(cal=="nhan"){
    result = firstnum * secondnum;
  }
  else if(cal=="chia"){
    result = firstnum / secondnum;
  }
  else{
    result=" ";
  }
  if(isNaN(Number(result))||!isFinite(Number(result)))
  {
    result=" ";
  }
  res.render('index', {firstnumber, secondnumber,result,cal });
});

module.exports = router;
