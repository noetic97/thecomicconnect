import React, { Component } from 'react';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'The Comic Connect',
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="main-title">{this.state.title}</h1>
        </div>
      </div>
    );
  }
}

export default App;
