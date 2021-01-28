import React, { Component } from "react";
import { Link } from "react-router-dom";
import ColorBox from "../ColorBox/ColorBox";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { withStyles } from "@material-ui/styles";
import styles from "../../styles/PaletteStyles";

class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this.state = { colorFormat: "hex" };

		this._shades = this.gatherShades(this.props.palette, this.props.colorID);
		this.changeColorFormat = this.changeColorFormat.bind(this);
		console.log(this._shades);
	}
	gatherShades(palette, selectedColor) {
		let shades = [];
		let allColors = palette.colors;
		for (const key in allColors) {
			shades = shades.concat(
				allColors[key].filter((color) => color.id === selectedColor)
			);
		}
		return shades.slice(1);
	}
	changeColorFormat(val) {
		this.setState({ colorFormat: val });
	}
	render() {
		const { colorFormat } = this.state;
		const { palette, classes } = this.props;
		const colorBoxes = this._shades.map((color) => (
			<ColorBox
				key={color.name}
				backgroundColor={color[colorFormat]}
				colorName={color.name}
				showFullPalette={false}
			/>
		));
		return (
			<div className={classes.palette}>
				<Navbar
					changeColorFormat={this.changeColorFormat}
					showSlider={false}
					showColorFormatSelector={true}
				/>
				<div className={classes.paletteColors}>
					{colorBoxes}
					<div className={classes.goBack}>
						<Link
							to={`/Paint-Selector/palette/${palette.id}`}
							onClick={(e) => e.stopPropagation()}
						>
							<div>
								<button>Go Back</button>
							</div>
						</Link>
					</div>
				</div>
				<Footer
					paletteName={palette.paletteName}
					paletteEmoji={palette.emoji}
				/>
			</div>
		);
	}
}

export default withStyles(styles)(SingleColorPalette);
