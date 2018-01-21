var express = require('express');
var mongodb = require('mongodb');
var path = require('path');
var mongoCt = mongodb.MongoClient;
var cors=require('cors');
var cookieSession = require('cookie-session');
var bodyParser=require('body-parser');


var home = require('./routes/home');
var classify = require('./routes/classify');

var login = require('./routes/login');
var reg = require('./routes/reg');
//var homelist2 = require('./routes/homelist2');
//var homelist3 = require('./routes/homelist3');
/*
var homelist = require('./routes/homelist');
var homelistcount  = require('./routes/homelistcount');
var top250  = require('./routes/top250');*/

var app = express();//搭建express的web服务

app.listen(8008);

app.use(bodyParser());
// 渲染引擎设置
/*app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');*/

// u中间件配置
/*app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());*/
//app.use(express.static(path.join(__dirname, './')));//静态页面托管 执向了public

let arrKeys=[];
for(var i=0;i<99999;i++){
  arrKeys.push('aa'+Math.random());
}
app.use(cookieSession({
  name:'alex_id',
  keys:arrKeys,
  maxAge:1000*20
}));


//配置cors中间件
app.use(cors({
  "origin": ["http://localhost:3001","http://localhost:5000","http://localhost:8080","http://localhost:8001"],  //允许所有前端域名
  "credentials":true,
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE", //被允许的提交方式
  "allowedHeaders":['Content-Type','Authorization']//被允许的post方式的请求头
}));

//做响应
app.use('/home', home);
app.use('/classify', classify);
app.use('/login', login);
app.use('/reg', reg);



//app.use('/homelist2', homelist2);
//app.use('/homelist3', homelist3);

/*app.use('/homelist', homelist);
app.use('/homelistcount', homelistcount);
app.use('/top250', top250);
*/
// 处理错误的接口请求
/*app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});*/

// error handler
/*app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;*/
