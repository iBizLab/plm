# 交付物(deliverable)  <!-- {docsify-ignore-all} -->


工作项中产出的具体成果物，包括文档、软件代码、报告等。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|文件标识|FILE_ID|文件|500|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|是||
|所属数据标识|OWNER_ID|文本，可指定长度|100|是||
|所属对象子类型|OWNER_SUBTYPE|文本，可指定长度|100|是||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|是||
|标题|TITLE|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|工作项编号|WORK_ITEM_IDENTIFIER|文本，可指定长度|100|是||
|工作项标题|WORK_ITEM_TITLE|文本，可指定长度|100|是||
|工作项类型|WORK_ITEM_TYPE_ID|文本，可指定长度|100|是||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_WORK_ITEM_DELIVERABLE](der/DERCUSTOM_WORK_ITEM_DELIVERABLE)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|自定义关系||

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
|获取交付物详情|get_delivery|[实体处理逻辑](module/Base/deliverable/logic/get_mob_delivery_detail "获取交付物详情")|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/Base/deliverable/logic/nothing "无操作")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[无操作](module/Base/deliverable/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[获取交付物详情](module/Base/deliverable/logic/get_mob_delivery_detail)|get_mob_delivery_detail|无|||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/deliverable/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/deliverable/query/View)|VIEW|否|否 |否 ||
|[项目下的交付物(project_deliverable)](module/Base/deliverable/query/project_deliverable)|project_deliverable|否|否 |是 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/deliverable/dataset/Default)|DEFAULT|数据查询|是|||
|[项目下的交付物(project_deliverable)](module/Base/deliverable/dataset/project_deliverable)|project_deliverable|数据查询|否|||

## 数据权限

##### 全部数据（读写） :id=deliverable-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `CREATE`
* `UPDATE`
* `DELETE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_OWNER_ID_EQ|所属数据标识|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 提交（表单中） | submit_form | 提交 |单项数据（主键）|用户自定义||
| 新建交付目标 | create_deliver_target | 新建交付目标 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建交付目标](app/view/deliverable_quick_create_view)</details>||
| 提交 | submit | 提交 |单项数据（主键）|用户自定义||
| 编辑 | edit | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[编辑交付目标](app/view/deliverable_target_edit_view)</details>||
| 新建交付目标（移动端） | mob_create_deliver_target | 新建 |无数据|<details><summary>打开视图或向导（模态）</summary>[交付物](app/view/deliverable_mob_create_view)</details>||
| 确定 | panel_usr0118680010_button_calluilogic1_click | 确定 |单项数据|用户自定义||
| 取消 | panel_usr0118680010_button_calluilogic_click | 取消 |单项数据|用户自定义||
| 删除（移动端） | mob_del | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||
| 上传附件 | upload_attachment | 上传 |无数据|用户自定义||
| 查看工作项（移动端） | mob_find_work_item | 查看工作项 |单项数据|<details><summary>打开视图或向导（模态）</summary>[工作项](app/view/work_item_mob_common_edit_view)</details>||
| 编辑（移动端） | mob_edit | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[交付物](app/view/deliverable_mob_edit_view)</details>||
| 交付物下载 | download | 下载 |单项数据|用户自定义||
| 添加控件显示 | show_add_input | 添加交付目标 |无数据|用户自定义||
| 删除（表单中） | del_form | 删除 |单项数据（主键）|用户自定义||
| 删除 | del_grid | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[删除（表单中）](module/Base/deliverable/uilogic/del)|del|执行删除方法，并根据条件隐藏表格（数据为空）|
|[提交](module/Base/deliverable/uilogic/submit)|submit|瀑布项目主视图 → 交付物分页表格 → 表格行操作|
|[提交（表单中）](module/Base/deliverable/uilogic/submit_form)|submit_form|瀑布项目 → 工作项详情 → 交付物分页 → 表格行操作|
|[新建交付目标](module/Base/deliverable/uilogic/create_deliverable)|create_deliverable|瀑布项目 → 工作项详情 → 交付物分页 → 新建交付目标按钮|
|[获取交付目标总条数](module/Base/deliverable/uilogic/get_deliverable_total)|get_deliverable_total|获取交付物的总条数信息|
|[计算表格列行为状态](module/Base/deliverable/uilogic/calc_column_action_state)|calc_column_action_state|用于动态控制提交和删除行为的禁用状态|
|[输入框区域展示](module/Base/deliverable/uilogic/show_input_area)|show_input_area|工作项 添加交付目标|
|[输入框区域隐藏](module/Base/deliverable/uilogic/hidden_input_area)|hidden_input_area|工作项 添加交付目标|
|[通知刷新（移动端）](module/Base/deliverable/uilogic/notify_refresh)|notify_refresh|通知页面刷新|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/deliverable?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/deliverable?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/deliverable?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/deliverable?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/deliverable?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/deliverable?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/deliverable?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/deliverable?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/deliverable?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/deliverable?id=界面逻辑`">
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