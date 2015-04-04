import React from 'react'

import Router from 'react-router-component'
let Link = Router.Link

const NewsItem = React.createClass({

  render () {

    var newsData              = this.props.newsItem;
    var newsItemComponentLink = "/" + this.props.newsCategory + "/news/" + newsData.NewsItemId;

    return (
      <div>
        <div>
          <div className="col-lg-1">
            {
              newsData.Image ? <img src={newsData.Image.Photo} className="news-list-item-thumb img-thumbnail"/> : <div className="news-list-item-default-thumb"></div>
            }
          </div>
          <div className="col-lg-11">
            <h3 className="news-list-item-heading"><Link href={newsItemComponentLink}>{newsData.HeadLine}</Link></h3>
            <div className="news-list-item-date">{newsData.DateLine}</div>
            <div>{newsData.Caption}</div>
            <hr/>
          </div>
        </div>
      </div>
    );
  }
})

export default NewsItem
