/**
 * Created by lupita on 9/06/16.
 */
var express = require('express');
var router = express.Router();
var objeto = {'nombre':'lupita', 'apellido':'chacon'};

/* GET home page. */
router.get('/chacon', function(req, res, next) {
    res.send('Ola k ase');
});

router.get('/lupitaJade', function(req, res, next) {
    res.render('lupita');
});

router.get('/myView', function(req, res, next) {
    res.render('myView',objeto);
});

module.exports = router;
