import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const liItem = ['Home', 'Our Story', 'The Wedding', 'RSVP']

    return (
        <nav className='Navbar'>
            <ul>
                <NavLink to="/Wedding-Invitation">Home</NavLink>
                <NavLink to="/Our%20Story">Our Story</NavLink>
                <NavLink to="/The%20Wedding">The Wedding</NavLink>
                <NavLink to="/RSVP">RSVP</NavLink>
            </ul>
        </nav>
    )
}

export default Navbar