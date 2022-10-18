import React from "react";
import Card from "@mui/material/Card";
import {CardContent,CardMedia,Typography,Button,CardActionArea,CardActions,} from "@mui/material";
import { Link, NavLink } from "react-router-dom";

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
          <Typography variant="body2" color="text.secondary">
            ${producto.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
            <NavLink to={"producto/"+producto.id}>
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
    backgroundColor: "rgba(249, 220, 92, 0.3)",
  },
  title: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: 100,
  },
};

export default Item;