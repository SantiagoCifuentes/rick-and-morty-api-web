import React from 'react'
import { connect } from 'react-redux'


 const Navbar = ({titulo,buscarPersonajes,alivePersonajes,deadPersonajes}) => (
  
    <nav className="navbar navbar-dark bg-dark">
    <div className=" d-flex flex-row bd-highlight ms- " >
      <a className="navbar-brand text-uppercase p-2 bd-highlight " href="/">{titulo} </a>
      <input className="p-2 bd-highlight " id='buscador' type="text" placeholder="Busca el personaje" aria-label="Username "/>
      <button className="p-2 bd-highlight ms-1" onClick={()=>buscarPersonajes()} >Buscar</button>
      <button  className="  btn-primary ms-1" onClick={()=>alivePersonajes()}>Personajes vivos</button>
      <button  className=" btn-secondary ms-1" onClick={()=>deadPersonajes()}>Personajes muertos</button>
    </div>
   
    </nav>
    
 )


const mapStateToProps = (state) => //trae los datos del state del reducer
({

    personajes: state.personajes,
    info: state.info
    
})

const urlPjs = "https://rickandmortyapi.com/api/character/?name="
const urlAlivepjs= "https://rickandmortyapi.com/api/character/?status=alive"
const urlDeadpjs= "https://rickandmortyapi.com/api/character/?status=dead"

const mapDispatchToProps = (dispatch) => ({

    alivePersonajes() {

        fetch(urlAlivepjs)
            .then(response => response.json())
            .then(data => {
                const personajes = data.results
                const info = data.info
                const status= data.status
                dispatch
                    ({
                        type: "AGREGARPJS",
                        personajes: personajes,
                        info: info,
                        status: status
                    })
            })

            .catch(error => console.log(error))

    },

    deadPersonajes()
    {
        fetch(urlDeadpjs)
        .then(response => response.json())
        .then(data => {
            const personajes = data.results
            const info = data.info
            const status= data.status
            dispatch
                ({
                    type: "AGREGARPJS",
                    personajes: personajes,
                    info: info,
                    status: status
                })
        })

        .catch(error => console.log(error))
    },
    

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