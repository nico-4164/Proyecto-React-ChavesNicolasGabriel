import React from "react";
import Card from "@mui/material/Card";
import {CardContent,CardMedia,Typography,Button,CardActionArea,CardActions,} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { withTheme } from "@emotion/react";

const Item = ({ producto }) => {
  return (
    <Card sx={{ maxWidth: 345 }} style={styles.container}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={producto.img}
          alt={producto.nombre}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={styles.nombre}
          >
            {producto.nombre}
          </Typography>
          <Typography variant="body2" color="white">
            ${producto.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
            <NavLink to={"producto/"+producto.id} color="white">
            Ver Detalles
            </NavLink>
        </Button>
      </CardActions>
    </Card>
  );
};

const styles = {
  container: {
    width: window.innerHeight > 900 ? "25%" : "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: "#3D67E3",
    color:"white",
  },
  title: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: 100,
  },
};

export default Item;