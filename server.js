var http = require('http');
var url = require('url');
var fs = require('fs');

function errorHandler(err) {
    console.error(err);
    res.statusCode = 500;
    res.end('На сервере ошибка!');
    return;
}

function isPage(filePath) {
    try {
        return fs.statSync(filePath).isFile();
    } catch (err) {
        return false;
    }
}

http.createServer(function (req, res) {
    var info, HtmlURL;
    HtmlURL = req.url.slice(1) + ((req.url === '/index.html') ? '' : '.html');
    if (req.url === '/') {
        fs.readFile('index.html', function (err, info) {
            err ? errorHandler(err) : res.end(info);
        });
    } else if (isPage(HtmlURL)) {
        fs.readFile(HtmlURL, function (err, info) {
            err ? errorHandler(err) : res.end(info);
        });
    } else {
        fs.readFile('404.html', function (err, info) {
            err ? errorHandler(err) : res.end(info);
        });
        res.statusCode = 404;
    }
}).listen(3000, '127.0.0.1');