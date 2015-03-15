import React from 'react'

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

    var newsData = this.props.newsItem;

    return (
      <div>
        <h4>{newsData.HeadLine}</h4>
        <div>{newsData.Caption}</div>
        <div><b>Keywords: </b>{this.renderKeywords(newsData.Keywords)}</div>
        <hr/>
      </div>
    );
  }
})

export default NewsItem
