import {
  SET_CURRENT_USER
} from './types';

import firebase from '../services/firebase'

export const auth = (email, password) => dispatch => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((response) => dispatch({type: SET_CURRENT_USER, payload: response.user}))
}
