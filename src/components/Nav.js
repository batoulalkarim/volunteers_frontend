import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar(){
    return(
        <nav className='navbar'>
            {/* <img src='' alt=''> insert pic here </img> */}
            <NavLink exact to='/yourcommits'>Your Commits</NavLink>
            <br />
            <NavLink exact to='/contact'>Contact Us</NavLink>
        </nav>
    )
}

export default NavBar