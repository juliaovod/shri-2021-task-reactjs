module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack.base.config.js',
      },
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'comma-dangle': 'error',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['off'],
    'import/prefer-default-export': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['accum', 'memo'] }],
    'no-unused-expressions': 'error',
    'no-unused-vars': ['error'],
    'react/jsx-one-expression-per-line': ['error', { 'allow': 'single-child' }],
    'react/sort-comp': ['error'],
    'semi': 'error',
  },
};
