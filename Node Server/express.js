// var express = require('express');

// var app = express();
// console.log(app.get())
// app.get('/', function(req, res){
//     res.send('hello world')
// })

// var server = app.listen(3033, function(){
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log("应用实例，访问地址为 http://%s:%s", host, port)
// })

var express = require('express');
var app = express();
app.use('/public', express.static('public'))
// app.get('/', function(req, res){
//     console.log("主页 GET 请求")
//     res.send('Hello GET')
// })
// app.post('/', function(req, res){
//     console.log("主页 POST 请求")
//     res.send('Hello POST')
// })
// app.get('/del_user', function(req, res){
//     console.log("/del GET 请求");
//     res.send('删除页面');
// })
// app.get('/list_user', function(req, res){
//     console.log("/list_user GET 请求");
//     res.send('用户列表页面');
// })
// app.get('/ab*d', function(req, res){
//     console.log("/list_user GET 请求");
//     res.send('正则匹配页面');
// })
app.get('/index.html', function(req, res){
    res.sendFile(__dirname + '/' + 'index.html')
})

app.get('/process_get', function(req, res){
    // var response = {
    //     "first_name": req.query.first_name,
    //     "last_name" : req.query.last_name
    // };
    var response = {
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    };
    // console.log(response);
    // res.end(JSON.stringify(response))
    console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(3000, function (){
    var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})
