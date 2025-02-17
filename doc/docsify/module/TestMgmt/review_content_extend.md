# 评审内容扩展(review_content_extend)  <!-- {docsify-ignore-all} -->


记录测试用例的评审内容的额外信息，例如版本、评审结果等


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|变更类型|CHANGE_TYPE|[文本，可指定长度](index/dictionary_index#review_change_type "评审内容变更类型")|100|是||
|变更版本|CHANGE_VERSION|一对多动态对象（MAP）|1048576|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|最终评审结果|FINAL_STAGE_RESULTS|[单项选择(文本值)](index/dictionary_index#final_stage_results "最终评审结果")|60|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|是||
|评审结果|STAGE_RESULTS|一对多关系数据集合|1048576|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_REVIEW_RESULT_REVIEW_CONTENT_EXTEND_CONTENT_ID](der/DER1N_REVIEW_RESULT_REVIEW_CONTENT_EXTEND_CONTENT_ID)|[评审结果(REVIEW_RESULT)](module/TestMgmt/review_result)|1:N关系||
|[DERCUSTOM_RELATION_REVIEW_CONTENT_EXTEND](der/DERCUSTOM_RELATION_REVIEW_CONTENT_EXTEND)|[关联(RELATION)](module/Base/relation)|自定义关系||
|[DERMULINH_REVIEW_CONTENT_REVIEW_CONTENT_EXTEND](der/DERMULINH_REVIEW_CONTENT_REVIEW_CONTENT_EXTEND)|[评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content)|多继承关系（虚拟实体）||


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
|[数据查询(DEFAULT)](module/TestMgmt/review_content_extend/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/TestMgmt/review_content_extend/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/TestMgmt/review_content_extend/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_FINAL_STAGE_RESULTS_EQ|最终评审结果|EQ||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/TestMgmt/review_content_extend?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_content_extend?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_content_extend?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_content_extend?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_content_extend?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_content_extend?id=搜索模式`">
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