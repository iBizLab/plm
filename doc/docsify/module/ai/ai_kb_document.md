# 知识库文档(ai_kb_document)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|是否启用|ACTIVE|是否逻辑||否||
|切片方法|CHUNK_METHOD|[单项选择(文本值)](index/dictionary_index#chunkingstrategy "切片策略")|100|是||
|切片数量|CHUNK_NUM|数值||是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|自定义切片|CUSTOM_CHUNK|[单项选择(数值)](index/dictionary_index#custom_chunk "自定义切片")||是||
|上传文件|FILE|文件|500|是||
|文件类型|FILE_TYPE|[单项选择(文本值)](index/dictionary_index#file_type "文件类型")|100|是||
|知识库文档标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|知识库标识|KB_ID|外键值|100|是||
|文档元数据|META_DATA|长文本，没有长度限制|1048576|是||
|知识库文档名称|NAME|文本，可指定长度|200|是||
|解析内容|PARSED_CONTENT|长文本，没有长度限制|1048576|是||
|解析配置|PARSER_CONFIG|一对一关系数据对象|1048576|是||
|错误信息|PARSE_ERROR|长文本，没有长度限制|1048576|是||
|参考引用|REFERENCES|一对多动态对象|1048576|是||
|内容大小|SIZE|数值||是||
|源标识|SOURCE_ID|文本，可指定长度|200|是||
|源类型|SOURCE_TYPE|[单项选择(文本值)](index/dictionary_index#recent_visite "最近访问")|60|是||
|状态|STATUS|[单项选择(文本值)](index/dictionary_index#slice_status "文档切片状态")|60|是||
|同步频率|SYNC_FREQUENCY|[单项选择(文本值)](index/dictionary_index#KBSyncFrequency "知识库同步频率")|60|是||
|文档同步标识|SYNC_ID|外键值|100|是||
|标签集|TAG_SETS|外键值附加数据|2000|是||
|文档类型|TYPE|[单项选择(文本值)](index/dictionary_index#ai_kb_document_type "知识库文档类型")|60|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


###### 属性组

<el-row>
<el-tabs v-model="show_field_group">

<el-tab-pane label="基础数据" name="field_group_simple">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|知识库文档名称|NAME|文本，可指定长度|200|是||
|更新时间|UPDATE_TIME|日期时间型||否||
|文档同步标识|SYNC_ID|外键值|100|是||
|切片方法|CHUNK_METHOD|[单项选择(文本值)](index/dictionary_index#chunkingstrategy "切片策略")|100|是||
|文档类型|TYPE|[单项选择(文本值)](index/dictionary_index#ai_kb_document_type "知识库文档类型")|60|是||
|状态|STATUS|[单项选择(文本值)](index/dictionary_index#slice_status "文档切片状态")|60|是||
|文件类型|FILE_TYPE|[单项选择(文本值)](index/dictionary_index#file_type "文件类型")|100|是||
|自定义切片|CUSTOM_CHUNK|[单项选择(数值)](index/dictionary_index#custom_chunk "自定义切片")||是||
|标签集|TAG_SETS|外键值附加数据|2000|是||

</el-tab-pane>

</el-tabs>
</el-row>

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_AI_KB_CHUNK_AI_KB_DOCUMENT_DOCUMENT_ID](der/DER1N_AI_KB_CHUNK_AI_KB_DOCUMENT_DOCUMENT_ID)|[知识库文档分块(AI_KB_CHUNK)](module/ai/ai_kb_chunk)|1:N关系||
|[DER1N_AI_KB_GRAPH_ENTITY_AI_KB_DOCUMENT_DOCUMENT_ID](der/DER1N_AI_KB_GRAPH_ENTITY_AI_KB_DOCUMENT_DOCUMENT_ID)|[知识库图谱实体(AI_KB_GRAPH_ENTITY)](module/ai/ai_kb_graph_entity)|1:N关系||
|[DERCUSTOM_AI_KB_CHUNKING_STRATEGY_AI_KB_DOCUMENT](der/DERCUSTOM_AI_KB_CHUNKING_STRATEGY_AI_KB_DOCUMENT)|[知识库文档切片策略(AI_KB_CHUNKING_STRATEGY)](module/ai/ai_kb_chunking_strategy)|自定义关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_AI_KB_DOCUMENT_AI_KB_DOCUMENT_SYNC_SYNC_ID](der/DER1N_AI_KB_DOCUMENT_AI_KB_DOCUMENT_SYNC_SYNC_ID)|[知识库文档同步(AI_KB_DOCUMENT_SYNC)](module/ai/ai_kb_document_sync)|1:N关系||
|[DER1N_AI_KB_DOCUMENT_AI_KNOWLEDGE_BASE_KB_ID](der/DER1N_AI_KB_DOCUMENT_AI_KNOWLEDGE_BASE_KB_ID)|[知识库(AI_KNOWLEDGE_BASE)](module/ai/ai_knowledge_base)|1:N关系||
|[DERCUSTOM_AI_KB_DOCUMENT_PAGE](der/DERCUSTOM_AI_KB_DOCUMENT_PAGE)|[页面(PAGE)](module/Wiki/article_page)|自定义关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|异步重新切片|Async_rechunk|用户自定义|默认|不支持||||
|异步重新索引|Async_reindex|用户自定义|默认|不支持||||
|异步文档解析|Async_parse|用户自定义|默认|不支持||||
|切片|chunk|用户自定义|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#ai_kb_document_Create)|||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#ai_kb_document_Get)|||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|重新切片|rechunk|用户自定义|默认|不支持||||
|重新索引|reindex|用户自定义|默认|不支持||||
|Remove|Remove|内置方法|默认|支持|[附加操作](index/action_logic_index#ai_kb_document_Remove)|||
|Save|Save|内置方法|默认|不支持||||
|更新状态|update_status|用户扩展更新|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|提取元数据|extract_meta_data|用户自定义|默认|不支持||[ExtractMetaDataDEActionRuntime](index/plugin_index#ExtractMetaDataDEActionRuntime)||
|填充知识库切片策略|fill_kb_chunk|[实体处理逻辑](module/ai/ai_kb_document/logic/fill_kb_chunk "填充知识库切片策略")|默认|不支持||||
|文档解析处理|parse|[实体处理逻辑](module/ai/ai_kb_document/logic/parse "文档解析处理")|默认|不支持||||
|文档重新解析|reparse|[实体处理逻辑](module/ai/ai_kb_document/logic/reparse "文档重新解析")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[删除文档执行计划](module/ai/ai_kb_document/logic/remove_doc_scheduled)|remove_doc_scheduled|无|||
|[参考引用](module/ai/ai_kb_document/logic/references)|references|无|||
|[填充知识库切片策略](module/ai/ai_kb_document/logic/fill_kb_chunk)|fill_kb_chunk|无|||
|[文档解析处理](module/ai/ai_kb_document/logic/parse)|parse|无|||
|[文档重新解析](module/ai/ai_kb_document/logic/reparse)|reparse|无|||
|[更新文档执行计划](module/ai/ai_kb_document/logic/update_doc_scheduled)|update_doc_scheduled|属性逻辑|||
|[未切片数据集](module/ai/ai_kb_document/logic/unparsed)|unparsed|无|||
|[生成文档执行计划](module/ai/ai_kb_document/logic/generate_doc_scheduled)|generate_doc_scheduled|无|||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[DEFAULT](module/ai/ai_kb_document/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ai/ai_kb_document/query/View)|VIEW|否|否 |否 ||
|[简单查询(simple)](module/ai/ai_kb_document/query/simple)|simple|否|否 |否 ||
|[未解析文档(UNPARSED)](module/ai/ai_kb_document/query/unparsed)|UNPARSED|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[DEFAULT](module/ai/ai_kb_document/dataset/Default)|DEFAULT|数据查询|是|||
|[简单查询(simple)](module/ai/ai_kb_document/dataset/simple)|simple|数据查询|否|||
|[未解析文档(UNPARSED)](module/ai/ai_kb_document/dataset/unparsed)|UNPARSED|[实体逻辑](module/ai/ai_kb_document/logic/unparsed)|否|||

## 数据权限

##### 全部数据（读） :id=ai_kb_document-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=ai_kb_document-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`
* `DELETE`
* `UPDATE`
* `READ`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_FILE_TYPE_EQ|文件类型|EQ||
|N_ID_EQ|知识库文档标识|EQ||
|N_KB_ID_EQ|知识库标识|EQ||
|N_NAME_LIKE|知识库文档名称|LIKE||
|N_SOURCE_ID_EQ|源标识|EQ||
|N_STATUS_EQ|状态|EQ||
|N_SYNC_FREQUENCY_EQ|同步频率|EQ||
|N_SYNC_ID_EQ|文档同步标识|EQ||
|N_TYPE_EQ|文档类型|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 打开知识库文档编辑视图 | open_edit_view | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[知识库文档](app/view/ai_kb_document_edit_view)</details>||
| 重新索引 | reindex | 重新索引 |多项数据（主键）|<details><summary>后台调用</summary>[Async_reindex](#行为)||
| 打开知识库文档同步表格视图 | open_doc_sync_grid_view | 同步设置 |无数据|<details><summary>打开视图或向导（模态）</summary>[同步设置](app/view/ai_kb_document_sync_grid_view)</details>||
| 打开切片树表格 | open_chunk_tree | 打开切片树表格 |无数据|<details><summary>打开视图或向导（模态）</summary>[知识库文档分块](app/view/ai_kb_chunk_tree_grid_view)</details>||
| 文档重新解析 | reparse | 文档重新解析 |多项数据（主键）|<details><summary>后台调用</summary>[reparse](#行为)||
| 设置元数据 | set_meta_data | 设置元数据 |单项数据|<details><summary>打开视图或向导（模态）</summary>[文档元数据](app/view/ai_kb_document_meta_data_view)</details>||
| 重新切片 | rechunk | 重新切片 |多项数据（主键）|<details><summary>后台调用</summary>[Async_rechunk](#行为)||
| 打开知识库文档信息视图 | open_base_info_view | 文档信息 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[文档信息](app/view/ai_kb_document_base_info_view)</details>||
| 打开知识库文档切片视图 | open_chunk_view | 文档切片 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[切片](app/view/ai_kb_document_chunk_view)</details>||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ai/ai_kb_document?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_document?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_document?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_document?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_document?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_document?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_document?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_document?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_document?id=界面行为`">
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
show_field_group:'field_group_simple',

      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>