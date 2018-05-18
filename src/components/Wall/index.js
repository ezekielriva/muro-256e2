import React, { Component } from 'react';
import {connect} from 'react-redux';

import WallForm from './WallForm';
import WallList from './WallList';
import WallFilters from './WallFilters';

import { getWall } from '../../actions/wallActions'

class Wall extends Component {
  componentWillMount() {
    this.props.getWall();
  }
    
  render() {
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

const mapDispatchToProps = {
  getWall
}

export default connect(null, mapDispatchToProps)(Wall);