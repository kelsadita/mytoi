var request = require('request');

var NewsService = {


  categoryUrlMap: {
    'breakingnews' :  'http://timesofindia.indiatimes.com/feeds/newsfeed/newsdefaultfeeds.cms',
    'city'         :  'http://timesofindia.indiatimes.com/feeds/newsfeeddf/-2128932452.cms',
    'india'        :  'http://timesofindia.indiatimes.com/feeds/newsfeed/-2128936835.cms',
    'world'        :  'http://timesofindia.indiatimes.com/feeds/newsfeed/296589292.cms',
    'business'     :  'http://timesofindia.indiatimes.com/feeds/newsfeed/1898055.cms',
    'tech'         :  'http://timesofindia.indiatimes.com/feeds/newsfeed/5880659.cms',
    'sports'       :  'http://timesofindia.indiatimes.com/feeds/newsfeed/4719148.cms',
    'education'    :  'http://timesofindia.indiatimes.com/feeds/newsfeed/913168846.cms',
    'environment'  :  'http://timesofindia.indiatimes.com/feeds/newsfeed/2647163.cms',
    'science'      :  'http://timesofindia.indiatimes.com/feeds/newsfeed/-2128672765.cms'
  },

  apiAuthHeaders: {
    'X-Mashape-Key': 'RpaJ75YkajmshTsjasM1rh3gFAjyp1HzDWgjsnLUmgW2IkkQjI'
  },


  fetchNews: function (req, res, next) {
    var options = {
      url     :  NewsService.categoryUrlMap[req.params.newsCategory] + '?feedtype=sjson',
      headers :  this.apiAuthHeaders
    };

    function delegateResponseCallback(error, response, body) {
      if (!error && response.statusCode == 200) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(JSON.parse(response.body)); 
      } else {
        res.send(error);
      }
    }
    request(options, delegateResponseCallback);
  },

  fetchNewsItem: function (req, res, next) {
    var options = {
      url     :  'http://timesofindia.indiatimes.com/feeds/newsfeedshow/' + req.params.newsid + '.cms?feedtype=sjson',
      headers :  this.apiAuthHeaders
    };

    function delegateResponseCallback(error, response, body) {
      if (!error && response.statusCode == 200) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(JSON.parse(response.body)); 
      } else {
        res.send(error);
      }
    }
    request(options, delegateResponseCallback);
  },

  fetchNewsComments: function (req, res, next) {
    var options = {
      url     :  'http://timesofindia.indiatimes.com/feeds/usrcommentfeedsnew/' + req.params.newsid + '.cms?feedtype=sjson',
      headers :  this.apiAuthHeaders
    };

    function delegateResponseCallback(error, response, body) {
      if (!error && response.statusCode == 200) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json(JSON.parse(response.body)); 
      } else {
        res.send(error);
      }
    }
    request(options, delegateResponseCallback);  
  }
};

module.exports = NewsService;
