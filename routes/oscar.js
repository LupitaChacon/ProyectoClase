/**
 * Created by oscar on 9/06/16.
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/oscar', function(req, res, next) {
    //res.send('Ataque Bot');
    res.render('oscar',{title: 'ola k ase',subtitle: 'programando o k ase'});
});

router.get('/layout',function (req,res,next) {
    res.render('oscar/layout');
})

router.get('/perfil',function (req,res,next) {
    res.render('oscar/Perfil');
})



module.exports = router;
