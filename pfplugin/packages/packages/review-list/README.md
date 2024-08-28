# 评审列表

该插件基于列表增强，主要是用于评审列表的特有UI效果。**该插件隶属于部件插件（基于标准列表部件进行扩展）**


## 页面展示

![image](./public/assets/images/scene.png)


## 功能说明

- 列表项之间的间距显示下拉箭头

- 列表头部附加提交评审，列表尾部附加完成评审


## 输入参数

| 属性名            | 类型   | 默认值 | 说明                     |
| ----------------- | ------ | ------ | ------------------------ |
| USERIDFIELD      | string | ---    | 视图参数中操作用户的id属性   |
| AVATARFIELD      | string | ---    | 用户头像属性               |


## 附录

### 评审列表插件

```json
[
  {
    "plugintype": "LIST_RENDER",
    "rtobjectrepo": "@ibiz-template-plm/review-list@0.0.3-dev.162",
    "codename": "UsrPFPlugin0521643226",
    "plugintag": "REVIEW_LIST",
    "rtobjectmode": 2,
    "rtobjectname": "IBizReviewListControl",
    "pssyspfpluginname": "评审列表"
  }
]
```
