import React from 'react'
import Router from 'react-router-component'

import NewsItemStore from '../../stores/NewsItemStore'
import NewsService from '../../utils/NewsService'

import NewsPhotoComponent from '../../components/news/NewsPhotoComponent'
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
    story = story.replace(/(<strong>READ ALSO)/g, '<br/><br/>$1');
    story = story.replace(/<a href="(.*?)(\d+).cms"/g, '<a href="'+ location.href.replace(/\d+$/, '') +'$2"');
    story = story.replace(/<a href/g, '<a target="_blank" href');
    return story;
  },

  toggleComments () {
    this.setState({showComments: !this.state.showComments});
  },

  newsHeading (headLine) {
    var newsComponentBackLink = "/" + this.props.newsCategory;
    return (
      <h2 className="news-details-heading">
        <Link href={newsComponentBackLink}>
          <span className="glyphicon glyphicon-chevron-left news-details-back" aria-hidden="true"></span>
        </Link>
        &nbsp;{headLine}
      </h2>
    )
  },

  newsQuote (caption) {
    return (
        <blockquote>
          <p>{caption}</p>
        </blockquote>
    );
  },

  newsVideoList (newsDetails) {
    
    var newsVideos = newsDetails.Video || [];
    
    if (!Array.isArray(newsVideos)) {
      newsVideos = [newsVideos];
    }


    return (
      <div>
        <h4>Videos:</h4>
        <ul>
          {newsVideos.map((newsVideo, index) => { 
            return (
              <li><a href={newsVideo.DetailFeed} target="_blank">{newsVideo.VideoCaption}</a></li>
            ) 
          })}
        </ul>
      </div>
    );

  },

  render () {
    var newsDetails = this.state.newsDetails;

    return (
      <div>
        {this.newsHeading(newsDetails.HeadLine)}
        <hr/>
        <NewsPhotoComponent photoData={newsDetails.Image}/>
        {this.newsQuote(newsDetails.Caption)}
        <div className="news-details-body" dangerouslySetInnerHTML={{__html: this.getFormattedStory(newsDetails.Story)}}></div>
        <hr/>
        { this.newsVideoList(newsDetails) }
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
