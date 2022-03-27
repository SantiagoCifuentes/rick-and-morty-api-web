import { createStore } from "redux";



const initialState = {
    
    info : {prev : null,
            next: null},
    personajes: [{ id: null, name: null, status: null,
     location: {name :null} }]
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "AGREGARPJS":
          
        return {
          
          personajes: action.personajes,
          info : action.info
          
        }
        break;
  
      default:
        return state
        break;
    }
  }
export default createStore(reducer)