// vite.config.js

import path from 'path';

export default {
  // Specify the root directory of your project.
  // This should be the parent directory of your new entry file directory.
  root: path.resolve(__dirname, './src/'),

  resolve: {
    alias: {
      // Update the alias for your entry file to point to the new directory.
      '@': path.resolve(__dirname, './src/js/'),
    },
  },
};
