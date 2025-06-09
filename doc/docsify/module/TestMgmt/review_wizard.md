# 评审向导(review_wizard)  <!-- {docsify-ignore-all} -->


评审向导信息


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|后置动作|ACTION_RULE|一对多动态对象|1048576|是||
|关注|ATTENTIONS|一对多关系数据集合|1048576|是||
|关注人|ATTENTIONS_IMP|文本，可指定长度|100|是||
|类别|CATEGORIES|长文本，长度1000|2000|是||
|评审内容|CONTENTS|一对多关系数据集合|1048576|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|流程准则标识|GUIDELINE_ID|外键值|100|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|编号<sup class="footnote-symbol">[[序列]](index/sequence_index#common_seq_review_id)</sup>|IDENTIFIER|文本，可指定长度|100|是||
|测试库标识|LIBRARY_ID|外键值|100|是||
|测试库标识|LIBRARY_IDENTIFIER|外键值附加数据|15|是||
|测试库名称|LIBRARY_NAME|外键值文本|200|是||
|名称|NAME|文本，可指定长度|200|是||
|评审主体标识|PRINCIPAL_ID|文本，可指定长度|100|是||
|评审主体名称|PRINCIPAL_NAME|文本，可指定长度|100|是||
|评审主体类型|PRINCIPAL_TYPE|文本，可指定长度|100|是||
|规则|RULE|一对多动态对象|1048576|是||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|是||
|阶段|STAGE|一对多动态对象|1048576|是||
|评审状态|STATE|[单项选择(文本值)](index/dictionary_index#test_case_state "用例评审状态")|60|是||
|提交人标识|SUBMITTER_ID|文本，可指定长度|100|是||
|提交人|SUBMITTER_NAME|文本，可指定长度|100|是||
|评审类型|TYPE|[单项选择(文本值)](index/dictionary_index#review_type "评审类型")|60|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DERCUSTOM_ATTENTION_REVIEW_WIZARD](der/DERCUSTOM_ATTENTION_REVIEW_WIZARD)|[关注(ATTENTION)](module/Base/attention)|自定义关系||
|[DERCUSTOM_REVIEW_CONTENT_IDEA_REVIEW_WIZARD](der/DERCUSTOM_REVIEW_CONTENT_IDEA_REVIEW_WIZARD)|[产品需求评审内容(REVIEW_CONTENT_IDEA)](module/ProdMgmt/review_content_idea)|自定义关系||
|[DERCUSTOM_REVIEW_CONTENT_REVIEW_WIZARD](der/DERCUSTOM_REVIEW_CONTENT_REVIEW_WIZARD)|[评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content)|自定义关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_REVIEW_WIZARD_GUIDELINE_GUIDELINE_ID](der/DER1N_REVIEW_WIZARD_GUIDELINE_GUIDELINE_ID)|[流程准则(GUIDELINE)](module/TestMgmt/guideline)|1:N关系||
|[DER1N_REVIEW_WIZARD_LIBRARY_LIBRARY_ID](der/DER1N_REVIEW_WIZARD_LIBRARY_LIBRARY_ID)|[测试库(LIBRARY)](module/TestMgmt/library)|1:N关系||

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
|填充评审规则|fill_guideline|[实体处理逻辑](module/TestMgmt/review_wizard/logic/fill_guideline "填充评审规则")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[创建后修改附加数据归属](module/TestMgmt/review_wizard/logic/fix_nested_data)|fix_nested_data|无||创建后修改附加数据归属|
|[创建后附加评审规则](module/TestMgmt/review_wizard/logic/add_guideline_after_created)|add_guideline_after_created|无|| 进行中|
|[填充评审规则](module/TestMgmt/review_wizard/logic/fill_guideline)|fill_guideline|无||获取评审规则并返回|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/TestMgmt/review_wizard/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/TestMgmt/review_wizard/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/TestMgmt/review_wizard/dataset/Default)|DEFAULT|数据查询|是|||

## 数据权限

##### 全部数据（读写） :id=review_wizard-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `UPDATE`
* `DELETE`
* `CREATE(测试库(SUBDATA))`
* `READ`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_GUIDELINE_ID_EQ|流程准则标识|EQ||
|N_ID_EQ|标识|EQ||
|N_LIBRARY_ID_EQ|测试库标识|EQ||
|N_LIBRARY_NAME_EQ|测试库名称|EQ||
|N_LIBRARY_NAME_LIKE|测试库名称|LIKE||
|N_NAME_LIKE|名称|LIKE||
|N_PRINCIPAL_ID_EQ|评审主体标识|EQ||
|N_STATE_EQ|评审状态|EQ||
|N_TYPE_EQ|评审类型|EQ||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[批量删除评审用例临时数据](module/TestMgmt/review_wizard/uilogic/remove_batch_temp)|remove_batch_temp|获取评审所有临时用例并删除|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/TestMgmt/review_wizard?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_wizard?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_wizard?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_wizard?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_wizard?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_wizard?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_wizard?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_wizard?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_wizard?id=界面逻辑`">
  界面逻辑
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