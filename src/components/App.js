import React from 'react';
import SearchRecipes from './SearchRecipes';
import '../styles/index.css';
class App extends React.Component{
    render(){
        return(
            <div>
            <h1>Recipe Finder</h1>
            <SearchRecipes/>
            </div>
        )
    }
}
export default App;