const { merge } = require('webpack-merge');
const commonConfig = require('./config.common');

const serverConfig = merge(commonConfig, {
  devServer: {
    port: 3000,
    static: ['public', 'src'],
  },
});

module.exports = serverConfig;
