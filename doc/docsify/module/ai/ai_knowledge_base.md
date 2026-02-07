# 知识库(ai_knowledge_base)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|交谈模型|CHAT_MODEL|外键值文本|200|是||
|交谈模型标识|CHAT_MODEL_ID|外键值|100|是||
|切片方法|CHUNK_METHOD|[单项选择(文本值)](index/dictionary_index#chunkingstrategy "切片策略")|100|是||
|目标知识库|COPY_TARGET|文本，可指定长度|100|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|当前知识库模版|CUR_TEMP|文本，可指定长度|100|是||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|embedding模型|EMBEDDING_MODEL|外键值文本|100|是||
|模型标识|EMBEDDING_MODEL_ID|外键值|100|是||
|逻辑有效标识|ENABLE|是否逻辑||是||
|引导提示词|GUIDANCE_PROMPT|长文本，长度1000|2000|是||
|知识库标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|是否已删除|IS_DELETED|是否逻辑||是||
|成员|MEMBERS|一对多关系数据集合|1048576|是||
|元数据|META_DATA|长文本，没有长度限制|1048576|是||
|知识库名称|NAME|文本，可指定长度|200|是||
|解析配置|PARSER_CONFIG|一对一关系数据对象|1048576|是||
|召回重排|RERANK|是否逻辑||是||
|召回重排模型|RERANK_MODEL|外键值文本|100|是||
|模型标识|RERANK_MODEL_ID|外键值|100|是||
|召回相似度阈值|SIMILARITY_THRESHOLD|数值||是||
|知识库源标识|SOURCE_ID|外键值|100|是||
|知识库源名称|SOURCE_NAME|外键值文本|200|是||
|标签集|TAG_SETS|多项选择(文本值)|2000|是||
|最大召回数量|TOP_K|整型||是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|从已有知识库克隆|USE_COPY|是否逻辑||是||
|使用知识图谱|USE_KG|是否逻辑||是||
|向量相似度权重|VECTOR_SIMILARITY_WEIGHT|数值||是||
|可见范围|VISIBILITY|单项选择(文本值)|60|否||


###### 属性组

<el-row>
<el-tabs v-model="show_field_group">

<el-tab-pane label="属性组" name="field_group_DEFGroup">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|知识库标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|知识库名称|NAME|文本，可指定长度|200|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|逻辑有效标识|ENABLE|是否逻辑||是||
|建立时间|CREATE_TIME|日期时间型||否||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|可见范围|VISIBILITY|单项选择(文本值)|60|否||
|是否已删除|IS_DELETED|是否逻辑||是||
|元数据|META_DATA|长文本，没有长度限制|1048576|是||
|标签集|TAG_SETS|多项选择(文本值)|2000|是||
|引导提示词|GUIDANCE_PROMPT|长文本，长度1000|2000|是||
|召回重排模型|RERANK_MODEL|外键值文本|100|是||
|交谈模型|CHAT_MODEL|外键值文本|200|是||
|从已有知识库克隆|USE_COPY|是否逻辑||是||
|目标知识库|COPY_TARGET|文本，可指定长度|100|是||
|召回相似度阈值|SIMILARITY_THRESHOLD|数值||是||
|向量相似度权重|VECTOR_SIMILARITY_WEIGHT|数值||是||
|最大召回数量|TOP_K|整型||是||
|召回重排|RERANK|是否逻辑||是||
|使用知识图谱|USE_KG|是否逻辑||是||
|交谈模型标识|CHAT_MODEL_ID|外键值|100|是||
|切片方法|CHUNK_METHOD|[单项选择(文本值)](index/dictionary_index#chunkingstrategy "切片策略")|100|是||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|embedding模型|EMBEDDING_MODEL|外键值文本|100|是||
|模型标识|EMBEDDING_MODEL_ID|外键值|100|是||
|解析配置|PARSER_CONFIG|一对一关系数据对象|1048576|是||
|模型标识|RERANK_MODEL_ID|外键值|100|是||
|知识库源标识|SOURCE_ID|外键值|100|是||
|知识库源名称|SOURCE_NAME|外键值文本|200|是||

</el-tab-pane>

</el-tabs>
</el-row>

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_AI_AGENT_KNOWLEDGE_REL_AI_KNOWLEDGE_BASE_AI_KNOWLEDGE_BASE_ID](der/DER1N_AI_AGENT_KNOWLEDGE_REL_AI_KNOWLEDGE_BASE_AI_KNOWLEDGE_BASE_ID)|[智能体知识库引用(AI_AGENT_KNOWLEDGE_REL)](module/ai/ai_agent_knowledge_rel)|1:N关系||
|[DER1N_AI_KB_DOCUMENT_AI_KNOWLEDGE_BASE_KB_ID](der/DER1N_AI_KB_DOCUMENT_AI_KNOWLEDGE_BASE_KB_ID)|[知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document)|1:N关系||
|[DER1N_AI_KB_DOCUMENT_SYNC_AI_KNOWLEDGE_BASE_AI_KNOWLEDGE_BASE_ID](der/DER1N_AI_KB_DOCUMENT_SYNC_AI_KNOWLEDGE_BASE_AI_KNOWLEDGE_BASE_ID)|[知识库文档同步(AI_KB_DOCUMENT_SYNC)](module/ai/ai_kb_document_sync)|1:N关系||
|[DER1N_AI_KB_GRAPH_ENTITY_AI_KNOWLEDGE_BASE_KB_ID](der/DER1N_AI_KB_GRAPH_ENTITY_AI_KNOWLEDGE_BASE_KB_ID)|[知识库图谱实体(AI_KB_GRAPH_ENTITY)](module/ai/ai_kb_graph_entity)|1:N关系||
|[DER1N_AI_KB_GRAPH_RELATION_AI_KNOWLEDGE_BASE_KB_ID](der/DER1N_AI_KB_GRAPH_RELATION_AI_KNOWLEDGE_BASE_KB_ID)|[知识库图谱关系(AI_KB_GRAPH_RELATION)](module/ai/ai_kb_graph_relation)|1:N关系||
|[DER1N_AI_KB_MEMBER_AI_KNOWLEDGE_BASE_KB_ID](der/DER1N_AI_KB_MEMBER_AI_KNOWLEDGE_BASE_KB_ID)|[知识库成员(AI_KB_MEMBER)](module/ai/ai_kb_member)|1:N关系||
|[DERCUSTOM_AI_KB_CHUNKING_STRATEGY_AI_KNOWLEDGE_BASE](der/DERCUSTOM_AI_KB_CHUNKING_STRATEGY_AI_KNOWLEDGE_BASE)|[知识库文档切片策略(AI_KB_CHUNKING_STRATEGY)](module/ai/ai_kb_chunking_strategy)|自定义关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_AI_KNOWLEDGE_BASE_AI_KNOWLEDGE_SOURCE_SOURCE_ID](der/DER1N_AI_KNOWLEDGE_BASE_AI_KNOWLEDGE_SOURCE_SOURCE_ID)|[知识库源(AI_KNOWLEDGE_SOURCE)](module/ai/ai_knowledge_source)|1:N关系||
|[DER1N_AI_KNOWLEDGE_BASE_AI_MODEL_CHAT_MODEL_ID](der/DER1N_AI_KNOWLEDGE_BASE_AI_MODEL_CHAT_MODEL_ID)|[AI大模型(AI_MODEL)](module/ai/ai_model)|1:N关系||
|[DER1N_AI_KNOWLEDGE_BASE_AI_MODEL_EMBEDDING_MODEL_ID](der/DER1N_AI_KNOWLEDGE_BASE_AI_MODEL_EMBEDDING_MODEL_ID)|[AI大模型(AI_MODEL)](module/ai/ai_model)|1:N关系||
|[DER1N_AI_KNOWLEDGE_BASE_AI_MODEL_RERANK_MODEL_ID](der/DER1N_AI_KNOWLEDGE_BASE_AI_MODEL_RERANK_MODEL_ID)|[AI大模型(AI_MODEL)](module/ai/ai_model)|1:N关系||

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
|从其他数据库克隆|UpdateByKbTemp|[实体处理逻辑](module/ai/ai_knowledge_base/logic/UpdateByKbTemp "从其他数据库克隆")|默认|不支持||||
|UpdateTemp|UpdateTemp|内置方法|默认|不支持||||
|UpdateTempMajor|UpdateTempMajor|内置方法|默认|不支持||||
|变更管理员角色|change_admin_role|[实体处理逻辑](module/ai/ai_knowledge_base/logic/change_admin_role "变更管理员角色")|默认|不支持||||
|删除|delete|[实体处理逻辑](module/ai/ai_knowledge_base/logic/delete "删除")|默认|不支持||||
|填充拷贝数据|fill_temp|[实体处理逻辑](module/ai/ai_knowledge_base/logic/fill_temp "填充拷贝数据")|默认|不支持||||
|恢复|recover|[实体处理逻辑](module/ai/ai_knowledge_base/logic/recover "恢复")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[从其他数据库克隆](module/ai/ai_knowledge_base/logic/UpdateByKbTemp)|UpdateByKbTemp|无|||
|[删除](module/ai/ai_knowledge_base/logic/delete)|delete|无||知识库数据的逻辑删除，修改知识库的是否删除属性值|
|[变更管理员角色](module/ai/ai_knowledge_base/logic/change_admin_role)|change_admin_role|无||批量变更管理员角色身份（role_id）|
|[填充拷贝数据](module/ai/ai_knowledge_base/logic/fill_temp)|fill_temp|无|||
|[恢复](module/ai/ai_knowledge_base/logic/recover)|recover|无||恢复已删除状态知识库数据，修改知识库的是否删除属性值|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[DEFAULT](module/ai/ai_knowledge_base/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ai/ai_knowledge_base/query/View)|VIEW|否|否 |否 ||
|[管理员(admin)](module/ai/ai_knowledge_base/query/admin)|admin|否|否 |否 ||
|[已删除(deleted)](module/ai/ai_knowledge_base/query/deleted)|deleted|否|否 |否 ||
|[公开(public)](module/ai/ai_knowledge_base/query/public)|public|否|否 |否 ||
|[只读用户(reader)](module/ai/ai_knowledge_base/query/reader)|reader|否|否 |否 ||
|[操作用户(user)](module/ai/ai_knowledge_base/query/user)|user|否|否 |否 ||
|[启用知识库(VALID)](module/ai/ai_knowledge_base/query/valid)|VALID|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[DEFAULT](module/ai/ai_knowledge_base/dataset/Default)|DEFAULT|数据查询|是|||
|[管理员(admin)](module/ai/ai_knowledge_base/dataset/admin)|admin|数据查询|否|||
|[已删除(deleted)](module/ai/ai_knowledge_base/dataset/deleted)|deleted|数据查询|否|||
|[只读用户(reader)](module/ai/ai_knowledge_base/dataset/reader)|reader|数据查询|否|||
|[操作用户(user)](module/ai/ai_knowledge_base/dataset/user)|user|数据查询|否|||
|[启用数据集(VALID)](module/ai/ai_knowledge_base/dataset/valid)|VALID|数据查询|否|||

## 数据权限

##### 管理员（读写） :id=ai_knowledge_base-ADMIN_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[管理员(admin)](module/ai/ai_knowledge_base#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `DELETE`
* `SUBDATA`
* `UPDATE`



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



##### 只读用户（读） :id=ai_knowledge_base-USER_R

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[只读用户(reader)](module/ai/ai_knowledge_base#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 普通用户（读写） :id=ai_knowledge_base-USER_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[操作用户(user)](module/ai/ai_knowledge_base#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `SUBDATA`
* `READ`
* `CREATE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_CHAT_MODEL_EQ|交谈模型|EQ||
|N_CHAT_MODEL_LIKE|交谈模型|LIKE||
|N_CHAT_MODEL_ID_EQ|交谈模型标识|EQ||
|N_CHUNK_METHOD_EQ|切片方法|EQ||
|N_EMBEDDING_MODEL_EQ|embedding模型|EQ||
|N_EMBEDDING_MODEL_LIKE|embedding模型|LIKE||
|N_EMBEDDING_MODEL_ID_EQ|模型标识|EQ||
|N_ID_EQ|知识库标识|EQ||
|N_NAME_LIKE|知识库名称|LIKE||
|N_RERANK_MODEL_EQ|召回重排模型|EQ||
|N_RERANK_MODEL_LIKE|召回重排模型|LIKE||
|N_RERANK_MODEL_ID_EQ|模型标识|EQ||
|N_SOURCE_ID_EQ|知识库源标识|EQ||
|N_SOURCE_NAME_EQ|知识库源名称|EQ||
|N_SOURCE_NAME_LIKE|知识库源名称|LIKE||
|N_VISIBILITY_EQ|可见范围|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 新建知识库 | create_kb | 新建知识库 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建知识库](app/view/ai_knowledge_base_create_wizard_view)</details>||
| 删除知识库并至主页 | delete_to_home | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)|删除后跳转到智能体导航页|
| 编辑基本信息 | edit_base_info | 编辑基本信息 |单项数据（主键）|用户自定义||
| 恢复 | recover | 恢复 |单项数据（主键）|<details><summary>后台调用</summary>[recover](#行为)||
| 查看知识库成员 | open_kb_member | 知识库成员 |单项数据（主键）|用户自定义||
| 打开知识库切片策略视图 | open_kb_doc_chunk_view | 知识库切片策略 |单项数据（主键）|用户自定义||
| 设置管理员 | change_admin_role | 设置管理员 |单项数据（主键）|<details><summary>后台调用</summary>[change_admin_role](#行为)||
| 打开智能体导航页 | open_ai_agent_tree_exp_view | 打开智能体导航页 |无数据|<details><summary>打开顶级视图</summary>[智能体](app/view/ai_agent_tree_exp_view)</details>||
| 打开知识库信息视图 | open_kb_doc_info_view | 知识库信息 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[知识库信息](app/view/ai_knowledge_base_base_info_view)</details>||
| 打开新建知识库 | open_new_kb | 打开新建知识库 |单项数据|<details><summary>打开视图或向导（模态）</summary>[知识库](app/view/ai_knowledge_base_index_view)</details>||
| 删除 | delete | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)||
| 打开配置中心 | open_setting_center | 更多设置 |单项数据（主键）|用户自定义||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[批量删除知识库成员临时数据](module/ai/ai_knowledge_base/uilogic/remove_batch_temp)|remove_batch_temp|获取知识库内所有临时成员数据并删除|

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
<el-anchor-link :href="`#/module/ai/ai_knowledge_base?id=处理逻辑`">
  处理逻辑
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
<el-anchor-link :href="`#/module/ai/ai_knowledge_base?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_knowledge_base?id=界面逻辑`">
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