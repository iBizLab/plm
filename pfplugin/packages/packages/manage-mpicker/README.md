# 数据选择（管理）

该插件基于数据选择增强，主要是支持配置自填模式-附加界面行为组、选择视图等。且选中数据不会立即进行抛值，而是点击确定按钮后再进行抛值，点击取消按钮将清空选中数据。**该插件隶属于编辑器自定义绘制插件（基于数据选择进行的扩展）**

![image](./public/assets/images/scene.png)


## 功能说明

- 重写选中数据逻辑，选中数据后点击确定按钮后再抛值

- 支持自填模式项布局面板


## 输入参数

| 属性名      | 类型      | 默认值     | 说明         |
| ---------- | --------- | --------- | ------------ |
| toplabel   | string    | '最近浏览' | 顶部标签名称 |
| lastlabel  | string    | '更多'     | 底部标签名称  |

### 配置示例

#### 顶部标签名称

```
toplabel=最近浏览
```

#### 底部标签名称

```
lastlabel=更多
```


## 基本使用

在具体项目中，先通过模型导入前端界面插件，再导入编辑器插件，然后在具体的视图配置动态文本，然后将其编辑器类型改为数据选择，编辑器类型选择“数据选择（管理）”

然后配置关联实体与关联自填模式、选择界面视图，并在自填模式中配置附加界面行为组

顶部及底部标签名称可以在编辑器参数中配置

### 自填模式项布局面板配置

![image](./public/assets/images/itemlayoutpanel.png)


## 附录：

### 数据选择（管理）插件

```json
[
  {
    "plugintype": "EDITOR_CUSTOMSTYLE",
    "rtobjectrepo": "@ibiz-template-plugin/manage-mpicker@0.1.3-alpha.16",
    "codename": "UsrPFPlugin1228363957",
    "plugintag": "MANAGE",
    "rtobjectmode": 2,
    "rtobjectname": "IBizManageMPicker",
    "pssyspfpluginname": "数据选择（管理）"
  }
]
```

### 编辑器样式

```json
[
  {
    "codename": "MANAGE",
    "pssyspfpluginid": "UsrPFPlugin1228363957",
    "repdefault": 0,
    "validflag": 1,
    "pssyseditorstylename": "数据选择（管理）",
    "pseditortypeid": "PICKER"
  }
]
```
