import Item from '../Item/Item'
import React from 'react'

const ItemList = ({ productos }) => {

    console.log("mensaje en item list ");
    console.log(productos)
    
    return (
        <div style={styles.container}>
            {productos.map((producto) =>
                <Item key={producto.id} producto={producto} />
            )}
        </div>
    )
}

const styles = {
    container:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
      color:"white",
    }
  }

export default ItemList