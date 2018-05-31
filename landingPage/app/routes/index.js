var express = require('express');
var router = express.Router();
var homeController = require('../controllers/home-controller');
var membroController = require('../controllers/membro-controller');

/* GET home page. */
router.get('/', homeController.index);
router.post('/cadastrar', membroController.cadastrar);

module.exports = router;
