# 扩展执行计划(extend_schedule)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|创建人|CREATE_MAN|文本，可指定长度|100|否||
|创建时间|CREATE_TIME|日期时间型||否||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|逻辑有效标识|ENABLE|是否逻辑||是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|是||
|下一次执行时间|NEXT_TRIGGER_TIME|日期时间型||是||
|任务执行参数|PAYLOAD|长文本，没有长度限制|1048576|是||
|任务主体标识|PRINCIPAL_ID|文本，可指定长度|100|是||
|任务主体名称|PRINCIPAL_NAME|文本，可指定长度|100|是||
|任务主体类型|PRINCIPAL_TYPE|文本，可指定长度|100|是||
|调度类型|SCHEDULE_TYPE|[单项选择(文本值)](index/dictionary_index#schedule_type "调度类型")|60|是||
|任务类型|TASK_TYPE|外键值|100|否||
|任务类型名称|TASK_TYPE_NAME|外键值文本|200|是||
|定时器策略|TIMER_POLICY|文本，可指定长度|200|否||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_EXTEND_SCHEDULED_TASK_EXTEND_SCHEDULE_SCHEDULE_ID](der/DER1N_EXTEND_SCHEDULED_TASK_EXTEND_SCHEDULE_SCHEDULE_ID)|[扩展计划任务(EXTEND_SCHEDULED_TASK)](module/Base/extend_scheduled_task)|1:N关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_EXTEND_SCHEDULE_EXTEND_TASK_TYPE_TASK_TYPE](der/DER1N_EXTEND_SCHEDULE_EXTEND_TASK_TYPE_TASK_TYPE)|[扩展任务类型(EXTEND_TASK_TYPE)](module/Base/extend_task_type)|1:N关系||

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
|[DEFAULT](module/Base/extend_schedule/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/extend_schedule/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[DEFAULT](module/Base/extend_schedule/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_PRINCIPAL_ID_EQ|任务主体标识|EQ||
|N_SCHEDULE_TYPE_EQ|调度类型|EQ||
|N_TASK_TYPE_EQ|任务类型|EQ||
|N_TASK_TYPE_NAME_EQ|任务类型名称|EQ||
|N_TASK_TYPE_NAME_LIKE|任务类型名称|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/extend_schedule?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/extend_schedule?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/extend_schedule?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/extend_schedule?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/extend_schedule?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/extend_schedule?id=搜索模式`">
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