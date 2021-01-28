import mediaQuery from '../helpers/getMediaQuery'

export default {
	palette: {
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		overflow: "hidden"
	},
	paletteColors: {
		height: "90%",
		display: "flex",
		overflow: "hidden",
		flexWrap: "wrap",
		alignItems: "flex-start",
		justifyContent: "flex-start",
		flex: "1",
		[mediaQuery.size("lg")]:{
			overflowY: "scroll",
			width:"100%"
        },
    },
	goBack: {
		width: "20%",
		height: "50%",
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
		marginBottom: "-3.5px",
		opacity: 1,
		backgroundColor: "black",
		"& button": {
            cursor: "pointer",
            width: "100px",
            height: "30px",
            position: "absolute",
			display: "inline-block",
			top: "50%",
			left: "50%",
			marginLeft: "-50px",
			marginTop: "-15px",
            background: "rgba(255, 255, 255, 0.3)",
            color: "white",
            fontSize: "1rem",
            textAlign: "center",
			lineHeight: "30px",
			textTransform: "uppercase",
            border: "none",
            outline: "none",
			textDecoration: "none",
		},
		[mediaQuery.size("lg")]:{
			width: "25%",
      		height: "33.3333%"
		},
		[mediaQuery.size("md")]:{
			width: "50%",
			height: "20%"
		},
		[mediaQuery.size("xs")]:{
			width: "100%",
			height: "10%"
        },
	},
};
