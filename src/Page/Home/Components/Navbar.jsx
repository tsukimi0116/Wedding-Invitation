import React from 'react'
import { useDispatch } from 'react-redux'
import { setPage } from '../../../Features/nav/nav'

const Navbar = () => {

    const dispatch = useDispatch()

    const onClick = (event) => {
        let pageNum = event.target.attributes.category.value
        dispatch(setPage(pageNum))
    }

    const liItem = [
        { name: 'Home', category: 0 },
        { name: 'Our Story', category: 1 },
        { name: 'The Wedding', category: 2 },
        { name: 'RSVP', category: 3 },
    ]

    return (
        <nav className='Navbar'>
            <ul>
                {Array.isArray(liItem) &&
                    liItem.map((element, index) => (
                        <li key={index}
                            category={element.category}
                            onClick={onClick}>{element.name}
                        </li>
                    ))}
            </ul>
        </nav>
    )
}

export default Navbar