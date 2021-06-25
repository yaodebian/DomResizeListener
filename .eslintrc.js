module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['standard', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'standard/no-callback-literal': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-debugger': 'off',
    'array-element-newline': ['error', { multiline: true, minItems: 5 }],
    'array-bracket-newline': ['error', { multiline: true }],
    '@typescript-eslint/no-var-requires': 'off'
  }
}
