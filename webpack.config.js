var webpack = require("webpack");

module.exports = {
  cache: true,
  entry: "./index.jsx",
  output: {
    path: __dirname + "/build",
    filename: "fluxxordemo.js",
  },
  devtool: "source-map",
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader" },
      { test: /\.jsx$/, loader: "jsx-loader" }
    ]
  }
};