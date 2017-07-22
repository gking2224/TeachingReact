/* eslint-disable */

var config = {
  'extends': 'airbnb',
  rules: {
    'semi': ['error', 'never'],
    'react/prefer-stateless-function': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'quote-props': ['error', 'consistent'],
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    'no-unused-vars': 'warn',
    'react/prop-types': 'warn',
    'react/no-array-index-key': 'off',
    'max-len': ['warn', 120],
    'no-plusplus': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'comma-dangle': ['warn']
  },
}
module.exports = config
