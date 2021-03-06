import path from 'path';
import webpack from 'webpack';

export default {
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, './src/index.js'),
  ],
  output: {
    path: path.join(__dirname, 'dist/static/'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  context: path.resolve(__dirname, './src'),
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'src'),
    publicPath: '/static/',
    port: 3002,
    stats: {
      colors: true, // Nice colored output
      progress: true,
      inline: true,
      noInfo: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['react-hot-loader/webpack', 'babel-loader'],
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=10000&name=images/[name].[ext]',
      },
      {
        test: /\.(eot|woff2|woff|ttf|svg)$/,
        loader: 'url-loader?name=fonts/[name].[ext]',
      },
    ],
  },
  devtool: 'cheap-eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
