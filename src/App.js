import React, { Component } from 'react';
import './App.css';
import Greetings from './components/Greetings';

class App extends Component {

  render() {
    return (
      <div style={ {'margin':'100px'} }>
        <Greetings />
      </div>
    );
  }
}

export default App;
