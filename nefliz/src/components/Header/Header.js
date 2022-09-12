/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import {Link} from "react-router-dom"
import "./header.css"

function Header (){
return(
   <nav className="navBar">
    
    <ul className="menu">
    <Link to='/' exact="true" >
    <img className="logo" src="/img/logo.jpeg" /></Link>
        <Link to='/' exact={true} ><li>Home</li> </Link>
        <Link to='/movies/vertodas'><li>Peliculas Populares</li></Link>
        <Link to='/peliculas/vertodap'><li> Pelicualas más vistas</li></Link>
        <Link to='/favoritos' ><li>Favoritos</li></Link>
    </ul>
   </nav>
    
)};

export default Header