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
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-use-before-define': ['error'],
    'comma-dangle': 'error',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['off'],
    'import/prefer-default-export': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['accum', 'memo'] }],
    'no-unused-expressions': ['error'],
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'object-curly-newline': 'off',
    'react/button-has-type': ['error', { button: true, reset: true, submit: true, }],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-one-expression-per-line': ['error', { 'allow': 'single-child' }],
    'react/require-default-props': 'off',
    'react/sort-comp': ['error'],
    'semi': 'error',
    'sort-keys': ['error'],
  },
};
