module.exports = {
  ...require('gts/.prettierrc.json'),
  plugins: [require('prettier-plugin-tailwindcss')],
  bracketSpacing: true,
  trailingComma: 'all',
}
