import React from 'react'

import Router from 'react-router-component'
let Link = Router.Link

const NewsItem = React.createClass({

  renderKeywords (keywordsText) {
    
    let keywords = keywordsText.split(",");

    let keywordStyle = {
      marginRight: '10px'
    }

    return keywords.map((keyword) => {
      return (
        <span className="label label-default" style={keywordStyle}>{keyword}</span>
      );
    });
  },

  render () {

    var newsData              = this.props.newsItem;
    var newsItemComponentLink = "/news/" + newsData.NewsItemId;

    return (
      <div>
        <h4><Link href={newsItemComponentLink}>{newsData.HeadLine}</Link></h4>
        <div>{newsData.Caption}</div>
        <div><b>Keywords: </b>{this.renderKeywords(newsData.Keywords)}</div>
        <hr/>
      </div>
    );
  }
})

export default NewsItem
