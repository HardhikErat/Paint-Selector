import mediaQuery from '../helpers/getMediaQuery'

export default {
	NavBar: {
		display: "flex",
		alignItems: "center",
		height: "6vh",
		"& a": {
			fontWeight: "bold",
		},
		[mediaQuery.size("xs")]: {
            flexDirection: "row",
            flexWrap:"wrap",
            height:"120px"
		},
	},
	NavBarLogo: {
		padding: "0 15px",
		fontSize: "1.5rem",
		marginRight: "1rem",
		display: "flex",
		alignItems: "center",
		borderRight: ".1px solid gray",
		"& a": {
			color: "black",
			paddingLeft: "10px",
			textDecoration: "none",
		},
		"& img": {
			width: "2em",
        },
        [mediaQuery.size("xs")]: {
            borderRight: "none",
            margin:"0 auto"
		},
    },
    sliderContainer:{
        [mediaQuery.size("sm")]: {
            width:"80%",
		},
        [mediaQuery.size("xs")]: {
            marginLeft: "1rem",
		},
    },
	paletteSlider: {
		width: "350px",
		margin: "0 10px",
		display: "inline-block",
		"& .rc-slider-track": {
			backgroundColor: "transparent",
		},
		"& .rc-slider-rail": {
			height: "8px",
		},
		"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
			border: "2px solid #03a2ec",
			outline: "none",
			backgroundColor: "#03a2ec",
        },
        [mediaQuery.size("sm")]: {
            width:"90%",
		},
        [mediaQuery.size("xs")]: {
            width:"100%",
		},

	},
	selectContainer: {
        marginRight: "1rem",
        marginLeft: "auto",
        [mediaQuery.size("xs")]: {
            marginLeft: "1rem",

		},
    },

};