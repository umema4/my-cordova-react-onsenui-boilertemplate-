const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/app.js',
    vendor: [
      'onsenui',
      'react',
      'react-dom',
      'react-onsenui',
      'react-redux',
      'redux',
      'redux-thunk',
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '/web/assets/'),
    publicPath: '/web/assets/',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'stage-0'],
      },
    }, {
      test: /\.json$/, loader: 'json',
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }],
  },
  devtool: '#source-map',
  plugins: (() => {
    const plugins = [];
    plugins.push(new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'));
    plugins.push(new webpack.optimize.AggressiveMergingPlugin());
    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
    }));

    /*
    // for react.js build
    if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'expprod') {
      plugins.push(new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"',
      }));
    } else if (process.env.NODE_ENV === 'staging') {
      plugins.push(new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"staging"',
      }));
    }
     plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }));
    */
    return plugins;
  })(),
};
