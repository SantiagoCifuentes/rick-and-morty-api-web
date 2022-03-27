import React,{useEffect,useState} from 'react';
import Characters from './components/Characters';
import { Navbar } from "./components/Navbar";
import Pagination from './components/Pagination';



function App() 
{

  const [characters, setcharacters] = useState([])
  const [info, setinfo] = useState({})

  

  const fetchCharacters= (url)=>
  {
    fetch(url)
      .then(response => response.json())
      .then(data =>
        {
          setcharacters(data.results)//result es la propiedad del array de la api, data es la que se conecta para traer la info gracias al fecth
          setinfo(data.info)
        })
       
      .catch(error=>console.log(error))
  }



  const anterior =() =>
  {
    fetchCharacters(info.prev)
  }

  const siguiente =() =>
  {
    fetchCharacters(info.next)
  }



  useEffect(() => {
    fetchCharacters("https://rickandmortyapi.com/api/character")
  
  }, [])  //van vacías las llaves porque se necesita que solo se ejecute una sola vez
  

  return (
    <>
      <Navbar titulo={"Rick and morty"}/>

      <div className='container mt-5'>
        <Pagination prev={info.prev} next={info.next} anterior={anterior} siguiente={siguiente} />
        <Characters characters={characters}/>
        <Pagination/>
      </div>
    </>
  );

}

export default App;
