import {
  SET_WALL,
  ADD_TO_WALL
} from './types';
  
import firebase from '../services/firebase'

export const createPost = (post) => dispatch => {
  dispatch({
    type: ADD_TO_WALL, 
    payload: post
  });
}