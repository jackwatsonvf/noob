import React, { Component } from 'react'
import './App.css'

import Cardlist from './components/Cardlist'
import Navbar from './components/Navbar'
import Intro from './components/Intro'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Intro />
        <div className="cardlist">
          <Cardlist />
        </div>
      </div>
    )
  }
}

export default App
