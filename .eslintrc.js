module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
    'plugin:@next/next/recommended',
    'plugin:storybook/recommended',
  ],
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      plugins: ['jest', 'jest-dom', 'testing-library'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react',
      ],
      rules: {},
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/array-type': 'off', // This makes it harder to read in many cases
    '@typescript-eslint/no-inferrable-types': 'off', // It's better to be explicit
    'no-console': 'error',
    // react
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],
    'react/jsx-tag-spacing': [
      'error',
      {
        afterOpening: 'never',
        beforeSelfClosing: 'allow',
        closingSlash: 'never',
        beforeClosing: 'allow',
      },
    ],
    'react/jsx-uses-vars': 'error',
    'react/self-closing-comp': 'error',
    // react overrides
    'react/jsx-boolean-value': ['error', 'always'],
    'react/no-deprecated': 'error',
    // react other
    'react/no-unescaped-entities': 'off', // This is annoying for text-heavy pages
    'react/prop-types': 'off', // This is redundant for TypeScript
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/no-unused-prop-types': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
