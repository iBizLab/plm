/**
 * 提交信息规范
 * 提交格式: type: description
 *
 * feat: 新功能（feature）
 * fix: 修补bug
 * docs: 文档（documentation）
 * style: 格式（不影响代码运行的变动）
 * refactor: 重构（即不是新增功能，也不是修改bug的代码变动）
 * test: 增加测试，或测试变更
 * perf : 性能优化
 * revert: 撤销上一次的提交
 * build: 构建工具或构建过程等的变动，如：关联包升级等
 * chore: 其他修改（不在上述类型中的修改）
 * release: 发布新版本
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'perf',
        'revert',
        'build',
        'chore',
        'release',
      ],
    ],
  },
};
