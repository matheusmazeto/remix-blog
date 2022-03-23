module.exports = {
  extends: ['@remix-run/eslint-config', 'plugin:prettier/recommended'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    'no-console': 'off',
  },
}
