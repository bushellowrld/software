//index.js用来定义与监听后端服务器
// node 后端服务器
//const StuApi = require('./api/StuApi');
const userApi = require('./api/userApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

 app.all("*", function (req, res, next) {
     //设置允许跨域的域名，*代表允许任意域名跨域
     res.header("Access-Control-Allow-Origin", "*");
     //允许的header类型
     res.header("Access-Control-Allow-Headers", "content-type");
     //跨域允许的请求方式
     res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
     if (req.method.toLowerCase() == 'options')
         res.send(200); //让options尝试请求快速结束
     else
         next();
 })
 
 //S 
 // connection.connect();
// var sql = 'SELECT * FROM stu';
// connection.query(sql, function (err,result) {
    // if(err){
        // console.log('[SELECT ERROR]:',err.message);
    // }
    // str = JSON.stringify(result);
    // //数据库查询的数据保存在result中，但浏览器并不能直接读取result中的结果，因此需要用JSON进行解析
    // //console.log(result);   //数据库查询结果返回到result中
    // console.log(str);

// });

// app.get('/',function (req,res) {
    // res.send(str);  //服务器响应请求
// });
// connection.end();
 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false}));

//s 
app.use(express.static(path.resolve(__dirname, '../dist')))
app.get('*', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
    res.send(html)
})

// 后端api路由
app.use('/api/login', userApi);

// 监听端口
app.listen(3000);

console.log('success listen at port:3000......');
module.exports = app;
