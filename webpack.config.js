const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = process.env.NODE_ENV || "development";
let target = process.env.NODE_ENV === "production" ? "browserslist" : "web";

// if (process.env.NODE_ENV === "production") {
//   mode = "production";
//   target = "browserslistrc";
// }

module.exports = {
  mode: mode,
  target: target,

  output: {
    assetModuleFilename: "images/[hash][ext][query]",
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin()],

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devtool: "source-map",
  devServer: {
    // contentBase: "./dist",
    static: "./dist",
    hot: true,
  },
};
