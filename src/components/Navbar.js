import React from 'react'
import { connect } from 'react-redux'


 const Navbar = ({titulo,buscarPersonajes}) => (
  
    <nav className="navbar navbar-dark bg-dark">
    <div className=" d-flex flex-row bd-highlight ms-5 " >
      <a className="navbar-brand text-uppercase p-2 bd-highlight " href="/">{titulo} </a>
      <input className="p-2 bd-highlight " id='buscador' type="text" placeholder="Busca el personaje" aria-label="Username "/>
      <button className="p-2 bd-highlight" onClick={()=>buscarPersonajes()} >Buscar</button>
    </div>
   
    </nav>
    
 )


const mapStateToProps = (state) => //trae los datos del state del reducer
({

  
    
})

const urlPjs = "https://rickandmortyapi.com/api/character/?name="

const mapDispatchToProps = (dispatch) => ({

    

    buscarPersonajes() {

        const buscador = document.getElementById("buscador")
        const found =buscador.value
        fetch(urlPjs+ found)
            .then(response => response.json())
            .then(data => {
                const personajes = data.results
                const info = data.info
                dispatch
                    ({
                        type: "AGREGARPJS",
                        personajes: personajes,
                        info: info
                    })
            })

            .catch(error => console.log(error))
            buscador.value = ""
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Navbar)