# 数据字典(dictionary_data)  <!-- {docsify-ignore-all} -->


用于记录基础数据字典。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|字典目录|CATALOG|[单项选择(文本值)](index/dictionary_index#dictionary_catalog "字典目录")|60|是||
|颜色|COLOR|文本，可指定长度|100|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|是否系统默认|IS_SYSTEM|是否逻辑||是||
|名称|NAME|文本，可指定长度|200|是||
|序号|SEQUENCE|数值||是||
|类型|TYPE|[单项选择(文本值)](index/dictionary_index#dictionary_type "字典项类型")|60|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|值|VAL|文本，可指定长度|100|是||


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
|无操作|nothing|[实体处理逻辑](module/Base/dictionary_data/logic/nothing "无操作")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[无操作](module/Base/dictionary_data/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/dictionary_data/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/dictionary_data/query/View)|VIEW|否|否 |否 ||
|[需求状态(idea_state)](module/Base/dictionary_data/query/idea_state)|idea_state|否|否 |否 ||
|[发布阶段(release_stage)](module/Base/dictionary_data/query/release_stage)|release_stage|否|否 |否 ||
|[工单状态(ticket_state)](module/Base/dictionary_data/query/ticket_state)|ticket_state|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/dictionary_data/dataset/Default)|DEFAULT|数据查询|是|||
|[需求状态(idea_state)](module/Base/dictionary_data/dataset/idea_state)|idea_state|数据查询|否|||
|[发布阶段(release_stage)](module/Base/dictionary_data/dataset/release_stage)|release_stage|数据查询|否|||
|[工单状态(ticket_state)](module/Base/dictionary_data/dataset/ticket_state)|ticket_state|数据查询|否|||

## 数据权限

##### 全部数据（读） :id=dictionary_data-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=dictionary_data-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `UPDATE`
* `DELETE`
* `CREATE`
* `READ`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_CATALOG_EQ|字典目录|EQ||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_TYPE_EQ|类型|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 工单配置_删除 | ticket_remove | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||
| 需求配置_删除 | idea_remove | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||
| 新建阶段 | create_global_type | 新建阶段 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建阶段](app/view/dictionary_data_global_create_view)</details>||
| 新建状态 | create_state_type | 新建状态 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建状态](app/view/dictionary_data_quick_create_view)</details>||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[判断操作列是否禁用](module/Base/dictionary_data/uilogic/judge_column_state)|judge_column_state|用于动态控制激活行为的禁用状态|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/dictionary_data?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dictionary_data?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dictionary_data?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dictionary_data?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dictionary_data?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dictionary_data?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dictionary_data?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dictionary_data?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dictionary_data?id=界面逻辑`">
  界面逻辑
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {



      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>