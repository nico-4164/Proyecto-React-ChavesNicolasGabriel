import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore"

import ItemList from "../ItemList/ItemList";
import {db} from "../../../firebase/firebase";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({greeting}) => {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const { id } = useParams();


  const listaDeProductos = collection(db, 'Productos')
  const q = id ? query(listaDeProductos, where('category', '==', id )): listaDeProductos;

  useEffect(() => {
    getDocs(q)
    .then((resultado) => {
      const productosLista = resultado.docs.map((item) => {
        return{
          ...item.data(),
          id: item.id,
        };
      });
      setData(productosLista);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(setLoading(false));
  }, [id]);

  return (
    <>
      <h1>{greeting}</h1>
      {<>{loading ? <h1>Cargando...</h1> : <ItemList productos={data} />}</>}
    </>
  )
}
