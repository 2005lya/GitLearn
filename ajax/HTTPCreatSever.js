let http = require('http');

let app = http.createServer(function(req, res){
    // console.log(req, res)
    console.log("url", req.url);
    console.log("method:", req.method);
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.write('the first write 111');
    res.write('the second write');
    res.end('the end响应结束');

})

app.listen(3002, () => {
    console.log('http sever listen at 3002');
})