import React from 'react'
import Router from 'react-router-component'

import NewsItemCommentsStore from '../../stores/NewsItemCommentsStore'
import NewsService from '../../utils/NewsService'

// Importing router link
let Link = Router.Link

function getStateFromStores() {
  return {
    newsCommentsDetails: NewsItemCommentsStore.getAllComments()
  }
}

const NewsCommentsComponent = React.createClass({

  getInitialState () {
    return {
      newsCommentsDetails: []
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


  renderComment (newsComment) {
    let userImage = newsComment.UserImage || 'http://mytimes.indiatimes.com/image/thumb/0/default';
    return (
      <div className="col-lg-12 news-comment-box">
        <div className="col-lg-1">
          <img src={userImage} alt="user image" className="img-circle"/>
        </div>
        <div className="col-lg-11">
          <span className="pull-right news-comment-date">{newsComment.DateLine}</span>
          <h4>{newsComment.Fromname}</h4>
          {newsComment.Comment}
        </div>
        <br/>
      </div>  
    )
  },

  render () {
    var newsCommentsDetails = this.state.newsCommentsDetails;
    return (
      <div>
        <hr/>
        {
          newsCommentsDetails 
          ?
            newsCommentsDetails.map((newsComment) => this.renderComment(newsComment))
          :
            (
              <div className="alert alert-danger"><b>Oh Snap!</b> No comments found.</div>
            )
        }
      </div>
    )
  },

  _onChange () {
    if (this.isMounted()) {
      this.setState(getStateFromStores());  
    }
  }
})

export default NewsCommentsComponent
