# 知识库检索结果(ai_kb_search_result)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|分块快照集合|CHUNK_SNAPSHOTS|一对多动态对象|1048576|是||
|创建人|CREATE_MAN|文本，可指定长度|100|是||
|创建时间|CREATE_TIME|日期时间型||是||
|文档标识|DOCUMENT_ID|文本，可指定长度|100|是||
|命中内容快照|HIT_CONTENT|长文本，没有长度限制|1048576|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|知识库标识|KB_ID|文本，可指定长度|100|是||
|合并内容快照|MERGED_CONTENT|长文本，没有长度限制|1048576|是||
|名称|NAME|文本，可指定长度|200|是||
|标识|QUERY_ID|外键值|100|是||
|结果排序|RANK|整型||是||
|原始问题|RAW_QUERY|外键值附加数据|1048576|是||
|召回模式|RETRIEVAL_MODE|[单项选择(文本值)](index/dictionary_index#retrieval_mode "检索召回结果模式")|100|是||
|相似度得分|SIMILARITY|数值||是||
|更新人|UPDATE_MAN|文本，可指定长度|100|是||
|更新时间|UPDATE_TIME|日期时间型||是||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_AI_KB_SEARCH_RESULT_AI_KB_SEARCH_QUERY_QUERY_ID](der/DER1N_AI_KB_SEARCH_RESULT_AI_KB_SEARCH_QUERY_QUERY_ID)|[知识库检索记录(AI_KB_SEARCH_QUERY)](module/ai/ai_kb_search_query)|1:N关系||

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
|[DEFAULT](module/ai/ai_kb_search_result/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ai/ai_kb_search_result/query/View)|VIEW|否|否 |否 ||
|[当前记录(cur_query)](module/ai/ai_kb_search_result/query/cur_query)|cur_query|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[DEFAULT](module/ai/ai_kb_search_result/dataset/Default)|DEFAULT|数据查询|是|||
|[当前记录(cur_query)](module/ai/ai_kb_search_result/dataset/cur_query)|cur_query|数据查询|否|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_QUERY_ID_EQ|标识|EQ||
|N_RETRIEVAL_MODE_EQ|召回模式|EQ||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ai/ai_kb_search_result?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_search_result?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_search_result?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_search_result?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_search_result?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_kb_search_result?id=搜索模式`">
  搜索模式
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
show_der:'minor',


      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>