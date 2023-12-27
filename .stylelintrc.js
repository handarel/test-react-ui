/** @type {import('stylelint').Config} */
const config = {
  overrides: [
    {
      files: ['*.css', '*.scss'],
      plugins: ['stylelint-order', 'stylelint-no-unsupported-browser-features'],
      extends: ['stylelint-config-hudochenkov/full'],
      rules: {
        'no-empty-source': null,
        'selector-max-type': 4,
        'plugin/no-unsupported-browser-features': [
          true,
          {
            severity: 'warning',
          },
        ],
      },
    },
    {
      files: ['*.css'],
      extends: ['stylelint-config-standard'],
    },
    {
      files: ['*.scss'],
      extends: ['stylelint-config-standard-scss'],
      rules: {
        'scss/at-rule-no-unknown': [
          true,
          {
            ignoreAtRules: ['tailwind'],
          },
        ],
      },
    },
  ],
};

// eslint-disable-next-line unicorn/prefer-module
module.exports = config;
