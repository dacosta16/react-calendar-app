import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar navbar-dark bg-dark mb-4'>
        <span className='navbar-brand'>
            Alejandro
        </span>

        <button className='btn btn-outline-danger'>
        <i className="fa-solid fa-right-from-bracket"></i>
            <span> Salir</span>
        </button>
    </div>
  )
}
