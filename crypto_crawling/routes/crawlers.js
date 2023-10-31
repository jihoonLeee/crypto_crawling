var express = require('express');
const crawlerController = require('../controllers/crawlerController');
// import {crawlerController} from '../controllers/crawlerController';
var router = express.Router();

router.get('/tistory',crawlerController.tistory);

router.get('/eth', crawlerController.ethereum);

router.get('/medium',crawlerController.medium);

router.get('/upbit',crawlerController.upbit);

module.exports = router;
