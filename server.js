var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = 3000;

server.listen(port, function () {
console.log('Webserver is listening on port %d', port);
});

app.get("*", function (req, res) {
    res.sendFile(__dirname + '/helloworld.html');
});