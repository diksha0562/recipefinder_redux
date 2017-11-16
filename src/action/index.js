export const SET_RECIPES = 'SET_RECIPES';
export const FAVOURITE_RECIPE= 'FAVOURITE_RECIPE';
export const NONFAVOURITE_RECIPE= 'NONFAVOURITE_RECIPE';

export function setRecipes(items){
    return{
        type : SET_RECIPES,
        items
    }
}

export function favouriteRecipe(recipe){
    return{
        type: FAVOURITE_RECIPE,
        favourited: true ,
        recipe
       
    }
}

export function nonFavouriteRecipe(recipe){
    return{
        type: NONFAVOURITE_RECIPE,
        favourited: true ,
        recipe
    }
}

