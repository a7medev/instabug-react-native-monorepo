const path = require('path');
const getWorkspaces = require('get-yarn-workspaces');
const workspaces = getWorkspaces(__dirname);

module.exports = {
  projectRoot: path.resolve(__dirname, '.'),
  watchFolders: [path.resolve(__dirname, '../../node_modules'), ...workspaces],

  resolver: {
    extraNodeModules: new Proxy(
      {},
      {
        get: (_, name) => path.join(process.cwd(), `node_modules/${name}`),
      },
    ),
  },

  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
