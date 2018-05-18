import React, { Component } from "react";

import { connect } from 'react-redux';

import { editPost, removePost } from "../../actions/wallActions";

class WallPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditting: false,
            body: ''
        }
        this.deletePost   = this.deletePost.bind(this);
        this.editPost     = this.editPost.bind(this);
        this.openEditForm = this.openEditForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    deletePost() {
        this.props.removePost(this.props.post);
    }

    editPost(event) {
        event.preventDefault();
        const editedPost = {
            ...this.props.post,
            body: this.state.body
        }
        console.log(editedPost);
        this.props.editPost(editedPost);
        this.setState({ isEditting: false });
    }

    openEditForm() {
        this.setState({ isEditting: true });
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      }

    renderEditForm() {
        const { body } = this.props.post;
        return (
            <textarea
                name="body"
                defaultValue={body}
                onChange={this.handleChange}></textarea>
        )
    }

    renderPostContent() {
        const { body } = this.props.post;
        return (
            <p>{body}</p>
        )
    }

    renderActions() {
        const { isEditting } = this.state;
        return (
            <p>
                { isEditting ?
                    <input type="submit" value="Guardar" />
                    :
                    <a onClick={this.openEditForm}>Editar</a> }
                <a onClick={this.deletePost}>Eliminar</a>
            </p>
        )
    }

    render() {
        const { isEditting } = this.state;

        return (
            <div className="WallPost">
                <form onSubmit={this.editPost}>
                    { isEditting ? this.renderEditForm() : this.renderPostContent() }
                    { this.renderActions() }
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    removePost,
    editPost
}

export default connect(null, mapDispatchToProps)(WallPost);