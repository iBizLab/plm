# 工作项类型(work_item_type)  <!-- {docsify-ignore-all} -->


仅瀑布类型项目可以自定义工作项类型（定义瀑布型项目中可自定义的不同工作项类别。）


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|编码|CODE|文本，可指定长度|100|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|类型分组|GROUP|[单项选择(文本值)](index/dictionary_index#work_item_type_group "工作项类型分组")|60|是||
|图标|ICON|长文本，没有长度限制|100|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|是否系统类型|IS_SYSTEM|是否逻辑||是||
|名称|NAME|文本，可指定长度|200|是||
|项目类型|PROJECT_TYPE|[单项选择(文本值)](index/dictionary_index#project_type "项目类型")|60|是||
|序号|SEQUENCE|数值||否||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_WORK_ITEM_STATE_WORK_ITEM_TYPE_WORK_ITEM_TYPE_ID](der/DER1N_WORK_ITEM_STATE_WORK_ITEM_TYPE_WORK_ITEM_TYPE_ID)|[工作项状态(WORK_ITEM_STATE)](module/ProjMgmt/work_item_state)|1:N关系||
|[DER1N_WORK_ITEM_WORK_ITEM_TYPE_WORK_ITEM_TYPE_ID](der/DER1N_WORK_ITEM_WORK_ITEM_TYPE_WORK_ITEM_TYPE_ID)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|1:N关系||


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
|[数据查询(DEFAULT)](module/ProjMgmt/work_item_type/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProjMgmt/work_item_type/query/View)|VIEW|否|否 |否 ||
|[项目工作项类型(project_work_item_type)](module/ProjMgmt/work_item_type/query/project_work_item_type)|project_work_item_type|否|否 |否 ||
|[非缺陷的工作项类型(project_work_item_type_not_bug)](module/ProjMgmt/work_item_type/query/project_work_item_type_not_bug)|project_work_item_type_not_bug|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ProjMgmt/work_item_type/dataset/Default)|DEFAULT|数据查询|是|||
|[项目工作项类型(project_work_item_type)](module/ProjMgmt/work_item_type/dataset/project_work_item_type)|project_work_item_type|数据查询|否|||
|[非缺陷的工作项类型(project_work_item_type_not_bug)](module/ProjMgmt/work_item_type/dataset/project_work_item_type_not_bug)|project_work_item_type_not_bug|数据查询|否|||

## 数据权限

##### 全部数据（读） :id=work_item_type-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=work_item_type-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`
* `DELETE`
* `READ`
* `UPDATE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_CODE_IN|编码|IN||
|N_GROUP_EQ|类型分组|EQ||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_PROJECT_TYPE_EQ|项目类型|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 配置 | panel_usr1229905828_button_link1_click | 表单设计 |单项数据|<details><summary>打开视图或向导（模态）</summary>[表单设计](app/view/psdeformdesign)</details>||
| 配置 | panel_usr12299058218_button_link3_click | 通知配置 |单项数据|<details><summary>打开视图或向导（模态）</summary>[通知配置](app/view/psde_notify_tab_exp_view)</details>||
| 配置 | panel_usr12299058218_form_cfg_click | 表单设计 |单项数据|<details><summary>打开视图或向导（模态）</summary>[表单设计](app/view/psdeformdesign_modal)</details>||
| 配置 | panel_usr1229905828_button_link_click | 设计 |单项数据|<details><summary>打开视图或向导（模态）</summary>[设计](app/view/psdelogicmslogicdesign)</details>||
| 配置 | panel_usr12299058218_button_link_click | 设计 |单项数据|<details><summary>打开视图或向导（模态）</summary>[设计](app/view/psdelogicmslogicdesign)</details>||
| 配置 | panel_usr1229905828_button_link3_click | 通知配置 |单项数据|<details><summary>打开视图或向导（模态）</summary>[通知配置](app/view/psde_notify_tab_exp_view)</details>||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ProjMgmt/work_item_type?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item_type?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item_type?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item_type?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item_type?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item_type?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item_type?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/work_item_type?id=界面行为`">
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