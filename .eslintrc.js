module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'standard/no-callback-literal': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-debugger': 'off'
  }
}
