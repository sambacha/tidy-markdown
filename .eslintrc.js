const { configs } = require('eslint-plugin-mdx')

module.exports = {
  extends: ['plugin:mdx/recommended'],
  overrides: [
    {
      files: ['*.md'],
      rules: {
        'prettier/prettier': [
          2,
          {
            // unnecessary if you're not using `eslint-plugin-prettier`, but required if you are
            parser: 'markdown',
          },
        ],
      },
    },
    Object.assign(
      {
        files: ['*.mdx'],
      },
      configs.overrides,
    ),
  ],
}
