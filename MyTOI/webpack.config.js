var webpack = require('webpack');

module.exports = {
  devtool: "eval",
  entry: {
    app: [
      "webpack-dev-server/client?http://localhost:8080",
      "webpack/hot/only-dev-server",
      "./src/scripts/main.js"
    ]
  },
  output: {
    path: "./build",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    modulesDirectories: ['node_modules'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "react-hot!babel",
        exclude: /node_modules/
      },

      {
        test: /\.css$/,
        loader: "style!css"
      },

      {
        test: /\.(html|png)$/,
        loader: "file?name=[path][name].[ext]&context=./src"
      }
    ]
  }
};
