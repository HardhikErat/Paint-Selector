import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { withStyles } from "@material-ui/core";
import styles from '../../styles/PaletteNameFormStyles'

class PaletteNameForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newPaletteName: "",
		};
		this.handleFormChange = this.handleFormChange.bind(this);
		this.handleSavePalette = this.handleSavePalette.bind(this);
	}
	componentDidMount() {
		ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
			this.props.palettes.every(
				({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
			)
		);
	}
	handleFormChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}
	handleSavePalette() {

		this.props.submitPalette(this.state.newPaletteName);
	}
	render() {
		const { openDialog, closeDialog, classes } = this.props;
		const { newPaletteName } = this.state;
		return (
			<div className="PaletteNameForm">
				<Dialog
					open={openDialog}
					onClose={closeDialog}
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle id="form-dialog-title">Palette Name</DialogTitle>
					<ValidatorForm
							ref="form"
							onSubmit={this.handleSavePalette}
							instantValidate={false}
						>
					<DialogContent>
						<DialogContentText>
							Enter a title for your palette that best represents the colors you
							chose
						</DialogContentText>
							<TextValidator
								className={classes.paletteNameInput}
								onChange={this.handleFormChange}
								variant="filled"
								margin="normal"
								name="newPaletteName"
								value={newPaletteName}
								validators={["required", "isPaletteNameUnique"]}
								errorMessages={["This field is required", "Palette name taken"]}
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={closeDialog} color="primary">
								Cancel
							</Button>
							<Button type="submit" color="primary">
								Save
							</Button>
						</DialogActions>
					</ValidatorForm>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles) (PaletteNameForm);
