import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
    console.log(action);
    switch (action.type) {
        case FETCH_WEATHER:
            if(action.payload){
                return [action.payload.data, ...state];
            }
            break;
        default :
            console.log('Default action case');        
    }

    return state;
}