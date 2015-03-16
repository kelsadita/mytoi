import BreakingNewsActions from '../actions/BreakingNewsActions';
import NewsDetailsActions from '../actions/NewsDetailsActions';
import $ from 'jquery';

const NewsService = {
  getBreakingNewsList () {
    // TODO replace AJAX requests with superagent
    $.ajax({
      url: 'http://localhost:3000/api/newsfeed/breakingnews',
      success: function (latestNews) {
        BreakingNewsActions.retrieveNews(latestNews.NewsItem);
      },
      error: function (data) {
        // TODO Add error handler action
        console.log(data);
      }
    });
  },

  getNewsDetails (newsId) {
    $.ajax({
      url: 'http://localhost:3000/api/news/' + newsId,
      success: function (newsDetails) {
        NewsDetailsActions.retrieveNewsDetails(newsDetails.Item);
      },
      error: function (data) {
        // TODO Add error handler action
        console.log(data);
      }
    });
  }
}

export default NewsService;
