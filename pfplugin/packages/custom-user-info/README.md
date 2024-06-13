# 自定义用户信息

该插件基于用户信息组件增强，主要是实现以弹框方式打开配置的用户信息视图，解决自定义用户信息显示。**该插件隶属于自定义部件绘制插件（基于用户信息组件进行扩展）**


## 页面展示

![scene](./public/assets/images/scene.png)


## 功能说明

### 特有Ui样式

### 自定义用户信息


## 输入参数

| 属性        | 类型         | 默认值   | 说明                                         |
| ----------- | ----------- | ------- | -------------------------------------------- |
| NAVVIEWNAME | string      | ---     | 弹框内容可以根据配置的导航视图名称绘制指定视图  |

- NAVVIEWNAME 配置于面板项高级参数内，截图如下所示

![params-config](./public/assets/images/params-config.png)


## 附录

### 自定义用户信息插件

```json
[
  {
    "plugintype": "CUSTOM",
    "rtobjectrepo": "@ibiz-template-plm/custom-user-info@0.0.3-dev.8",
    "codename": "UsrPFPlugin0317929153",
    "plugintag": "CUSTOM_AUTH_USERINFO",
    "rtobjectmode": 2,
    "rtobjectname": "IBizCustomUserInfo",
    "pssyspfpluginname": "自定义用户信息"
  }
]
```
