# 通用模板(template)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|模板类型|BROAD_TYPE|文本，可指定长度|100|是||
|创建人|CREATE_MAN|文本，可指定长度|100|否||
|创建时间|CREATE_TIME|日期时间型||否||
|描述|DESCRIPTION|长文本，没有长度限制|1048576|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|是否已归档|IS_ARCHIVED|是否逻辑||是||
|是否已删除|IS_DELETED|是否逻辑||是||
|名称|NAME|文本，可指定长度|200|否||
|所属数据标识|OWNER_ID|文本，可指定长度|100|是||
|业务范围|SCOPE|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|可见范围|VISIBILITY|单项选择(文本值)|60|否||


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
|保存模板|save_template|[实体处理逻辑](module/Base/template/logic/save_template "保存模板")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[保存模板](module/Base/template/logic/save_template)|save_template|无|||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[DEFAULT](module/Base/template/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/template/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[DEFAULT](module/Base/template/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_BROAD_TYPE_EQ|模板类型|EQ||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_OWNER_ID_EQ|所属数据标识|EQ||
|N_VISIBILITY_EQ|可见范围|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 新建需求模板 | create_idea | 新建模板 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建模板](app/view/template_create_idea_template_view)</details>||
| 新建用例模板 | create_test_case | 新建模板 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建模板](app/view/template_create_test_case_template_view)</details>||
| 编辑工作项模板 | edit | 编辑模板 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[编辑模板](app/view/template_edit_work_item_template_view)</details>||
| 编辑用例模板 | edit_test_case | 编辑模板 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[编辑模板](app/view/template_edit_test_case_template_view)</details>||
| 查看用例模板 | check_test_case | 查看模板 |无数据|<details><summary>打开视图或向导（模态）</summary>[用例列表导航](app/view/template_test_case_list_exp_view)</details>||
| 新建工作项模板 | create | 新建模板 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建模板](app/view/template_create_work_item_template_view)</details>||
| 查看工作项模板 | check | 查看模板 |无数据|<details><summary>打开视图或向导（模态）</summary>[工作项列表导航](app/view/template_work_item_list_exp_view)</details>||
| 查看需求模板 | check_idea | 查看模板 |无数据|<details><summary>打开视图或向导（模态）</summary>[需求列表导航](app/view/template_idea_list_exp_view)</details>||
| 删除模板 | delete | 删除模板 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||
| 编辑需求模板 | edit_idea | 编辑模板 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[编辑模板](app/view/template_edit_idea_template_view)</details>||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[通知刷新](module/Base/template/uilogic/notify_refresh)|notify_refresh||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/template?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/template?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/template?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/template?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/template?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/template?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/template?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/template?id=界面逻辑`">
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