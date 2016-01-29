/**
 * Created by crist_000 on 26/01/2016.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var multer = require('multer');
var fs = require('fs-extra');
var exec = require('child_process').execFile;
var ref = path.basename(__filename, '.js'); // nome da view deve ser o mesmo da rota
var debug;


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render(ref, {title: 'V-Lab - Upload', ref: ref});
});

router.post('/', multer({dest: './bit_upload/'}).single('bit_file'), function (req, res, next) {
    var target = req.file.filename;
    console.log(req.file);

    try {
        fs.copySync('./bit_upload/' + target, './run_impact/main.bit', {replace: true}, function (err) {
            if (err) {
                throw err; //todo mostrar erro
            } else {

            }
        });

    } catch (err) {
        console.error('Oh no, there was an error: ' + err.message);
    }

    exec('impact', ['-batch ./run_impact/set.cmd'], function (error, stdout, stderr) {
        if (error) {
            //throw error;
            debug = 'Arquivo .bit invalido\n\n' + error.message;
            console.error('Oh no, there was an error: ' + error.message);
            res.render(ref, {title: 'V-Lab - Sobre', ref: ref, debug: debug});
        }
        debug = stdout;
        console.log(stdout);
        console.log('done');
        res.render(ref, {title: 'V-Lab - Sobre', ref: ref, debug: debug});
    });
});


module.exports = router;
