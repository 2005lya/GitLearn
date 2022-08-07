let { createServer } = require('http');
let fs = require('fs');
let path = require('path');
let url = require('url');
let qs = require('querystring');
// const { resolve } = require('path');

const root = process.cwd();

let MINE_TYPES = {
    'html' : "text/html",
    'xml' : 'text/xml',
    'txt' : 'text/plain',
    'css' : 'text/css',
    'js': 'text/javascript',
    'json': 'application/json',
    'pdf':'application/pdf',
    'swf': 'application/x=shockwave-flash',
    'svg': "image/svg+xml",
    'tiff': 'image/tiff',
    'png': 'img/png',
    'gif': 'image/gif',
    'ico': 'image/x-icon',
    'jpg': 'image/jpg',
    'jpeg': 'image/jpeg',
    'wav' : 'audio/x-wav',
    'wma': 'audio/x-ms-wma',
    'wmv': 'video/x-ms-wmv',
    'woff2': 'application/font-woff2'
};


let app = createServer( async(req, res) => {
    // let urlObj = url.parse(req.url, true);
    // if(req.method === 'GET' && urlObj.pathname ==='/message'){
    //     res.end(JSON.stringify({
    //         errno : 0,
    //         data : 'success'
    //     }))
    // }

    let filePath = path.join(root, decodeURIComponent(req.url));
    
    if(!path.extname(filePath)){
        filePath = path.join(filePath, "./index.html")
    }

    let fileObj = path.parse(filePath);
    let extname = fileObj.ext.slice(1);
    let isExist = await new Promise (resolve => {
        fs.exists(filePath, (result) => resolve(result))
    });

    if(isExist){
        let data = await new Promise (resolve => {
            fs.readFile(filePath,(err, data) => resolve(data))
        })
        if(data) {
            res.writeHead(200,{
                'Content-Type' : MINE_TYPES[extname || 'txt'] + '; charset=utf-8'
            })
            return res.end(data)
        }
    }
    res.writeHead(404, {
        'Content-Type' : MINE_TYPES.txt + '; charset=utf-8'
    })
    res.end(req.url + " no found!")
});

app.listen(3000);