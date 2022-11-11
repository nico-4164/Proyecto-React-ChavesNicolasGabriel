import React, { useEffect, useState } from "react";
import { collection, doc, getDoc, query, where } from "firebase/firestore";

import ItemDetail from "../ItemDetails/itemDetails";
import { db } from "../../firebase/firebase";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = ({ greeting }) => {

const [producto, setProducto] = useState([]);
const [cargando, setCargando] = useState(true);
const { id } = useParams();


const listaDeProductos = collection(db, "Productos");


const refDoc = doc(listaDeProductos, id);

useEffect(() => {

  getDoc(refDoc)
  .then((resultado) => {
    setProducto({
      id: resultado.id,
      ...resultado.data(),
    });
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(setCargando(false));
}, [id]);

  return (
    <>
      <h1>{greeting}</h1>
      {<>{cargando ? <h1>Cargando...</h1> : <ItemDetail producto={producto} />}</>}
    </>
  );
};