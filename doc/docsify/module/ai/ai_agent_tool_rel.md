# 智能体工具引用(ai_agent_tool_rel)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|智能体标识|AI_AGENT_ID|外键值|100|是||
|智能体名称|AI_AGENT_NAME|外键值文本|200|是||
|AI调用工具标识|AI_TOOL_ID|外键值|100|是||
|AI调用工具名称|AI_TOOL_NAME|外键值文本|200|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||

<p class="panel-title"><b>联合主键</b></p>

  * `智能体标识(AI_AGENT_ID)`
  * `AI调用工具标识(AI_TOOL_ID)`

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_AI_AGENT_TOOL_REL_AI_AGENT_AI_AGENT_ID](der/DER1N_AI_AGENT_TOOL_REL_AI_AGENT_AI_AGENT_ID)|[智能体(AI_AGENT)](module/ai/ai_agent)|1:N关系||
|[DER1N_AI_AGENT_TOOL_REL_AI_TOOL_AI_TOOL_ID](der/DER1N_AI_AGENT_TOOL_REL_AI_TOOL_AI_TOOL_ID)|[AI调用工具(AI_TOOL)](module/ai/ai_tool)|1:N关系||

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
|[DEFAULT](module/ai/ai_agent_tool_rel/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ai/ai_agent_tool_rel/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[DEFAULT](module/ai/ai_agent_tool_rel/dataset/Default)|DEFAULT|数据查询|是|||

## 数据权限

##### 全部数据（读） :id=ai_agent_tool_rel-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=ai_agent_tool_rel-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `READ`
* `UPDATE`
* `CREATE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_AI_AGENT_ID_EQ|智能体标识|EQ||
|N_AI_AGENT_NAME_EQ|智能体名称|EQ||
|N_AI_AGENT_NAME_LIKE|智能体名称|LIKE||
|N_AI_TOOL_ID_EQ|AI调用工具标识|EQ||
|N_AI_TOOL_NAME_EQ|AI调用工具名称|EQ||
|N_AI_TOOL_NAME_LIKE|AI调用工具名称|LIKE||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ai/ai_agent_tool_rel?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_tool_rel?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_tool_rel?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_tool_rel?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_tool_rel?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_tool_rel?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_tool_rel?id=搜索模式`">
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