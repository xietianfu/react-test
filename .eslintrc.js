module.exports = {
  parser: 'babel-eslint',
  plugins: ['react'],
  extends: 'airbnb',
  rules: {
    // react
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'react/require-optimization': 0,
    'react/no-will-update-set-state': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-unresolved': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/sort-comp': 0,
    'react/jsx-wrap-multilines': 0,
    // common rules
    'import/no-extraneous-dependencies': 0,
    'import/first': 0,
    'comma-dangle': 0,
    'no-tabs': 0,
    'no-undef': 0,
    'no-param-reassign': [2, { props: false }],
    'arrow-parens': [2, 'as-needed'],
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'react/prefer-stateless-function': [1],
    'linebreak-style': 'off',
    'sort-imports': 0,
    // es6
    'arrow-body-style': 0
  }
};
