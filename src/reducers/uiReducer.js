import {
    SET_WALL_VISIBILITY_FILTER
} from '../actions/types'

const initialState = {
    wallVisibilityFilter: 'all'
}

const uiReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_WALL_VISIBILITY_FILTER:
            return {
                ...state,
                wallVisibilityFilter: action.payload
            }
        default:
            return state;
    }
}

export default uiReducer;