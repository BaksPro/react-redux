import React, {Component}  from  "react"
import "../style/userform.css"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from "../actions/users.js";



class UserSeach extends Component {
    constructor() {
        super()    
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(event){
        console.log(this.props.stateFromReducer);  
        let value =  event.target.value.trim() ;  
        this.props.seachUser(value);
        console.log(this.props.stateFromReducer);    
    
    }
    
    render() {
       
        return (
                <div className="seachForm">
               <span> seach </span>
               <input 
                type="text"
                placeholder="Введите поисковой запрос"                
                onChange={this.handleValueChange}/>
               </div>
           
        )
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}
const UserSeachConnected = connect(mapStateToProps, mapDispatchToProps)(UserSeach);
export default UserSeachConnected;