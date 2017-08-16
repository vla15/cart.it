import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.jsx';

const mapStateToProps = state => {
  return {store: state}
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch: {}
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);