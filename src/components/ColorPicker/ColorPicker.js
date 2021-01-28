import React, { Component } from "react";
import { ChromePicker, SketchPicker } from "react-color";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import classNames from "classnames";
import styles from "../../styles/ColorPickerStyles";

class ColorPicker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentColor: "#3f51b5",
			newColorName: "",
		};
		this.handleFormChange = this.handleFormChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClearPalette = this.handleClearPalette.bind(this);
	}
	componentDidMount() {
		ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
			this.props.colors.every(
				({ name }) => name.toLowerCase() !== value.toLowerCase()
			)
		);
		ValidatorForm.addValidationRule("isColorUnique", (value) =>
			this.props.colors.every(({ color }) => color !== this.state.currentColor)
		);
	}
	handleColorChange = (color) => {
		this.setState({ currentColor: color.hex });
	};
	handleFormChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}
	handleSubmit() {
		const newColor = {
			color: this.state.currentColor,
			name: this.state.newColorName,
		};
		this.props.addColor(newColor);
		this.setState({ newColorName: "" });
	}
	handleClearPalette() {
		console.log("clearing");
		this.props.clearPalette();
	}

	render() {
		let { classes, colors } = this.props;
		let { currentColor, newColorName } = this.state;
		const isPaletteFull = colors.length >= 20;
		return (
			<div className={classes.root}>
				<SketchPicker 
					color={this.state.currentColor}
					onChangeComplete={this.handleColorChange}
				/>
				<ValidatorForm
					ref="form"
					onSubmit={this.handleSubmit}
					instantValidate={false}
				>
					<div
						className={classes.colorBoxSample}
						style={{ backgroundColor: currentColor }}
					>
						<span>Sample Box</span>
					</div>

					<TextValidator
						className={classes.colorNameForm}
						label="Color Name"
						onChange={this.handleFormChange}
						variant="filled"
						margin="normal"
						name="newColorName"
						value={newColorName}
						validators={["required", "isColorNameUnique", "isColorUnique"]}
						errorMessages={[
							"This field is required",
							"Color name taken",
							"Color already used",
						]}
					/>

					<Button
						startIcon={<SaveIcon />}
						className={classes.button}
						variant="contained"
						type="submit"
						color="primary"
						disabled={isPaletteFull}
					>
						Add Color
					</Button>
					{isPaletteFull && (
						<Alert severity="info">You cannot add anymore colors - the palette is full</Alert>
					)}
				</ValidatorForm>
				<Button
					startIcon={<DeleteIcon />}
					className={classNames(classes.button, classes.clearBtn)}
					variant="contained"
					onClick={this.handleClearPalette}
				>
					Clear Palette
				</Button>
				{}
			</div>
		);
	}
}

export default withStyles(styles)(ColorPicker);
