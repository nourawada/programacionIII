/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import {Link} from "react-router-dom"
import "./header.css"


function Header (){
return(
   <nav className="computer">
    <div>
    <ul className="navegador">
        <Link to='/' >
            <img className="logo"  src="/img/logo.jpeg" />
        </Link>
        <Link className="comp-nav" to='/' ><li className="lista2">Home</li> </Link>
        <Link className="comp-nav" to='/movies/vertodas'><li  className="lista">Peliculas Populares</li></Link>
        <Link className="comp-nav" to='/peliculas/vertodap'><li> Peliculas más vistas</li></Link>
        <Link className="comp-nav" to='/favoritos' ><li>Favoritos</li></Link>
    </ul>
    </div>
   </nav>
    
)};

export default Header

