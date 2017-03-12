var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: "./src/js/app",
  output: {
    path: __dirname + "/dist",
    filename: "build.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader?presets[]=es2015'
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
        loader: 'file-loader'
      },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My ToDoList',
      filename: 'index.html',
      template: 'index.template.ejs',
      inject: 'body'
    })
  ],
  node: {
    fs: 'empty'
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    contentBase: __dirname + '/dist'
  }
}