import {
    REGISTER_MUSIC,
    UPDATE_MUSIC
} from '../_actions/types'

export default function(state={}, action){
    switch(action.type){
        case REGISTER_MUSIC:
            return {...state, success: action.payload};
        case UPDATE_MUSIC:
            return {...state, success: action.payload};
        default:
            return state;
    }
}