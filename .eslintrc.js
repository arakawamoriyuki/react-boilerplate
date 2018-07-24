module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  plugins: [
    'react',
    'jsx-a11y',
    'import',
  ],
  rules: {
    'linebreak-style': [
      'error',
      'unix',
    ],
    'global-require': 0,
    'max-len': 0,
    'no-confusing-arrow': 0,
    'no-mixed-operators': 0,
    'no-console': 0,
    'no-await-in-loop': 0,
    'no-restricted-syntax': 0,
    'class-methods-use-this': 0,
    'jsx-a11y/img-has-alt': 0,
    'jsx-a11y/href-no-hash': 'off',
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
      },
    ],
  },
};
