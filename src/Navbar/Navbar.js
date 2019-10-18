import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../images/logo.png';

function Navbar(props){
    //Such hooks!
    // const [active, setActive] = useState();
    console.log("%c J0shu@ Wuz H3r3 ", "font-weight: bold; font-size: 50px;color: rgb(2,55,136); text-shadow: 3px 3px 0 rgb(246,1,157) , 6px 6px 0 rgb(246,1,157) , 9px 9px 0 rgb(212,0,120) , 12px 12px 0 rgb(212,0,120) , 15px 15px 0 rgb(146,0,117) , 18px 18px 0 rgb(146,0,117) , 21px 21px 0 rgb(101,13,137)")

    return(
        <nav>
            <NavLink to="/home"><img src={logo} alt="branded logo"/></NavLink>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    );
}

export default Navbar;