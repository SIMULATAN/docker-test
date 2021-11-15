var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = 3000;

server.listen(port, "localhost",function () {
console.log('Webserver is listening on port %d', port);
});

app.use(express.static(__dirname + '/public'));