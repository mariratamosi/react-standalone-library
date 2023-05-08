const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  /*In the entry field of the webpack.config.js file,
  * specify the path to the wrapper file that instantiates and appends the component to the DOM.*/
  entry: './src/MyComponentWrapper.js',

  /*In the output field of the webpack.config.js file,
  * specify the path and filename for the bundled JavaScript file that will contain your component and
  * its dependencies. Also, specify the library and libraryTarget options to make the component available
  * as a standalone module.*/
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 's-chat.min.js',
    library: 'SChat',
    libraryTarget: 'umd',
  },
  module: {
    /*In the module field of the webpack.config.js file,
    * add a rule for JavaScript files that uses the babel-loader to transpile
    * your component code to ES5-compatible JavaScript.*/
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
      /*In the plugins field of the webpack.config.js file,
      * add an instance of the HtmlWebpackPlugin plugin to generate an HTML file that
      * includes the bundled JavaScript file.*/
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  externals: { 's-chat': 's-chat' },
};
