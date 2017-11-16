import {combineReducers} from 'redux';
import {SET_RECIPES, FAVOURITE_RECIPE, NONFAVOURITE_RECIPE} from '../action';

function recipes(state=[],action){
    switch(action.type){
        case SET_RECIPES:
            return action.items;
        default:
            return state;
    }
}

function favouriteRecipes(state=[], action){
    switch(action.type){
        case FAVOURITE_RECIPE:
            return [...state,action.recipe];
        case NONFAVOURITE_RECIPE:
            return state.filter((item)=>item.title!==action.recipe.title);
        default:
            return state;
    }
}

const rootReducer = combineReducers({recipes, favouriteRecipes})
export default rootReducer;