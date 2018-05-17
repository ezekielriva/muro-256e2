import React, { Component } from "react";
import { connect } from 'react-redux';

import { WallVisibilityFilter } from "../../actions/uiActions";

class WallList extends Component {
  render() {
    const { wall } = this.props;

    const list = wall.map((post, index) => (
      <div className="WallList-post" key={`post-${index}`}>
        <p>{post.body}</p>
      </div>
    )); 

    return (
      <div className="WallList">
        {list}
      </div>
    )
  }
}

const selectWallByFilter = (wall, filter) => {
  switch(filter) {
    case WallVisibilityFilter.SHOW_FRIENDS:
      return wall.filter(p => p.visibility === WallVisibilityFilter.SHOW_FRIENDS)
    case WallVisibilityFilter.SHOW_PUBLIC:
      return wall.filter(p => p.visibility === WallVisibilityFilter.SHOW_PUBLIC)
    default:
      return wall;
  }
}

const mapStateToProps = (state) => ({
  wall: selectWallByFilter(state.wall, state.ui.wallVisibilityFilter)
})

export default connect(mapStateToProps, null)(WallList);