# 看板(board)  <!-- {docsify-ignore-all} -->


用于可视化项目和任务进度的工具。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|是||
|产品标识|PROJECT_ID|外键值|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_ENTRY_BOARD_BOARD_ID](der/DER1N_ENTRY_BOARD_BOARD_ID)|[看板栏(ENTRY)](module/ProjMgmt/entry)|1:N关系||
|[DER1N_SWIMLANE_BOARD_BOARD_ID](der/DER1N_SWIMLANE_BOARD_BOARD_ID)|[泳道(SWIMLANE)](module/ProjMgmt/swimlane)|1:N关系||
|[DER1N_WORK_ITEM_BOARD_BOARD_ID](der/DER1N_WORK_ITEM_BOARD_BOARD_ID)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|1:N关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_BOARD_PROJECT_PROJECT_ID](der/DER1N_BOARD_PROJECT_PROJECT_ID)|[项目(PROJECT)](module/ProjMgmt/project)|1:N关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#board_Create)|||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持|[附加操作](index/action_logic_index#board_Remove)|||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|判断看板是否已删除|check_board_is_deleted|[实体处理逻辑](module/ProjMgmt/board/logic/check_board_is_deleted "判断看板是否已删除")|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/ProjMgmt/board/logic/nothing "无操作")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[删除看板之前判断](module/ProjMgmt/board/logic/before_remove)|before_remove|无||删除看板之前，判断项目下看板数量。必须保留一个看板|
|[判断看板是否已删除](module/ProjMgmt/board/logic/check_board_is_deleted)|check_board_is_deleted|无||判断看板是否已删除，用于视图切换逻辑|
|[无操作](module/ProjMgmt/board/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[生成默认看板栏和泳道](module/ProjMgmt/board/logic/create_default_entry)|create_default_entry|无||新建看板项目后，会附加生成出默认看板栏和泳道|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/ProjMgmt/board/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProjMgmt/board/query/View)|VIEW|否|否 |否 ||
|[当前项目看板（导入）(cur_board_upload)](module/ProjMgmt/board/query/cur_board_upload)|cur_board_upload|否|否 |否 ||
|[当前项目下看板(cur_project_board)](module/ProjMgmt/board/query/cur_project_board)|cur_project_board|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ProjMgmt/board/dataset/Default)|DEFAULT|数据查询|是|||
|[当前项目看板（导入）(cur_board_upload)](module/ProjMgmt/board/dataset/cur_board_upload)|cur_board_upload|数据查询|否|||
|[当前项目下看板(cur_project_board)](module/ProjMgmt/board/dataset/cur_project_board)|cur_project_board|数据查询|否|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_PROJECT_ID_EQ|产品标识|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 打开新建看板 | open_new_board | 打开新建看板 |单项数据|<details><summary>打开顶级视图</summary>[工作项看板](app/view/work_item_kanban_view)</details>||
| 新建看板 | New | 新建看板 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建看板](app/view/board_quick_create_view)</details>||
| 新建看板（看板表格） | create_board | 新建看板 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建看板](app/view/board_quick_create_view)</details>||
| 看板管理 | board_management | 看板管理 |无数据|<details><summary>打开视图或向导（模态）</summary>[看板管理](app/view/board_grid_view)</details>||
| 打开默认看板 | open_default_board | 打开默认看板 |单项数据|<details><summary>打开视图或向导（模态）</summary>[工作项看板](app/view/work_item_kanban_view)</details>||
| 删除 | remove | 删除 |单项数据（主键）|用户自定义||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[看板删除逻辑](module/ProjMgmt/board/uilogic/board_remove)|board_remove|看板删除逻辑：是否当前看板正在预览；删除后需切换至默认看板下|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ProjMgmt/board?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/board?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/board?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/board?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/board?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/board?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/board?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/board?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/board?id=界面逻辑`">
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