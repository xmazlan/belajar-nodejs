var http = require('http');
var url = require('url');

http.createServer(function (request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    // switch(request.url){
    //     case '/about':
    //         response.write("Ini adalah halaman about");
    //         break;
    //     case '/profile':
    //         response.write("Ini adalah halaman profile");
    //         break;
    //     case '/produk':
    //         response.write("ini adalah halaman produk");
    //         break;
    //     default:
    //         response.write("404: Halaman tidak ditemukan");
    // }

    var q = url.parse(request.url, true).query;
    var txt = 'Kata kunci: ' + q.keyword;

    response.write(txt);
    response.end();
}).listen(8000);

console.log('Server running on http://localhost:8000');