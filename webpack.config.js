const HtmlWebpackPlugin = require("html-webpack-plugin"),
    path = require("path");

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: {loader: "babel-loader"}
            },
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            }
        ]
    },
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "/dist")
    },
    plugins: [new HtmlWebpackPlugin({template: "./src/index.html"})]
}