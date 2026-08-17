import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import jest from 'eslint-plugin-jest';

export default defineConfig([
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } }, 

  },
  {
    ignores: ['dist/*', 'coverage/*'],
  },
  { 
    files: ['**/*.{js,mjs,cjs}'], 
    plugins: { js }, 
    extends: ['js/recommended'], 
  },
  {
    files: ['**/*.test.js'],
    ...jest.configs['flat/recommended'],
    rules: {
      ...jest.configs['flat/recommended'].rules,
      'jest/prefer-expect-assertions': 'off',
      'jest/expect-expect': 'error',
    },
  },
  {
    rules: {
      indent: [
        'error', 2
      ], // отступы, авто
      semi: [
        'error', 'always'
      ], // точка с запятой, авто
      'no-unused-vars': 'warn', // не испоьзуемые переменные
      'no-console': 'off', // console.log
      'no-var': 'error',
      quotes: [
        'error', 'single'
      ],
    },
  },
]);
