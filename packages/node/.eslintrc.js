module.exports = {
  env: {
    node: true,
  },
  extends: ['../../.eslintrc.js'],
  rules: {
    '@vektor-finance/sdk/no-async-await': 'off',
  },
}
