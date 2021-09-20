const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Restaurant Page",
      inject: "body",
      templateContent: ({ htmlWebpackPlugin }) => `
      <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Restaurant Page</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="developedbygeo" content="Restaurant Menu">
  </head>
  <body>
      <main class="main"></main>
  </body>
</html>`,
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
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
