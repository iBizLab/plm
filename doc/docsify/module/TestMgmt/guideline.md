# 流程准则(guideline)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|是||
|对象类型|OBJECT_TYPE|文本，可指定长度|100|是||
|评审后置动作|REVIEW_ACTION_RULE|一对多关系数据集合|1048576|是||
|评审规则|REVIEW_RULE|一对多关系数据集合|1048576|是||
|评审阶段|REVIEW_STAGE|一对多关系数据集合|1048576|是||
|所属主体标识|SCOPE_ID|文本，可指定长度|100|是||
|主题类型|SUBJECT_TYPE|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_REVIEW_ACTION_RULE_GUIDELINE_GUIDELINE_ID](der/DER1N_REVIEW_ACTION_RULE_GUIDELINE_GUIDELINE_ID)|[评审后置动作(REVIEW_ACTION_RULE)](module/TestMgmt/review_action_rule)|1:N关系||
|[DER1N_REVIEW_GUIDELINE_GUIDELINE_ID](der/DER1N_REVIEW_GUIDELINE_GUIDELINE_ID)|[评审(REVIEW)](module/TestMgmt/review)|1:N关系||
|[DER1N_REVIEW_RULE_GUIDELINE_GUIDELINE_ID](der/DER1N_REVIEW_RULE_GUIDELINE_GUIDELINE_ID)|[评审规则(REVIEW_RULE)](module/TestMgmt/review_rule)|1:N关系||
|[DER1N_REVIEW_STAGE_GUIDELINE_GUIDELINE_ID](der/DER1N_REVIEW_STAGE_GUIDELINE_GUIDELINE_ID)|[评审阶段(REVIEW_STAGE)](module/TestMgmt/review_stage)|1:N关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_GUIDELINE_LIBRARY_LIBRARY_ID](der/DERCUSTOM_GUIDELINE_LIBRARY_LIBRARY_ID)|[测试库(LIBRARY)](module/TestMgmt/library)|自定义关系||

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
|[数据查询(DEFAULT)](module/TestMgmt/guideline/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/TestMgmt/guideline/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/TestMgmt/guideline/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_SCOPE_ID_EQ|所属主体标识|EQ||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/TestMgmt/guideline?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/guideline?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/guideline?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/guideline?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/guideline?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/guideline?id=搜索模式`">
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