const express = require("express");

const router = express.Router();

const homeController = require('../controllers/homeController');
router.route('/banners').get(homeController.getBanners);
module.exports = router;