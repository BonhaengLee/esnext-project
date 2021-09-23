const path = require("path");

module.exports = {
    entry: "./src/main.js",

    output: {
        path: path.resolve(__dirname, "dist/js"),
        filename: "bundle.js",
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, "src/js")],
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        // plugins: ['@babel/plugin-proposal-class']
                    },
                },
            },
        ],
    },

    devtool: "source-map",

    mode: "development",
};
