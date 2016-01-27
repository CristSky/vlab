/**
 * Created by crist_000 on 26/01/2016.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var multer = require('multer');
var exec = require('child_process').execFile;


/* GET home page. */
router.get('/', function (req, res, next) {
    var ref = path.basename(__filename, '.js'); // nome da view deve ser o mesmo da rota

    exec('python', ['--version'], function (error, stdout, stderr) {
        if (error) {
            throw error;
        }
        console.log(stdout);
    });
    res.render(ref, {title: 'V-Lab - Upload', ref: ref});
});

router.post('/', multer({dest: './bit_upload/'}).single('bit_file'), function (req, res, next) {
    console.log(req.file);
    //var ref = path.basename(__filename, '.js'); // nome da view deve ser o mesmo da rota
    //res.render(ref, {title: 'V-Lab - Upload', ref: ref});
    res.status(204).end();
});


module.exports = router;
