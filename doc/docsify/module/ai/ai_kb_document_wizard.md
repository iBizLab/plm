# 知识库文档向导(ai_kb_document_wizard)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|切片方法|CHUNK_METHOD|[单项选择(文本值)](index/dictionary_index#chunkingstrategy "切片策略")|100|是||
|创建人|CREATE_MAN|文本，可指定长度|100|否||
|创建时间|CREATE_TIME|日期时间型||否||
|自定义切片|CUSTOM_CHUNK|[是否逻辑](index/dictionary_index#custom_chunk "自定义切片")||是||
|逻辑有效标识|ENABLE|是否逻辑||是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|导入方式|IMPORT_METHOD|[单项选择(文本值)](index/dictionary_index#import_method "导入方式")|60|是||
|知识库标识|KB_ID|文本，可指定长度|100|是||
|名称|NAME|文本，可指定长度|200|是||
|解析配置|PARSER_CONFIG|一对一关系数据对象|1048576|是||
|已选择文件|SELECTED_FILE_NAME|一对多动态对象|1048576|是||
|已选择页面|SELECTED_PAGE_NAME|一对多动态对象|1048576|是||
|选择文件|SELECTION_FILE_IDS|文本，可指定长度|4000|是||
|选择页面|SELECTION_PAGE_IDS|文本，可指定长度|4000|是||
|选择空间|SPACE_SELECTION|单项选择(文本值)|60|是||
|同步频率|SYNC_FREQUENCY|[单项选择(文本值)](index/dictionary_index#KBSyncFrequency "知识库同步频率")|60|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DERCUSTOM_AI_KB_CHUNKING_STRATEGY_AI_KB_DOCUMENT_WIZARD](der/DERCUSTOM_AI_KB_CHUNKING_STRATEGY_AI_KB_DOCUMENT_WIZARD)|[知识库文档切片策略(AI_KB_CHUNKING_STRATEGY)](module/ai/ai_kb_chunking_strategy)|自定义关系||


</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|CreateTemp|CreateTemp|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|GetDraftTemp|GetDraftTemp|内置方法|默认|不支持||||
|GetTemp|GetTemp|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|RemoveTemp|RemoveTemp|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|UpdateTemp|UpdateTemp|内置方法|默认|不支持||||
|创建知识库文档|create_ai_kb_doc|[实体处理逻辑](module/ai/ai_kb_document_wizard/logic/create_ai_kb_doc "创建知识库文档")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[创建知识库文档](module/ai/ai_kb_document_wizard/logic/create_ai_kb_doc)|create_ai_kb_doc|无|||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[DEFAULT](module/ai/ai_kb_document_wizard/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ai/ai_kb_document_wizard/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[DEFAULT](module/ai/ai_kb_document_wizard/dataset/Default)|DEFAULT|数据查询|是|||

## 数据权限

##### 全部数据（读） :id=ai_kb_document_wizard-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=ai_kb_document_wizard-ALL_RW

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
|N_CHUNK_METHOD_EQ|切片方法|EQ||
|N_ID_EQ|标识|EQ||
|N_IMPORT_METHOD_EQ|导入方式|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_SPACE_SELECTION_EQ|选择空间|EQ||
|N_SYNC_FREQUENCY_EQ|同步频率|EQ||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ai/ai_kb_document_wizard?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_document_wizard?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_document_wizard?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_document_wizard?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_document_wizard?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_document_wizard?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_document_wizard?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_document_wizard?id=搜索模式`">
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