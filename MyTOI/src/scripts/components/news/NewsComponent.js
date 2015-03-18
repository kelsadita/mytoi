import React from 'react'
import Router from 'react-router-component'

import NewsItemStore from '../../stores/NewsItemStore'
import NewsService from '../../utils/NewsService'

import NewsCommentsComponent from '../../components/news/NewsCommentsComponent'

// Importing router link
let Link = Router.Link

function getStateFromStores() {
  return {
    newsDetails: NewsItemStore.getNewsDetail()
  }
}

const NewsComponent = React.createClass({

  getInitialState () {
    return {
      newsDetails: {
        Story: 'Loading...',
        Image: {
          Photo: '',
          PhotoCaption: ''
        }
      },

      showComments: false
    };
  },

  componentDidMount () {
    NewsItemStore.addChangeListener(this._onChange);
    NewsService.getNewsDetails(this.props.newsid);
  },

  getFormattedStory (story) {

    // Prepend break before read also
    story = story.replace(/(<strong>READ ALSO)/g, '<br/><br/>$1')

    return story;
  },

  toggleComments () {
    this.setState({showComments: !this.state.showComments});
  },

  render () {
    var newsDetails = this.state.newsDetails;
    var newsImageLink = newsDetails.Image.Photo;
    var newsImageCaption = newsDetails.Image.PhotoCaption;
    return (
      <div>
        <h2 className="news-details-heading">
          <Link href="/">
            <span className="glyphicon glyphicon-chevron-left news-details-back" aria-hidden="true"></span>
          </Link>
          &nbsp;{newsDetails.HeadLine}
        </h2>
        
        <hr/>
        
        <div className="news-details-image thumbnail with-caption">
          <img src={newsImageLink} className="img-thumbnail"/>
          <p>{newsImageCaption}</p>
        </div>

        <blockquote>
          <p>{newsDetails.Caption}</p>
        </blockquote>

        <div className="news-details-body" dangerouslySetInnerHTML={{__html: this.getFormattedStory(newsDetails.Story)}}></div>

        <hr/>

        <button className="btn btn-success" onClick={this.toggleComments}>Comments</button>
  
        { this.state.showComments ? <NewsCommentsComponent newsid={newsDetails.NewsItemId}/> : null }

        <hr/>
      </div>
    );
  },

  _onChange () {
    if (this.isMounted()) {
      this.setState(getStateFromStores());  
    }
  }
})

export default NewsComponent
