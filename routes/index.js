var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    var test = __filename.split('/').s;
    console.log(req);
    res.render('index', {title: 'V-Lab', ref: test});
});

module.exports = router;
