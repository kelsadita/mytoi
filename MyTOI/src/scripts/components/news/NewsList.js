import React from 'react'
import NewsItem from './NewsItem'

const NewsList = React.createClass({
  render () {
    return (
      <div>
        <br/><br/><hr/>
        {this.props.newsItems.map((newsItem) => (<NewsItem newsItem={newsItem}/>))}
      </div>
    );
  }
})

export default NewsList
