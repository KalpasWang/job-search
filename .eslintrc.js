module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    quotes: ['error', 'single', 'avoid-escape'],
    semi: ['error', 'never'],
    'prettier/prettier': ['error', { singleQuote: true, semi: false }],
  },
}
