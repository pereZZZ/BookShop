import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function posts(state = InitialState.posts, action) {
    let {type, payload} = action;

    switch(type) {
        default:
            return state;
    }
};