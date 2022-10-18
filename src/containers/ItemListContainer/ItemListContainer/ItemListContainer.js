import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({greeting}) => {

  console.log("mensaje en item list container");

  const [productos, setProducts] = useState([]);
  const [cargando, setCargando] = useState(true);

  const listaProductos = [
    {nombre:"Fullmetal Alchelmist", id:0,precio:600,img:"https://i.imgur.com/DNO73Tm.jpg"},
    {nombre:"Gantz", id:1,precio:650,img:"https://i.imgur.com/eVPcG9i.jpg"},
    {nombre:"Civil War", id:2,precio:2500,img:"https://i.imgur.com/4KZiMaG.jpg"},
    {nombre:"The Eternals", id:3,precio:2750,img:"https://i.imgur.com/jLtgYMd.jpg"},
    {nombre:"Harry Potter Y La Piedra Filosofal", id:4,precio:3500,img:"https://i.imgur.com/KayKswA.jpg"},
    {nombre:"Harry Potter Y La Camara De Los Secretos", id:5,precio:3750,img:"https://i.imgur.com/0eLIFA1.jpg"},
    {nombre:"Harry Potter Y El Prisionero De Azkabhan", id:6,precio:4500,img:"https://i.imgur.com/8LpGnnq.jpg"},
  ];

  const { id } = useParams();

  useEffect(() => {
    const getProductos = async () => {
      try {
        setProducts(listaProductos);
      } catch {
        console.log("error");
      } finally {
        console.log("se termino el useEffect de item list container");
        setCargando(false);
      }
    };
    getProductos();
}, []);

  return (
    <>
      <h1>{greeting}</h1>
      {<>{cargando ? <h1>Cargando...</h1> : <ItemList productos={productos} />}</>}
    </>
  )
}
