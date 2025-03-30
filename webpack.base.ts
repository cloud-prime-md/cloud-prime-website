import path from 'path';

import { Configuration } from 'webpack';

const isProduction = process.env.NODE_ENV === 'production';

const configuration: Configuration = {
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      components: path.resolve(__dirname, 'src', 'components'),
      theme: path.resolve(__dirname, 'src', 'theme'),
    },
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};

export default configuration;
