# 知识库图谱关系(ai_kb_graph_relation)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|是否启用|ACTIVE|是否逻辑||否||
|置信度|CONFIDENCE|数值||是||
|创建人|CREATE_MAN|文本，可指定长度|100|是||
|创建时间|CREATE_TIME|日期时间型||是||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|描述向量|DESCRIPTION_VECTOR|VECTOR|1024|是||
|关系标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|知识库标识|KB_ID|外键值|100|是||
|知识库名称|KB_NAME|外键值文本|200|是||
|关系名称|NAME|文本，可指定长度|500|是||
|客体标识|OBJECT_ID|外键值|100|是||
|客体名称|OBJECT_NAME|外键值文本|500|是||
|关系谓词|PREDICATE|文本，可指定长度|200|是||
|主体标识|SUBJECT_ID|外键值|100|是||
|主体名称|SUBJECT_NAME|外键值文本|500|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|是||
|更新时间|UPDATE_TIME|日期时间型||是||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_AI_KB_GRAPH_RELATION_CHUNK_AI_KB_GRAPH_RELATION_RELATION_ID](der/DER1N_AI_KB_GRAPH_RELATION_CHUNK_AI_KB_GRAPH_RELATION_RELATION_ID)|[知识库图谱关系文档分块(AI_KB_GRAPH_RELATION_CHUNK)](module/ai/ai_kb_graph_relation_chunk)|1:N关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_AI_KB_GRAPH_RELATION_AI_KB_GRAPH_ENTITY_OBJECT_ID](der/DER1N_AI_KB_GRAPH_RELATION_AI_KB_GRAPH_ENTITY_OBJECT_ID)|[知识库图谱实体(AI_KB_GRAPH_ENTITY)](module/ai/ai_kb_graph_entity)|1:N关系||
|[DER1N_AI_KB_GRAPH_RELATION_AI_KB_GRAPH_ENTITY_SUBJECT_ID](der/DER1N_AI_KB_GRAPH_RELATION_AI_KB_GRAPH_ENTITY_SUBJECT_ID)|[知识库图谱实体(AI_KB_GRAPH_ENTITY)](module/ai/ai_kb_graph_entity)|1:N关系||
|[DER1N_AI_KB_GRAPH_RELATION_AI_KNOWLEDGE_BASE_KB_ID](der/DER1N_AI_KB_GRAPH_RELATION_AI_KNOWLEDGE_BASE_KB_ID)|[知识库(AI_KNOWLEDGE_BASE)](module/ai/ai_knowledge_base)|1:N关系||

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
|[DEFAULT](module/ai/ai_kb_graph_relation/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ai/ai_kb_graph_relation/query/View)|VIEW|否|否 |否 ||
|[当前数据库(cur_kb)](module/ai/ai_kb_graph_relation/query/cur_kb)|cur_kb|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[DEFAULT](module/ai/ai_kb_graph_relation/dataset/Default)|DEFAULT|数据查询|是|||
|[当前数据库(cur_kb)](module/ai/ai_kb_graph_relation/dataset/cur_kb)|cur_kb|数据查询|否|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|关系标识|EQ||
|N_KB_ID_EQ|知识库标识|EQ||
|N_KB_NAME_EQ|知识库名称|EQ||
|N_KB_NAME_LIKE|知识库名称|LIKE||
|N_NAME_LIKE|关系名称|LIKE||
|N_OBJECT_ID_EQ|客体标识|EQ||
|N_OBJECT_NAME_EQ|客体名称|EQ||
|N_OBJECT_NAME_LIKE|客体名称|LIKE||
|N_SUBJECT_ID_EQ|主体标识|EQ||
|N_SUBJECT_NAME_EQ|主体名称|EQ||
|N_SUBJECT_NAME_LIKE|主体名称|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ai/ai_kb_graph_relation?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_graph_relation?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_graph_relation?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_graph_relation?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_graph_relation?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_graph_relation?id=搜索模式`">
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