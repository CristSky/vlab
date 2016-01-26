/**
 * Created by crist_000 on 26/01/2016.
 */
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('about', {title: 'V-Lab - Sobre', ref: 'about'});
});

module.exports = router;
