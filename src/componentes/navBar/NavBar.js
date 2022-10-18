import React from "react";
import { styles } from  './NavBar.Style.js';
import logo from '../../assets/logo.jpg'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link, NavLink } from "react-router-dom";

const NavBar = ({titulo,children}) => {

  const tipoProductos = [
    {nombre:"Comics", id:1, ruta:"/categoria/Comics"},
    {nombre:"Mangas", id:2, ruta:"/categoria/Mangas"},
    {nombre:"Libros", id:3, ruta:"/categoria/Libros"},
  ];

  const mensaje = "Bienvenido a Kamisama Comics";

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