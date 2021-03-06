var express = require('express');
var multer = require('multer'); // multipart middleware handler
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');

// ###### multer config ######
//var upload = multer({ dest: 'run_impact/' }); // uploads dir


// ###### controller ######
var routes = require('./routes/index');
var upload_form = require('./routes/bit_upload');
var about = require('./routes/about');


// ##### Handlebars partials views #####
hbs.registerPartials(__dirname + '/views/partials');

// ##### Handlebars link Helper #####
hbs.registerHelper('link', function (text, options) {
    var attrs = [];
    /*
     for (var prop in options.hash) {
     attrs.push(
     hbs.escapeExpression(prop) + '="'
     + hbs.escapeExpression(options.hash[prop]) + '"');
     }
     */
    return new hbs.SafeString(
        "<a " + attrs.join(" ") + ">" + hbs.escapeExpression(text) + "</a>"
    );
});

hbs.registerHelper('active_link', function (text, link, id, ref) {
    var li = "<li";
    if (id == ref)
        li = "<li class='active'";

    return new hbs.SafeString(
        li + "><a href='/" + link + "'>" + text + "</a></li>"
    );
});


var app = express();

/*
// ###### multer config ######
app.use(multer({
    dest: './run_impact/',
    limits: {
        fieldNameSize: 50,
        files: 1,
        fields: 5
        //fileSize: 1024 * 1024
    },
    rename: function (fieldname, filename) {
        return filename;
    },
    onFileUploadStart: function (file) {
        if (file.mimetype !== 'image/jpg' && file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
            return false;
        }
    }
}));
*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ###### rotas ######
app.use('/', routes);
app.use('/upload', upload_form);
app.use('/about', about);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
