import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const CustomProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setQty(carrito.reduce((total, item) => total + item.cantidad, 0))
    setTotal(carrito.reduce((total, item) => total + (item.cantidad * item.price), 0))
  }, [])
  

  const addItem = (item, cantidad) => {
    if (IsInCart(item.id)) {
      const modificado = carrito.map((producto) => {
        if (producto.id === item.id) {
          producto.cantidad += cantidad;
        }
        return producto;
      });
      setCarrito(modificado);
    } else {
      setCarrito([...carrito, { ...item, cantidad }]);
    }
    setQty(qty + cantidad);
    setTotal(total + (item.price * cantidad));
  };

  const borrarProducto = (id) => {
    const found = carrito.find(producto => producto.id === id);
    setCarrito(carrito.filter((item) => item.id !== id));
    setQty( qty - found.cantidad)
    setTotal(total - (found.price * found.cantidad))
  };

  const IsInCart = (id) => carrito.some((item) => item.id === id);

  const clear = () => {
    setCarrito([]);
    setQty(0);
    setTotal(0);
  };

  return (
    <Context.Provider value={{ carrito, qty, total, addItem, borrarProducto, clear, IsInCart }}>
      {children}
    </Context.Provider>
  );
};