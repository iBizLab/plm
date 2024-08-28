# 默认展开树导航

该插件是对树导航部件的功能增强，主要是为了通过部件动态控件参数【DEFAULT_EXPAND】指定模态打开的树导航视图的默认展开及选中树节点。**该插件隶属于自定义部件插件（基于树导航部件进行扩展）**
其中 DEFAULT_EXPAND 的字符串识别${context.xxx}和${param.xxx}

## 页面展示

![image](./public/assets/images/scene.png)

## 功能说明

- 指定模态打开的树导航视图的默认展开及选中树节点

## 输入参数

| 属性           | 类型   | 默认值 | 说明                                                 |
| -------------- | ------ | ------ | ---------------------------------------------------- |
| DEFAULT_EXPAND | string | ---    | 默认展开，解析控件动态参数 DEFAULT_EXPAND 后的字符串 |

### 配置示例

```
DEFAULT_EXPAND=root:node@${context.curproduct}
```

## 附录：

### 树导航部件插件

```json
[
  {
    "plugintype": "CUSTOM",
    "rtobjectrepo": "@ibiz-template-plm/default-expand-tree-exp-bar@0.0.2-dev.14",
    "codename": "UsrPFPlugin0116730568",
    "plugintag": "TREEEXPBAR_DEFAULT_EXPAND",
    "rtobjectmode": 2,
    "memo": "通过部件控件动态参数DEFAULT_EXPAND指定需要默认展开并选中的树节点",
    "rtobjectname": "IBizTreeExpBarDefaultExpand",
    "pssyspfpluginname": "树导航栏默认开展插件"
  }
]
```
