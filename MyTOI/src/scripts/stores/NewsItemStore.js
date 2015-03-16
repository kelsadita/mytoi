import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import merge from 'react/lib/merge';

let CHANGE_EVENT = 'change';
let news_detail = '';

const NewsItemStore = merge(EventEmitter.prototype, {
  
  emitChange () {
    this.emit(CHANGE_EVENT); 
  },

  addChangeListener (callback) {
    this.on(CHANGE_EVENT, callback)
  },

  getNewsDetail () {
    return news_detail;
  }

});

NewsItemStore.dispatchToken = AppDispatcher.register((payload) => {
  let action = payload.action;

  switch(action.type) {

    case 'RETRIEVE_NEWS_DETAILS': 
      news_detail = action.newsDetails;
      NewsItemStore.emitChange();
      break;

    default:
      // Do nothing

  }
}); 


export default NewsItemStore;
 
