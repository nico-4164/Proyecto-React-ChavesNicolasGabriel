import React from "react";

import '../../bootstrap-5/css/bootstrap.css';
import '../../bootstrap-5/css/bootstrap.min.css';
import '../../bootstrap-5/js/bootstrap'
import './NavBar.css';

import logo from '../../assets/logo.jpg'

const NavBar = ({titulo,children}) => {

  const tipoProductos = [
    {nombre:"Comics", id:1, ruta:""},
    {nombre:"Mangas", id:2, ruta:""}
  ]

  const editoriales = [
    {nombre:"Ivrea", id:3, ruta:""},
    {nombre:"Panini", id:4, ruta:""},
    {nombre:"Ovni Press", id:5, ruta:""}
  ]

    return (
        
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <img src={logo}></img>
    <h1 id="titulo">{titulo}</h1>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        {
        tipoProductos.map((producto) => {
          return <li class="nav-item"><a class="nav-link" key={producto.id} href={producto.ruta}>{producto.nombre}</a> </li>
        })
        }
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Editorial</a>
          <ul class="dropdown-menu">
            {
              editoriales.map((editorial) => {
                return <li><a class="dropdown-item" key={editorial.id} href={editorial.ruta}>{editorial.nombre}</a></li>
              })
            }
          </ul>
        </li>
      </ul>
      {children}
    </div>
  </div>
</nav>
    )
}

export default NavBar;