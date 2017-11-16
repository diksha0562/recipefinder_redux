import React from 'react';
import {favouriteRecipe} from '../action';
import {connect} from 'react-redux' ;
class Recipeitem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            favourited:false
        }
    }
    favourite(recipe){
        this.props.favouriteRecipe(recipe);
        this.setState({favourited:true});
    }
    render(){
        let {recipe} = this.props;
        return(
            <div className="recipe-item">
                <a href={recipe.href}>
                <h4 className="recipe-text">{recipe.title}</h4>
                </a>
                <p>{recipe.ingredients}</p>
                <img src={recipe.thumbnail} alt={recipe.title} className="recipe-img"/>
                {this.state.favourited? <div style={{backgroundColor: 'Yellow'}}>FAVOURITE</div> : <div className="favourite_btn" onClick={e=>{this.favourite(recipe)}}>FAVOURITE</div>}
                <hr/>
            </div>
        )
    }
}
export default connect(null, {favouriteRecipe})(Recipeitem);