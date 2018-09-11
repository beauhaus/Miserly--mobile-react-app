const path = require('path');
// /Users/beau/Desktop/TTS Money2/barebones-animated-route-transitions

console.log(path.join(__dirname, 'public'));

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },{
      test: /\.s?css$/,
      use: [
        'style-loader',
      'css-loader' 
    ],
  }]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
