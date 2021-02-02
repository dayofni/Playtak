module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
	],
	parserOptions: {
		ecmaVersion: 12,
	},
	rules: {
		indent: ['error', 'tab', {
			SwitchCase: 1,
		}],
		quotes: ['error', 'single', { allowTemplateLiterals: true }],
		'max-len': ['error', 180, { ignoreTrailingComments: true }],
		'linebreak-style': ['error', 'windows'],
		'function-paren-newline': ['error', 'multiline-arguments'],
		'comma-dangle': ['error', 'only-multiline', { functions: 'never' }],
		'func-names': ['off'],
		'object-shorthand': ['off'],
		'nonblock-statement-body-position': ['off'],
		'no-unused-vars': ['off'],
		'no-alert': ['off'],
		'no-console': ['off'],
		'prefer-destructuring': ['off'],
		'brace-style': ['off'],
		'no-mixed-operators': ['off'],
		'no-use-before-define': ['off'],
		'no-prototype-builtins': ['off'],
		'no-bitwise': ['off'],
		'no-tabs': ['off'],
		'no-plusplus': ['off'],
		'no-continue': ['off'],
		'no-param-reassign': ['off'],
		'no-cond-assign': ['off'],
	},
	globals: {
		server: 'readonly',
		output: 'readonly',
		$: 'readonly',
		board: 'readonly',
		stopTime: 'readonly',
		getZero: 'readonly',
		chathandler: 'readonly',
		botlist: 'readonly',
		startTime: 'readonly',
		lastWt: 'writeable',
		lastBt: 'writeable',
		lastTimeUpdate: 'writeable',
		generateCamera: 'readonly',
		fixedcamera: 'readonly',
		THREE: 'readonly',
		makeStyleSelector: 'readonly',
		diagonalWalls: 'writable',
		pieceStyles: 'readonly',
		whiteSquareStyles: 'readonly',
		blackSquareStyles: 'readonly',
		maxAniso: 'readonly',
		anisoLevel: 'readonly',
		sqSize: 'readonly',
		sqHeight: 'readonly',
		borderSize: 'readonly',
		stackOffsetFromBorder: 'readonly',
		pieceSize: 'writable',
		pieceHeight: 'readonly',
		materials: 'readonly',
		highlighter: 'writeable',
		mouse: 'readonly',
		DEBUG: 'readonly',
		settingscounter: 'writable',
		scene: 'readonly',
		camera: 'readonly',
		clickthrough: 'readonly',
		fastforward: 'readonly',
		dontanimate: 'writeable',
		controls: 'readonly',
		parsePTN: 'readonly',
	},
};
