var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
    var ref = path.basename(__filename, '.js'); // nome da view deve ser o mesmo da rota
    //console.log(ref);
    res.render(ref, {title: 'V-Lab', ref: ref});
});

module.exports = router;
