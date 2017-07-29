import React, {Component}  from  "react"
import "../style/userform.css"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from "../actions/users.js";



class UserForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',           
            placeholder: "Введие имя пользователя",
            

        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event){        
        this.setState({name: event.target.value})
      
    }
    handleSubmit(event) {
        event.preventDefault();
        
        let name = this.state.name.trim();
           
        if( !(/^[a-z0-9_-]{3,15}$/.test(name))) {
            this.setState({ placeholder: "Имя не дожно быть пустым"})
            return 
        }
        this.props.add({ name: name, id: Date.now()});
        this.setState({name: '', placeholder: "Введие имя пользователя"})
    }



    render() {
       
        return (
            
            <form className="userForm" onSubmit={this.handleSubmit}>
               <input 
               type="text"
                placeholder={this.state.placeholder}
                value={this.state.name}
                onChange={this.handleNameChange}/>
               <input type="submit" value="Добавить" />
            </form>
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
const UserFormConnected = connect(mapStateToProps, mapDispatchToProps)(UserForm);
export default UserFormConnected;