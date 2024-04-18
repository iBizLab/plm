# 迭代(sprint)  <!-- {docsify-ignore-all} -->


产品开发过程中的一次迭代或冲刺，用于规划和跟踪一段时间内的开发任务。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|负责人标识|ASSIGNEE_ID|文本，可指定长度|100|是||
|负责人|ASSIGNEE_NAME|文本，可指定长度|100|是||
|类别|CATEGORIES|长文本，长度1000|2000|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|结束时间|END_AT|日期型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|否||
|父标识|PID|外键值|100|是||
|父名称|PNAME|外键值文本|200|是||
|产品标识|PROJECT_ID|外键值|100|否||
|项目名称|PROJECT_NAME|外键值文本|200|是||
|开始时间|START_AT|日期型||否||
|状态|STATUS|[单项选择(文本值)](index/dictionary_index#sprint_status "迭代状态")|60|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_SPRINT_SPRINT_PID](der/DER1N_SPRINT_SPRINT_PID)|[迭代(SPRINT)](module/ProjMgmt/sprint)|1:N关系||
|[DER1N_TEST_PLAN_SPRINT_SPRINT_ID](der/DER1N_TEST_PLAN_SPRINT_SPRINT_ID)|[测试计划(TEST_PLAN)](module/TestMgmt/test_plan)|1:N关系||
|[DER1N_WORK_ITEM_SPRINT_SPRINT_ID](der/DER1N_WORK_ITEM_SPRINT_SPRINT_ID)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|1:N关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_SPRINT_PROJECT_PROJECT_ID](der/DER1N_SPRINT_PROJECT_PROJECT_ID)|[项目(PROJECT)](module/ProjMgmt/project)|1:N关系||
|[DER1N_SPRINT_SPRINT_PID](der/DER1N_SPRINT_SPRINT_PID)|[迭代(SPRINT)](module/ProjMgmt/sprint)|1:N关系||

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
|结束迭代|end_sprint|[实体处理逻辑](module/ProjMgmt/sprint/logic/end_sprint "结束迭代")|默认|不支持||||
|行为|get_not_finish|[实体处理逻辑](module/ProjMgmt/sprint/logic/get_not_finish "获取未完成的工作项数量")|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/ProjMgmt/sprint/logic/nothing "无操作")|默认|不支持||||
|开始迭代|start_sprint|[实体处理逻辑](module/ProjMgmt/sprint/logic/start_sprint "开始迭代")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[开始迭代](module/ProjMgmt/sprint/logic/start_sprint)|start_sprint|无||开始迭代|
|[无操作](module/ProjMgmt/sprint/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[结束迭代](module/ProjMgmt/sprint/logic/end_sprint)|end_sprint|无||结束迭代，根据用户选择，将未完成的工作项 移动至其他迭代会待分配|
|[获取未完成的工作项数量](module/ProjMgmt/sprint/logic/get_not_finish)|get_not_finish|无||完成迭代时，判断此迭代下是否存在未完成的工作项；提醒用户是否将未完成的工作项状态变更至已完成|

## 主状态控制

<p class="panel-title"><b>控制属性</b></p>

* `状态(STATUS)` [迭代状态](index/dictionary_index#sprint_status "迭代状态")




<p class="panel-title"><b>操作标识分布</b></p>
<br>
<table>
  <tr>
    <th>操作标识col350</th>
    <th>未开始col150</th>
    <th>进行中col150</th>
    <th>已完成col150</th>
    <th>备注col600</th>
  </tr>
  <tr>
    <td>删除(DELETE)<br><a href ="#/der/DER1N_SPRINT_PROJECT_PROJECT_ID">DER1N_SPRINT_PROJECT_PROJECT_ID</a></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>删除(DELETE)</td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>建立(CREATE)<br><a href ="#/der/DER1N_SPRINT_PROJECT_PROJECT_ID">DER1N_SPRINT_PROJECT_PROJECT_ID</a></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>建立(CREATE)</td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>开始迭代(BEGIN)<br><a href ="#/der/DER1N_SPRINT_PROJECT_PROJECT_ID">DER1N_SPRINT_PROJECT_PROJECT_ID</a></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"></td>
    <td align="center"></td>
    <td></td>
  </tr>
  <tr>
    <td>更新(UPDATE)<br><a href ="#/der/DER1N_SPRINT_PROJECT_PROJECT_ID">DER1N_SPRINT_PROJECT_PROJECT_ID</a></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>更新(UPDATE)</td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>结束迭代(END)<br><a href ="#/der/DER1N_SPRINT_PROJECT_PROJECT_ID">DER1N_SPRINT_PROJECT_PROJECT_ID</a></td>
    <td align="center"></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"></td>
    <td></td>
  </tr>
  <tr>
    <td>读取(READ)<br><a href ="#/der/DER1N_SPRINT_PROJECT_PROJECT_ID">DER1N_SPRINT_PROJECT_PROJECT_ID</a></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>读取(READ)</td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>

</table>


## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/ProjMgmt/sprint/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProjMgmt/sprint/query/View)|VIEW|否|否 |否 ||
|[移动至(choose_move)](module/ProjMgmt/sprint/query/choose_move)|choose_move|否|否 |是 |确认迭代完成时，选择移动至其他迭代|
|[未结束的迭代(not_finish)](module/ProjMgmt/sprint/query/not_finish)|not_finish|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ProjMgmt/sprint/dataset/Default)|DEFAULT|数据查询|是|||
|[移动至(choose_move)](module/ProjMgmt/sprint/dataset/choose_move)|choose_move|数据查询|否||确认迭代完成时，选择移动至其他迭代|
|[未结束的迭代(not_finish)](module/ProjMgmt/sprint/dataset/not_finish)|not_finish|数据查询|否|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_CATEGORIES_LIKE|类别|LIKE||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_PID_EQ|父标识|EQ||
|N_PNAME_EQ|父名称|EQ||
|N_PNAME_LIKE|父名称|LIKE||
|N_PROJECT_ID_EQ|产品标识|EQ||
|N_PROJECT_NAME_EQ|项目名称|EQ||
|N_PROJECT_NAME_LIKE|项目名称|LIKE||
|N_STATUS_EQ|状态|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 编辑 | toolbar_tree_exp_view_node3_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 编辑 | toolbar_tree_exp_view_node1_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 编辑 | open_edit_view | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[编辑迭代](app/view/sprint_update_view)</details>||
| 新建类别 | toolbar_tree_exp_view_treeexpbar_toolbar_deuiaction2_click | 新建类别 |单项数据|用户自定义||
| 开始迭代 | start_sprint | 开始迭代 |单项数据（主键）|<details><summary>后台调用</summary>[start_sprint](#行为)||
| 删除 | toolbar_tree_exp_view_node2_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 编辑 | toolbar_tree_exp_view_node2_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 新建分组 | toolbar_tree_exp_view_treeexpbar_toolbar_deuiaction1_click | 新建分组 |单项数据|用户自定义||
| 删除 | toolbar_tree_exp_view_node1_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 删除 | toolbar_tree_exp_view_node3_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 结束迭代 | end_sprint | 结束迭代 |单项数据（主键）|<details><summary>后台调用</summary>[end_sprint](#行为)||
| 删除 | remove | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[删除类别或分组](module/ProjMgmt/sprint/uilogic/remove_section_or_category)|remove_section_or_category|调用树节点删除，删除类别或分组数据|
|[新建分组](module/ProjMgmt/sprint/uilogic/create_section)|create_section|调用树节点新建方法，新建分组|
|[新建类别](module/ProjMgmt/sprint/uilogic/create_category)|create_category|调用树节点新建方法新建类别|
|[编辑类别或分组](module/ProjMgmt/sprint/uilogic/edit_section_or_category)|edit_section_or_category|调用树节点修改方法，编辑当前树节点的类别或分组|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ProjMgmt/sprint?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/sprint?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/sprint?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/sprint?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/sprint?id=主状态控制`">
  主状态控制
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/sprint?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/sprint?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/sprint?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/sprint?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProjMgmt/sprint?id=界面逻辑`">
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