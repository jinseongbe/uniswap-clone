const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval",
  devServer: {
    historyApiFallback: true,
    port: 3002,
    hot: true,
  },
});
