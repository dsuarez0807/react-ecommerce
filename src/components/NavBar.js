import React from 'react'
import '../styles/nav.css'
//import CartWidget from '../components/CartWidget' 
import {Link} from 'react-router-dom';

export default function NavBar(){
    return(
        <nav className="navbar">
        <Link exact to="/">Shoestore</Link>
        <Link to="/About">About</Link>
        <Link to="/Products">Products</Link>
        </nav>
    )
};