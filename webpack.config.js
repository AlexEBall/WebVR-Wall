const path = require('path');
const webpack = require('webpack');

module.exports = {
 entry: './src/index.js',
 output: {
  path: path.join(__dirname, 'src'),
  filename: 'bundle.js'
 },
 module: {
  loaders: [{
   test: /.jsx?$/,
   loader: 'babel-loader',
   exclude: /node_modules/,
   query: {
    presets: ['es2015', 'react']
   }
  },
  {
   test: /\.css$/,
   loader: "style-loader!css-loader"
  }]
 }
}


// entry point of our application === index.js 

