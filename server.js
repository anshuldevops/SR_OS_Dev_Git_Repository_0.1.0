var express= require('express');
var bodyParser = require('body-parser');
var path= require('path');
var compression= require('compression');

//Modules to be loaded
var index= require('./routes/index');
var api= require('./routes/api');
var pagenotfound= require('./routes/page-not-found.js');
var about= require('./routes/about.js');
var contact= require('./routes/contact.js');

var app=express();

//compress everything
app.use(compression());

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/api', api);
app.use('/', index);
app.use('/about', about);
app.use('/contact', contact);
app.use('**', pagenotfound);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

var server = app.listen(3000, function() {
    var host = 'localhost';
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});

module.exports = app;
