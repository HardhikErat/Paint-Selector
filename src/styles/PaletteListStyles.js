import mediaQuery from '../helpers/getMediaQuery'
export default {
    root: {
        overflow:"auto",
        overflowX:"hidden",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        background: "#2980b9 url('https://static.tumblr.com/03fbbc566b081016810402488936fbae/pqpk3dn/MRSmlzpj3/tumblr_static_bg3.png') repeat 0 0",
        animation: `$animate 10s infinite linear`,
    },

    "@keyframes animate": {
        from: {backgroundPosition:"0 0"},
        to: {backgroundPosition: "500px 0"}
    },
    container: {
        width: "50%",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent:"center",
        alignItems:"center",
        [mediaQuery.size("xl")]:{
            width: "75%"
        },
        [mediaQuery.size("xs")]:{
            width: "80%"
        },
    },
    palettes: {
        boxSizing: "border-box",
        width: "90%",
        display: "inline-grid",
        gridTemplateColumns: "repeat(3,33%)",
        gridGap: "1rem",
        [mediaQuery.size("md")]:{
            gridTemplateColumns: "repeat(2,50%)",
        },
        [mediaQuery.size("xs")]:{
            gridTemplateColumns: "repeat(1,100%)",
            gridGap: "1rem",
        },
    },
    nav: {
        color: "white",
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        "& a":{
            color: "white",
            "&:hover":{
                color: "lightgray"
            },
        },
       
    }
};