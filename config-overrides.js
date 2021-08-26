const path = require('path');

module.exports = {
  webpack: (config) => {
    config.optimization.runtimeChunk = false;
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false,
      },
    };
    config.entry = {
      main: [path.resolve('.', 'src', 'microfrontend.tsx')],
    };
    config.output.library = 'MicroAppX';
    config.output.libraryTarget = 'window';
    return config;
  },
};
