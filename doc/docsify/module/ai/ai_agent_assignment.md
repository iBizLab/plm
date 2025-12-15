# 智能体分配(ai_agent_assignment)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|智能体标记|CONTEXT_CODE_NAME|外键值附加数据|100|是||
|智能体业务上下文标识|CONTEXT_ID|外键值|100|否||
|智能体上下文名称|CONTEXT_NAME|外键值附加数据|200|是||
|创建人|CREATE_MAN|文本，可指定长度|100|否||
|创建时间|CREATE_TIME|日期时间型||否||
|描述|DESCRIPTION|外键值附加数据|2000|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|是||
|名称|NAME|外键值文本|200|否||
|系统标记|SYSTEM_FLAG|是否逻辑||是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|引用标记|USE_TAG|文本，可指定长度|100|否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_AI_AGENT_ASSIGNMENT_AI_AGENT_CONTEXT_CONTEXT_ID](der/DER1N_AI_AGENT_ASSIGNMENT_AI_AGENT_CONTEXT_CONTEXT_ID)|[智能体业务上下文(AI_AGENT_CONTEXT)](module/ai/ai_agent_context)|1:N关系||

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
|[DEFAULT](module/ai/ai_agent_assignment/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ai/ai_agent_assignment/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[DEFAULT](module/ai/ai_agent_assignment/dataset/Default)|DEFAULT|数据查询|是|||

## 数据权限

##### 全部数据（读写） :id=ai_agent_assignment-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`
* `READ`
* `UPDATE`
* `DELETE`



##### 我创建的（读写） :id=ai_agent_assignment-CURDRAFTMAN_RW

<p class="panel-title"><b>数据范围</b></p>

* `自定义条件` ：`[('CREATE_MAN','=',#{srf.sessioncontext.srfpersonid})]`

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `UPDATE`
* `READ`
* `CREATE`



##### 系统的（读） :id=ai_agent_assignment-SYSTEM_R

<p class="panel-title"><b>数据范围</b></p>

* `自定义条件` ：`[('SYSTEM_FLAG','=',1)]`

<p class="panel-title"><b>数据能力</b></p>

* `READ`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_CONTEXT_ID_EQ|智能体业务上下文标识|EQ||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_USE_TAG_EQ|引用标记|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 新建智能体 | create_agent | 新建智能体 |无数据|<details><summary>打开视图或向导（模态）</summary>[智能体](app/view/ai_agent_context_quick_create_view)</details>||
| 绑定 | bind | 绑定 |无数据|<details><summary>打开视图或向导（模态）</summary>[绑定智能体](app/view/ai_agent_assignment_bind)</details>||
| 执行分配的智能体 | run_agent | 执行 |单项数据|用户自定义||
| AI+ | ai | AI+ |单项数据|<details><summary>打开视图或向导（模态）</summary>[智能体选择器](app/view/ai_agent_assignment_selector)</details>||
| AI+无数据 | ai_nodata | AI+ |无数据|<details><summary>打开视图或向导（模态）</summary>[智能体选择器](app/view/ai_agent_assignment_selector)</details>||
| 删除 | remove | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[run分配智能体逻辑](module/ai/ai_agent_assignment/uilogic/run)|run||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ai/ai_agent_assignment?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_assignment?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_assignment?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_assignment?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_assignment?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_assignment?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_assignment?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_assignment?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ai/ai_agent_assignment?id=界面逻辑`">
  界面逻辑
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