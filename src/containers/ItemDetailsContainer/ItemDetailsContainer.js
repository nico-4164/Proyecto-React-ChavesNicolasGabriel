import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetails/itemDetails";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = ({ greeting }) => {

const [producto, setProducto] = useState([]);
const [cargando, setCargando] = useState(true);
const { id } = useParams();

console.log("log del id "+id);

const detallesDeProductos = [
{nombre:"Fullmetal Alchelmist", id:1,precio:600,img:"https://i.imgur.com/DNO73Tm.jpg",
descripcion:"Fullmetal Alchemist transcurre en un mundo alternativo donde la magia y la alquimia existen, y de hecho esta última es una de las ciencias más practicadas"},

{nombre:"Gantz", id:2,precio:650,img:"https://i.imgur.com/eVPcG9i.jpg",
descripcion:"Tras morir atropellados por un subterráneo, Kurono y Kato aparecen de golpe en una rara habitación junto a otra gente. Todo es parte de un juego. Algo llamado Gantz los equipa con armas y rastreadores para ejecutar misiones de aniquilación de extraterrestres que viven de incógnito en Tokyo"},

{nombre:"Civil War", id:3,precio:2500,img:"https://i.imgur.com/4KZiMaG.jpg",
descripcion:"¡El mayor evento de la historia del cómic, al fin recopilado en un volumen imprescindible y plagado de extras! El Universo Marvel está cambiando. Es tiempo de elegir: ¿De qué lado estás? Un conflicto que se ha estado larvado durante años estalla al fin, rompiendo en dos a la comunidad superheroica, y enfrentando a amigo contra amigo, hermano contra hermano. Spiderman, Los Vengadores, La Patrulla-X, Los Cuatro Fantásticos... todos se verán afectados. Todos deberán elegir su lugar en la guerra. Nadie está a salvo en la saga que cambió para siempre las reglas del juego."},

{nombre:"The Eternals", id:4,precio:2750,img:"https://i.imgur.com/jLtgYMd.jpg",
descripcion:"Imagina una raza de hombres y mujeres inmortales con habilidades superhumanas aparentemente ilimitadas. Antiguamente adorados como dioses, estos seres fantásticos han estado compartiendo el planeta con los humanos, pero sus increíbles hazañas los hicieron entrar en la historia como leyendas o fantasías. Ellos son los Eternos, y son apenas una parte de toda una mitología cósmica."},
{nombre:"Harry Potter Y La Piedra Filosofal", id:5,precio:3500,img:"https://i.imgur.com/KayKswA.jpg",
descripcion:""},
{nombre:"Harry Potter Y La Camara De Los Secretos", id:6,precio:3750,img:"https://i.imgur.com/0eLIFA1.jpg",
descripcion:""},
{nombre:"Harry Potter Y El Prisionero De Azkabhan", id:7,precio:4500,img:"https://i.imgur.com/8LpGnnq.jpg",
descripcion:""},
];


  useEffect(() => {
    const getProductos = async () => {
      try {
        setProducto(detallesDeProductos[id]);
      } catch {
        console.log("error");
      } finally {
        console.log("se termino el useEffect de item list container");
        setCargando(false);
      }
    };
    getProductos();
}, [id]);


console.log("log de productos en items details container "+producto);
  return (
    <>
      <h1>{greeting}</h1>
      {<>{cargando ? <h1>Cargando...</h1> : <ItemDetail producto={producto} />}</>}
    </>
  );
};