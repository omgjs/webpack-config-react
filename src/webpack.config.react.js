const webpackMerge = require("webpack-merge");
const common = require("./webpack.config.common");

const envs = {
	development: "dev",
	production: "prod",
};
/* eslint-disable global-require,import/no-dynamic-require,no-console */
const env = envs[process.env.NODE_ENV || "development"];
console.log(`Webpack config is using ${process.env.NODE_ENV} environment`);
const envConfig = require(`./webpack.config.${env}`);
module.exports = webpackMerge(common, envConfig);
