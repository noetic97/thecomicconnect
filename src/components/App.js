import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'take a pick!',
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
          <h2 className="under-header-title">{this.state.title}</h2>
        </div>
      </div>
    );
  }
}

export default App;
