import React, {Component}  from  "react"
import User from  "./user.js"
import   "../style/userList.css"
import UserSeach  from  "./userSeach.js"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from "../actions/users.js";


class UserList extends Component {
    constructor(props){
        super(props)
      
        this.state = { seach: props.stateFromReducer.users}
        this.handleSeach = this.handleSeach.bind(this);
        console.log( this.state.seach) 
        
    }
      
    componentWillReceiveProps(nextProps) {
        this.setState({
        seach: nextProps.stateFromReducer.users
        });
    }

     handleSeach(seachValue){
             
        let newState = this.props.stateFromReducer.users.filter((user)=>{
                return user.name.includes(seachValue)
            })
               
            this.setState({
                seach: newState
            })
        
    }
        
    render() {     
                
      
       console.log(this.state.seach)
       console.log(this.props.stateFromReducer.users)
      
        let userNodes = this.state.seach.map((user, index) => {
         return (
                 <User deleteUser={this.props.deleteUser} seach={this.state.seach} name={user.name} key= {user.id} id={user.id}  index={index}></User>
            )
        
        });
        
        
        return (
            <div className="userlist">
                <UserSeach seach ={this.handleSeach}/>
                <h2>Список пользователей </h2>
                { userNodes.length > 0? userNodes: "Нет пользователей"}
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
const UserListConnected = connect(mapStateToProps, mapDispatchToProps)(UserList);
export default UserListConnected;

