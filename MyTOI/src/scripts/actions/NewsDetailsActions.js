import AppDispatcher from '../dispatcher/AppDispatcher';

const NewsDetailsActions = {

  retrieveNewsDetails (newsDetails) {
    AppDispatcher.handleServerAction({
      type        : 'RETRIEVE_NEWS_DETAILS',
      newsDetails : newsDetails
    });
  },

  retrieveNewsComments (newsCommentsDetails) {
    AppDispatcher.handleServerAction({
      type                : 'RETRIEVE_NEWS_COMMENTS',
      newsCommentsDetails : newsCommentsDetails
    });
  }

}

export default NewsDetailsActions
