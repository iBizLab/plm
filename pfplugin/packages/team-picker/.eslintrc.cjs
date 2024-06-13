module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier', '@typescript-eslint', 'unused-imports'],
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-new': [0],
    'no-continue': [0],
    '@typescript-eslint/no-empty-interface': 'off',
    'no-use-before-define': [0],
    'no-restricted-syntax': [0],
    'no-empty-function': [0],
    'no-useless-constructor': [0], // 禁止空的构造函数
    'no-param-reassign': [0], // 禁止修改传入函数的参数
    'no-underscore-dangle': [0], // 禁止使用下划线开头的变量名
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }], // 禁止使用 ++，--
    'consistent-return': [0], // 函数可以有不同类型返回值
    'class-methods-use-this': [0], // 方法内未使用此方法时，强制定义为静态方法
    'import/prefer-default-export': [0], // 一个模块只能有默认导出，不可以有多个导出
    'import/no-unresolved': [0], // 不允许未解决的模块
    'import/extensions': [0], // 不允许导入文件时不带后缀
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-inferrable-types': [0],
    '@typescript-eslint/no-non-null-assertion': [0],
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/explicit-function-return-type': 'error', // 要求函数和类方法的显式返回类型
    '@typescript-eslint/explicit-module-boundary-types': 'error', // 要求导出函数和类的公共类方法的显式返回和参数类型
    'import/no-extraneous-dependencies': [
      0,
      {
        devDependencies: true,
        peerDependencies: true,
        // optionalDependencies: true,
        // bundledDependencies: true
      },
    ],
  },
};
