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
  overrides: [
    {
      'files': ['*.ts', '*.tsx'],
      'rules': {
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-use-before-define': ['error'],
    'comma-dangle': 'error',
    'implicit-arrow-linebreak': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['off'],
    'import/prefer-default-export': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['accum', 'memo'] }],
    'no-shadow': 'off',
    'no-unused-expressions': ['error'],
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'object-curly-newline': 'off',
    'react/button-has-type': ['error', { button: true, reset: true, submit: true, }],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-one-expression-per-line': ['error', { 'allow': 'single-child' }],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/sort-comp': ['error'],
    'semi': 'error',
    'sort-keys': ['error'],
  },
};
