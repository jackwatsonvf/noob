import React, { Component } from 'react'

import introImage from './../img/idk.jpg'

class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <img src={introImage} />
        <h2>Welcome to the Vodanoob Portal</h2>
        <p>
          Here we've put together a list of some of the software you'll be
          using, with a brief intro to what it does and how to get it up and
          running on your machine.
        </p>
      </div>
    )
  }
}

export default Intro
