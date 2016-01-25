/**
 * Created by crist_000 on 21/01/2016.
 */
var express = require('express');
var router = express.Router();
var hbs = require('hbs');


hbs.registerPartial('estavai', '{{eu}}');
/* GET users listing. */
router.get('/', function (req, res, next) {
    //res.send('respond with a resource');
    res.render('test');
});


module.exports = router;
