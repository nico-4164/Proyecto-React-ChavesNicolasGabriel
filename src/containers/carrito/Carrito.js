import React, { useContext } from "react";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore"

import { Context } from "../../context/CustomContext";
import { Link } from "react-router-dom";
import { db } from "../../firebase/firebase";

export const Carrito = ({ estilo, color }) => {
  const { carrito, total, clear } = useContext(Context);

  const comprador = {
    nombre: document.getElementById("nombre"),
    apellido: document.getElementById("apellido"),
    email: document.getElementById("email"),
  };

  const finalizarCompra = ()=>{
    const ventasCollection = collection(db,"ventas");
    addDoc(ventasCollection,{
      comprador,
      items:
      carrito.map((producto) => (
          producto.title
        ))
      ,
      total: total,
      date:serverTimestamp()
    })
    .then(result=>{
      console.log(result.id);
    })
    .catch(e => {
      console.log('todo mal');
      console.log(e);
    });
    
    clear();
  }

  const actualizarStock = ()=>{
    const updateStock = doc(db, "Productos","01")
    updateDoc(updateStock,{stock:777})
  }


  return (
    <>
      {carrito.length === 0 ? (
        <>
          <h1 className={estilo ? "red" : "green"}>
            Aun no has agregado nada, puedes ver nuestros productos <Link to="/">Aqui</Link>
          </h1>
          <h2 className={`tamanio ${color || ''}`}>Muchas gracias vuela prontos</h2>
        </>
      ) : (
        <>
          <h2>Ingrese sus datos para poder finalizar la compra</h2>
          <form>
            <label>Nombre:</label>
            <input type="text" id="nombre"></input>

            <label>Apellido:</label>
            <input type="text" id="apellido"></input>
            
            <label>Email:</label>
            <input type="text" id="email"></input>
          </form>
          {carrito.map((producto) => (
            <h1 key={producto.id}>{producto.title}</h1>
          ))}
        </>
      )}
      <button onClick={finalizarCompra}>finalizar compra</button>
    </>
  );
};