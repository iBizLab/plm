# 迭代变更(sprint_alteration)  <!-- {docsify-ignore-all} -->


迭代变更信息


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|是否删除|IS_DELETED|外键值附加数据||是||
|名称|NAME|文本，可指定长度|200|是||
|燃尽统计日期|REP_DATE|日期型||是||
|燃尽统计数值1|REP_VALUE1|数值||是||
|燃尽统计数值2|REP_VALUE2|数值||是||
|迭代标识|SPRINT_ID|外键值|100|是||
|名称|SPRINT_NAME|外键值文本|200|是||
|迭代状态|SPRINT_STATUS|[外键值附加数据](index/dictionary_index#sprint_status "迭代状态")|60|是||
|类型|TYPE|[单项选择(文本值)](index/dictionary_index#sprint_alteration_type "迭代变更类型")|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|工作项完成时间|WORK_ITEM_COMPLETED_AT|外键值附加数据||是||
|工作项标识|WORK_ITEM_ID|外键值|100|是||
|工作项优先级|WORK_ITEM_PRIORITY|[外键值附加数据](index/dictionary_index#work_item_priority "优先级")|100|是||
|标题|WORK_ITEM_TITLE|外键值文本|500|是||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_SPRINT_ALTERATION_SPRINT_SPRINT_ID](der/DER1N_SPRINT_ALTERATION_SPRINT_SPRINT_ID)|[迭代(SPRINT)](module/ProjMgmt/sprint)|1:N关系||
|[DER1N_SPRINT_ALTERATION_WORK_ITEM_WORK_ITEM_ID](der/DER1N_SPRINT_ALTERATION_WORK_ITEM_WORK_ITEM_ID)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|1:N关系||

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
|迭代变更统计|rep_change|[实体处理逻辑](module/ProjMgmt/sprint_alteration/logic/rep_change "迭代变更统计")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[迭代变更统计](module/ProjMgmt/sprint_alteration/logic/rep_change)|rep_change|无||统计：启始，移入，移出迭代数量|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/ProjMgmt/sprint_alteration/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProjMgmt/sprint_alteration/query/View)|VIEW|否|否 |否 ||
|[工作项迭代变更记录(change)](module/ProjMgmt/sprint_alteration/query/change)|change|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ProjMgmt/sprint_alteration/dataset/Default)|DEFAULT|数据查询|是|||
|[工作项迭代变更记录(change)](module/ProjMgmt/sprint_alteration/dataset/change)|change|数据查询|否|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_SPRINT_ID_EQ|迭代标识|EQ||
|N_SPRINT_NAME_EQ|名称|EQ||
|N_SPRINT_NAME_LIKE|名称|LIKE||
|N_WORK_ITEM_ID_EQ|工作项标识|EQ||
|N_WORK_ITEM_TITLE_EQ|标题|EQ||
|N_WORK_ITEM_TITLE_LIKE|标题|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ProjMgmt/sprint_alteration?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/sprint_alteration?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/sprint_alteration?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/sprint_alteration?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/sprint_alteration?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/sprint_alteration?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/sprint_alteration?id=搜索模式`">
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