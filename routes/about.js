/**
 * Created by crist_000 on 26/01/2016.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var exec = require('child_process').execFile;
var debug;

/* GET home page. */
router.get('/', function (req, res, next) {
    var ref = path.basename(__filename, '.js'); // nome da view deve ser o mesmo da rota


    exec('python', ['-v','-h'], function (error, stdout, stderr) {
        if (error) {
            throw error;
        }
        debug = stdout;
        console.log(stdout);

        res.render(ref, {title: 'V-Lab - Sobre', ref: ref, debug: debug});
    });


});

module.exports = router;
