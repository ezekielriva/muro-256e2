import React, { Component } from "react";

import {connect} from 'react-redux';

import { setWallVisibilityFilter } from "../../actions/uiActions";

class FilterLink extends Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    
    handleOnClick() {
        this.props.setWallVisibilityFilter(this.props.filter)
    }

    render () {
        return (
            <a
                className="FilterLink"
                onClick={this.handleOnClick}
            >
                {this.props.children}
            </a>
        )
    }
}

const mapDispatchToProps = {
    setWallVisibilityFilter
}

export default connect(null, mapDispatchToProps)(FilterLink)