module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'max-nesting-depth': 4,
    'order/properties-alphabetical-order': true,
    'selector-class-pattern': [
      '^[a-z][a-z0-9]*(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(_[a-z0-9]+((-|_)[a-z0-9]+)*)?$',
      {
        resolveNestedSelectors: true
      },
    ],
  },
};
