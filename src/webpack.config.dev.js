const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const commonPaths = require("./paths");

module.exports = {
	mode: "development",
	output: {
		filename: "[name].js",
		path: commonPaths.outputPath,
		chunkFilename: "[name].js",
		publicPath: "/",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts)$/,
				use: ["source-map-loader"],
				enforce: "pre",
			},
			{
				test: /\.(css|scss)$/,
				use: [
					"style-loader",
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
		new HtmlWebpackPlugin({
			template: commonPaths.templatePath,
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
	devtool: "source-map",
	devServer: {
		compress: true,
		historyApiFallback: true,
		hot: true,
	},
};
