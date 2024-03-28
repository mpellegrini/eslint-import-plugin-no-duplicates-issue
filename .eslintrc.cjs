/** @type { import("eslint").Linter.Config } */
module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:svelte/recommended'
    ],
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx", ".svelte"]
        },
        "import/resolver": {
            "typescript": {
                "alwaysTryTypes": true,
            },
            node: true
        }
    },
    "rules": {
        "import/no-unresolved": "error"
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2023,
        extraFileExtensions: ['.svelte']
    },
    env: {
        browser: true,
        es2017: true,
        node: true
    },
    overrides: [
        {
            files: ['*.svelte'],
            parser: 'svelte-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser'
            }
        }
    ]
};
