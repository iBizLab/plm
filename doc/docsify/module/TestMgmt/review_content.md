# 评审内容(review_content)  <!-- {docsify-ignore-all} -->


记录测试用例的评审内容


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|变更类型|CHANGE_TYPE|[继承属性](index/dictionary_index#review_change_type "评审内容变更类型")|100|是||
|变更版本|CHANGE_VERSION|继承属性|1048576|是||
|建立人|CREATE_MAN|继承属性|100|否||
|建立时间|CREATE_TIME|继承属性||否||
|当前版本标识|CUR_VERSION_ID|继承属性|100|是||
|最终评审结果|FINAL_STAGE_RESULTS|[继承属性](index/dictionary_index#final_stage_results "最终评审结果")|60|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|继承属性|100|否||
|名称|NAME|继承属性|200|是||
|所属数据对象|OWNER_TYPE|继承属性|100|是||
|父对象版本标识|PARENT_VERSION_ID|继承属性|100|是||
|关联主体标识|PRINCIPAL_ID|继承属性|100|是||
|关联主体类型|PRINCIPAL_TYPE|继承属性|100|是||
|评审数据|REVIEW_DATA|外键值对象|1048576|是||
|评审结果|STAGE_RESULTS|继承属性|1048576|是||
|目标对象负责人|TARGET_ASSIGNEE|继承属性|100|是||
|关联目标标识|TARGET_ID|继承属性|100|是||
|目标对象编号|TARGET_IDENTIFIER|继承属性|100|是||
|目标对象父标识|TARGET_PARENT_ID|继承属性|100|是||
|目标对象优先级|TARGET_PRIORITY|继承属性|100|是||
|目标对象状态|TARGET_STATE|继承属性|100|是||
|目标对象标题|TARGET_TITLE|继承属性|100|是||
|关联目标类型|TARGET_TYPE|继承属性|100|是||
|关联目标版本|TARGET_VERSION|外键值对象|1048576|是||
|目标对象版本标识|TARGET_VERSION_ID|继承属性|100|是||
|测试用例|TEST_CASE|外键值对象|1048576|是||
|更新人|UPDATE_MAN|继承属性|100|否||
|更新时间|UPDATE_TIME|继承属性||否||

<p class="panel-title"><b>联合主键</b></p>

  * `关联主体标识(PRINCIPAL_ID)`
  * `关联目标标识(TARGET_ID)`

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DERCUSTOM_REVIEW_RESULT_REVIEW_CONTENT_CONTENT_ID](der/DERCUSTOM_REVIEW_RESULT_REVIEW_CONTENT_CONTENT_ID)|[评审结果(REVIEW_RESULT)](module/TestMgmt/review_result)|自定义关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_REVIEW_CONTENT_REVIEW](der/DERCUSTOM_REVIEW_CONTENT_REVIEW)|[评审(REVIEW)](module/TestMgmt/review)|自定义关系||
|[DERCUSTOM_REVIEW_CONTENT_REVIEW_WIZARD](der/DERCUSTOM_REVIEW_CONTENT_REVIEW_WIZARD)|[评审向导(REVIEW_WIZARD)](module/TestMgmt/review_wizard)|自定义关系||
|[DERCUSTOM_REVIEW_CONTENT_VERSION](der/DERCUSTOM_REVIEW_CONTENT_VERSION)|[版本(VERSION)](module/Base/version)|自定义关系||
|[DERCUSTOM_TEST_CASE_REVIEW_CONTENT](der/DERCUSTOM_TEST_CASE_REVIEW_CONTENT)|[用例(TEST_CASE)](module/TestMgmt/test_case)|自定义关系||
|[DERMULINH_REVIEW_CONTENT_RELATION](der/DERMULINH_REVIEW_CONTENT_RELATION)|[关联(RELATION)](module/Base/relation)|多继承关系（虚拟实体）||
|[DERMULINH_REVIEW_CONTENT_REVIEW_CONTENT_EXTEND](der/DERMULINH_REVIEW_CONTENT_REVIEW_CONTENT_EXTEND)|[评审内容扩展(REVIEW_CONTENT_EXTEND)](module/TestMgmt/review_content_extend)|多继承关系（虚拟实体）||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#review_content_Create)|||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持|[附加操作](index/action_logic_index#review_content_Update)|||
|添加评审内容|add_review_content|[实体处理逻辑](module/TestMgmt/review_content/logic/add_review_content "添加内容")|默认|不支持||||
|完成评审|complete_review|[实体处理逻辑](module/TestMgmt/review_content/logic/complete_review "完成评审")|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/TestMgmt/review_content/logic/nothing "无操作")|默认|不支持||||
|规划用例|program_test_case|[实体处理逻辑](module/TestMgmt/review_content/logic/program_test_case "规划用例")|默认|不支持||||
|评审内容条数|review_content_total|[实体处理逻辑](module/TestMgmt/review_content/logic/review_content_total "评审结果条数")|默认|不支持||||
|设置评审结果|set_review_result|[实体处理逻辑](module/TestMgmt/review_content/logic/set_review_result "设置评审结果")|默认|不支持||||
|设置评审结果（批）|set_review_result_all|[实体处理逻辑](module/TestMgmt/review_content/logic/set_review_result_all "设置评审结果（批）")|默认|不支持||||
|开始评审|start_review|[实体处理逻辑](module/TestMgmt/review_content/logic/start_review "开始评审")|默认|不支持||||
|提交评审|submit_review|[实体处理逻辑](module/TestMgmt/review_content/logic/submit_review "提交评审")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[变更测试用例](module/TestMgmt/review_content/logic/change_test_case)|change_test_case|无||完成评审后变更测试用例的评审状态|
|[完成评审](module/TestMgmt/review_content/logic/complete_review)|complete_review|无||完成评审，判断是否为最终阶段，如果是变更评审的状态|
|[开始评审](module/TestMgmt/review_content/logic/start_review)|start_review|无||开启当前阶段评审|
|[提交评审](module/TestMgmt/review_content/logic/submit_review)|submit_review|无||测试|
|[无操作](module/TestMgmt/review_content/logic/nothing)|nothing|无|||
|[添加内容](module/TestMgmt/review_content/logic/add_review_content)|add_review_content|无||添加内容，生成正反向关联数据|
|[生成最终评审结果](module/TestMgmt/review_content/logic/generate_review_result_finally)|generate_review_result_finally|无||评审完成后生成最终的评审结果|
|[生成评审结果](module/TestMgmt/review_content/logic/generate_review_results)|generate_review_results|无||创建后自动生成评审结果|
|[获取评审结果列表](module/TestMgmt/review_content/logic/get_review_context_list)|get_review_context_list|无||根据评审id和阶段id，获取评审数据列表<br>需要给default传入评审id（review_id）和阶段id（stage_id）|
|[规划用例](module/TestMgmt/review_content/logic/program_test_case)|program_test_case|无||规划用例，将用例规划至评审内，生成正反向关联数据|
|[设置评审结果](module/TestMgmt/review_content/logic/set_review_result)|set_review_result|无||单条数据评审逻辑|
|[设置评审结果（批）](module/TestMgmt/review_content/logic/set_review_result_all)|set_review_result_all|无||批量进行评审|
|[评审结果条数](module/TestMgmt/review_content/logic/review_content_total)|review_content_total|无||查询评审结果总条数与已评审条数|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/TestMgmt/review_content/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/TestMgmt/review_content/query/View)|VIEW|否|否 |否 ||
|[全部数据(all)](module/TestMgmt/review_content/query/all)|all|否|否 |否 ||
|[评审历史列表(history_list)](module/TestMgmt/review_content/query/history_list)|history_list|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/TestMgmt/review_content/dataset/Default)|DEFAULT|数据查询|是|||
|[全部数据(all)](module/TestMgmt/review_content/dataset/all)|all|数据查询|否|||
|[评审历史列表(history_list)](module/TestMgmt/review_content/dataset/history_list)|history_list|数据查询|否|||

## 数据权限

##### 全部数据（读） :id=review_content-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=review_content-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `DELETE`
* `CREATE`
* `UPDATE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_PRINCIPAL_ID_EQ|关联主体标识|EQ||
|N_TARGET_ID_EQ|关联目标标识|EQ||
|N_TARGET_VERSION_ID_EQ|目标对象版本标识|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 设置评审结果 | set_review_result | 设置评审结果 |单项数据（主键）|用户自定义||
| 移出用例 | remove_case | 移出用例 |多项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||
| 移出用例（无权限） | remove_case_all | 移出用例 |多项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||
| 评审内容版本比对 | review_content_version_comparison | 版本比对 |单项数据|用户自定义||
| 返回 | back | 返回 |无数据|用户自定义||
| 提交评审 | submit_review | 提交评审 |无数据|用户自定义||
| 完成当前阶段评审 | complete_review | 完成评审 |无数据|<details><summary>打开视图或向导（模态）</summary></details>||
| 快速评审 | complete_review_quickly | 评审 |多项数据（主键）|<details><summary>后台调用</summary>[set_review_result_all](#行为)||
| 开始当前阶段评审 | start_cur_stage_review | 开始评审 |无数据|用户自定义||
| 返回 | panel_usr0612818719_button_calluilogic_click | 返回 |单项数据|用户自定义||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[保存评审结果](module/TestMgmt/review_content/uilogic/save_review_result)|save_review_result||
|[完成当前阶段评审](module/TestMgmt/review_content/uilogic/complete_cur_stage_review)|complete_cur_stage_review||
|[开始当前阶段评审](module/TestMgmt/review_content/uilogic/start_cur_stage_review)|start_cur_stage_review||
|[打开评审结果](module/TestMgmt/review_content/uilogic/open_result)|open_result||
|[提交评审](module/TestMgmt/review_content/uilogic/commit_review)|commit_review||
|[获取评审内容总条数](module/TestMgmt/review_content/uilogic/get_review_content_total)|get_review_content_total|获取评审内容总条数|
|[计算表格列行为状态(review)](module/TestMgmt/review_content/uilogic/calc_column_action_state)|calc_column_action_state|用于动态控制界面行为组内界面行为的禁用状态|
|[评审内容版本比对](module/TestMgmt/review_content/uilogic/review_content_version_comparison)|review_content_version_comparison||
|[返回](module/TestMgmt/review_content/uilogic/back)|back|查看评审结果后，返回主表单按钮使用|
|[返回（历史）](module/TestMgmt/review_content/uilogic/back_history)|back_history|查看评审历史后，返回测试用例主表单按钮使用|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/TestMgmt/review_content?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_content?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_content?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_content?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_content?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_content?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_content?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_content?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_content?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/review_content?id=界面逻辑`">
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