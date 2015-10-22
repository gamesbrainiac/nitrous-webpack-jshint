module.exports = {

  entry: "./index.js",

  output: {
    filename: "bundle.js"
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: "node_modules",
        loader: "jshint-loader"
      }
    ]
  },

  watch: true
}
