const path = require('path');


module.exports = {
  devtool: 'source-map',
  entry: './frontend/index.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
                test: /\.js$/,
                use: [
                  {
                    loader: 'babel-loader',
                    options: {
                      presets: ['es2015']
                    }
                  }
                ]
              }
    
    ]
  }
};