# 通知设置(system_extension_notify_setting)  <!-- {docsify-ignore-all} -->


通知设置信息


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|是||
|所有者标识|OWNER_ID|文本，可指定长度|100|是||
|所有者类型|OWNER_TYPE|单项选择(文本值)|30|否||
|设置模型|SETTING_MODEL|一对多关系数据集合|1048576|是||
|系统标记|SYSTEM_TAG|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DERCUSTOM_NOTIFY_EVENT_SYSTEM_EXTENSION_NOTIFY_SETTING](der/DERCUSTOM_NOTIFY_EVENT_SYSTEM_EXTENSION_NOTIFY_SETTING)|[通知事件(NOTIFY_EVENT)](module/extension/notify_event)|自定义关系||


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
|[数据查询(DEFAULT)](module/extension/system_extension_notify_setting/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/extension/system_extension_notify_setting/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/extension/system_extension_notify_setting/dataset/Default)|DEFAULT|数据查询|是|||
|[默认（全部数据）(VIEW)](module/extension/system_extension_notify_setting/dataset/View)|VIEW|数据查询|否|||
|[当前用户(CUR_USER)](module/extension/system_extension_notify_setting/dataset/cur_user)|CUR_USER|数据查询|否|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_OWNER_ID_EQ|所有者标识|EQ||
|N_OWNER_TYPE_EQ|所有者类型|EQ||
|N_SYSTEM_TAG_EQ|系统标记|EQ||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/extension/system_extension_notify_setting?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/system_extension_notify_setting?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/system_extension_notify_setting?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/system_extension_notify_setting?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/system_extension_notify_setting?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/system_extension_notify_setting?id=搜索模式`">
  搜索模式
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
show_der:'major',


      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>