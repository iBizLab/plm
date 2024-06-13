# 人员信息

该插件基于标签增强，主要是将人员名称以图标的形式展示，并根据不同的人员名称计算为不同的图标背景颜色。**该插件隶属于编辑器自定义绘制插件（基于标签进行扩展）**


## 页面展示

![scene](./public/assets/images/scene.png)


## 功能说明

- 人员名称保留两个字符，并以图标的方式展示

- 根据不同的名称计算出不同的背景颜色


## 附录

### 人员信息插件

```json
[
  {
    "plugintype": "EDITOR_CUSTOMSTYLE",
    "rtobjectrepo": "@ibiz-template-plm/personal-info@0.0.3-dev.118",
    "codename": "UsrPFPlugin0220294463",
    "plugintag": "PERSONNEL_INFO",
    "rtobjectmode": 2,
    "rtobjectname": "IBizPersonalInfo",
    "pssyspfpluginname": "人员信息"
  }
]

```

### 编辑器样式

```json
[
  {
    "codename": "PERSONNEL_INFO",
    "pssyspfpluginid": "UsrPFPlugin0220294463",
    "repdefault": 0,
    "validflag": 1,
    "pssyseditorstylename": "人员信息",
    "pseditortypeid": "SPAN"
  }
]
```
