var http = require('http');
var fs = require('fs');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, (err, data) => {
        if (err) {
            response.writeHead(404);
            response.write('File not found');
        }
        else {
            response.write(data);
        }
        response.end();
    })
}

http.createServer(onRequest).listen(8000);