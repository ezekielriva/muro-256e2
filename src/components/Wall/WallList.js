import React, { Component } from "react";
import { connect } from 'react-redux';

import { WallVisibilityFilter } from "../../actions/uiActions";

import WallPost from './WallPost';

import { pick } from '../../utils';

class WallList extends Component {
  renderPosts() {
    const { wall } = this.props;

    return Object.keys(wall).map((key) => (
      <WallPost
        post={wall[key]}
        key={key}
      />
    ));
  }
  render() {
    return (
      <div className="WallList">
        {this.renderPosts()}
      </div>
    )
  }
}

const selectWallByFilter = (wall, filter) => {
  switch(filter) {
    case WallVisibilityFilter.SHOW_FRIENDS:
      return pick (
        wall,
        Object.keys(wall).filter(id => wall[id].visibility === WallVisibilityFilter.SHOW_FRIENDS)
      )
    case WallVisibilityFilter.SHOW_PUBLIC:
      return pick(
        wall,
        Object.keys(wall).filter(id => wall[id].visibility === WallVisibilityFilter.SHOW_PUBLIC)
      )
    default:
      return wall;
  }
}

const mapStateToProps = (state) => ({
  wall: selectWallByFilter(state.wall, state.ui.wallVisibilityFilter)
});

export default connect(mapStateToProps, null)(WallList);