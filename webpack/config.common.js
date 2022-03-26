const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootDir = process.cwd();
const srcDir = path.resolve(rootDir, 'src');

const devConfig = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(rootDir, 'public'),
    filename: 'js/[name].js',
    assetModuleFilename: 'assets/[name].[contenthash][ext][query]',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [path.resolve(rootDir, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/i,
        exclude: /node_modules|public/,
        use: 'babel-loader',
        include: srcDir,
      },
      {
        test: /\.svg$/i,
        oneOf: [
          {
            issuer: /\.[jt]sx?$/,
            resourceQuery: /react/, // *.svg?react
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                  prettier: false,
                  titleProp: true,
                  svgo: true,
                },
              },
            ],
          },
          {
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 40 * 1024, // 40kb
              },
            },
          },
        ],
        include: srcDir,
      },
      {
        test: /\.(jpe?g|png|gif|webp|bmp)/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 40 * 1024,
          },
        },
        include: srcDir,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, './public/index.html'),
      filename: 'index.html',
    }),
  ],
  target: ['web', 'es5'],
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  cache: true,
};

module.exports = devConfig;
