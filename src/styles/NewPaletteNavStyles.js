import mediaQuery from '../helpers/getMediaQuery'

const drawerWidth = 240;

export default {
  root: {
    display: "flex",
    backgroundColor: "white"
  },
  hide: {
    display: "none"
  },
  navBar: {
    backgroundColor:"white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
   
  },
  navBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    [mediaQuery.size("xs")]: {
      display: "flex",
      flexDirection: "column",
      height:"120px"
    }
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
 navBtns:{
    "& a":{
        textDecoration:"none",        
    },
    [mediaQuery.size("xs")]: {
      display: "flex",
      flexDirection: "row"
    }
 },
  button: {
    margin: "0 0.5rem",
    textTransform: "capitalize",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    [mediaQuery.size("sm")]: {
      margin: "0 0.2rem",
      padding: "0.3rem"
    },
    [mediaQuery.size("xs")]: {
      margin: "0.5rem 0.5rem",
      padding: "0.3rem"
    }
    
},
};

