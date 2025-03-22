import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/global.js',
    output: {
      file: 'dist/detect-overflow.umd.js',
      format: 'umd',
      name: 'detectOverflow',
      plugins: [terser()],
    },
  },
  {
    input: 'src/manual-global.js',
    output: {
      file: 'dist/detect-overflow.manual.js',
      format: 'umd',
      name: 'detectOverflow',
      plugins: [terser()],
    },
  },
]
