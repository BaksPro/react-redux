import React, {Component}  from  "react"
import User from  "./user.js"
import   "../style/userList.css"



class UserList extends Component {
    constructor(props){
        super(props)

    }

    render() {
   
       
        let userNodes = this.props.userList.map((user, index) => {
            return (
                 <User deleteUser={this.props.deleteUser} name={user.name} key= {user.id} id={user.id}  index={index}></User>
            )
        
        });
        
        
        return (
            <div className="userlist">
                <h2>Список пользователей </h2>
                { userNodes.length > 0? userNodes: "Нет пользователей"}
            </div>
        )
    }
    
}

export default UserList;

