import React, { Component } from 'react';
import './App.css';

import Cardlist from './components/Cardlist';
import Navbar from './components/Navbar';
import Intro from './components/Intro';

class App extends Component {
  
  /*
  constructor() {
    super()
    this.state = {
      info: []
    }
  }


  componentDidMount() {
    fetch('./data.json')
    .then(res => res.json())
    .then(json => {
      this.setState({
        info: json[0]
      });
      console.log(json)
    });
  }
  */

  render() {
    return (
      <div>
        <Navbar />
        <div className="cardlist">
          <Cardlist />
        </div>
      </div>
    );
  }
}

export default App;
