import React from 'react';
import {connect} from 'react-redux';
import {setRecipes} from '../action';
import {Link} from 'react-router-dom'
import Recipeitem from './Recipeitem';
class Recipelist extends React.Component{
    
    render(){
        console.log('this.props',this.props)
        return(
            <div>
                {this.props.favouriteRecipes.length>0 ? <h4 className="link"><Link to= './favourite'>FAVOURITE</Link></h4> : <div></div>}
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