var request = require('request');

var NewsService = {

  fetchNews: function (req, res, next) {

    if (req.params.newsCategory === 'breakingnews') {
      var options = {
        url: 'http://timesofindia.indiatimes.com/feeds/newsfeed/newsdefaultfeeds.cms?feedtype=sjson',
        headers: { 
          'X-Mashape-Key': 'RpaJ75YkajmshTsjasM1rh3gFAjyp1HzDWgjsnLUmgW2IkkQjI'
        }
      };

      function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
          res.header("Access-Control-Allow-Origin", "*");
          res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
          res.json(JSON.parse(response.body)); 
        } else {
          res.send(error);
        } 
      }

      request(options, callback);

    }

  }

};

module.exports = NewsService;
