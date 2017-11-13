module.exports = {
    root: true,
    parser: 'babel-eslint',
    env:{
        es6: true,
        browser: true,
    },
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        }
    },
    plugins: [
        'html'
    ],
    rules:{
        "semi": ["error", "always"],
        "no-console": 0
    }
};
