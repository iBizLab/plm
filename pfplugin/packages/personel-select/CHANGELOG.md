# 版本变更日志

-  docs: 人员选择文档更新（2024-3-12）

### [0.0.2-dev.111](2024-3-1)

### Features

- 插件支持查询全部人员，同时识别不显示人员部门分类的编辑器参数 ISSHOWTAB

### [v0.0.2-dev.111](2024-2-28)

- fix: 修复人员选择在表格列中弹框点击后异常关闭及适配面板项弹框定位异常

### [v0.0.2-dev.109](2024-2-28)

- fix：修复人员选择值项为OBJECTS时逻辑异常

### [v0.0.2-dev.107](2024-2-28)

- update: 更新人员选择支持OBJECTS及自填充映射

### [v0.0.2-dev.99](2024-2-27)

- update：更新人员选择支持ESC按键关闭气泡

### [v0.0.2-dev.89](2024-2-23)

- fixed:修复插件内展示的界面行为无title提示问题

### [v0.0.2-dev.88](2024-2-23)

- fixed:修复人员选择在表格内无值时，未重置选中项

### [v0.0.2-dev.86](2024-2-22)

- update:更新直接判断当前值为否为 "当前用户"

### [v0.0.2-dev.81](2024-2-21)

- update:人员选择新增支持编辑器参数ISADDSYMBOL：是否附加符号 多选且开启附加符号并且选择值为多个时，每个选择值前后都拼接上单引号后再抛出去

### [v0.0.2-dev.65](2024-2-6)

- fixed:修复搜索栏条件值变更时重置插件选择数据

### [v0.0.2-dev.56](2024-2-5)

- fixed:修复人员选择多选时卡顿问题
- update:更新人员选择多选时的样式

### [v0.0.2-dev.43](2024-1-31)

- update:更新人员选择单选时关闭弹窗，插件支持多选，需配置编辑器参数MULTIPLE=true

### [v0.0.2-dev.37](2024-1-25)

- update:更新插件默认内边距样式

### [v0.0.2-dev.29](2024-1-23)

- fixed:修复插件在搜索栏里面初始打开未加载数据问题

### [v0.0.2-dev.27](2024-1-23)

- update:更新插件显示栏文字头标志显示2个字符

### [0.0.2-dev.20](https://gitee.com/zhangpingchuan/ibiz-template-plm/commit/597872aa01196a547e3fe576b6f0cf6abdd12ba6)(2024-1-19)

### Features

- 新增人员URL允许匹配导航参数以及导航上下文数据([0799a0e](https://gitee.com/zhangpingchuan/ibiz-template-plm/commit/0799a0eef3e97c2588226bd164c0bb4e309051ee))
- 新增识别人员以及部门人员的UI转化编辑器参数([b4f634f](https://gitee.com/zhangpingchuan/ibiz-template-plm/commit/b4f634f290ea91e0eadb9f86b393b181b4899a98))
- 支持配置导航上下文以及导航参数([b4f634f](https://gitee.com/zhangpingchuan/ibiz-template-plm/commit/b4f634f290ea91e0eadb9f86b393b181b4899a98))
- 支持分别设置人员以及部门人员的接口请求方式([b4f634f](https://gitee.com/zhangpingchuan/ibiz-template-plm/commit/b4f634f290ea91e0eadb9f86b393b181b4899a98))
- 适配表格行编辑，手动抛出失焦事件([2737813](https://gitee.com/zhangpingchuan/ibiz-template-plm/commit/273781302c3d8086d1388abad0cf322bef2674c9))

### Bug Fixes

- 修复插件在表格内使用数据存在缓存的问题([597872a](https://gitee.com/zhangpingchuan/ibiz-template-plm/commit/597872aa01196a547e3fe576b6f0cf6abdd12ba6))
- 修复人员选择下拉在表格中异常关闭([d1c36be](https://gitee.com/zhangpingchuan/ibiz-template-plm/commit/d1c36be55ee4563d3a68225db2efa3b0909fff22))

### [0.0.2-dev.5](https://gitee.com/zhangpingchuan/ibiz-template-plm/commit/759fef34f9db8ed9748480bf16b6a75ae33d2a05) (2024-1-9)

### Features

- 新增识别编辑器参数人员地址，部门人员地址以及导航参数 ([0fdb717](https://gitee.com/zhangpingchuan/ibiz-template-plm/commit/0fdb717bff8a134a414666c191fad357b4a729ab))

### Bug Fixes

- 删除冗余引入 ([759fef3](https://gitee.com/zhangpingchuan/ibiz-template-plm/commit/759fef34f9db8ed9748480bf16b6a75ae33d2a05))

### [0.0.2-dev.3](https://gitee.com/zhangpingchuan/ibiz-template-plm/commit/d01ea84ca8cb41ef6001571b734eccf2ea8bf347) (2024-1-8)

### Features

- 更新插件有值时显示的文字标志头样式，更新插件依赖包版本 ([d01ea84](https://gitee.com/zhangpingchuan/ibiz-template-plm/commit/d01ea84ca8cb41ef6001571b734eccf2ea8bf347))
- 更新插件依赖包版本 ([252ba89](https://gitee.com/zhangpingchuan/ibiz-template-plm/commit/252ba89fcc82064dea915793b0217e70608268af))
- 更新插件搜索时使用远程搜索，更新获取自填模式项布局面板作为人员信息展示面板 ([f966359](https://gitee.com/zhangpingchuan/ibiz-template-plm/commit/f96635922bd4282133aef5b846e16f975b8bca45))

### Bug Fixes

- 修复滑动加载更多时请求参数异常问题 ([f966359](https://gitee.com/zhangpingchuan/ibiz-template-plm/commit/f96635922bd4282133aef5b846e16f975b8bca45))
