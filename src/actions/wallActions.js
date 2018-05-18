import {
  SET_WALL,
  ADD_TO_WALL,
  REMOVE_FROM_WALL,
  EDIT_WALL_POST
} from './types';
  
import firebase from '../services/firebase'

export const getWall = () => (dispatch, getState) => {
  const user_uid = getState().user.currentUser.uid;
  firebase.database().ref('/user-walls/'+user_uid).once('value')
    .then(res => {
      dispatch({
        type: SET_WALL,
        payload: res.val() || {}
      })
    })
}

export const createPost = (post) => dispatch => {
  const postId = firebase.database().ref().child('walls').push().key;
  const postData = { ...post, id: postId };
  const updates = {
    ['/walls/' + postId]: postData,
    ['/user-walls/' + post.user_uid + '/' + postId]: postData
  }

  firebase.database().ref().update(updates)
    .then(res => {
      dispatch({
        type: ADD_TO_WALL, 
        payload: postData
      });
    });
}

export const removePost = (post) => dispatch => {
  const updates = {
    ['/walls/' + post.id]: null,
    ['/user-walls/' + post.user_uid + '/' + post.id]: null
  }
  firebase.database().ref().update(updates)
    .then(res => {
      dispatch({
        type: REMOVE_FROM_WALL,
        payload: post
      })
    });
}

export const editPost = (post) => dispatch => {
  const updates = {
    ['/walls/' + post.id]: post,
    ['/user-walls/' + post.user_uid + '/' + post.id]: post
  }
  firebase.database().ref().update(updates)
    .then(res => {
      dispatch({
        type: EDIT_WALL_POST,
        payload: post
      })
    });
}