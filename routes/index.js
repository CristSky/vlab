var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    //hbs.registerPartial('agoravai','{{eu}}');
    res.render('index', {title: 'V-Lab'});
});

module.exports = router;
