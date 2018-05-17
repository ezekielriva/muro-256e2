import React, { Component } from 'react';
import {connect} from 'react-redux';

import WallForm from './WallForm';
import WallList from './WallList';
import WallFilters from './WallFilters';

class Wall extends Component {
  render() {
    const { currentUser } = this.props;

    return (
      <div className="Wall">
        <h1>My Wall</h1>
        <hr />
        <WallForm />
        <WallFilters />
        <WallList />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps, null)(Wall);