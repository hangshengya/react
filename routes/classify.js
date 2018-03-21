var express = require('express');
var router = express.Router();

var mongoCt=require('mongodb').MongoClient;


router.get('/', function(req, res, next) {
  // console.log(req.query);
  var address='mongodb://127.0.0.1:27017/reactdata';
  mongoCt.connect(address,function(err,db){
    if(err){
      console.log('databse error reactdata')
    }else{
      console.log('classify链接成功');
      var classify = db.collection('classify');
      // console.log(blog);
      // req.query.page
      classify.find({}).toArray(function(err,result){
        res.send(result);//返回给前端
      });
    }
  })
});

module.exports = router;
