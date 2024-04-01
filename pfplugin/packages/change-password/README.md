# 修改密码

该插件基于应用实体界面行为增强，主要是用于用户密码的修改，用户需输入旧密码和新密码，随后点击确认按钮，即可完成密码修改操作。**该插件隶属于应用实体界面行为插件（基于界面行为进行扩展）**


## 示例展示

![场景](./public/assets/images/scene.png)


## 功能说明

- 修改当前登录者的密码

- 行为执行采用嵌入输入弹框的方式进行操作


## 附录

### 修改密码插件

```json
[
  {
    "plugintype": "DEUIACTION",
    "rtobjectrepo": "@ibiz-template-plugin/change-password@0.0.3-dev.38",
    "codename": "UsrPFPlugin0326346903",
    "plugintag": "CHANGE_PASSWORD",
    "rtobjectmode": 2,
    "rtobjectname": "registerChangePasswordProvider",
    "pssyspfpluginname": "修改密码"
  }
]
```

