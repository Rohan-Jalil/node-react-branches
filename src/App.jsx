import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import BranchList from './components/BranchList';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <BranchList  />
      </div>
      
    )
  }
}

export default hot(App);
