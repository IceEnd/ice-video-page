import path from 'path';
import webpack from 'webpack';

export default {
  entry: {
    main: path.join(__dirname, './src/index.js'),
    vendor: ['react', 'react-dom', 'react-router-dom'],
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist/static'),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loaders: ['babel-loader'],
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
        loader: 'url-loader?limit=10000&name=static/images/[name].[ext]',
      },
      {
        test: /\.(eot|woff2|woff|ttf|svg)$/,
        loader: 'url-loader?name=static/fonts/[name].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      path: path.join(__dirname, 'dist'),
    }),
  ],
};
