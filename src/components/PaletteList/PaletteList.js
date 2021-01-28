import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { Component } from "react";
import MiniPalette from "../MiniPalette/MiniPalette";
import styles from "../../styles/PaletteListStyles";

class PaletteList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDialogOpen : false,
			paletteToDelete : ""
		};
		this.handleDialogOpen = this.handleDialogOpen.bind(this)
		this.handleDialogClose = this.handleDialogClose.bind(this)
		this.handleDeletion = this.handleDeletion.bind(this)
	}
	
	goToPalette(id) {
		this.props.history.push(`/Paint-Selector/palette/${id}`);
	}
	handleDeletion() {
		const {paletteToDelete} = this.state
		this.props.deletePalette(paletteToDelete);
		this.handleDialogClose()
	}
	handleDialogOpen(id){
		this.setState({ isDialogOpen : true, paletteToDelete: id });
	}
	handleDialogClose(){
		this.setState({ isDialogOpen : false, paletteToDelete : "" });		
	}

	render() {
		let { list, classes } = this.props;
		const {isDialogOpen} = this.state

		const paletteList = list.map((palette) => (
			<MiniPalette
				key={palette.id}
				{...palette}
				goToPalette={() => this.goToPalette(palette.id)}
				deletePalette = {() => this.handleDialogOpen(palette.id)}
			/>
		));
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1>Paint Selector</h1>
						<Link to="/Paint-Selector/palette/new">
							<span>Create Palette</span>
						</Link>
					</nav>
					<div className={classes.palettes}>{paletteList}</div>
				</div>

				<Dialog
					open={isDialogOpen}
					onClose={this.handleDialogClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">
						{"Are you sure you want to delete this palette?"}
					</DialogTitle>
				
					<DialogActions>
						<Button onClick={this.handleDialogClose} color="secondary">
							Disagree
						</Button>
						<Button onClick={this.handleDeletion} color="primary" >
							Agree
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
