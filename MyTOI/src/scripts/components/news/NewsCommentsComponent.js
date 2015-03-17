import React from 'react'
import Router from 'react-router-component'

import NewsItemCommentsStore from '../../stores/NewsItemCommentsStore'
import NewsService from '../../utils/NewsService'

// Importing router link
let Link = Router.Link

function getStateFromStores() {
  return {
    newsDetails: NewsItemCommentsStore.getAllComments()
  }
}

const NewsCommentsComponent = React.createClass({

  getInitialState () {
    return {
      newsDetails: [] 
    };
  },

  componentDidMount () {
    NewsItemCommentsStore.addChangeListener(this._onChange);
    NewsService.getNewsComments(this.props.newsid);
  },

  getFormattedStory (story) {

    // Prepend break before read also
    story = story.replace(/(<strong>READ ALSO)/g, '<br/><br/>$1')

    return story;
  },

  render () {

  },

  _onChange () {
    if (this.isMounted()) {
      this.setState(getStateFromStores());  
    }
  }
})

export default NewsCommentsComponent
