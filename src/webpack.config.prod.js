const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const commonPaths = require("./paths");

module.exports = {
	mode: "production",
	output: {
		filename: `${commonPaths.jsFolder}/[name].[hash].js`,
		path: commonPaths.outputPath,
		chunkFilename: "[name].[chunkhash].js",
	},
	module: {
		rules: [
			{
				test: /\.(css|scss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
							modules: true,
							camelCase: true,
							localIdentName: "[local]___[hash:base64:5]",
						},
					},
					"sass-loader",
				],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin([commonPaths.outputPath.split("/").pop()], {
			root: commonPaths.root,
		}),
		new MiniCssExtractPlugin({
			filename: `${commonPaths.cssFolder}/[name].css`,
			chunkFilename: "[id].css",
		}),
		new HtmlWebpackPlugin({
			template: commonPaths.templatePath,
			minify: {
				removeComments: true,
				minifyCSS: true,
				minifyJS: true,
				collapseWhitespace: true,
			},
		}),
		new DuplicatePackageCheckerPlugin({
			// Also show module that is requiring each duplicate package (default: false)
			verbose: true,
			// Emit errors instead of warnings (default: false)
			emitError: false,
			// Show help message if duplicate packages are found (default: true)
			showHelp: true,
			// Warn also if major versions differ (default: true)
			strict: true,
			/**
			 * Exclude instances of packages from the results.
			 * If all instances of a package are excluded, or all instances except one,
			 * then the package is no longer considered duplicated and won't be emitted as a warning/error.
			 * @param {Object} instance
			 * @param {string} instance.name The name of the package
			 * @param {string} instance.version The version of the package
			 * @param {string} instance.path Absolute path to the package
			 * @param {?string} instance.issuer Absolute path to the module that requested the package
			 * @returns {boolean} true to exclude the instance, false otherwise
			 */
		}),
	],
};
