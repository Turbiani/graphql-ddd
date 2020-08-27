module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    node: true,
  },
  extends: 'airbnb-base',
  rules: {
    'class-methods-use-this': 0,
    'no-underscore-dangle': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-restricted-syntax': 0,
    'global-require': 0,
    camelcase: 0,
    'no-param-reassign': 0,
    'no-await-in-loop': 0,
    'linebreak-style': 0,
    'prefer-object-spread': 0,
    'max-classes-per-file': 0,
    'template-curly-spacing': 'off',
    indent: [
      'warn',
      2,
      {
        ignoredNodes: ['TemplateLiteral'],
        SwitchCase: 1,
      },
    ],
  },
  globals: {},
};
