const path = require('path');
const pathToPhaser = path.join(__dirname, '/node_modules/phaser/');
const phaser = path.join(pathToPhaser, 'dist/phaser.js');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'CANVAS_RENDERER': JSON.stringify(true),
  //     'WEBGL_RENDERER': JSON.stringify(true)
  //   })
  // ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    publicPath: '/',
    host: '0.0.0.0',
    port: 8080,
    open: true
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      phaser: phaser
    }
  },
  module: {
    rules: [
      //{ test: [/\.vert$/, /\.frag$/], use: 'raw-loader' },
      { test: /\.ts$/, loader: 'ts-loader', exclude: '/node_modules/' },
      { test: /phaser\.js$/, loader: 'expose-loader?Phaser' }
    ]
  }
};
