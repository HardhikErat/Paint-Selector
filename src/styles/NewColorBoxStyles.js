import mediaQuery from '../helpers/getMediaQuery'

const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        [mediaQuery.size("lg")]: {
            width: "25%",
            height: "20%"
          },
          [mediaQuery.size("md")]: {
            width: "50%",
            height: "10%"
          },
          [mediaQuery.size("sm")]: {
            width: "100%",
            height: "5%"
          }
    },
    content:{
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems:"center",
        "& span":{
            padding:"5px"
        }
        
    },
    deleteIcon: {
        transition: "all 0.3s ease-in-out",
        padding:"5px",
        "&:hover": {
            transform: "scale(1.5)"
          },
      }
}

export default styles;