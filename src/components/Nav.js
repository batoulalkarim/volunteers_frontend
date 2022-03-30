import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar(){
    return(
        <nav className='navbar'>
            <NavLink exact to='/dashboard'>Home</NavLink>
            <br />
            <br />
            <NavLink exact to='/yourcommits'>Your Commits</NavLink>
            <br />
            <br />
            <NavLink exact to='/contact'>Contact Us</NavLink>
            <br />
            
        </nav>
    )
}

export default NavBar