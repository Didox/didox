var express = require('express');
var router = express.Router();
var HomeController = require('../controllers/home_controller');

router.get('/', HomeController.index);
// router.get('/create', HomeController.create);
// router.get('/insert', HomeController.insert);
router.get('/select', HomeController.select);

module.exports = router;