import React from 'react'

export const Navbar = ({titulo}) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
    <div className="container" >
      <a className="navbar-brand text-uppercase" href="/">{titulo} </a>
     
    </div>
    </nav>
  )
}
