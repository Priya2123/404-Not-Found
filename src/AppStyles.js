import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  nav: {
    fontFamily: "Inconsolata",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    letterSpacing: "-0.08em",
    color: "#333333",
    marginLeft: "3rem",
  },
  image: {
    height: "390px",
    width: "520px",
    marginLeft: "3rem",
  },
  headone: {
    fontFamily: "Space Mono",
    fontWeight: "bold",
    fontSize: "58px",
    fontStyle: "normal",
    letterSpacing: "-0.035em",
  },
  body: {
    fontFamily: "Space Mono",
    fontSize: "22px",
    fontWeight: "normal",
    letterSpacing: "-0.035em",
    width:'22rem',
    marginTop: '1rem'
  },
}));
