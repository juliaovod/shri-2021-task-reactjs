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
  },
};
