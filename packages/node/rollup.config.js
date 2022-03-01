import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import license from 'rollup-plugin-license'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const commitHash = require('child_process').execSync('git rev-parse --short HEAD', { encoding: 'utf-8' }).trim()

const terserInstance = terser()

const paths = {
  '@vektor-finance/utils': ['../utils/src'],
  '@vektor-finance/core': ['../core/src'],
  '@vektor-finance/types': ['../types/src'],
}

const plugins = [
  typescript({
    tsconfig: 'tsconfig.build.json',
    tsconfigOverride: {
      compilerOptions: {
        declaration: false,
        declarationMap: false,
        module: 'ES2015',
        paths,
      },
    },
    include: ['*.ts+(|x)', '**/*.ts+(|x)', '../**/*.ts+(|x)'],
  }),
  resolve({
    mainFields: ['module'],
  }),
  commonjs(),
]

const bundleConfig = {
  input: 'src/index.ts',
  output: {
    format: 'iife',
    name: 'vektor',
    sourcemap: true,
    strict: false,
  },
  context: 'window',
  plugins: [
    ...plugins,
    license({
      sourcemap: true,
      banner: `/*! @vektor-finance/browser <%= pkg.version %> (${commitHash}) | https://github.com/vektor-finance/vektor-js*/`,
    }),
  ],
}

export default [
  // ES5 Browser Bundle
  {
    ...bundleConfig,
    output: {
      ...bundleConfig.output,
      file: 'build/bundle.js',
    },
  },
  {
    ...bundleConfig,
    output: {
      ...bundleConfig.output,
      file: 'build/bundle.min.js',
    },
    // Uglify has to be at the end of compilation, BUT before the license banner
    plugins: bundleConfig.plugins.slice(0, -1).concat(terserInstance).concat(bundleConfig.plugins.slice(-1)),
  },
  // ------------------
  // ES6 Browser Bundle
  {
    ...bundleConfig,
    output: {
      ...bundleConfig.output,
      file: 'build/bundle.es6.js',
    },
    plugins: [
      typescript({
        tsconfig: 'tsconfig.build.json',
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
            declarationMap: false,
            module: 'ES2015',
            paths,
            target: 'es6',
          },
        },
        include: ['*.ts+(|x)', '**/*.ts+(|x)', '../**/*.ts+(|x)'],
      }),
      ...plugins.slice(1).concat(bundleConfig.plugins.slice(-1)),
    ],
  },
  {
    ...bundleConfig,
    output: {
      ...bundleConfig.output,
      file: 'build/bundle.es6.min.js',
    },
    plugins: [
      typescript({
        tsconfig: 'tsconfig.build.json',
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
            declarationMap: false,
            module: 'ES2015',
            paths,
            target: 'es6',
          },
        },
        include: ['*.ts+(|x)', '**/*.ts+(|x)', '../**/*.ts+(|x)'],
      }),
      ...plugins.slice(1).slice(0, -1).concat(terserInstance).concat(bundleConfig.plugins.slice(-1)),
    ],
  },
  // ------------------
]
