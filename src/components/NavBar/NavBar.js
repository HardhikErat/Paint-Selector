import React, { Component } from "react";
import { Select, MenuItem } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { withStyles } from "@material-ui/styles";
import styles from "../../styles/NavbarStyles";
import logo from "../../images/logo.png";

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colorFormat: "hex",
			snackBarOpen: false,
		};
		this.handleColorFormatChange = this.handleColorFormatChange.bind(this);
		this.openSnackBar = this.openSnackBar.bind(this);
		this.closeSnackBar = this.closeSnackBar.bind(this);
	}

	openSnackBar() {
		this.setState({ snackBarOpen: true });
	}
	closeSnackBar() {
		this.setState({ snackBarOpen: false });
	}

	handleColorFormatChange(evt) {
		this.setState({ colorFormat: evt.target.value });
		this.props.changeColorFormat(evt.target.value);
		this.openSnackBar();
	}
	render() {
		let {
			colorLevel,
			changeColorLevel,
			showSlider,
			showColorFormatSelector,
			classes,
		} = this.props;
		return (
			<div className={classes.NavBar}>
				<div className={classes.NavBarLogo}>
					<img src={logo} alt="paint selector logo" />
					<a href="/paint-Selector">Paint Selector</a>
				</div>
					{showSlider && (
						<div className={classes.sliderContainer}>
							<span>Level: {colorLevel}</span>
							<div className={classes.paletteSlider}>
								<Slider
									defaultValue={colorLevel}
									min={100}
									max={900}
									step={100}
									onAfterChange={changeColorLevel}
								/>
							</div>
							<div>
								<button><a href='../'>Go Back</a></button><br></br>
							</div>
						</div>
					)}
					{showColorFormatSelector && (
						<div className={classes.selectContainer}>
							<Select
								value={this.state.colorFormat}
								onChange={this.handleColorFormatChange}
							>
								<MenuItem value="hex">HEX - #ffff</MenuItem>
								<MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
								<MenuItem value="rgba">
									RGBA - rgba(255, 255, 255, 0.2)
								</MenuItem>
							</Select>
						</div>
					)}

				<Snackbar
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left",
					}}
					open={this.state.snackBarOpen}
					autoHideDuration={2000}
					onClose={this.closeSnackBar}
					message="Color Format Changed"
					action={
						<React.Fragment>
							<Button
								color="secondary"
								size="small"
								onClick={this.closeSnackBar}
							>
								CLOSE
							</Button>
						</React.Fragment>
					}
				/>
			</div>
		);
	}
}

export default withStyles(styles)(NavBar);
