/* eslint-disable unicorn/prefer-module */

const {
  utils: { getProjects },
} = require('@commitlint/config-nx-scopes');

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': async (context) => [
      2,
      'always',
      [...(await getProjects(context, ({ tags }) => !tags.includes('stage:end-of-life')))],
    ],
  },
};
