import { Link, NavLink } from "react-router-dom";

import { CartWidget } from '../CartWidget/CartWidget'
import React from "react";
import logo from '../../assets/logo.jpg'
import { styles } from  './NavBar.Style.js';

const NavBar = ({titulo,children}) => {

  const tipoProductos = [
    {nombre:"smartphones", id:"smartphones", ruta:"/category/smartphones"},
    {nombre:"laptops", id:"laptops", ruta:"/category/laptops"},
    {nombre:"automoviles", id:"automotive", ruta:"/category/automotive"},
    {nombre:"motocicletas", id:"motorcycle", ruta:"/category/motorcycle"},
  ];

  const mensaje = "Bienvenido a Electronic things";

return (       
<header style={styles.contenedor}>
  <Link to="/">
    <img style={styles.imagen} src={logo} alt="Tienda de electronica"/> 
  </Link>
  <h1 style={styles.titulo} id="titulo">{mensaje}</h1>
  <nav>
    {
      tipoProductos.map((producto) => {
        return (
          <NavLink style={styles.producto} key={producto.id} to={producto.ruta}> {producto.nombre} </NavLink>
        );
      })
    }
  </nav>
  <Link to="/carrito">
    <CartWidget/>
  </Link>
</header>
    );
};

export default NavBar;