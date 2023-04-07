import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path';
import { name } from './package.json';

// https://vitejs.dev/config/
/** @type {import('vite').defineConfig} */

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'twin',
            {
              exclude: [
                '\x00commonjsHelpers.js', // Avoid build error
              ],
            },
          ],
          'macros',
          '@emotion/babel-plugin',
        ],
      },
    }),
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  define: {
    'process.env': {},
  },
  build: {
    outDir: path.join(__dirname, 'dist'),
    lib: {
      entry: { '/': path.resolve(__dirname, 'src/index.ts') },
      name,
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => {
        let f;
        switch (format) {
          case 'es':
            f = 'mjs';
            break;
          case 'cjs':
            f = 'cjs';
            break;
          case 'umd':
            f = 'umd.js';
            break;
          default:
            break;
        }

        return `index.${f}`;
      },
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
      plugins: [],
    },
  },
});
