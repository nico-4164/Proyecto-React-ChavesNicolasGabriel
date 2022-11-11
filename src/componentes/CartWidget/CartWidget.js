import React, { useContext } from "react";

import { Context } from "../../context/CustomContext";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CartWidget = () =>{
    const { total, qty } = useContext(Context);
    return (
      <>
        <h4>{qty}</h4>
        <ShoppingCartIcon color="primary" fontSize="large" />
      </>
    );
}