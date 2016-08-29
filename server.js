var http = require('http');
var url = require('url');
var fs = require('fs');

function errorHandler(err) {
    console.error(err);
    res.statusCode = 500;
    res.end('На сервере ошибкэ!');
    return;
}

http.createServer(function(req, res){

    var info;

    if (req.url === '/'){
        fs.readFile('index.html', function (err, info) {
            err ? errorHandler(err) : res.end(info);
        });
    } else if (req.url === '/about'){
        fs.readFile('about.html', function (err, info) {
            err ? errorHandler(err) : res.end(info);
        });
    } else if (req.url === '/blog'){
        fs.readFile('blog.html', function (err, info) {
            err ? errorHandler(err) : res.end(info);
        });
    } else if (req.url === '/contacts'){
        fs.readFile('contacts.html', function (err, info) {
            err ? errorHandler(err) : res.end(info);
        });
    } else {
        fs.readFile('404.html', function (err, info) {
            err ? errorHandler(err) : res.end(info);
        });
        res.statusCode = 404;
    }
}).listen(3000, '127.0.0.1');