import React from 'react'


const Pagination = ({ prev, next, anterior, siguiente }) => {

    const handlerAnterior = () => {
        anterior();
    }
    const handlerSiguiente = () => {
        siguiente();
    }



    return (
        <nav>
            <ul className='pagination justify-content-center'>
                {
                    prev ?
                        (
                            <li className='page-item'>
                                <button className='page-link' onClick={handlerAnterior}>Anterior</button>
                            </li>
                        )
                        : null

                }
                {
                    next ?
                        (
                            <li className='page-item'>
                                <button className='page-link' onClick={handlerSiguiente}>Siguiente</button>
                            </li>
                        )
                        : null

                }

            </ul>
        </nav>
    )
}

export default Pagination