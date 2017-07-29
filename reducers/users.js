const initialState = []
 



export default function(state = initialState, action){
    switch (action.type) {
        
        case "ADD_USER": {
            const { name, id,seach } = action;
            return( [...state, {name,id,seach}
            ])
        }
        case "DELETE_USER" : {
            const { id } = action;
            let newState = state.filter((user)=>{
                return user.id !== id
            })

            return  newState
        }   
         case "SERACH_USERS": {
            const { seachValue } = action;
            let newState = state.filter((user)=>{
                return user.name.includes(seachValue)
            })
                return  newState  
        }  
        
             
        default: {
            return state;        
        }
    }
}