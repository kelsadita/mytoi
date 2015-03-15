import BreakingNewsActions from '../actions/BreakingNewsActions';
import $ from 'jquery';

const NewsService = {
  getBreakingNewsList () {
    $.ajax({
      url: 'http://localhost:3000/news/breakingnews',
      success: function (latestNews) {
        BreakingNewsActions.retrieveNews(latestNews.NewsItem);
      },
      error: function (data) {
        // TODO Add error handler action
        console.log(data);
      }
    });

  }
}

export default NewsService;
