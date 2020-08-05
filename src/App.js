import React, { Component } from 'react';
import './App.css';
import CardPack from './components/CardPack'


class App extends Component {

  render() {
    return (
      <main>
        <div>
          <CardPack />
        </div>
      </main>
    );
  }
}

export default App;
