import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import merge from 'react/lib/merge';

let CHANGE_EVENT = 'change';
let news_comments = [];

const NewsItemCommentsStore = merge(EventEmitter.prototype, {
  
  emitChange () {
    this.emit(CHANGE_EVENT); 
  },

  addChangeListener (callback) {
    this.on(CHANGE_EVENT, callback)
  },

  getAllComments () {
    return news_comments;
  },

});

NewsItemCommentsStore.dispatchToken = AppDispatcher.register((payload) => {
  let action = payload.action;

  switch(action.type) {
    case 'RETRIEVE_NEWS_COMMENTS': 
      news_comments = action.newsCommentsList;
      NewsItemCommentsStore.emitChange();
      break;

    default:
      // Do nothing
  }
}); 


export default NewsItemCommentsStore;
 
