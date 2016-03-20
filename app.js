'use strict';
const express = require('express'),
    compression = require('compression'),
    bodyParser = require('body-parser'),
    favicon = require('serve-favicon');
var app = exports = module.exports = express();

app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.disable('x-powered-by');
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static('./public'));
app.use(compression({
    threshold: 512
}));

app.use(bodyParser.json({
    limit: '10mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.get('/login', function (req, res) {
    res.render('login');
});
app.post('/login', function (req, res) {
    console.log(req.body);
    res.end();
});
