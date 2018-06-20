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
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: 'es2015',
          moduleResolution: 'node'
        },
        exclude: ['__tests__']
      }
    })
  ]
}
