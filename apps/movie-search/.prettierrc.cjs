module.exports = {
	printWidth: 100,
	tabWidth: 2,
	useTabs: true,
	semi: false,
	singleQuote: true,
	quoteProps: 'as-needed',
	jsxSingleQuote: true,
	trailingComma: 'none',
	bracketSpacing: true,
	arrowParens: 'always',
	endOfLine: 'lf',
	overrides: [
		{
			files: ['*.json', '*.md', '*.toml', '*.yml'],
			options: {
				useTabs: false
			}
		}
	]
}
