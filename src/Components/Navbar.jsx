import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className='Navbar'>
            <ul>
                <NavLink to="/Wedding-Invitation">Home</NavLink>
                <NavLink to="/Story">Our Story</NavLink>
                <NavLink to="/Wedding">The Wedding</NavLink>
                <NavLink to="/RSVP">RSVP</NavLink>
            </ul>
        </nav>
    )
}

export default Navbar