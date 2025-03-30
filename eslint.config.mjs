import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';

export default defineConfig([
  // Shared config
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
    rules: {
      'no-console': 'error',
    },
  },

  // JavaScript-specific config
  js.configs.recommended,
  ts.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // React config
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },

  // Import and order rules
  {
    ...importPlugin.flatConfigs.recommended,
    settings: {
      'import/resolver': {
        node: {
          paths: ['src'],
        },
      },
    },
    rules: {
      'import/order': [
        2,
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
        },
      ],
    },
  },
]);
