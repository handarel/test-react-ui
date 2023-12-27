// TODO: Fix Vue and Svelte configs.
// TODO: Split into individual config files.

/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  overrides: [
    {
      files: [
        '**/*.js',
        '**/*.ts',
        '**/*.jsx',
        '**/*.tsx',
        '**/*.cjs',
        '**/*.mjs',
        '**/*.vue',
        '**/*.svelte',
      ],
      env: {
        node: true,
        browser: true,
        es2022: true,
      },
      plugins: ['@nx'],
      extends: ['eslint:recommended', 'plugin:unicorn/recommended'],
      rules: {
        '@nx/enforce-module-boundaries': [
          'error',
          {
            enforceBuildableLibDependency: true,
            allow: [],
            depConstraints: [
              {
                sourceTag: '*',
                onlyDependOnLibsWithTags: ['*'],
              },
            ],
          },
        ],
        'unicorn/no-null': ['off'],
      },
    },
    {
      files: ['**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs'],
      extends: ['plugin:@nx/javascript'],
      rules: {},
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['plugin:@nx/typescript'],
      rules: {},
    },
    {
      files: ['**/*.js', '**/*.ts'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: false,
          globalReturn: false,
          impliedStrict: true,
        },
      },
      rules: {},
    },
    {
      files: ['**/*.jsx', '**/*.tsx'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
          globalReturn: false,
          impliedStrict: true,
        },
      },
      extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      rules: {},
    },
    {
      files: ['**/*.cjs'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: false,
          globalReturn: false,
          impliedStrict: true,
        },
      },
      rules: {},
    },
    {
      files: ['**/*.mjs'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: false,
          globalReturn: false,
          impliedStrict: true,
        },
      },
      rules: {},
    },
    {
      files: ['**/*.vue'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: false,
          globalReturn: false,
          impliedStrict: true,
        },
      },
      extends: ['plugin:vue/vue3-recommended'],
      rules: {},
    },
    {
      files: ['**/*.svelte'],
      extends: ['plugin:svelte/recommended', 'plugin:svelte/prettier'],
      rules: {},
    },
    {
      files: [
        '**/*.spec.js',
        '**/*.spec.ts',
        '**/*.test.js',
        '**/*.test.ts',
        '**/*.spec.jsx',
        '**/*.spec.tsx',
        '**/*.test.jsx',
        '**/*.test.tsx',
        '**/*.spec.cjs',
        '**/*.test.cjs',
        '**/*.spec.mjs',
        '**/*.test.mjs',
      ],
      env: {
        jest: true,
      },
      rules: {},
    },
    {
      files: [
        '**/*.js',
        '**/*.ts',
        '**/*.jsx',
        '**/*.tsx',
        '**/*.cjs',
        '**/*.mjs',
        '**/*.vue',
        '**/*.svelte',
      ],
      extends: ['plugin:prettier/recommended'],
      rules: {},
    },
  ],
};

// eslint-disable-next-line unicorn/prefer-module
module.exports = config;
