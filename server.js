var http = require('http');
var url = require('url');

//127.0.0.1:1337/echo?message=Hello


var server = new http.Server(function (req, res) {

    res.writeHead(200, "OK", {
        "Cache-control": "no-cache",
        "Content-Type" : "application/json; charset=utf-8"
    });

  //  res.setHeader('Cache-control', 'no-cache');
  //  res.setHeader("Content-Type", "application/json; charset=utf-8");

    var urlParsed = url.parse(req.url, true);
    console.log(urlParsed);

    if (urlParsed.pathname === '/echo' && urlParsed.query.message) {
        res.end( " Ответ: " + urlParsed.query.message )
    } else {
        res.statusCode = 404;
        res.end( "Page not found / Страница не найдена" );
    }
});

server.listen(1337, '127.0.0.1');