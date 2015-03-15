var express = require('express');
var router = express.Router();
var newsService = require('../services/NewsService');
var allowCORS = require('../services/AllowCORS').allowCORS;

/* GET news listing. */
router.get('/:newsCategory', newsService.fetchNews, allowCORS);

module.exports = router;
