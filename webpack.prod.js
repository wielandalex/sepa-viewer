const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    plugins: [
        new WorkboxWebpackPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        })
    ]
})
