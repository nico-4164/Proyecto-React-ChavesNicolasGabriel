import React from "react";
import { styles } from  './NavBar.Style.js';
import logo from '../../assets/logo.jpg'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link, NavLink } from "react-router-dom";

const NavBar = ({titulo,children}) => {

  const tipoProductos = [
    {nombre:"smartphones", id:1, ruta:"/category/smartphones"},
    {nombre:"laptops", id:2, ruta:"/category/laptops"},
    {nombre:"automoviles", id:3, ruta:"/category/automotive"},
    {nombre:"motocicletas", id:3, ruta:"/category/motorcycle"},
  ];

  const mensaje = "Bienvenido a Electronic things";

return (       
<header style={styles.contenedor}>
  <Link to="/">
    <img style={styles.imagen} src={logo} alt="Tienda de lectura"/> 
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