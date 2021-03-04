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
    [theme.breakpoints.down("xs")]: {
        fontSize: "22px",
        marginLeft: '0'
      },
  },
  image: {
    height: "350px",
    width: "480px",
    [theme.breakpoints.down("xs")]: {
        height: "200px",
        width: "290px",
        marginLeft: '0',
        marginBottom: '3rem'
      },
  },
  headone: {
    fontFamily: "Space Mono",
    fontWeight: "bold",
    fontSize: "52px",
    fontStyle: "normal",
    letterSpacing: "-0.035em",
    color: "#333333",
    [theme.breakpoints.down("xs")]: {
       fontSize:'40px'
      },
  },
  body: {
    fontFamily: "Space Mono",
    fontSize: "20px",
    fontWeight: "normal",
    letterSpacing: "-0.035em",
    width: "22rem",
    marginTop: "1rem",
    color: "#4F4F4F",
    [theme.breakpoints.down("xs")]: {
        fontSize:'17px',
        width:'100%'
       },
  },
  btn: {
    backgroundColor: "#333333",
    color: "#fff",
    padding: "0.8rem 2rem",
    marginTop: "2.5rem",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
        padding: '0.7rem 1.7rem',
       },
  },
  btntext: {
    color: "#FFFFFF",
    fontFamily: "Space Mono",
    fontStyle: "normal",
    fontWeight: "bold",
    letterSpacing: "-0.035em",
    fontSize: "12px",
  },
  footerrow: {
    color: "#BDBDBD",
    textAlign: "center",
    // position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    [theme.breakpoints.down("xs")]: {
      padding: "1rem 0",
    },
  },
  footer: {
    fontFamily: "Montserrat",
    fontWeight: "500",
    fontSize: "14px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
  },
  link: {
    color: "grey",
    textDecoration: "none",
  },
}));
