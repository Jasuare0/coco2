var express = require('express');
var router = express.Router();
var usuarioController = require('../controllers/usuarioController');

/* GET users listing. */
router.get('/', usuarioController.login);
router.post('/', usuarioController.validacion);
router.get('/logout', usuarioController.logout);

module.exports = router;
