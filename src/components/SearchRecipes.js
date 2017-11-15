import React from 'react';
import {Form,FormGroup, FormControl, ControlLabel,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {setRecipes} from '../action';
class SearchRecipes extends React.Component{
    constructor(props){
      super(props);
      this.state={
          ingredients:'',
          dish:''
      }
    }
    search(){
        // ?=to start query... i and q query parameters...seperated by &
        // const url='http://www.recipepuppy.com/?i=garlic,chicken&q=adobo';
        // let ingredients= this.state.ingredients;
        let {ingredients, dish} = this.state;
        const url=`http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
        console.log('state',this.state,'url',url);
        fetch(url,{method:'GET'})
        .then(response=>response.json())
        .then(json=>{this.props.setRecipes(json.results)})
    }
render(){
    return(
        <div>
            <Form inline>
                <FormGroup>
                   <ControlLabel>Ingredients</ControlLabel>
                    {' '}
                   <FormControl type="text" placeholder="garlic, chicken" onChange={(event)=>this.setState({ingredients:event.target.value})}/>
                </FormGroup>
                {' '}
                <FormGroup>
                    <ControlLabel>Dish</ControlLabel>
                    {' '}
                   <FormControl type="text" placeholder="adobo"onChange={(event)=>this.setState({dish:event.target.value})}/>
                </FormGroup>
                {' '}
                <Button onClick={()=>this.search()}>Submit</Button>
            </Form>     
       
        </div>
    )
}

    
}
export default connect(null, {setRecipes})(SearchRecipes);