import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    const onClick = (event) => {
        let pageName = event.target.attributes.category.value
        navigate(`/${pageName}`)
    }

    const liItem = ['Home', 'Our Story', 'The Wedding', 'RSVP']

    return (
        <nav className='Navbar'>
            <ul>
                {Array.isArray(liItem) &&
                    liItem.map((element, index) => (
                        <li key={index}
                            category={element}
                            onClick={onClick}>{element}
                        </li>
                    ))}
            </ul>
        </nav>
    )
}

export default Navbar