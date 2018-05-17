import {
  SET_WALL,
  ADD_TO_WALL
} from '../actions/types';

const wallReducer = (state = [], action) => {
  switch(action.type) {
    case SET_WALL:
      return action.payload
    case ADD_TO_WALL:
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}

export default wallReducer;