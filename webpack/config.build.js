const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./config.common');
const rootDir = process.cwd();
const buildDir = path.resolve(rootDir, 'build');

const buildConfig = merge(commonConfig, {
  output: {
    ...commonConfig.output,
    path: buildDir,
    pathinfo: false,
    clean: true,
  },
  mode: 'production',
  devtool: false,
  cache: false,
});

module.exports = buildConfig;
