var url = require('url');
var fs = require('fs');

function renderHTML (path, response) {
    fs.readFile(path, null, (err, data) => {
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

module.exports = {
    handleRequest: (request, response) => {
        response.writeHead(200, {'Content-Type': 'text/html'})

        var path = url.parse(request.url).pathname;
        switch (path) {
            case '/' :
                renderHTML('./index.html', response);
                break;
            case '/login':
                renderHTML('./login.html', response);
                break;
            default:
                response.writeHead(404);
                response.write('Route not defined!');
                response.end();
        }
    }
};