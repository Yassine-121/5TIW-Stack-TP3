const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html", 
  filename: "./index.html"
});
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = (env, argv) => {
  console.log(argv.mode);
  return {
    entry: "/src/index.jsx",
    output: { // NEW
      path: path.join(__dirname, 'dist'),
      filename: "[name].js"
    }, // NEW Ends
    plugins: [htmlPlugin, new ESLintPlugin({})],
    mode: 'development',
    module: {
      rules: [
        {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: { name: '/static/[name].[ext]' }
      },
      ]
    },
    watch: argv.node === 'development',  
  };
};
