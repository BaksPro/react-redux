import React, {Component}  from  "react"
import "../style/userform.css"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from "../actions/users.js";



class UserSeach extends Component {
    constructor() {
        super()
        this.handleSeach = this.handleSeach.bind(this)    
     
    }

   handleSeach(event){
       let value = event.target.value.trim()
        this.props.seach(value)
   }
    
    render() {
       
        return (
                <div className="seachForm">
               <span> seach </span>
               <input 
                type="text"
                placeholder="Введите поисковой запрос"                
                onChange={this.handleSeach}/>
               </div>
           
        )
    }
}

export default UserSeach;