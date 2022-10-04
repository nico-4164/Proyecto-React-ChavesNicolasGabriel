import { Button } from "@mui/material";
import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CartWidget = () =>{
    return(
        <button>
            <ShoppingCartIcon fontSize="large"/>
        </button>
    )
}