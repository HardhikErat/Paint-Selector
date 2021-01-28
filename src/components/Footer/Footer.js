import { withStyles } from "@material-ui/core";
import React, { Component } from "react";
import styles from "../../styles/FooterStyles";

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		let { paletteName, paletteEmoji, classes } = this.props;
		return (
			<div className={classes.Footer}>
				<span className={classes.paletteName}>{paletteName}</span>
				<span>{paletteEmoji}</span>
			</div>
		);
	}
}

export default withStyles(styles)(Footer);
