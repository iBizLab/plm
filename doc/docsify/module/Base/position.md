# 职位(position)  <!-- {docsify-ignore-all} -->


管理人员职位信息


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|分组标识|CATEGORY_ID|外键值|100|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|逻辑有效标志|ENABLE|是否逻辑|8|否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|是||
|序号|SEQUENCE|数值||是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_MEMBER_POSITION_POSITION_ID](der/DER1N_MEMBER_POSITION_POSITION_ID)|[成员(MEMBER)](module/Base/member)|1:N关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_POSITION_CATEGORY_CATEGORY_ID](der/DER1N_POSITION_CATEGORY_CATEGORY_ID)|[类别(CATEGORY)](module/Base/category)|1:N关系||

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
|移动职位|move_order|用户自定义|默认|不支持||||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/position/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/position/query/View)|VIEW|否|否 |否 ||
|[无分组(no_category)](module/Base/position/query/no_category)|no_category|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/position/dataset/Default)|DEFAULT|数据查询|是|||
|[无分组(no_category)](module/Base/position/dataset/no_category)|no_category|数据查询|否|||

## 数据权限

##### 全部数据（读） :id=position-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=position-ALL_RW

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
|N_CATEGORY_ID_EQ|分组标识|EQ||
|N_ID_EQ|标识|EQ||
|N_NAME_EQ|名称|EQ||
|N_NAME_LIKE|名称|LIKE||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 新建职位 | new_position | 新建职位 |无数据|用户自定义||
| 编辑 | toolbar_tree_exp_view_node1_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 新建分组 | new_category | 新建分组 |无数据|用户自定义||
| 删除 | toolbar_tree_exp_view_node2_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 编辑 | toolbar_tree_exp_view_node2_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 删除 | toolbar_tree_exp_view_node1_cm_deuiaction2_click | 删除 |单项数据|用户自定义||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[删除类别或分组](module/Base/position/uilogic/remove_section_or_category)|remove_section_or_category|调用树节点删除方法，删除当前树节点数据|
|[新建分组](module/Base/position/uilogic/create_category)|create_category|调用树节点新建方法新建分组|
|[新建职位](module/Base/position/uilogic/create_position)|create_position|调用树节点新建方法，新建职位|
|[编辑类别或分组](module/Base/position/uilogic/edit_section_or_category)|edit_section_or_category|调用树节点修改方法，编辑当前树节点的类别或分组|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/position?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/position?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/position?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/position?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/position?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/position?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/position?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/position?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/position?id=界面逻辑`">
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