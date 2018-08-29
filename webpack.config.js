
var path = require('path');

module.exports = {
  mode: "none",
  entry: "./app/assets/scripts/App.js",
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "App.js",
  },

/* Recommended code from npm documentation
module.exports = {
  mode: "none",
  entry: "./app/assets/scripts/App.js",
  output: {
    path: __dirname + "./app/temp/scripts",
    filename: "App.js"
  },
*/
module: {
rules: [
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }
]
}
}
/* Code from babel tutorial udemy

  module:{
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ['@babel/preset-env']
        },
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
      }
    ]

  }
*/
