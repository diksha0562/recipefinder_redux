import React from 'react';
class Recipeitem extends React.Component{
    render(){
        let {recipe} = this.props;
        return(
            <div className="recipe-item">
                <a href={recipe.href}>
                <h4 className="recipe-text">{recipe.title}</h4>
                </a>
                <p>{recipe.title}</p>
                <img src={recipe.thumbnail} alt={recipe.title} className="recipe-img"/>
                
            </div>
        )
    }
}
export default Recipeitem;