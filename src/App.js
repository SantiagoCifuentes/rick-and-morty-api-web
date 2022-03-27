import React,{useEffect,useState} from 'react';
import Characters from './components/Characters';
import  Navbar  from "./components/Navbar";
import Pagination from './components/Pagination';
import { Provider } from 'react-redux';
import store from './reducers/Reducer'




function App() 
{

  // const [characters, setcharacters] = useState([])
  // const [info, setinfo] = useState({})

  

  /* const fetchCharacters= (url)=>
  {
    fetch(url)
      .then(response => response.json())
      .then(data =>
        {
          setcharacters(data.results)//result es la propiedad del array de la api, data es la que se conecta para traer la info gracias al fecth
          setinfo(data.info)
        })
       
      .catch(error=>console.log(error))
  } */



  // const anterior =() =>
  // {
  //   fetchCharacters(info.prev)
  // }

  // const siguiente =() =>
  // {
  //   fetchCharacters(info.next)
  // }



  // useEffect(() => {
  //   fetchCharacters("https://rickandmortyapi.com/api/character")
  
  // }, [])  //van vacías las llaves porque se necesita que solo se ejecute una sola vez
  

  return ( //el store trae el estado del reducer y se lo pasa a todos los hijos
    <Provider store={store}>    
       <Navbar titulo={"Rick and morty"}/>

      <div className='container mt-5'>
        {/* <Pagination prev={info.prev} next={info.next} anterior={anterior} siguiente={siguiente} /> */}
        <Characters />
        
      </div>
    </Provider>
    
  );

}

export default App;
