import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const config = [
  {
    ignores: ['dist', 'node_modules', '.next', '.storybook'],
  },
  ...compat.extends('next/core-web-vitals', 'plugin:storybook/recommended'),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
      prettier,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      /* TypeScript */
      '@typescript-eslint/no-explicit-any': 'warn', // any 타입 사용 시 경고
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // 사용하지 않는 변수 에러 (단, _로 시작하는 변수는 무시)
      '@typescript-eslint/explicit-function-return-type': 'off', // 함수 반환 타입 명시를 강제하지 않음
      '@typescript-eslint/no-floating-promises': 'error', // 비동기 함수에서 반환된 Promise 사용 시 에러
      '@typescript-eslint/no-misused-promises': 'error', // Promise 사용 시 에러

      /* React */
      'react/react-in-jsx-scope': 'off', // React를 import 하지 않아도 됨
      'no-restricted-imports': [
        'warn',
        {
          paths: [
            {
              name: 'react',
              importNames: ['default'],
            },
          ],
        },
      ],
      'react/jsx-props-no-spreading': 'off', // props spreading 허용 (...props)
      'react-hooks/rules-of-hooks': 'error', // Hooks 규칙 강제
      'react-hooks/exhaustive-deps': 'warn', // useEffect의 의존성 배열 검사
      'react/function-component-definition': [
        'error',
        {
          namedComponents: ['arrow-function', 'function-declaration'],
          unnamedComponents: 'arrow-function',
        },
      ],

      // Import
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'never',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      // JSX Accessibility
      //'jsx-a11y/click-events-have-key-events': 'warn', // 클릭 이벤트가 있는 요소는 키보드 이벤트도 필요 (접근성)
      'jsx-a11y/no-static-element-interactions': 'warn', // div 등의 일반 요소에 이벤트 핸들러 사용 시 경고

      // General
      // 'no-console': ['warn', { allow: ['warn', 'error'] }], // console 사용 경고
      'prefer-const': 'error', // const 사용 강제
      'no-var': 'error', // var 사용 에러 (let, const 사용)
    },
  },
];

export default config;
