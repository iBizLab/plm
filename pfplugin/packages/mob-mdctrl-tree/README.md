# 多数据列表树(移动端)

该插件基于移动端多数据列表扩展，主要在发送请求时携带srfshowmode=true参数，然后将响应数据构建为树形数据，并在界面上呈现。**该插件隶属于部件自定义绘制插件（基于移动端多数据部件进行扩展）**

## 页面展示

![scene](./public/assets/images/scene.png)

## 功能说明

必须配置控件动态参数，用以计算节点关系

| 属性名      | 描述       | 类型   | 默认值 |
| ----------- | ---------- | ------ | ------ |
| VALUEFIELD  | 值属性名称 | string | —      |
| PARENTFIELD | 父属性名称 | string | —      |
| ONLYEXPAND | 仅展开条件 | JSON对象 | —      |

ONLYEXPAND：值为JSON对象，每个属性作为条件，每个条件之间的关系为并且，满足这些条件的数据项在单击时不触发激活而是只改变数据项的展开状态

## 附录

### 人员信息插件

```json

```

### 编辑器样式

```json

```
