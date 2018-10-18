const path = require("path");

module.exports = {
	root: path.resolve("./"),
	outputPath: path.resolve("build"),
	entryPath: path.resolve(process.env.ENTRY_FILE || "index.jsx"),
	templatePath: path.resolve("index.html"),
	imagesFolder: "assets/images",
	fontsFolder: "assets/fonts",
	cssFolder: "assets/css",
	jsFolder: "assets/js",
};
