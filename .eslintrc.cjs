module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    plugins: ['jest'],
    extends: ['google', 'plugin:jest/recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {},
    ignorePatterns: [
        'node_modules/',
        'dist/',
        'build/',
        'coverage/',
        'test/',
        '*.d.ts',
        'out/',
    ],
}
