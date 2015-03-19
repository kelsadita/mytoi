import React from 'react'
import NewsItem from './NewsItem'
import LoadingComponent from '../templates/LoadingComponent'

import BreakingNewsStore from '../../stores/BreakingNewsStore'
import NewsService from '../../utils/NewsService'

function getStateFromStores() {
  return {
    news: BreakingNewsStore.getAll()
  }
}

// Initially fetching all the breaking news
NewsService.getBreakingNewsList("breakingnews");

const NewsList = React.createClass({

  getInitialState () {
    return getStateFromStores();
  },

  componentDidMount () {
    BreakingNewsStore.addChangeListener(this._onChange);
  },

  fetchNewsList () {
    this.setState({news: []});
    var requestedNewsCategory = this.refs.newsCategory.getDOMNode().value;
    window.location.href = window.location.origin + '/#/' + requestedNewsCategory;
    NewsService.getBreakingNewsList(requestedNewsCategory);
  },

  render () {
    return (
      <div>
        <div className="news-category-container">
          <select ref="newsCategory" className="form-control news-category-selector" onChange={this.fetchNewsList} defaultValue={this.props.newsCategory}>
            <option value="breakingnews">Top News</option>
            <option value="city">City</option>
            <option value="india">India</option>
            <option value="world">World</option>
            <option value="business">Business</option>
            <option value="tech">Technology</option>
            <option value="sports">Sports</option>
            <option value="education">Education</option>
            <option value="environment">Environment</option>
            <option value="science">Science</option>
          </select>
        </div>
        <hr/>
        {this.state.news.length === 0 ? <LoadingComponent /> : this.state.news.map((newsItem) => (<NewsItem newsItem={newsItem} newsCategory={this.props.newsCategory}/>))}
      </div>
    );
  },

  _onChange () {
    if (this.isMounted()) {
      this.setState(getStateFromStores());
    }
  }
})

export default NewsList
