import React from 'react';
import {connect} from 'react-redux';
import {setRecipes} from '../action';
import Recipeitem from './Recipeitem';
class Recipelist extends React.Component{
    
    render(){
        console.log('this.props',this.props)
        return(
            <div>
                {this.props.recipes.map((recipe,index)=>{ return(
                    // <div key={index}>
                    // <h4>{recipe.title}</h4>
                    // </div>
                    <Recipeitem key={index} recipe={recipe}/>
                )
                })}
             
            </div>
        )
    }
}
function mapStateToProps(state){
return state;
}

export default connect(mapStateToProps,{setRecipes})(Recipelist)