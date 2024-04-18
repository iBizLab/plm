# 消息通知目标(PSDENotifyTarget)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|目标数据|DATA|长文本，没有长度限制|1048576|是||
|过滤项|FILTER|文本，可指定长度|50|是||
|实体通知|PSDENOTIFYID|外键值|100|是||
|实体通知|PSDENOTIFYNAME|外键值文本|200|是||
|实体通知目标标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|PSDENOTIFYTARGETID|全局唯一标识，文本类型，用户不可见|100|否||
|实体通知目标名称|PSDENOTIFYTARGETNAME|文本，可指定长度|200|是||
|目标类型|TARGETTYPE|[单项选择(文本值)](index/dictionary_index#DENotifyTargetType "实体通知目标类型")|20|否||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_PSDENOTIFYTARGET_PSDENOTIFY_PSDENOTIFYID](der/DER1N_PSDENOTIFYTARGET_PSDENOTIFY_PSDENOTIFYID)|[实体通知(PSDENOTIFY)](module/extension/PSDENotify)|1:N关系||

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
|[数据查询(DEFAULT)](module/extension/PSDENotifyTarget/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/extension/PSDENotifyTarget/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/extension/PSDENotifyTarget/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_PSDENOTIFYID_EQ|实体通知|EQ||
|N_PSDENOTIFYNAME_EQ|实体通知|EQ||
|N_PSDENOTIFYNAME_LIKE|实体通知|LIKE||
|N_PSDENOTIFYTARGETID_EQ|实体通知目标标识|EQ||
|N_PSDENOTIFYTARGETNAME_LIKE|实体通知目标名称|LIKE||
|N_TARGETTYPE_EQ|目标类型|EQ||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/extension/PSDENotifyTarget?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDENotifyTarget?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDENotifyTarget?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDENotifyTarget?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDENotifyTarget?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDENotifyTarget?id=搜索模式`">
  搜索模式
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