const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require("webpack")

module.exports = {
  entry: {
      main:'./index.js'
    },
  devServer:{
      index:"index.html",
      publicPath: "/",

  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename:"[hash].js"
  },
  module:{
    rules:[
      {
        test: /\.vue$/,
        use:["vue-loader"]
      },
      {
        test:/\.css$/,
        use:["vue-style-loader","css-loader"]
      },
      {
        test:/\.js$/,
        use:["babel-loader"]
      },
      {
        test:/\.less$/,
        use:["vue-style-loader","css-loader","less-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use:[
            {
                loader:"url-loader",
                options:{
                  name:'[path][name].[ext]',
                  limit: 8192
                }
            }
          ]
      }

    ],
  },
  plugins:[
    new webpack.DefinePlugin({
      'env': JSON.stringify("environment"),
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true
      }),
  ]
}
