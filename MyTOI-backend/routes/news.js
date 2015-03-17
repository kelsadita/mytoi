var express = require('express');
var router = express.Router();
var newsService = require('../services/NewsService');

/* GET news listing. */
router.get('/newsfeed/:newsCategory', newsService.fetchNews);
router.get('/news/:newsid', newsService.fetchNewsItem);
router.get('/news/:newsid/comments', newsService.fetchNewsComments);

module.exports = router;
