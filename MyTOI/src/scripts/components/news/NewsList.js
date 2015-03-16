import React from 'react'
import NewsItem from './NewsItem'

import BreakingNewsStore from '../../stores/BreakingNewsStore';
import NewsService from '../../utils/NewsService';

function getStateFromStores() {
  return {
    news: BreakingNewsStore.getAll()
  }
}

// Initially fetching all the breaking news
NewsService.getBreakingNewsList();

const NewsList = React.createClass({

  getInitialState () {
    return getStateFromStores();
  },

  componentDidMount () {
    BreakingNewsStore.addChangeListener(this._onChange);
  },

  fetchBreakingNews () {
    NewsService.getBreakingNewsList();
  },

  render () {
    return (
      <div>
        <button className="btn btn-success pull-right" onClick={this.fetchBreakingNews}>Fetch News</button>
        <br/><br/><hr/>
        {this.state.news.map((newsItem) => (<NewsItem newsItem={newsItem}/>))}
      </div>
    );
  },

  _onChange () {
    this.setState(getStateFromStores());
  }
})

export default NewsList
