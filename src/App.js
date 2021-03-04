import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { useStyles } from "./AppStyles.js";
import scarecrow from "./assets/Scarecrow.png";

const App = () => {
  const classes = useStyles();
  return (
    <>
      <Container fixed>
        <Grid container lg={12} md={12} style={{ marginTop: "1rem" }}>
          <Grid item lg={12} md={12}>
            <Typography className={classes.nav}>404 NOT FOUND</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          lg={12}
          md={12}
          xs={12}
          style={{ marginTop: "5rem" }}
          justify="center"
        >
          <Grid item lg={6} md={6} xs={12}>
            <img src={scarecrow} className={classes.image} alt="scarecrow" />
          </Grid>
          <Grid item lg={5} md={5} xs={11}>
            <Typography className={classes.headone}>
              I have bad news for you
            </Typography>
            <Typography className={classes.body}>
              The page you are looking for might be removed or is temporarily
              unavailable
            </Typography>
            <button className={classes.btn}>
              <Typography className={classes.btntext}>
                BACK TO HOMEPAGE
              </Typography>
            </button>
          </Grid>
        </Grid>
      </Container>
      <Grid
        container
        lg={12}
        md={12}
        xs={12}
        sm={12}
        className={classes.footerrow}
      >
        <Grid item lg={12} md={12} xs={12} sm={12}>
          <Typography className={classes.footer} variant="caption">
            created by{" "}
            <a
              className={classes.link}
              style={{ fontWeight: "bold" }}
              href="https://github.com/Priya2123"
            >
              Priya Aggarwal
            </a>{" "}
            -{" "}
            <a className={classes.link} href="https://devchallenges.io/">
              devchallenges.io
            </a>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
