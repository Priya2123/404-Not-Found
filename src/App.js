import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { useStyles } from "./AppStyles.js";
import scarecrow from './assets/Scarecrow.png';

const App = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container lg={12} md={12} style={{ marginTop: "1rem" }}>
        <Grid item lg={12} md={12}>
          <Typography className={classes.nav}>404 NOT FOUND</Typography>
        </Grid>
      </Grid>
      <Grid container lg={12} md={12} style={{marginTop: '5rem'}}>
        <Grid item lg={6} md={6}>
          <img src={scarecrow} className={classes.image} alt="scarecrow"/>
        </Grid>
        <Grid item lg={6} md={6}>
          <Typography className={classes.headone}>I have bad news for you</Typography>
          <Typography className={classes.body}>The page you are looking for might be removed or is temporarily unavailable</Typography>
          <Button>BACK TO HOMEPAGE</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
