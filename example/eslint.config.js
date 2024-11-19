// @ts-check
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'
import prettierConfig from 'eslint-config-prettier'

export default tseslint.config(
  eslint.configs.recommended,
  prettierConfig,
  ...tseslint.configs.recommendedTypeChecked,
  {
    ignores: [
      '**/*.min.js',
      '**/dist/**',
    ],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        extraFileExtensions: [
          '.vue'
        ],
        parser: tseslint.parser,
        project: [
          './tsconfig.app.json',
          './tsconfig.node.json'
        ],
        sourceType: 'module',
        tsconfigRootDir: import.meta.dirname
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': [
        'error',
        'type'
      ],
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unused-vars': 'error'
    }
  }
)
