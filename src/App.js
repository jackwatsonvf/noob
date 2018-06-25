import React, { Component } from 'react';
import './App.css';

import Cardlist from './components/Cardlist';
import Search from './components/Search';
import data from './utils/data.json';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: data.software,
      search: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ search: event.target.value })
  }

  render() {
    const { cards, search } = this.state;
    const filteredCards = cards.filter(card => {
      return card.title.toLowerCase().includes(search.toLowerCase());
    })
    return !cards.length ?
      <h1> Loading </h1> :
      (
        <div>
          <Search searchChange={this.onSearchChange} />
          <div className="cardlist">
            <Cardlist cards={filteredCards} />
          </div>
        </div>
      );
  }
}

export default App;

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