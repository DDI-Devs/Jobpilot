import { FlatCompat } from '@eslint/eslintrc';
import typescriptParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier'
  ),
  {
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname
      }
    },
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      'prettier/prettier': 'warn',
      'jsx-a11y/label-has-associated-control': [
        2,
        {
          controlComponents: ['Input'],
          depth: 3
        }
      ],
      'max-len': ['error', { code: 140, ignoreComments: true }],
      'prefer-destructuring': 'off',
      'consistent-return': 'warn',
      'array-callback-return': 'warn',
      'import/no-named-as-default': 'off',
      'react/destructuring-assignment': 'warn',
      'import/no-extraneous-dependencies': 'off',
      'react/no-array-index-key': 'warn',
      'jsx-a11y/anchor-is-valid': 'off',
      'react/prop-types': 'off',
      'import/extensions': 'off',
      'react/react-in-jsx-scope': 'off',
      'import/prefer-default-export': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/require-default-props': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function'
        }
      ],
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports'
        }
      ],
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: false
        }
      ],
      'react/jsx-curly-brace-presence': ['error', 'never']
    }
  }
];

export default eslintConfig;
