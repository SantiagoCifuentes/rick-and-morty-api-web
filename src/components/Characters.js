import React from 'react'
import { connect } from 'react-redux'







const Characters = ({ personajes, agregarPersonajes, info,siguiente,anterior }) => (  //la props characters representaría a cada pj del array de la api
    //visualización de pjs
    <div className='row'>

        {window.addEventListener('load', () => {
            agregarPersonajes();
        })}

        <nav>
            <ul className='pagination justify-content-center'>
               
                {                   
                    info.prev ?
                        (
                            <li className='page-item'>
                                <button className='page-link'  onClick={()=>anterior(info.prev)} >Anterior</button>
                            </li>
                        )
                    : null
                }

                {
                 info.next ?
                        (
                         <li className='page-item'>
                                <button className='page-link' onClick={()=>siguiente(info.next)} >Siguiente</button>
                        </li>
                        )
                        : null

                }
            </ul>
        </nav>


        {

            personajes.map((item, index) => (  //item es cada uno de los pjs
                <div key={index} className='col mb-5'>
                    <div className='card' style={{ minWidth: "200px" }}>
                        <img src={item.image} alt='' />
                        <div className="">
                            <h5 className="card-title" >{item.name}</h5>
                            <hr />
                            <p className="card-text">Locación: {item.location.name}</p>
                            <p  className="card-text">Género: {item.gender}</p>
                            <p  className="card-text">Status: {item.status}</p>
                            {/* <p>Status: {item.status}</p> */}
                        </div>
                    </div>
                </div>
            ))
        }

        <nav>
                <ul className='pagination justify-content-center'>  
                    {
                  
                    info.prev ?
                        (
                            <li className='page-item'>
                                <button className='page-link'  onClick={()=>anterior(info.prev)} >Anterior</button>
                            </li>
                        )
                    : null

                    }

                    {
                    info.next ?
                        (
                         <li className='page-item'>
                                <button className='page-link' onClick={()=>siguiente(info.next)} >Siguiente</button>
                        </li>
                        )
                        : null

                    }


              </ul>
        </nav>
    </div>


)

const mapStateToProps = (state) => //trae los datos del state del reducer, de la bd
({

    personajes: state.personajes,
    info: state.info,
    
})

const urlPjs = "https://rickandmortyapi.com/api/character"
const urlAlivepjs= "https://rickandmortyapi.com/api/character/?status=alive"

const mapDispatchToProps = (dispatch) => ({

    anterior(prev) {

        fetch(prev)
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

    },
    
    siguiente(next) {

        fetch(next)
            .then(response => response.json())
            .then(data => {
                const personajes = data.results
                const info = data.info
                //const status = data.status
                dispatch
                    ({
                        type: "AGREGARPJS",
                        personajes: personajes,
                        info: info,
                        //status: status
                    })
            })

            .catch(error => console.log(error))

    },

    agregarPersonajes() {

        fetch(urlPjs)
            .then(response => response.json())
            .then(data => {
                const personajes = data.results
                const info = data.info
                //const status = data.status
                dispatch
                    ({
                        type: "AGREGARPJS",
                        personajes: personajes,
                        info: info,
                        //status: status
                    })
            })

            .catch(error => console.log(error))

    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Characters)
//export default Characters
