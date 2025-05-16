# 产品需求评审内容(review_content_idea)  <!-- {docsify-ignore-all} -->


记录产品需求的评审内容


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|变更类型|CHANGE_TYPE|[继承属性](index/dictionary_index#review_change_type "评审内容变更类型")|100|是||
|变更版本|CHANGE_VERSION|继承属性|1048576|是||
|建立人|CREATE_MAN|继承属性|100|否||
|创建时间|CREATE_TIME|继承属性||否||
|当前版本标识|CUR_VERSION_ID|继承属性|100|是||
|最终评审结果|FINAL_STAGE_RESULTS|[继承属性](index/dictionary_index#final_stage_results "最终评审结果")|60|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|继承属性|100|否||
|产品需求|IDEA|外键值对象|1048576|是||
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
|[DERCUSTOM_REVIEW_RESULT_REVIEW_CONTENT_IDEA_CONTENT_ID](der/DERCUSTOM_REVIEW_RESULT_REVIEW_CONTENT_IDEA_CONTENT_ID)|[评审结果(REVIEW_RESULT)](module/TestMgmt/review_result)|自定义关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_IDEA_REVIEW_CONTENT_IDEA](der/DERCUSTOM_IDEA_REVIEW_CONTENT_IDEA)|[需求(IDEA)](module/ProdMgmt/idea)|自定义关系||
|[DERCUSTOM_REVIEW_CONTENT_IDEA_REVIEW](der/DERCUSTOM_REVIEW_CONTENT_IDEA_REVIEW)|[评审(REVIEW)](module/TestMgmt/review)|自定义关系||
|[DERCUSTOM_REVIEW_CONTENT_IDEA_REVIEW_WIZARD](der/DERCUSTOM_REVIEW_CONTENT_IDEA_REVIEW_WIZARD)|[评审向导(REVIEW_WIZARD)](module/TestMgmt/review_wizard)|自定义关系||
|[DERCUSTOM_REVIEW_CONTENT_IDEA_VERSION](der/DERCUSTOM_REVIEW_CONTENT_IDEA_VERSION)|[版本(VERSION)](module/Base/version)|自定义关系||
|[DERMULINH_REVIEW_CONTENT_IDEA_RELATION](der/DERMULINH_REVIEW_CONTENT_IDEA_RELATION)|[关联(RELATION)](module/Base/relation)|多继承关系（虚拟实体）||
|[DERMULINH_REVIEW_CONTENT_IDEA_REVIEW_CONTENT_EXTEND](der/DERMULINH_REVIEW_CONTENT_IDEA_REVIEW_CONTENT_EXTEND)|[评审内容扩展(REVIEW_CONTENT_EXTEND)](module/TestMgmt/review_content_extend)|多继承关系（虚拟实体）||

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
|无操作|nothing|[实体处理逻辑](module/ProdMgmt/review_content_idea/logic/nothing "无操作")|默认|不支持||||
|评审内容条数|review_content_total|[实体处理逻辑](module/ProdMgmt/review_content_idea/logic/review_content_total "评审结果条数")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[无操作](module/ProdMgmt/review_content_idea/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[评审结果条数](module/ProdMgmt/review_content_idea/logic/review_content_total)|review_content_total|无||查询评审结果总条数与已评审条数|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/ProdMgmt/review_content_idea/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProdMgmt/review_content_idea/query/View)|VIEW|否|否 |否 ||
|[全部数据(all)](module/ProdMgmt/review_content_idea/query/all)|all|否|否 |否 ||
|[当前评审历史(cur_history)](module/ProdMgmt/review_content_idea/query/cur_history)|cur_history|否|否 |否 ||
|[评审历史列表(history_list)](module/ProdMgmt/review_content_idea/query/history_list)|history_list|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ProdMgmt/review_content_idea/dataset/Default)|DEFAULT|数据查询|是|||
|[全部数据(all)](module/ProdMgmt/review_content_idea/dataset/all)|all|数据查询|否|||
|[当前评审历史(cur_history)](module/ProdMgmt/review_content_idea/dataset/cur_history)|cur_history|数据查询|否|||
|[评审历史列表(history_list)](module/ProdMgmt/review_content_idea/dataset/history_list)|history_list|数据查询|否|||

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
| 移出需求（无权限） | remove_idea_all | 移出需求 |多项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ProdMgmt/review_content_idea?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/review_content_idea?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/review_content_idea?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/review_content_idea?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/review_content_idea?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/review_content_idea?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/review_content_idea?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/review_content_idea?id=界面行为`">
  界面行为
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