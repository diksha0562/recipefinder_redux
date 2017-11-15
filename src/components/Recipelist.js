import React from 'react';
import {connect} from 'react-redux';
class Recipelist extends React.Component{
    render(){
        return(
            <div>

            </div>
        )
    }
}
function mapStateToProps(state){
return state;
}

export default connect(mapStateToProps, null)(Recipelist)