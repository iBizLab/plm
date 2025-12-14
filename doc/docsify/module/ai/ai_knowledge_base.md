# 知识库(ai_knowledge_base)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|切片方法|CHUNK_METHOD|[单项选择(文本值)](index/dictionary_index#chunkingstrategy "切片策略")|100|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|embedding模型|EMBEDDING_MODEL|文本，可指定长度|100|是||
|知识库标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|知识库名称|NAME|文本，可指定长度|200|是||
|解析配置|PARSER_CONFIG|一对一关系数据对象|1048576|是||
|知识库源标识|SOURCE_ID|外键值|100|是||
|知识库源名称|SOURCE_NAME|外键值文本|200|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_AI_AGENT_KNOWLEDGE_REL_AI_KNOWLEDGE_BASE_AI_KNOWLEDGE_BASE_ID](der/DER1N_AI_AGENT_KNOWLEDGE_REL_AI_KNOWLEDGE_BASE_AI_KNOWLEDGE_BASE_ID)|[智能体知识库引用(AI_AGENT_KNOWLEDGE_REL)](module/ai/ai_agent_knowledge_rel)|1:N关系||
|[DER1N_AI_KB_DOCUMENT_AI_KNOWLEDGE_BASE_KB_ID](der/DER1N_AI_KB_DOCUMENT_AI_KNOWLEDGE_BASE_KB_ID)|[知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document)|1:N关系||
|[DER1N_AI_KB_DOCUMENT_SYNC_AI_KNOWLEDGE_BASE_AI_KNOWLEDGE_BASE_ID](der/DER1N_AI_KB_DOCUMENT_SYNC_AI_KNOWLEDGE_BASE_AI_KNOWLEDGE_BASE_ID)|[知识库文档同步(AI_KB_DOCUMENT_SYNC)](module/ai/ai_kb_document_sync)|1:N关系||
|[DERCUSTOM_AI_KB_CHUNKING_STRATEGY_AI_KNOWLEDGE_BASE](der/DERCUSTOM_AI_KB_CHUNKING_STRATEGY_AI_KNOWLEDGE_BASE)|[知识库文档切片策略(AI_KB_CHUNKING_STRATEGY)](module/ai/ai_kb_chunking_strategy)|自定义关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_AI_KNOWLEDGE_BASE_AI_KNOWLEDGE_SOURCE_SOURCE_ID](der/DER1N_AI_KNOWLEDGE_BASE_AI_KNOWLEDGE_SOURCE_SOURCE_ID)|[知识库源(AI_KNOWLEDGE_SOURCE)](module/ai/ai_knowledge_source)|1:N关系||

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
|[DEFAULT](module/ai/ai_knowledge_base/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ai/ai_knowledge_base/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[DEFAULT](module/ai/ai_knowledge_base/dataset/Default)|DEFAULT|数据查询|是|||

## 数据权限

##### 全部数据（读） :id=ai_knowledge_base-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=ai_knowledge_base-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `UPDATE`
* `DELETE`
* `READ`
* `CREATE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|知识库标识|EQ||
|N_NAME_LIKE|知识库名称|LIKE||
|N_SOURCE_ID_EQ|知识库源标识|EQ||
|N_SOURCE_NAME_EQ|知识库源名称|EQ||
|N_SOURCE_NAME_LIKE|知识库源名称|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ai/ai_knowledge_base?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_knowledge_base?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_knowledge_base?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_knowledge_base?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_knowledge_base?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_knowledge_base?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_knowledge_base?id=搜索模式`">
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