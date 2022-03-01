module.exports = {
  out: './docs/',
  readme: 'README.md',
  name: 'Vektor JavaScript SDKs',
  includes: './',
  exclude: [
    '**/test/**/*',
    '**/*.js',
    '**/dist/**/*',
    '**/esm/**/*',
    '**/build/**/*',
    '**/packages/typescript/**/*',
    '**/packages/eslint-*/**/*',
  ],
  mode: 'modules',
  excludeExternals: true,
  includeDeclarations: true,
  includeVersion: true,
  excludeNotExported: true,
  excludePrivate: true,
  // Turned on for @vektor-finance/react
  jsx: 'react',
  'external-modulemap': '.*/packages/([^/]+)/.*',
}
