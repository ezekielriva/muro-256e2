import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createPost } from '../../actions/wallActions';

import { WallVisibilityFilter } from '../../actions/uiActions';

class WallForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      visibility: 'public'
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const post = {
      body:       this.state.body,
      visibility: this.state.visibility,
      user_uid:   true || this.props.currentUser.uid
    }
    this.props.createPost(post)
    this.setState({body: '', visibility: 'public'});
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { body } = this.state;

    return (
      <div className="WallForm">
        <form 
          className="WallForm-form"
          onSubmit={this.handleSubmit}
        >
          <textarea
            name="body"
            value={body}
            onChange={this.handleChange}
          ></textarea>
          <br />
          <select
            name="visibility"
            onChange={this.handleChange}
          >
            <option value={WallVisibilityFilter.SHOW_PUBLIC}>Publico</option>
            <option value={WallVisibilityFilter.SHOW_FRIENDS}>Amigos</option>
          </select>
          <input
            type="submit"
            value="Publicar"
          />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = {
  createPost
}

export default connect(mapStateToProps, mapDispatchToProps)(WallForm);