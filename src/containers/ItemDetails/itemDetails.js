import React, { useContext, useState } from "react";

import ContadorCarrito from "../../componentes/contadorCarrito/ContadorCarrito";
import { Context } from "../../context/CustomContext";
import { Link } from "react-router-dom";
import { styles } from  './intemDetails.Style';

const ItemDetail = ({ producto }) => {

  const [isPressedButton, setIsPressedButton] = useState(false);
  const { carrito, addItem, IsInCart} = useContext(Context);

  let stock = 0;
  if(IsInCart(producto.id)){
    const found = carrito.find(item => item.id === producto.id);
    stock = producto.stock - found.cantidad;
  }else{
    stock = producto.stock;
  }

  const onAdd = (count) => {
    setIsPressedButton(true);
    addItem(producto, count);
  };
  
  
  return (
    <div style={styles.contenedor}>
      <div>
        <img alt={producto.title} src={producto.thumbnail} style={styles.imagen}/>
      </div>
      <div>
      <h1>{producto.title}</h1>
        <span style={styles.descripcion}>{producto.description}</span>
        <h2 style={styles.descripcion} >{producto.price}</h2>
      </div>
      {!isPressedButton ? (
          <ContadorCarrito stock={producto.stock} initial={1} onAdd={onAdd} />
        ) : (
          <Link to="/carrito">
            <button>Ir al carrito</button>
          </Link>
        )}
    </div>
  );
};

export default ItemDetail;