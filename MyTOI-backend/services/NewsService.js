var request = require('request');

var NewsService = {

  apiAuthHeaders: {
    'X-Mashape-Key': 'RpaJ75YkajmshTsjasM1rh3gFAjyp1HzDWgjsnLUmgW2IkkQjI'
  },


  fetchNews: function (req, res, next) {
    if (req.params.newsCategory === 'breakingnews') {
      var options = {
        url     :  'http://timesofindia.indiatimes.com/feeds/newsfeed/newsdefaultfeeds.cms?feedtype=sjson',
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
