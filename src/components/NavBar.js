import React from 'react'
import '../styles/nav.css'
import CartWidget from '../components/CartWidget' 

export default function NavBar(){
    return(
        <nav className="navbar">
        <a className="active" href="#home">PetShop</a>
        <a href="#news">Productos</a>
        <a href="#contact">Promociones</a>
        <a href="#about">About</a>
        <a href="#about"><CartWidget></CartWidget></a>
        </nav>
    )
}