# 知识库图谱实体(ai_kb_graph_entity)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|置信度|CONFIDENCE|数值||是||
|上下文|CONTEXT|长文本，长度1000|1000|是||
|上下文向量|CONTEXT_VECTOR|VECTOR|1024|是||
|创建人|CREATE_MAN|文本，可指定长度|100|是||
|创建时间|CREATE_TIME|日期时间型||是||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|描述向量|DESCRIPTION_VECTOR|VECTOR|1024|是||
|知识库文档标识|DOCUMENT_ID|外键值|100|是||
|知识库文档名称|DOCUMENT_NAME|外键值文本|200|是||
|实体标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|知识库标识|KB_ID|外键值|100|是||
|知识库名称|KB_NAME|外键值文本|200|是||
|关键词|KEYWORDS|长文本，长度1000|1000|是||
|名称|NAME|文本，可指定长度|500|是||
|规范名称|NORMALIZED_NAME|文本，可指定长度|500|是||
|引用类型|REFERENCE_TYPE|[单项选择(文本值)](index/dictionary_index#graph_entity_reference_type "图实体引用类型")|30|是||
|类型|TYPE|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|是||
|更新时间|UPDATE_TIME|日期时间型||是||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_AI_KB_GRAPH_ENTITY_CHUNK_AI_KB_GRAPH_ENTITY_ENTITY_ID](der/DER1N_AI_KB_GRAPH_ENTITY_CHUNK_AI_KB_GRAPH_ENTITY_ENTITY_ID)|[知识库图谱实体文档分块(AI_KB_GRAPH_ENTITY_CHUNK)](module/ai/ai_kb_graph_entity_chunk)|1:N关系||
|[DER1N_AI_KB_GRAPH_RELATION_AI_KB_GRAPH_ENTITY_OBJECT_ID](der/DER1N_AI_KB_GRAPH_RELATION_AI_KB_GRAPH_ENTITY_OBJECT_ID)|[知识库图谱关系(AI_KB_GRAPH_RELATION)](module/ai/ai_kb_graph_relation)|1:N关系||
|[DER1N_AI_KB_GRAPH_RELATION_AI_KB_GRAPH_ENTITY_SUBJECT_ID](der/DER1N_AI_KB_GRAPH_RELATION_AI_KB_GRAPH_ENTITY_SUBJECT_ID)|[知识库图谱关系(AI_KB_GRAPH_RELATION)](module/ai/ai_kb_graph_relation)|1:N关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_AI_KB_GRAPH_ENTITY_AI_KB_DOCUMENT_DOCUMENT_ID](der/DER1N_AI_KB_GRAPH_ENTITY_AI_KB_DOCUMENT_DOCUMENT_ID)|[知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document)|1:N关系||
|[DER1N_AI_KB_GRAPH_ENTITY_AI_KNOWLEDGE_BASE_KB_ID](der/DER1N_AI_KB_GRAPH_ENTITY_AI_KNOWLEDGE_BASE_KB_ID)|[知识库(AI_KNOWLEDGE_BASE)](module/ai/ai_knowledge_base)|1:N关系||

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
|获取图谱实体/关系信息|graph_info|[实体处理逻辑](module/ai/ai_kb_graph_entity/logic/graph_info "获取图谱实体/关系信息")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[获取图谱实体/关系信息](module/ai/ai_kb_graph_entity/logic/graph_info)|graph_info|无|||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[DEFAULT](module/ai/ai_kb_graph_entity/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ai/ai_kb_graph_entity/query/View)|VIEW|否|否 |否 ||
|[实体类型(cur_entity_type)](module/ai/ai_kb_graph_entity/query/cur_entity_type)|cur_entity_type|否|否 |否 ||
|[当前数据库实体(cur_kb)](module/ai/ai_kb_graph_entity/query/cur_kb)|cur_kb|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[DEFAULT](module/ai/ai_kb_graph_entity/dataset/Default)|DEFAULT|数据查询|是|||
|[实体类型(cur_entity_type)](module/ai/ai_kb_graph_entity/dataset/cur_entity_type)|cur_entity_type|数据查询|否|||
|[当前数据库实体(cur_kb)](module/ai/ai_kb_graph_entity/dataset/cur_kb)|cur_kb|数据查询|否|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_DOCUMENT_ID_EQ|知识库文档标识|EQ||
|N_ID_EQ|实体标识|EQ||
|N_KB_ID_EQ|知识库标识|EQ||
|N_KB_NAME_EQ|知识库名称|EQ||
|N_KB_NAME_LIKE|知识库名称|LIKE||
|N_NAME_LIKE|名称|LIKE||
|N_REFERENCE_TYPE_EQ|引用类型|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 导出子图(包含间接关系) | exportSecondChildren | 包含间接关系 |无数据|用户自定义||
| 高亮关联 | highlight | 高亮关联 |无数据|用户自定义||
| 按类型筛选(前台) | typeFilterData | 按类型筛选 |无数据|用户自定义||
| 隐藏此实体 | hiddenEntity | 隐藏此实体 |无数据|用户自定义||
| 导出子图 | exportFirstChildren | 导出子图 |无数据|用户自定义||
| 聚焦此实体 | firstAdjacent | 聚焦此实体 |无数据|用户自定义||
| 包含间接关系 | secondAdjacent | 包含间接关系 |无数据|用户自定义||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ai/ai_kb_graph_entity?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_graph_entity?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_graph_entity?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_graph_entity?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_graph_entity?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_graph_entity?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_graph_entity?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_graph_entity?id=界面行为`">
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