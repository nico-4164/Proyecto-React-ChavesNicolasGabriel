import React from 'react';
import './App.css';
import NavBar from './componentes/navBar/NavBar';
import {ItemListContainer} from './containers/ItemListContainer/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from "./containers/ItemDetailsContainer/ItemDetailsContainer"
import { CartWidget } from './componentes/CartWidget/CartWidget';
import { Routes, Route } from "react-router-dom";

const App = () => {

  let nombre="Kamisama Comics";
  const mensaje = "Disfrute de la mejor tienda de lectura";
  console.log("mensaje en App");
  return (
    <>
    <NavBar titulo={nombre}>
    </NavBar>
    <Routes>
      <Route path="/" element={<ItemListContainer greeting={mensaje} />}/>
      <Route path="/categoria/:id" element={<ItemListContainer greeting={mensaje} />}/>
      <Route path="/producto/:id" element={<ItemDetailContainer />}/>
      <Route path="/carrito" element={<CartWidget />}/>
      <Route path="*" element={<ItemListContainer />}/>
    </Routes>
    </>
  );
}

export default App;
