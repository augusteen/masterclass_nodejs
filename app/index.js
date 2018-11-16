/**
 * 
 * 
 * Primary for the API
 */

var http = require('http');
var url = require('url');

var server = http.createServer((req, res) => {

    //Get URL 
    var parsedURl = url.parse(req.url, true);

    var path = parsedURl.pathname;

    var trimmedPath = path.replace(/^\/+|\/+$/g, '');

    res.end('Hello World\n');

    // Log the request/response
    console.log('Request received on path: ' + trimmedPath);
});


server.listen(3000, () => {
    console.log("The server is listening on port 3000 now");
});