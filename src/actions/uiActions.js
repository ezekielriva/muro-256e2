import {
    SET_WALL_VISIBILITY_FILTER
} from './types';

export const WallVisibilityFilter = {
    SHOW_ALL: 'all',
    SHOW_PUBLIC: 'public',
    SHOW_FRIENDS: 'friends'
}

export const setWallVisibilityFilter = (filter) => (
    { type: SET_WALL_VISIBILITY_FILTER, payload: filter }
)