import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {favouriteRecipe} from '../action';
class Favouriteitem extends React.Component{
    render(){
        return(
            <div>
                <h4 className="link"><Link to='/'>HOME</Link></h4>
                <h4>Favourite Items:</h4>
                <ul>
               {this.props.favouriteRecipes.map((recipe,index)=>{return(
                   <li key={index}>{recipe.title}</li>
               )})}
               </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {favouriteRecipes:state.favouriteRecipes};
}

export default connect(mapStateToProps,{favouriteRecipe})(Favouriteitem);