import React from 'react';

import Header from '../components/templates/header'
import Footer from '../components/templates/footer'
import NewsList from '../components/news/NewsList'

import BreakingNewsStore from '../stores/BreakingNewsStore';

import NewsService from '../utils/NewsService';

function getStateFromStores() {
  return {
    news: BreakingNewsStore.getAll()
  }
}

// Initially fetching all the breaking news
NewsService.getBreakingNewsList();

const App = React.createClass({

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
        <Header />
        <article className="context">
          <button className="btn btn-success pull-right" onClick={this.fetchBreakingNews}>Fetch News</button>
          <NewsList newsItems = {this.state.news}/>
        </article>
        <Footer />
      </div>
    );
  },

  _onChange () {
    this.setState(getStateFromStores());
  }
});

export default App;
