import commonjs from 'rollup-plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import progress from 'rollup-plugin-progress'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: './src/index.ts',
  output: [
    {
      file: './dist/index.js',
      format: 'umd',
      name: 'MathUtils'
    },
    {
      file: './dist/index.mjs',
      format: 'es'
    }
  ],
  plugins: [
    progress(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          baseUrl: 'src',
          module: 'es2015',
          moduleResolution: 'node'
        },
        exclude: ['__tests__']
      }
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    filesize()
  ]
}
