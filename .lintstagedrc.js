// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  '*.js': ['eslint'],
  '*.ts': ['eslint'],
  '*.jsx': ['eslint'],
  '*.tsx': ['eslint'],
  '*.csj': ['eslint'],
  '*.msj': ['eslint'],
  '*.css': ['prettier', 'stylelint'],
  '*.scss': ['prettier', 'stylelint'],
  '*.html': ['prettier'],
  '*.json': ['prettier'],
  '*.toml': ['taplo lint', 'taplo fmt'],
};
