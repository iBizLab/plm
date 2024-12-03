# 页面模板(stencil)  <!-- {docsify-ignore-all} -->


用于快速创建知识文档的标准模板，确保格式的一致性。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|附件|ATTACHMENTS|一对多关系数据集合|1048576|是||
|正文|CONTENT|长文本，没有长度限制|1048576|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|正文格式|FORMAT_TYPE|单项选择(文本值)|60|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|全局模板|IS_GLOBAL|是否逻辑||是||
|名称|NAME|文本，可指定长度|200|是||
|空间标识|SPACE_ID|外键值|100|是||
|空间名称|SPACE_NAME|外键值文本|200|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DERCUSTOM_ATTACHMENT_STENCIL](der/DERCUSTOM_ATTACHMENT_STENCIL)|[附件(ATTACHMENT)](module/Base/attachment)|自定义关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_STENCIL_SPACE_SPACE_ID](der/DER1N_STENCIL_SPACE_SPACE_ID)|[空间(SPACE)](module/Wiki/space)|1:N关系||

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
|根据模板新建草稿|new_draft_form_stencil|[实体处理逻辑](module/Wiki/stencil/logic/new_draft_form_stencil "根据模板建立页面草稿")|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/Wiki/stencil/logic/nothing "无操作")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[无操作](module/Wiki/stencil/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[根据模板建立页面草稿](module/Wiki/stencil/logic/new_draft_form_stencil)|new_draft_form_stencil|无||获取页面的模板数据，并返回|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Wiki/stencil/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Wiki/stencil/query/View)|VIEW|否|否 |否 ||
|[非空间下模板(no_space_stencil)](module/Wiki/stencil/query/no_space_stencil)|no_space_stencil|否|否 |否 ||
|[只读用户(reader)](module/Wiki/stencil/query/reader)|reader|否|否 |否 ||
|[空间下页面模板(space_stencil)](module/Wiki/stencil/query/space_stencil)|space_stencil|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Wiki/stencil/dataset/Default)|DEFAULT|数据查询|是|||
|[非空间下模板(no_space_stencil)](module/Wiki/stencil/dataset/no_space_stencil)|no_space_stencil|数据查询|否|||
|[只读用户(reader)](module/Wiki/stencil/dataset/reader)|reader|数据查询|否|||
|[空间下页面模板(space_stencil)](module/Wiki/stencil/dataset/space_stencil)|space_stencil|数据查询|否|||

## 数据权限

##### 全部数据（读） :id=stencil-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=stencil-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `DELETE`
* `UPDATE`
* `CREATE`



##### 只读用户（读） :id=stencil-USER_R

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[只读用户(reader)](module/Wiki/stencil#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ(空间(READ))`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_FORMAT_TYPE_EQ|正文格式|EQ||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_SPACE_ID_EQ|空间标识|EQ||
|N_SPACE_ID_ISNULL|空间标识|ISNULL||
|N_SPACE_NAME_EQ|空间名称|EQ||
|N_SPACE_NAME_LIKE|空间名称|LIKE||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 使用此模板 | panel_usr0312103524_button_calluilogic_click | 使用此模板 |单项数据|用户自定义||
| 编辑模板 | edit_stencil | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[页面模板](app/view/stencil_edit_view)</details>||
| 删除 | delete | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[打开新建页面并关闭模板中心](module/Wiki/stencil/uilogic/open_new_page)|open_new_page|打开新建页并关闭模板中心|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Wiki/stencil?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/stencil?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/stencil?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/stencil?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/stencil?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/stencil?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/stencil?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/stencil?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/stencil?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/stencil?id=界面逻辑`">
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


      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>