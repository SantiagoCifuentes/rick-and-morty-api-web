import React,{useEffect,useState} from 'react';
import Characters from './components/Characters';
import  Navbar  from "./components/Navbar";

import { Provider } from 'react-redux';
import store from './reducers/Reducer'




function App() 
{

 

  return ( //el store trae el estado del reducer y se lo pasa a todos los hijos
    <Provider store={store}>    
       <Navbar titulo={"Hey Rick I dont now what Im doing"}/>

      <div className='container mt-5'>
        
      <Characters />
        
      </div>
    </Provider>
    
  );

}

export default App;
