const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { config } = require("dotenv");

config();

module.exports = {
  entry: [path.join(path.resolve(__dirname, "src/"), "mounter.tsx")],
  output: {
    filename: "bundle.app.js",
    chunkFilename: "chunk-[name]-bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(path.resolve(__dirname, "src/"), "index.html"),
    }),
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(png|jpeg|jpg|svg|webp)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "resources/images/",
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "resources/fonts/",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  devServer: {
    historyApiFallback: true,
  },
  mode: "development",
};
