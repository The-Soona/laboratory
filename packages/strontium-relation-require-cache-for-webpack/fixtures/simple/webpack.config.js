'use strict';

const StrontiumResolverPlugin = require('../../plugins/strontium-resolver-plugin');

module.exports = {
  entry: './index.js',
  resolve: {
    plugins: [new StrontiumResolverPlugin()]
  }
};
