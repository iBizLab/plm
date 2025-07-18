module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'unused-imports'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-undef': [0],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }], // 禁止使用++，--
    'class-methods-use-this': [0], // 强制未使用到 this 的对象方法改为静态
    'prefer-destructuring': [0],
    'import/no-unresolved': [0],
    'unused-imports/no-unused-imports': 'error',
    'no-underscore-dangle': [0], // 禁止使用下划线开头的变量名
    'consistent-return': [0], // return 后面是否允许省略
    'func-names': [0], // 函数表达式必须有名字
    'import/extensions': [0], // 引入文件时必须制定后缀
    'import/prefer-default-export': [0], // 关闭首选默认导出
    'vue/no-setup-props-destructure': [0],
    'vue/require-default-prop': [0], // props 非必填参数必须给默认值
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-inferrable-types': [0],
    '@typescript-eslint/no-explicit-any': ['error'],
  },
};
