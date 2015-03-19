import React from 'react'

const NewsPhotoComponent = React.createClass({


  render () {

    if(!this.props.photoData) {
      return (<div></div>)
    }

    var newsPhotoData = this.props.photoData;
    var newsImageLink = newsPhotoData.Photo;
    var newsImageCaption = newsPhotoData.PhotoCaption;

    return (
      <div className="news-details-image thumbnail with-caption">
        <img src={newsImageLink} className="img-thumbnail"/>
        <p>{newsImageCaption}</p>
      </div>
    );
  }
})

export default NewsPhotoComponent
