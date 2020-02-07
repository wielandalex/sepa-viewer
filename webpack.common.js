const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index.js"
    },
    plugins: [
        new CleanWebpackPlugin(["public"]),
        new HtmlWebpackPlugin({
            title: "SEPA Viewer",
            template: "./src/index.html"
        })
    ],
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "public")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ]
    },
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    }
};
