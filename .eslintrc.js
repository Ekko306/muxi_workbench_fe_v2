module.exports = {
    parser: '@typescript-eslint/parser', //定义ESLint的解析器
    extends: [
        'eslint:recommended',
        'plugin:react/recommended', //集成react规范
        'plugin:@typescript-eslint/recommended', //集成typescript规范，具体在tsconfig定义
        'plugin:prettier/recommended', //集成prettier规范，具体在.prettierrc.js定义
        'prettier/@typescript-eslint' //使规范中typescript的样式失效，防止与prettier冲突
    ], //定义文件继承的子规范
    plugins: ['@typescript-eslint'], //定义了该eslint文件所依赖的插件
    env: {
        //指定代码的运行环境
        browser: true,
        node: true
    },
    settings: {
        //自动发现React的版本，从而进行规范react代码
        react: {
            pragma: 'React',
            version: 'detect'
        }
    },
    parserOptions: {
        //指定ESLint可以解析JSX语法
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        // 禁止使用 var
        'no-var': 'error',
        // 优先使用 interface 而不是 type
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        // 'no-undef': 'error',
        'react/button-has-type': 'error'
    }
}
