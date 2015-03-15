import AppDispatcher from '../dispatcher/AppDispatcher';

const BreakingNewsActions = {

  retrieveNews (newsList) {
    AppDispatcher.handleServerAction({
      type     : 'RETRIEVE_BREAKING_NEWS',
      newsList : newsList
    });
  }

}

export default BreakingNewsActions;
