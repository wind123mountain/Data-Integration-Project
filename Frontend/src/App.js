import logo from './logo.svg';
import './App.css';


import HomePage from './component/HomePage.js'
import Home from './pages/Home';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className='HomePage'>
        <HomePage />
        <Home/>
      </div>
    );
  }
}

export default App;
