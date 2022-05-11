import React from 'react'
import { useDispatch } from 'react-redux'
import { setPage } from '../../../Features/nav/nav'

const Navbar = () => {

    const dispatch = useDispatch()

    const onClick = (event) => {
        let pageNum = event.target.attributes.category.value
        dispatch(setPage(pageNum))
    }

    return (
        <nav className='Navbar'>
            <ul>
                <li category="0" onClick={onClick}>Home</li>
                <li category="1" onClick={onClick}>Our Story</li>
                <li category="2" onClick={onClick}>The Wedding</li>
                <li category="3" onClick={onClick}>RSVP</li>
            </ul>
        </nav>
    )
}

export default Navbar