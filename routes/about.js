/**
 * Created by crist_000 on 26/01/2016.
 */
var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
    var ref = path.basename(__filename, '.js'); // nome da view deve ser o mesmo da rota
    res.render(ref, {title: 'V-Lab - Sobre', ref: ref});
});

module.exports = router;
