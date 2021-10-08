module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-order',
  ],
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['define-mixin', 'mixin'],
    }],
    'max-nesting-depth': 4,
    'order/properties-alphabetical-order': true,
    'selector-class-pattern': [
      '^[a-z][a-z0-9]*(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(_[a-z0-9]+((-|_)[a-z0-9]+)*)?$',
      {
        resolveNestedSelectors: true,
      },
    ],
    'string-quotes': 'single',
  },
};
