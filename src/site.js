var http = require('http');
var fileSystem = require('fs');

var indexPageBuffer = fileSystem.readFileSync('index.html');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(indexPageBuffer);
}).listen(3000);

console.log("Website is running . . .");