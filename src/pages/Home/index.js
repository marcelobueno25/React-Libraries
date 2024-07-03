import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button } from "@mui/material";
import "./styles.scss";

const Home = () => {
  return (
    <div className="home">
      <Grid container spacing={5}>
        <Grid item>
          <Link to="/exemplo01">
            <Button variant="contained">Elixir do Amor</Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/exemplo02">
            <Button variant="contained">Framer</Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/exemplo03">
            <Button variant="contained">Mesh 3D - 1</Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/exemplo04">
            <Button variant="contained">Mercedes 3D</Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/exemplo05">
            <Button variant="contained">Mesh 3D - 2</Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/mapa">
            <Button variant="contained">Mapa</Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
