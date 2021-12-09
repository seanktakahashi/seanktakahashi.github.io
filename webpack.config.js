// webpack.config.js
const path = require('path')
const webpack = require('webpack')

const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  entry: './src/index.tsx', // our entry point, as mentioned earlier
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/i, // matches .js, .ts, and .tsx files
        loader: 'babel-loader', // uses babel-loader for the specified file types (no ts-loader needed)
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // matches .css files only (i.e. not .scss, etc)
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i, // matches .css files only (i.e. not .scss, etc)
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public/'),
    },
    // https://www.robinwieruch.de/webpack-react-router/
    historyApiFallback: true, // allow reactrouterv6 to find paths besides /
    port: 3000
  },
  plugins: [],
  devtool: 'eval-source-map', // builds high quality source maps
}
