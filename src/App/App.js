import React, { Component } from 'react';
// import { FlexDiv } from './App.style'
import Header from '../Header/Header';
import Projects from '../Projects/Projects'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Projects />
      </div>
    );
  }
}

export default App;
