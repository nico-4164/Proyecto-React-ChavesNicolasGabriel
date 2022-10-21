import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { json, useParams } from "react-router-dom";

export const ItemListContainer = ({greeting}) => {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const { id } = useParams();

  const URL_BASE = 'https://dummyjson.com/products'
  const URL_CAT = `${URL_BASE}/category/${id}`


  console.log("log del id "+id);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(id ? URL_CAT : URL_BASE );
        const data = await res.json();
        setData(data.products);
        console.log("log del data de la api")
        console.log(data.products);
      } catch {
        console.log("error");
      } finally {
        setLoading(false);
      }
    };
    getProducts();

  }, [id, URL_BASE, URL_CAT]);

  return (
    <>
      <h1>{greeting}</h1>
      {<>{loading ? <h1>Cargando...</h1> : <ItemList productos={data} />}</>}
    </>
  )
}
