
import './App.css';
import SideNav from './components/sideNav';
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <SideNav/>
      </div>
    )
  }
}

export default App;
