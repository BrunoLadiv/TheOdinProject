
import path from 'path';

export default {
  root: path.resolve(__dirname, './src/'),

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/js/'),
    },
  },
};
