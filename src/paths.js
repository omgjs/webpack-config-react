const path = require("path");

module.exports = {
	root: path.resolve("./"),
	outputPath: path.resolve("build"),
	entryPath: path.resolve(process.env.ENTRY_FILE || "src/App.jsx"),
	templatePath: path.resolve(process.env.TEMPLATE_FILE || "src/index.html"),
	faviconPath: path.resolve(process.env.FAVICON_LOGO_FILE || "src/favicon.png"),
	imagesFolder: "assets/images",
	fontsFolder: "assets/fonts",
	cssFolder: "assets/css",
	jsFolder: ".",
};
