import './App.css';

import { Route, Routes } from "react-router-dom";

import { Carrito } from './containers/carrito/Carrito';
import { CustomProvider } from "./context/CustomContext";
import { ItemDetailContainer } from "./containers/ItemDetailsContainer/ItemDetailsContainer"
import {ItemListContainer} from './containers/ItemListContainer/ItemListContainer/ItemListContainer'
import NavBar from './componentes/navBar/NavBar';
import React from 'react';

const App = () => {

  let nombre="electronic things";
  const mensaje = "Los mejores precios siempre";
  return (
    <>
    <CustomProvider>
      <NavBar titulo={nombre}>
      </NavBar>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={mensaje} />}/>
        <Route path="/category/:id" element={<ItemListContainer greeting={mensaje} />}/>
        <Route path="/producto/:id" element={<ItemDetailContainer />}/>
        <Route path="/carrito" element={<Carrito />}/>
        <Route path="*" element={<ItemListContainer />}/>
      </Routes>
    </CustomProvider>
    </>
  );
}

export default App;
