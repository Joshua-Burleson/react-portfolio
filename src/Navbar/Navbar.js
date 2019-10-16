import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../images/logo.png';

function Navbar(props){
    //Such hooks!
    const [active, setActive] = useState();

    return(
        <nav>
            <NavLink to="/"><img src={logo}/></NavLink>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    );
}

export default Navbar;