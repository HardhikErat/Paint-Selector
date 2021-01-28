import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import getTextColor from '../../helpers/getTextColor'
import { withStyles } from "@material-ui/styles";
import styles from '../../styles/ColorBoxStyles'
import classNames from "classnames";

class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isCopied: false,
		};
		this.showOverlay = this.showOverlay.bind(this);
	}
	showOverlay() {
		this.setState({ isCopied: true });
		setTimeout(() => {
			this.setState({ isCopied: false });
		}, 1000);
	}
	render() {
		let { backgroundColor, colorName, colorID, palette, showFullPalette, classes } = this.props;
		let { isCopied } = this.state;

		return (
			<CopyToClipboard text={backgroundColor} onCopy={this.showOverlay}>
				<div style={{ background: backgroundColor }} className={classes.ColorBox}>
					<div
						style={{ background: backgroundColor }}
						className={classNames(classes.copyOverlay, {[classes.showOverlay]: isCopied})}
					/>
					<div className={classNames(classes.copyMessage, {[classes.showMessage]: isCopied})}>
						<h1 style={{color : getTextColor(backgroundColor)}} >Copied!</h1>
						<p style={{color : getTextColor(backgroundColor)}}>{backgroundColor}</p>
					</div>

					<div>
						<button style={{color : getTextColor(backgroundColor)}} className={classes.copyBtn}>Copy</button>
					</div>
					<div className={classes.description}>
						<span style={{color : getTextColor(backgroundColor)}}>
							{colorName} 
						</span>
					</div>
					{showFullPalette && (
						<Link
							to={`/paint-selector/palette/${palette.id}/${colorID}`}
							onClick={(e) => e.stopPropagation()}
						>
							<span style={{color:getTextColor(backgroundColor)}} className={classes.moreBtn}>More</span>
						</Link>
					)}
				</div>
			</CopyToClipboard>
		);
	}
}

export default withStyles(styles) (ColorBox);
