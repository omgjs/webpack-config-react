const path = require("path");

module.exports = {
	root: path.resolve("./"),
	outputPath: path.resolve("build"),
	entryPath: path.resolve(process.env.ENTRY_FILE || "src/App.jsx"),
	templatePath: path.resolve(process.env.TEMPLATE_FILE || "src/index.html"),
	imagesFolder: "assets/images",
	fontsFolder: "assets/fonts",
	cssFolder: "assets/css",
	jsFolder: "",
};
