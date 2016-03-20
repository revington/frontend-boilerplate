'use strict';
const http = require('http');
const app = require('./app');
const httpPort = 3000;

http.createServer(app).listen(httpPort, function (err) {
    console.error(`listening at http://localhost:${httpPort}`);
});
