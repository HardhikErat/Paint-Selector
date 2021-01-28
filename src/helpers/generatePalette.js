import chroma from "chroma-js";
const colorLevels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(input) {

	let newPalette = {
		paletteName: input.paletteName,
		id: input.id,
		emoji: input.emoji,
		colors: {},
	};
	for (let level of colorLevels) {
		newPalette.colors[level] = [];
	}
	for (let color of input.colors) {
		let scale = generateScale(color.color, 10).reverse();

		for (let i in scale) {
			newPalette.colors[colorLevels[i]].push({
				name: `${color.name} ${colorLevels[i]}`,
				id: color.name.toLowerCase().replace(/ /g, "-"),
				hex: scale[i],
				rgb: chroma(scale[i]).css(),
				rgba: chroma(scale[i])
					.css()
					.replace("rgb", "rgba")
					.replace(")", ",1.0)"),
			});
		}
	}
	return newPalette;
}
function getRange(hexInput) {
	const end = "#fff";
	return [chroma(hexInput).darken(1.4).hex(), hexInput, end];
}
function generateScale(hexColor, numColors) {
	return chroma.scale(getRange(hexColor)).mode("lab").colors(numColors);
}

export { generatePalette };
