import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux';

import Login from './components/Login';
import Wall from './components/Wall';

class App extends Component {
  render() {
    const { currentUser } = this.props;

    return (
      <div className="App">
        { !currentUser ? <Wall /> : <Login /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps, null)(App);
