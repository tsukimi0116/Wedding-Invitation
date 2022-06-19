import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <nav className='Nav'>
            <ul>
                <NavLink to="/Wedding-Invitation">首頁</NavLink>
                <NavLink to="/Story">Our Story</NavLink>
                <NavLink to="/Wedding">婚宴資訊</NavLink>
                <NavLink to="/RSVP">RSVP</NavLink>
            </ul>
        </nav>
    )
}

export default Nav