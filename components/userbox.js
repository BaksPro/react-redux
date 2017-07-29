import 'babel-polyfill'
import React, {Component}  from  "react"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from "../actions/users.js";
import UserForm from  "./userform.js"
import UserList  from  "./userlist.js"
import UserSeach  from  "./userSeach.js"
import "../style/userbox.css"






class UserBox extends Component {  
     
 
    

    render() {
       
        return (
            <div className="userBox">
                <h1> Пользовательский интерфейс </h1>

                <UserForm  /> 
                <UserSeach />
                <UserList userList={this.props.stateFromReducer.users} deleteUser={this.props.deleteUser} />    
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
const UserBoxConnected = connect(mapStateToProps, mapDispatchToProps)(UserBox);
export default UserBoxConnected;