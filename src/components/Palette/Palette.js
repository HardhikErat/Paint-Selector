import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
import { withStyles } from "@material-ui/styles";
import styles from '../../styles/PaletteStyles'

import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			colorLevel: 500,
			colorFormat: "hex",
		};
		this.changeColorLevel = this.changeColorLevel.bind(this);
		this.changeColorFormat = this.changeColorFormat.bind(this);
	}
	changeColorLevel(newColorLevel) {
		this.setState({ colorLevel: newColorLevel });
	}
	changeColorFormat(val) {
		this.setState({ colorFormat: val });
	}
	render() {
		let { palette, classes } = this.props;
		let { colorLevel, colorFormat } = this.state;

		const colorBoxes = palette.colors[colorLevel].map((color) => (
			
			<ColorBox
				key={color.id}
				palette={palette}
				backgroundColor={color[colorFormat]}
				colorName={color.name}
				colorID={color.id}
				showFullPalette={true}
			/>
		));
		return (
			<div className={classes.palette}>
				<Navbar
					changeColorLevel={this.changeColorLevel}
					changeColorFormat={this.changeColorFormat}
					colorLevel={this.state.colorLevel}
					showSlider={true}
					showColorFormatSelector={true}
				/>

				<div className={classes.paletteColors}>{colorBoxes}</div>

				<Footer
					paletteName={palette.paletteName}
					paletteEmoji={palette.emoji}
				/>
			</div>
		);
	}
}

export default withStyles(styles)(Palette);
