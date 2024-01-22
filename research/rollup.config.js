import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: './Parser.js', // Replace with your entry file
    output: {
      file: 'html-parser-2.js', // Replace with your output file
      format: 'es', // Set the output format to ESM
      sourcemap: false, // Optionally include sourcemaps
    },
    external: ['module-to-exclude'],
    plugins: [
        // terser(),
        resolve()
    ],
  }