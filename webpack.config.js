const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./dist",
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|es6|jsx)$/,
                exclude: "/node_modules", 
                use: ["babel-loader"]
            },
            {
                test: /\.scss/,
                use: ["style-loader","css-loader","postcss-loader","sass-loader"]
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}