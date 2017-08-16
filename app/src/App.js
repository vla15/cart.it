import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import TodoList from './components/todoList.jsx';


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
        <Header redux={this.props}/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TodoList />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer redux={this.props}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);