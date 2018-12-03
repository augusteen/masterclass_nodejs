/**
 * 
 * 
 * Primary for the API
 */

var http = require('http');
var url = require('url');
var strDec = require('string_decoder').StringDecoder;

var server = http.createServer((req, res) => {

    //Get URL 
    var parsedURl = url.parse(req.url, true);

    var path = parsedURl.pathname;

    //Get HTTP Method
    var method = req.method.toUpperCase();

    var queryString = parsedURl.query;

    var trimmedPath = path.replace(/^\/+|\/+$/g, '');
    var decoder = new strDec('utf-8');
    var buffer = '';
    req.on('data', (data) => {
        buffer += decoder.write(data);
        console.log(buffer);
    });
    req.on('end', () => {
        buffer += decoder.end();

        var controlHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handler.notFound;
        var data = {
            trimmedPath,
            path
        };
        controlHandler(data, function(statusCode, response) {
            res.writeHead(statusCode);
            res.end(response);
        });
    });

    // Log the request/response
    console.log(`Request received on path: ${trimmedPath} with method: ${method}`);
});


server.listen(3001, () => {
    console.log("The server is listening on port 3000 now");
});

var handler = {};

handler.sample = function(data, callback) {
    callback(200, JSON.stringify(data));
}

handler.notFound = function(data, callback) {
    callback(404);
}

var router = {
    'handler': handler.sample
}