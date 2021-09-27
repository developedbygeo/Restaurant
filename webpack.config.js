const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  devtool: "source-map",
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/img/grilled", to: "./grilled" },
        { from: "./src/img/light", to: "./light" },
        { from: "./src/img/map", to: "./map" },
        { from: "./src/img/starters", to: "./starters" },
        { from: "./src/img/wines", to: "./wines" },
      ],
    }),
    new HtmlWebpackPlugin({
      title: "Restaurant Page",
      favicon: "./src/favicon/favicon-96x96.png",
      inject: "body",
      template: "./src/index.html",
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "assets/[name]-[hash:3].[ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.(s(a|c)ss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
