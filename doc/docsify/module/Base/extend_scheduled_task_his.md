# 扩展计划任务历史(extend_scheduled_task_his)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|创建人|CREATE_MAN|文本，可指定长度|100|否||
|创建时间|CREATE_TIME|日期时间型||否||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|逻辑有效标识|ENABLE|是否逻辑||是||
|执行完成时间|FINISHED_AT|日期时间型||是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|最大重试次数|MAX_RETRY|整型||否||
|名称|NAME|文本，可指定长度|200|是||
|任务执行参数|PAYLOAD|长文本，没有长度限制|1048576|是||
|任务主体标识|PRINCIPAL_ID|文本，可指定长度|100|是||
|任务主体名称|PRINCIPAL_NAME|文本，可指定长度|100|是||
|任务主体类型|PRINCIPAL_TYPE|文本，可指定长度|100|是||
|执行结果|RESULT|长文本，没有长度限制|1048576|是||
|执行信息|RESULT_MESSAGE|长文本，长度1000|2000|是||
|已重试次数|RETRY_COUNT|整型||否||
|计划执行时间|SCHEDULED_AT|日期时间型||否||
|实际开始时间|STARTED_AT|日期时间型||是||
|任务状态|STATUS|[单项选择(文本值)](index/dictionary_index#TaskStatus "任务状态")|60|否||
|任务类型|TASK_TYPE|外键值|60|是||
|任务类型|TASK_TYPE_NAME|外键值文本|200|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_EXTEND_SCHEDULED_TASK_HIS_EXTEND_TASK_TYPE_TASK_TYPE](der/DER1N_EXTEND_SCHEDULED_TASK_HIS_EXTEND_TASK_TYPE_TASK_TYPE)|[扩展任务类型(EXTEND_TASK_TYPE)](module/Base/extend_task_type)|1:N关系||

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
|[DEFAULT](module/Base/extend_scheduled_task_his/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/extend_scheduled_task_his/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[DEFAULT](module/Base/extend_scheduled_task_his/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_STATUS_EQ|任务状态|EQ||
|N_TASK_TYPE_EQ|任务类型|EQ||
|N_TASK_TYPE_NAME_EQ|任务类型|EQ||
|N_TASK_TYPE_NAME_LIKE|任务类型|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/extend_scheduled_task_his?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/extend_scheduled_task_his?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/extend_scheduled_task_his?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/extend_scheduled_task_his?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/extend_scheduled_task_his?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/extend_scheduled_task_his?id=搜索模式`">
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