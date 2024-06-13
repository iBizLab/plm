# 资源组件(addon_resource)  <!-- {docsify-ignore-all} -->


存储项目品管理中资源组件的数据


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|组件类型|ADDON_TYPE|文本，可指定长度|100|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|启用|IS_ENABLED|是否逻辑||是||
|资源成员|MEMBERS|一对多关系数据集合|1048576|是||
|名称|NAME|文本，可指定长度|200|是||
|所属标识|OWNER_ID|文本，可指定长度|100|是||
|所属类型|OWNER_TYPE|文本，可指定长度|100|是||
|配置模型|SETTING_MODEL|长文本，没有长度限制|1048576|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_RESOURCE_MEMBER_ADDON_RESOURCE_ADDON_ID](der/DER1N_RESOURCE_MEMBER_ADDON_RESOURCE_ADDON_ID)|[资源组件成员(RESOURCE_MEMBER)](module/Base/resource_member)|1:N关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_ADDON_RESOURCE_PROJECT_OWNER_ID](der/DERCUSTOM_ADDON_RESOURCE_PROJECT_OWNER_ID)|[项目(PROJECT)](module/ProjMgmt/project)|自定义关系||

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
|检验资源是否已删除|check_resource_is_deleted|[实体处理逻辑](module/Base/addon_resource/logic/check_resource_is_deleted "检验资源是否已删除")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[检验资源是否已删除](module/Base/addon_resource/logic/check_resource_is_deleted)|check_resource_is_deleted|无||判断资源是否已删除，用于视图切换逻辑|
|[空查询](module/Base/addon_resource/logic/empty)|empty|无|||

## 功能配置
| 中文名col200    | 功能类型col150    | 功能实体col200 |  备注col700|
| --------  | :----:    | ---- |----- |
|动态存储|动态存储|[资源组件(ADDON_RESOURCE)](module/Base/addon_resource)||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/addon_resource/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/addon_resource/query/View)|VIEW|否|否 |否 ||
|[资源组件(all)](module/Base/addon_resource/query/all)|all|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/addon_resource/dataset/Default)|DEFAULT|数据查询|是|||
|[资源组件(all)](module/Base/addon_resource/dataset/all)|all|数据查询|否|||
|[空查询(empty)](module/Base/addon_resource/dataset/empty)|empty|[实体逻辑](module/Base/addon_resource/logic/empty)|否|||

## 数据权限

##### 全部数据（读写） :id=addon_resource-ALL_RW

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
|N_ADDON_TYPE_EQ|组件类型|EQ||
|N_ID_NOTEQ|标识|NOTEQ||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_OWNER_ID_EQ|所属标识|EQ||
|N_OWNER_TYPE_EQ|所属类型|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 打开全局容量设置 | open_capacity | 容量设置 |无数据|<details><summary>打开视图或向导（模态）</summary>[容量设置](app/view/addon_resource_all_capacity_view)</details>||
| 打开默认资源 | open_default_resource | 打开默认资源 |单项数据|<details><summary>打开视图或向导（模态）</summary>[资源分配](app/view/work_item_resource_gantt_view)</details>||
| 编辑资源 | edit_resource | 编辑资源 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[编辑资源](app/view/addon_resource_quick_edit_view)</details>||
| 删除资源 | del_resource | 删除资源 |单项数据（主键）|用户自定义||
| 新建资源 | new_resource | 新建资源 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建资源](app/view/addon_resource_quick_create_view)</details>||
| 资源管理 | resource_management | 资源管理 |无数据|<details><summary>打开视图或向导（模态）</summary>[资源管理](app/view/addon_resource_all_grid_view)</details>||
| 项目容量设置 | project_capacity | 打开项目容量 |无数据|用户自定义||
| 打开新建资源 | open_new_resource | 打开新建资源 |单项数据|<details><summary>打开视图或向导（模态）</summary>[资源分配](app/view/work_item_resource_gantt_view)</details>||
| 打开项目容量设置视图 | open_project_capacity | 容量设置 |无数据|<details><summary>打开视图或向导（模态）</summary>[容量设置](app/view/addon_resource_project_capacity_view)</details>||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[打开项目资源容量设置](module/Base/addon_resource/uilogic/open_project_capacity)|open_project_capacity|根据当前项目标识，获取项目下的资源组件|
|[资源删除逻辑](module/Base/addon_resource/uilogic/resource_del)|resource_del|资源删除逻辑：是否当前资源正在预览；删除后需切换至默认资源下|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/addon_resource?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/addon_resource?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/addon_resource?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/addon_resource?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/addon_resource?id=功能配置`">
  功能配置
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/addon_resource?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/addon_resource?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/addon_resource?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/addon_resource?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/addon_resource?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/addon_resource?id=界面逻辑`">
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