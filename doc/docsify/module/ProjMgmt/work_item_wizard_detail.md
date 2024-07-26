# 工作项操作向导明细(work_item_wizard_detail)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|负责人|ASSIGNEE_NAME|文本，可指定长度|100|是||
|子工作项类型|CHILD_TYPE|单项选择(文本值)|200|是||
|子工作项类型|CHILD_WORK_ITEM_TYPES|一对多动态对象|1048576|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|影响工作项数量|INFLUENCE|整型||是||
|名称|NAME|文本，可指定长度|200|是||
|原父工作项|ORIGIN_PARENT|文本，可指定长度|100|是||
|原工作项状态|ORIGIN_STATE|单项选择(文本值)|100|是||
|原工作项类型|ORIGIN_TYPE|单项选择(文本值)|60|是||
|优先级|PRIORITY|[单项选择(文本值)](index/dictionary_index#work_item_priority "优先级")|60|是||
|项目标识|PROJECT_ID|文本，可指定长度|100|是||
|属性补充集合|PROPERTIES|一对多动态对象|1048576|是||
|状态变更|STATES|一对多动态对象|1048576|是||
|目标父工作项|TARGET_PARENT|文本，可指定长度|100|是||
|目标工作项状态|TARGET_STATE|单项选择(文本值)|100|是||
|目标类型|TARGET_TYPE|单项选择(文本值)|60|是||
|工作项标题|TITLE|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|向导标识|WIZARD_ID|外键值|100|是||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_WORK_ITEM_WIZARD_DETAIL_WORK_ITEM_WIZARD_WIZARD_ID](der/DER1N_WORK_ITEM_WIZARD_DETAIL_WORK_ITEM_WIZARD_WIZARD_ID)|[工作项操作向导(WORK_ITEM_WIZARD)](module/ProjMgmt/work_item_wizard)|1:N关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|CreateTemp|CreateTemp|内置方法|默认|不支持||||
|CreateTempMajor|CreateTempMajor|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|GetDraftTemp|GetDraftTemp|内置方法|默认|不支持||||
|GetDraftTempMajor|GetDraftTempMajor|内置方法|默认|不支持||||
|GetTemp|GetTemp|内置方法|默认|不支持||||
|GetTempMajor|GetTempMajor|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|RemoveTemp|RemoveTemp|内置方法|默认|支持||||
|RemoveTempMajor|RemoveTempMajor|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|UpdateTemp|UpdateTemp|内置方法|默认|不支持||||
|UpdateTempMajor|UpdateTempMajor|内置方法|默认|不支持||||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/ProjMgmt/work_item_wizard_detail/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProjMgmt/work_item_wizard_detail/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ProjMgmt/work_item_wizard_detail/dataset/Default)|DEFAULT|数据查询|是|||

## 数据权限

##### 全部数据（读写） :id=work_item_wizard_detail-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `UPDATE`
* `CREATE`
* `DELETE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_CHILD_TYPE_EQ|子工作项类型|EQ||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_ORIGIN_TYPE_EQ|原工作项类型|EQ||
|N_PRIORITY_EQ|优先级|EQ||
|N_TARGET_TYPE_EQ|目标类型|EQ||
|N_WIZARD_ID_EQ|向导标识|EQ||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[创建临时数据](module/ProjMgmt/work_item_wizard_detail/uilogic/create_temp_data)|create_temp_data||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ProjMgmt/work_item_wizard_detail?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item_wizard_detail?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item_wizard_detail?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item_wizard_detail?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item_wizard_detail?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item_wizard_detail?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item_wizard_detail?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item_wizard_detail?id=界面逻辑`">
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