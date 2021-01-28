import React from "react";
import "./App.css";
import Palette from "./components/Palette/Palette";
import seedColorPalettes from "./seedColorPalettes";
import { generatePalette } from "./helpers/generatePalette";
import { Switch, Route } from "react-router-dom";
import { Component } from "react";
import PaletteList from "./components/PaletteList/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette/SingleColorPalette";
import NewPalette from "./components/NewPalette/NewPalette";

class App extends Component {
	constructor(props) {
		super(props);
		const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
		this.state = { palettes: savedPalettes || seedColorPalettes };
		this.savePalette = this.savePalette.bind(this);
		this.deletePalette = this.deletePalette.bind(this);
	}

	findPalette(id) {
		return this.state.palettes.find(function (palette) {
			return palette.id === id;
		});
	}
	savePalette(newPalette) {
		this.setState({ palettes: [...this.state.palettes, newPalette] }, () =>
			window.localStorage.setItem(
				"palettes",
				JSON.stringify(this.state.palettes)
			)
		);
	}
	deletePalette(id) {
		this.setState({palettes: this.state.palettes.filter((palette) => palette.id !== id)}, () =>
			window.localStorage.setItem(
				"palettes",
				JSON.stringify(this.state.palettes)
			)
		);
	}
	render() {
		const { palettes } = this.state;
		return (
			<div className="App">
				<Switch>
					<Route
						exact
						path="/paint-selector"
						render={(routeProps) => (
							<PaletteList
								list={palettes}
								{...routeProps}
								deletePalette={this.deletePalette}
							/>
						)}
					/>
					<Route
						exact
						path="/paint-selector/palette/new"
						render={(routeProps) => (
							<NewPalette
								palettes={palettes}
								savePalette={this.savePalette}
								{...routeProps}
							/>
						)}
					/>
					<Route
						exact
						path="/paint-selector/palette/:id"
						render={(routeProps) => (
							<Palette
								palette={generatePalette(
									this.findPalette(routeProps.match.params.id)
								)}
							/>
						)}
					/>
					<Route
						exact
						path="/paint-selector/palette/:paletteID/:colorID"
						render={(routeProps) => (
							<SingleColorPalette
								colorID={routeProps.match.params.colorID}
								palette={generatePalette(
									this.findPalette(routeProps.match.params.paletteID)
								)}
							/>
						)}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
