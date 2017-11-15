import React from 'react';
import SearchRecipes from './SearchRecipes';
import '../styles/index.css';
import Recipelist from './Recipelist';
class App extends React.Component{
    render(){
        return(
            <div>
            <h1>Recipe Finder</h1>
            <SearchRecipes/>
            <Recipelist/>
            </div>
        )
    }
}
export default App;