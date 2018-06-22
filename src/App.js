import React, { Component } from 'react';
import './App.css';

import Cardlist from './components/Cardlist';

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
      <div className="cardlist">
        <Cardlist />
      </div>
    );
  }
}

export default App;
