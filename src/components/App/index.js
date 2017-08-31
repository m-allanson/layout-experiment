import React, { Component } from 'react';

import A from '../A';
import B from '../B';
import C from '../C';

import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-primary">
          <A />
        </div>
        <div className="App-secondary">
          <B />
        </div>
        <div className="App-tertiary">
          <C />
        </div>
      </div>
    );
  }
}

export default App;
