# 通知事件(notify_event)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|事件分类|GROUP|单项选择(文本值)|60|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|消息类型|MSG_TYPE|[单项选择(数值)](index/dictionary_index#WFInfomMsgType "通知消息类型")||是||
|名称|NAME|文本，可指定长度|200|是||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_NOTIFY_EVENT_NOTIFY_SETTING](der/DERCUSTOM_NOTIFY_EVENT_NOTIFY_SETTING)|[通知设置(NOTIFY_SETTING)](module/Base/notify_setting)|自定义关系||
|[DERCUSTOM_NOTIFY_EVENT_SYSTEM_EXTENSION_NOTIFY_SETTING](der/DERCUSTOM_NOTIFY_EVENT_SYSTEM_EXTENSION_NOTIFY_SETTING)|[通知设置(SYSTEM_EXTENSION_NOTIFY_SETTING)](module/extension/system_extension_notify_setting)|自定义关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/extension/notify_event/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/extension/notify_event/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/extension/notify_event/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_GROUP_EQ|事件分类|EQ||
|N_ID_EQ|标识|EQ||
|N_MSG_TYPE_EQ|消息类型|EQ||
|N_NAME_LIKE|名称|LIKE||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[保存列表多数据部件](module/extension/notify_event/uilogic/save_list_mdctrl)|save_list_mdctrl|保存列表多数据部件|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/extension/notify_event?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/notify_event?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/notify_event?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/notify_event?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/notify_event?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/notify_event?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/notify_event?id=界面逻辑`">
  界面逻辑
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
show_der:'minor',


      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>