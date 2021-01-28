const drawerWidth = 240;

const styles = theme => ({
	root: {
		display: "flex",
		overflowX:"none"
	},
	
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		height: "100vh",
	},
	drawerPaper: {
		width: drawerWidth,
		display: "flex",
		alignItems: "center",
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		width: "100%",
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
	},
	content: {
		flexGrow: 1,
		height: "calc(100vh - 64px)",
		padding: 0,
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
	container: {
		width: "90%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
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
		
	},

});
export default styles;
