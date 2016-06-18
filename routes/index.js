var express = require('express');
var router = express.Router();
var post = require('../controllers/post')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Avances en computacion - Examen Final' });
});

router.get('/registropost', contacto.registropost);
router.get('/respuestapost', contacto.respuestapost);
router.get('/guardarpost', contacto.guardarpost);
module.exports = router;
