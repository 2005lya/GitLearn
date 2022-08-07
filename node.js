// var http = require('http');
// console.log(http.createServer())
// http.createServer(function(request,response){
//     // request.writeHead(200, { 'Content-Type': 'text/plain'} );
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.end('Hello World\n')

// }).listen(8088)
// console.log('server running at 8088')
// var test = require('./test')
// test.world();

// var http = require('http');
// var url = require('url');

// function start(route){
//     function onRequest(req, res){
//         var pathname = url.parse(req.url).pathname;
//         console.log('Request for' + pathname + 'received.');
//         route(pathname);

//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.write('hello world');
//         res.end();

//     }
//     http.createServer(onRequest).listen(8888)
//     console.log('Server has started.')
// }

// exports.start = start;


var http = require('http');
var querystring = require('querystring');
// var util = require('util');

var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名: <input name="name"><br>' +
  '网站 URL: <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

http.createServer(function(req, res){
    var body = '';
    req.on('data', function(chunk){
        body += chunk
    })
    req.on('end', function (){
        // post = querystring.parse(post);
        // res.end(util.inspect(post))
        body = querystring.parse(body);
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
        if(body.name && body.url ){
            res.write("网站名:" + body.name);
            res.write("<br>");
            res.write("网站 URL:" + body.url);
        } else {
            res.write(postHTML)
        }
        res.end();
    })
}).listen(3000)


