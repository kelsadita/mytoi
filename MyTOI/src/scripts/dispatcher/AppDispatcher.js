import {Dispatcher} from 'flux';
import assign from 'object-assign';

const AppDispatcher = assign(new Dispatcher(), {
  handleViewAction (action){
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  },

  handleServerAction (action) {
    this.dispatch({
      source: 'RETRIEVE_BREAKING_NEWS',
      action: action
    });
  }

});

export default AppDispatcher;
