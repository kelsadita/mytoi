import AppDispatcher from '../dispatcher/AppDispatcher';

const NewsDetailsActions = {

  retrieveNewsDetails (newsDetails) {
    AppDispatcher.handleServerAction({
      type        : 'RETRIEVE_NEWS_DETAILS',
      newsDetails : newsDetails
    });
  }

}

export default NewsDetailsActions
