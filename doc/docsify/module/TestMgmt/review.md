# 评审(review)  <!-- {docsify-ignore-all} -->


管理和记录测试用例评审。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|后置动作|ACTION_RULE|一对多关系数据集合|1048576|是||
|附件|ATTACHMENTS|一对多关系数据集合|1048576|是||
|关注|ATTENTIONS|一对多关系数据集合|1048576|是||
|关注人|ATTENTIONS_IMP|文本，可指定长度|100|是||
|类别|CATEGORIES|长文本，长度1000|2000|是||
|类别|CATEGORIES_NAME|长文本，长度1000|2000|是||
|完成时间|COMPLETED_AT|日期时间型||是||
|评审内容|CONTENTS|一对多动态对象|1048576|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|流程准则标识|GUIDELINE_ID|外键值|100|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|编号<sup class="footnote-symbol">[[序列]](index/sequence_index#seq_review_id)</sup>|IDENTIFIER|文本，可指定长度|100|是||
|测试库标识|LIBRARY_ID|外键值|100|是||
|测试库标识|LIBRARY_IDENTIFIER|外键值附加数据|15|是||
|测试库名称|LIBRARY_NAME|外键值文本|200|是||
|名称|NAME|文本，可指定长度|200|是||
|规则|RULE|一对多关系数据集合|1048576|是||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|是||
|阶段|STAGE|一对多关系数据集合|1048576|是||
|评审状态|STATE|[单项选择(文本值)](index/dictionary_index#test_case_state "用例评审状态")|60|是||
|提交时间|SUBMITTED_AT|日期时间型||是||
|提交人标识|SUBMITTER_ID|文本，可指定长度|100|是||
|提交人|SUBMITTER_NAME|文本，可指定长度|100|是||
|评审类型|TYPE|[单项选择(文本值)](index/dictionary_index#review_type "评审类型")|60|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


###### 属性组

<el-row>
<el-tabs v-model="show_field_group">

<el-tab-pane label="主视图属性组" name="field_group_DEFGroup">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|附件|ATTACHMENTS|一对多关系数据集合|1048576|是||
|关注|ATTENTIONS|一对多关系数据集合|1048576|是||
|关注人|ATTENTIONS_IMP|文本，可指定长度|100|是||
|类别|CATEGORIES|长文本，长度1000|2000|是||
|完成时间|COMPLETED_AT|日期时间型||是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|编号<sup class="footnote-symbol">[[序列]](index/sequence_index#seq_review_id)</sup>|IDENTIFIER|文本，可指定长度|100|是||
|测试库标识|LIBRARY_ID|外键值|100|是||
|测试库标识|LIBRARY_IDENTIFIER|外键值附加数据|15|是||
|测试库名称|LIBRARY_NAME|外键值文本|200|是||
|更新时间|UPDATE_TIME|日期时间型||否||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|评审类型|TYPE|[单项选择(文本值)](index/dictionary_index#review_type "评审类型")|60|是||
|评审状态|STATE|[单项选择(文本值)](index/dictionary_index#test_case_state "用例评审状态")|60|是||
|提交人标识|SUBMITTER_ID|文本，可指定长度|100|是||
|提交时间|SUBMITTED_AT|日期时间型||是||
|提交人|SUBMITTER_NAME|文本，可指定长度|100|是||
|名称|NAME|文本，可指定长度|200|是||
|后置动作|ACTION_RULE|一对多关系数据集合|1048576|是||
|规则|RULE|一对多关系数据集合|1048576|是||
|阶段|STAGE|一对多关系数据集合|1048576|是||
|评审内容|CONTENTS|一对多动态对象|1048576|是||

</el-tab-pane>

</el-tabs>
</el-row>

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DERCUSTOM_ATTENTION_REVIEW_OWNER_ID](der/DERCUSTOM_ATTENTION_REVIEW_OWNER_ID)|[关注(ATTENTION)](module/Base/attention)|自定义关系||
|[DERCUSTOM_COMMENT_REVIEW_PRINCIPAL_ID](der/DERCUSTOM_COMMENT_REVIEW_PRINCIPAL_ID)|[评论(COMMENT)](module/Base/comment)|自定义关系||
|[DERCUSTOM_RELATION_REVIEW](der/DERCUSTOM_RELATION_REVIEW)|[关联(RELATION)](module/Base/relation)|自定义关系||
|[DERCUSTOM_REVIEW_ATTACHMENT](der/DERCUSTOM_REVIEW_ATTACHMENT)|[附件(ATTACHMENT)](module/Base/attachment)|自定义关系||
|[DERCUSTOM_REVIEW_CONTENT_REVIEW](der/DERCUSTOM_REVIEW_CONTENT_REVIEW)|[评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content)|自定义关系||
|[DERCUSTOM_REVIEW_REVIEW_ACTION_RULE_ACTION_RULE](der/DERCUSTOM_REVIEW_REVIEW_ACTION_RULE_ACTION_RULE)|[评审后置动作(REVIEW_ACTION_RULE)](module/TestMgmt/review_action_rule)|自定义关系||
|[DERCUSTOM_REVIEW_REVIEW_RULE_RULE](der/DERCUSTOM_REVIEW_REVIEW_RULE_RULE)|[评审规则(REVIEW_RULE)](module/TestMgmt/review_rule)|自定义关系||
|[DERCUSTOM_REVIEW_REVIEW_STAGE_STAGE](der/DERCUSTOM_REVIEW_REVIEW_STAGE_STAGE)|[评审阶段(REVIEW_STAGE)](module/TestMgmt/review_stage)|自定义关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_REVIEW_GUIDELINE_GUIDELINE_ID](der/DER1N_REVIEW_GUIDELINE_GUIDELINE_ID)|[流程准则(GUIDELINE)](module/TestMgmt/guideline)|1:N关系||
|[DER1N_REVIEW_LIBRARY_LIBRARY_ID](der/DER1N_REVIEW_LIBRARY_LIBRARY_ID)|[测试库(LIBRARY)](module/TestMgmt/library)|1:N关系||

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
|添加评审内容|add_review_content|[实体处理逻辑](module/TestMgmt/review/logic/add_review_content "添加内容")|默认|不支持||||
|变更评审内阶段|change_review_stage|[实体处理逻辑](module/TestMgmt/review/logic/change_review_stage "变更评审内阶段")|默认|不支持||||
|填充评审规则|fill_guideline|[实体处理逻辑](module/TestMgmt/review/logic/fill_guideline "填充评审规则")|默认|不支持||||
|获取关注人|get_attention|内置方法|默认|不支持||||
|撤销评审|repeal_review|[实体处理逻辑](module/TestMgmt/review/logic/repeal_review "撤销评审")|默认|不支持||||
|提交评审|submit_review|[实体处理逻辑](module/TestMgmt/review/logic/submit_review "提交评审")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[全部提交](module/TestMgmt/review/logic/all_submit)|all_submit|无||未完成|
|[创建后附加评审规则](module/TestMgmt/review/logic/add_guideline_after_created)|add_guideline_after_created|无||在创建评审后，自动获取规则的值并赋予|
|[变更评审内阶段](module/TestMgmt/review/logic/change_review_stage)|change_review_stage|无|||
|[填充评审规则](module/TestMgmt/review/logic/fill_guideline)|fill_guideline|无||填充评审规则|
|[待办数据](module/TestMgmt/review/logic/TodoData)|TodoData|无||测试|
|[提交评审](module/TestMgmt/review/logic/submit_review)|submit_review|无||测试|
|[撤销评审](module/TestMgmt/review/logic/repeal_review)|repeal_review|无||撤销评审，并重置评审结果|
|[添加内容](module/TestMgmt/review/logic/add_review_content)|add_review_content|无||规划用例，将用例规划至评审内，生成正反向关联数据|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/TestMgmt/review/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/TestMgmt/review/query/View)|VIEW|否|否 |否 ||
|[我关注的(my_attention)](module/TestMgmt/review/query/my_attention)|my_attention|否|否 |否 |查询我关注的评审|
|[我评审的(my_reviewed)](module/TestMgmt/review/query/my_reviewed)|my_reviewed|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/TestMgmt/review/dataset/Default)|DEFAULT|数据查询|是|||
|[我的待办(MyTodo)](module/TestMgmt/review/dataset/MyTodo)|MyTodo|[实体逻辑](module/TestMgmt/review/logic/TodoData)|否|||
|[我关注的(my_attention)](module/TestMgmt/review/dataset/my_attention)|my_attention|数据查询|否||查询我关注的评审|
|[我评审的(my_reviewed)](module/TestMgmt/review/dataset/my_reviewed)|my_reviewed|数据查询|否|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_CATEGORIES_LIKE|类别|LIKE||
|N_CREATE_MAN_EQ|建立人|EQ||
|N_GUIDELINE_ID_EQ|流程准则标识|EQ||
|N_ID_EQ|标识|EQ||
|N_LIBRARY_ID_EQ|测试库标识|EQ||
|N_LIBRARY_NAME_EQ|测试库名称|EQ||
|N_LIBRARY_NAME_LIKE|测试库名称|LIKE||
|N_NAME_LIKE|名称|LIKE||
|N_STATE_EQ|评审状态|EQ||
|N_TYPE_EQ|评审类型|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 编辑 | toolbar_tree_exp_view_node8_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 添加附件 | add_attachments | 添加附件 |无数据|用户自定义||
| 撤销评审 | repeal_review | 撤销评审 |单项数据|<details><summary>后台调用</summary>[repeal_review](#行为)||
| 提交评审 | submit_review | 提交评审 |单项数据|<details><summary>后台调用</summary>[submit_review](#行为)||
| 设置类别 | set_category | 设置类别 |单项数据|<details><summary>打开视图或向导（模态）</summary>[设置类别](app/view/review_set_category_option_view)</details>||
| 添加评审内容 | add_review_content | 添加内容 |无数据|<details><summary>后台调用</summary>[add_review_content](#行为)||
| 删除 | delete | 删除 |单项数据|<details><summary>后台调用</summary>[Remove](#行为)||
| 上传附件 | upload_attachment | 上传 |无数据|用户自定义||
| 删除 | toolbar_tree_exp_view_node10_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 删除 | toolbar_tree_exp_view_node9_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 新建类别 | toolbar_tree_exp_view_treeexpbar_toolbar_deuiaction2_click | 新建类别 |单项数据|用户自定义||
| 编辑 | toolbar_tree_exp_view_node9_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 新建分组 | toolbar_tree_exp_view_treeexpbar_toolbar_deuiaction1_click | 新建分组 |单项数据|用户自定义||
| 编辑 | toolbar_tree_exp_view_node10_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 删除 | toolbar_tree_exp_view_node8_cm_deuiaction2_click | 删除 |单项数据|用户自定义||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[删除类别或分组](module/TestMgmt/review/uilogic/remove_section_or_category)|remove_section_or_category|调用树节点删除方法，删除当前树节点数据|
|[批量删除评审用例临时数据](module/TestMgmt/review/uilogic/remove_batch_temp)|remove_batch_temp|获取评审所有临时用例并删除|
|[提交评审](module/TestMgmt/review/uilogic/commit_review)|commit_review|提交评审|
|[撤销评审](module/TestMgmt/review/uilogic/repeal_review)|repeal_review|将评审状态设置为已撤回|
|[新建分组](module/TestMgmt/review/uilogic/create_section)|create_section|调用树节点新建方法，新建分组|
|[新建类别](module/TestMgmt/review/uilogic/create_category)|create_category|调用树节点新建方法新建类别|
|[添加附件数据（通用）](module/TestMgmt/review/uilogic/add_attachment)|add_attachment|调用附件上传行为，添加附件数据|
|[编辑类别或分组](module/TestMgmt/review/uilogic/edit_section_or_category)|edit_section_or_category|调用树节点修改方法，编辑当前树节点的类别或分组|
|[计算表格列行为状态(review)](module/TestMgmt/review/uilogic/calc_column_action_state)|calc_column_action_state|用于动态控制界面行为组按钮的显示隐藏状态|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/TestMgmt/review?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review?id=界面逻辑`">
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
show_field_group:'field_group_DEFGroup',

      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>