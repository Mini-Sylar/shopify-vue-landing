import js from '@eslint/js'
import eslintPluginVue from 'eslint-plugin-vue'
import ts from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          ignoreRestSiblings: true
        }
      ],
      '@typescript-eslint/no-unused-expressions': ['error', { allowTernary: true }]
    }
  },
  // @ts-expect-error - eslintPluginVue is not typed
  ...eslintPluginVue.configs['flat/essential'],
  {
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
        sourceType: 'module'
      }
    },
    rules: {
      'vue/component-tags-order': [
        'error',
        {
          order: ['template', 'script', 'style']
        }
      ],
      'vue/no-unused-vars': ['error', { ignorePattern: '^_' }]
    },
    ignores: ['dist', 'node_modules', '*.d.ts']
  },
  eslintConfigPrettier
)
