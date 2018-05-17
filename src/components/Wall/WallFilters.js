import React, { Component } from "react";

import { WallVisibilityFilter } from "../../actions/uiActions";

import FilterLink from './FilterLink';

class WallFilters extends Component {
    render() {
        return (
            <div className="WallFilters">
                <FilterLink filter={WallVisibilityFilter.SHOW_ALL}>Todos</FilterLink>
                <FilterLink filter={WallVisibilityFilter.SHOW_FRIENDS}>Amigos</FilterLink>
                <FilterLink filter={WallVisibilityFilter.SHOW_PUBLIC}>Publico</FilterLink>
            </div>
        )
    }
}


export default WallFilters