import React, { useState } from 'react'

const ContadorCarrito = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial);

    const subtract = () => {
      if (contador > 1) {
        setContador(contador - 1);
      }
    };
  
    const add = () => {
      if (contador < stock) {
        setContador(contador + 1);
      }
    };

  return (
    <div>
        <div style={styles.contenedor}>
            <button onClick={subtract}>-</button>
            <h2>{contador}</h2>
            <button onClick={add}>+</button>
        </div>
        <button disabled={stock === 0} onClick={()=>onAdd(contador)}>
        <span>{stock === 0 ? 'No tenemos stock del producto seleccionado' : 'Agregar al carrito'}</span>
        </button>
    </div>
  )
}

const styles = {
    contenedor: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "dodgerblue",
    },
  };

export default ContadorCarrito;
