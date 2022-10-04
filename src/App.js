import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar from './componentes/navBar/NavBar';
import {CartWidget} from './componentes/carrito/CartWidget'
import {ItemListContainer} from './componentes/navBar/ItemListContainer'

const App = () => {

  let nombre="Kamisama Comics";
  const mensaje = "Bienvenido a Kamisama Comics";

  return (
    <>
    <NavBar titulo={nombre}>
      <CartWidget/>
    </NavBar>
    <ItemListContainer greeting={mensaje}/>
    </>
  );
}

export default App;
