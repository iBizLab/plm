# 动态数据看板(dyna_dashboard)  <!-- {docsify-ignore-all} -->


配置动态数据看板功能必备。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|应用标识|APPID|文本，可指定长度|100|是||
|建立时间|CREATEDATE|日期时间型|8|否||
|建立人|CREATEMAN|文本，可指定长度|60|否||
|描述|DESC|长文本，没有长度限制|1048576|是||
|动态数据看板标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|DYNADASHBOARDID|全局唯一标识，文本类型，用户不可见|200|否||
|名称|DYNADASHBOARDNAME|文本，可指定长度|200|是||
|示例图|EXAMPLE_CHART|长文本，没有长度限制|1048576|是||
|是否系统类型|IS_SYSTEM|是否逻辑||是||
|模型|MODEL|长文本，没有长度限制|1048576|是||
|模型标识|MODELID|文本，可指定长度|100|是||
|所属数据标识|OWNER_ID|文本，可指定长度|100|是||
|所属数据类型|OWNER_TYPE|文本，可指定长度|100|是||
|序号|SEQUENCES|数值||是||
|看板类型|TYPE|单项选择(文本值)|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|用户标识|USERID|文本，可指定长度|100|是||


###### 属性组

<el-row>
<el-tabs v-model="show_field_group">

<el-tab-pane label="示例图" name="field_group_example_chart">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|是否系统类型|IS_SYSTEM|是否逻辑||是||
|示例图|EXAMPLE_CHART|长文本，没有长度限制|1048576|是||
|应用标识|APPID|文本，可指定长度|100|是||
|描述|DESC|长文本，没有长度限制|1048576|是||
|动态数据看板标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|DYNADASHBOARDID|全局唯一标识，文本类型，用户不可见|200|否||
|看板类型|TYPE|单项选择(文本值)|100|是||
|模型标识|MODELID|文本，可指定长度|100|是||
|序号|SEQUENCES|数值||是||
|名称|DYNADASHBOARDNAME|文本，可指定长度|200|是||

</el-tab-pane>

</el-tabs>
</el-row>

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_INSIGHT_VIEW_DYNADASHBOARD_OWNER_ID](der/DERCUSTOM_INSIGHT_VIEW_DYNADASHBOARD_OWNER_ID)|[效能视图(INSIGHT_VIEW)](module/Insight/insight_view)|自定义关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#dyna_dashboard_Get)|||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|获取其他仪表盘|fill_other_board|[实体处理逻辑](module/Base/dyna_dashboard/logic/fill_other_board "获取其他仪表盘")|默认|不支持||||
|移动排序|move_order|用户自定义|默认|不支持||||
|仅获取数据|only_get|用户自定义|默认|不支持||||
|使用此模板|use_cur_template|[实体处理逻辑](module/Base/dyna_dashboard/logic/use_cur_template "使用此模板")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[仅获取](module/Base/dyna_dashboard/logic/only_get)|only_get|无|||
|[使用此模板](module/Base/dyna_dashboard/logic/use_cur_template)|use_cur_template|无||使用此模板|
|[更新看板部件模型](module/Base/dyna_dashboard/logic/sync_portlet_model)|sync_portlet_model|无||更新看板部件模型|
|[获取其他仪表盘](module/Base/dyna_dashboard/logic/fill_other_board)|fill_other_board|无||获取其他仪表盘|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/dyna_dashboard/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/dyna_dashboard/query/View)|VIEW|否|否 |否 ||
|[示例图(example_chart)](module/Base/dyna_dashboard/query/example_chart)|example_chart|否|否 |否 ||
|[系统仪表盘(is_system)](module/Base/dyna_dashboard/query/is_system)|is_system|否|否 |否 ||
|[正常数据(normal)](module/Base/dyna_dashboard/query/normal)|normal|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/dyna_dashboard/dataset/Default)|DEFAULT|数据查询|是|||
|[示例图(example_chart)](module/Base/dyna_dashboard/dataset/example_chart)|example_chart|数据查询|否|||
|[系统仪表盘(is_system)](module/Base/dyna_dashboard/dataset/is_system)|is_system|数据查询|否|||
|[正常数据(normal)](module/Base/dyna_dashboard/dataset/normal)|normal|数据查询|否|||

## 数据权限

##### 全部数据（读写） :id=dyna_dashboard-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `UPDATE`
* `READ`
* `DELETE`
* `CREATE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_DYNADASHBOARDID_EQ|动态数据看板标识|EQ||
|N_DYNADASHBOARDNAME_LIKE|名称|LIKE||
|N_OWNER_ID_EQ|所属数据标识|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 打开新建看板 | open_new_board | 打开新建看板 |单项数据|<details><summary>打开视图或向导（模态）</summary>[仪表盘](app/view/insight_view_custom_view)</details>||
| 新建仪表盘 | new_dynadashboard | 新建仪表盘 |无数据|<details><summary>打开视图或向导（模态）</summary>[仪表盘模板列表](app/view/dyna_dashboard_list_exp_view2)</details>||
| 列表导航加载完成 | load_success | 列表导航加载完成 |单项数据|用户自定义||
| 新建仪表盘_管理 | new_dynadashboard_edit | 新建仪表盘 |无数据|<details><summary>打开视图或向导（模态）</summary>[仪表盘模板列表](app/view/dyna_dashboard_list_exp_view2)</details>||
| 打开新建仪表盘（测试） | open_new_board_test | 打开新建仪表盘（测试） |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[仪表盘](app/view/insight_view_custom_view)</details>||
| 删除仪表盘 | delete_dynadashboard | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||
| 仪表盘管理 | board_management | 仪表盘管理 |无数据|<details><summary>打开视图或向导（模态）</summary>[仪表盘管理](app/view/dyna_dashboard_insight_view_grid_view)</details>||
| 使用此模板 | panel_usr0702065870_button_calluilogic_click | 使用此模板 |单项数据|用户自定义||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[仪表盘操作列](module/Base/dyna_dashboard/uilogic/control_del)|control_del|仪表盘为最后一个时禁止删除|
|[使用此模板(禁止关闭)](module/Base/dyna_dashboard/uilogic/use_cur_template_no_closed)|use_cur_template_no_closed|使用此模板(禁止关闭)|
|[列表加载完成](module/Base/dyna_dashboard/uilogic/list_load_success)|list_load_success|列表加载完成|
|[获取其他仪表盘](module/Base/dyna_dashboard/uilogic/fill_other_board)|fill_other_board|获取其他仪表盘|
|[获取选中模板名称](module/Base/dyna_dashboard/uilogic/fill_choosed_board_name)|fill_choosed_board_name|获取选中模板名称|
|[通知刷新](module/Base/dyna_dashboard/uilogic/notify_refresh)|notify_refresh||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/dyna_dashboard?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dyna_dashboard?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dyna_dashboard?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dyna_dashboard?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dyna_dashboard?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dyna_dashboard?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dyna_dashboard?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dyna_dashboard?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dyna_dashboard?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/dyna_dashboard?id=界面逻辑`">
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
show_field_group:'field_group_example_chart',

      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>