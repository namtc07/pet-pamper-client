module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'prettier',
    'jsx-a11y',
    'import',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  rules: {
    'no-unused-vars': 'warn',
    'no-shadow': 'off',
    'react/no-children-prop': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-param-reassign': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-console': 'off',
    'no-undef': 'error',
    'react/destructuring-assignment': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react/no-unstable-nested-components': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-syntax': [
      'warn',
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(warn|error|info|trace)$/]",
        message: 'Unexpected property on console object was called',
      },
    ],
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/require-default-props': 'off',
  },
  ignorePatterns: ['node_modules/**'],
};
