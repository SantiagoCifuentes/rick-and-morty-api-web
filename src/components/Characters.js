import React from 'react'

const Characters = ({ characters }) => {  //la props characters representaría a cada pj del array de la api
    return ( //visualización de pjs
        <div className='row'>
            {
                characters.map((item, index) => (  //item es cada uno de los pjs
                    <div key={index} className='col mb-5'>
                        <div className='card' style={{minWidth:"200px"}}>
                            <img src={item.image} alt=''/>
                            <div className="">
                                <h5 className="card-title" >{item.name}</h5>
                                <hr/>
                                <p className="card-text">Locación: {item.location.name}</p>
                                <p>Género: {item.gender}</p>
                            </div>
                        </div>
                    </div>
                ))
            }


        </div>
    )
}

export default Characters
