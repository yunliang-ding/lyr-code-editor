module.exports = {
  rules: {
    '@typescript-eslint/no-require-imports': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/array-type': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-indent': 'off',
    'no-param-reassign': 'off',
    'no-unsafe-finally': 'off',
    'no-console': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: false,
        html: true,
      },
    ],
  },
};
