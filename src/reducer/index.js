import {combineReducers} from 'redux';
import {SET_RECIPES} from '../action';

function recipes(state=[],action){
    switch(action.type){
        case SET_RECIPES:
            return action.type;
        default:
            return state;

    }
}
const rootReducer = combineReducers({recipes})
export default rootReducer;