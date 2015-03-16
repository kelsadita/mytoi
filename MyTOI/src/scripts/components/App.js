import React from 'react';

import Router from 'react-router-component';

import Header from '../components/templates/header'
import Footer from '../components/templates/footer'

import NewsList from '../components/news/NewsList'
import NewsComponent from '../components/news/NewsComponent';

// Setting up the router
let Locations = Router.Locations
let Location = Router.Location

const App = React.createClass({

  render () {
    return (
      <div>
        <Header />
        <article className="context">

          <Locations path={this.props.path} hash>
            <Location path = "/" handler = {NewsList} />
            <Location path = "/news/:newsid" handler = {NewsComponent} />
          </Locations>
          
        </article>
        <Footer />
      </div>
    );
  },

});

export default App;
