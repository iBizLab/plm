# 切换显示模式

该插件基于面板项自定义按钮增强，主要是用于序号表格插件树状模式及平铺模式显示的切换。**该插件隶属于自定义部件绘制插件（基于面板项自定义按钮进行扩展）**


## 页面展示

![image](./public/assets/images/scene.png)


## 功能说明

### 下拉样式

- 特有的下拉列表样式

### 界面逻辑调用序号表格插件切换

- 需要在面板项自定义按钮上配置界面行为

- 该插件下拉项分为树状及平铺，点击后将树状及平铺对应的映射值合到处理界面逻辑的参数中，再执行界面逻辑


## 附录

### 切换显示模式插件

```json
[
  {
    "plugintype": "CUSTOM",
    "rtobjectrepo": "@ibiz-template-plm/switch-show-mode@0.0.2-dev.151",
    "codename": "UsrPFPlugin0123395479",
    "plugintag": "SWITCH_SHOW_MODE",
    "rtobjectmode": 2,
    "rtobjectname": "IBizSwitchShowModeButton",
    "pssyspfpluginname": "切换显示模式"
  }
]
```

