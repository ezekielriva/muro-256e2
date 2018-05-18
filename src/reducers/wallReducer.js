import {
  SET_WALL,
  ADD_TO_WALL,
  REMOVE_FROM_WALL,
  EDIT_WALL_POST
} from '../actions/types';

const wallReducer = (state = {}, action) => {
  switch(action.type) {
    case SET_WALL:
      return action.payload
    case ADD_TO_WALL:
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    case REMOVE_FROM_WALL:
      delete state[action.payload.id];
      return {
        ...state
      }
    case EDIT_WALL_POST:
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    default:
      return state
  }
}

export default wallReducer;