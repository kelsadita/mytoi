import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import merge from 'react/lib/merge';

let CHANGE_EVENT = 'change';
let breaking_news = [];

const BreakingNewsStore = merge(EventEmitter.prototype, {
  
  emitChange () {
    this.emit(CHANGE_EVENT); 
  },

  addChangeListener (callback) {
    this.on(CHANGE_EVENT, callback)
  },

  getAll () {
    return breaking_news;
  },

});

BreakingNewsStore.dispatchToken = AppDispatcher.register((payload) => {
  let action = payload.action;

  switch(action.type) {
    case 'RETRIEVE_BREAKING_NEWS': 
      breaking_news = action.newsList;
      BreakingNewsStore.emitChange();
      break;

    default:
      // Do nothing

  }
}); 


export default BreakingNewsStore;
 
