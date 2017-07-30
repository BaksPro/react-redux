import React, {Component}  from  "react"
import "../style/user.css"
class User extends Component {
  constructor(){
    super()
    this.handleDeleteuser = this.handleDeleteuser.bind(this)
  }

 handleDeleteuser(){     let id = this.props.id;
         console.log(id);
         this.props.deleteUser(id)  ;
 }
  render(){
    
    return(
      <div className="user">
        <p> {this.props.index +1}. Username: <span>  {this.props.name}   </span></p>
        <button onClick={this.handleDeleteuser}> Удалить</button>  
      </div>
      );
  }
    
}

export default User
