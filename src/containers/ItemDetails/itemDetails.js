import React from "react";


const ItemDetail = ({ producto }) => {

    console.log("log del producto en items details "+producto)
  return (
    <div>
      <img alt={producto.nombre} src={producto.img} />
      <h1>{producto.nombre}</h1>
      <span>{producto.descripcion}</span>
      <h2>{producto.precio}</h2>
    </div>
  );
};

export default ItemDetail;