import React from 'react'

const HomeRedirect = React.createClass({
  componentDidMount () {
    window.location.href += "#/breakingnews";
  },

  render () {
    return (
      <div>
      </div>
    )
  }
})

export default HomeRedirect
