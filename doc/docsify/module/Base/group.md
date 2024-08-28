# 团队(group)  <!-- {docsify-ignore-all} -->


记录团队信息。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|团队头像|AVATAR|图片|500|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|团队名称|NAME|文本，可指定长度|200|否||
|分组标识|SECTION_ID|外键值|100|是||
|所属分组|SECTION_NAME|外键值文本|200|是||
|序号|SEQUENCE|数值||是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|可见范围|VISIBILITY|单项选择(文本值)|60|否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DERCUSTOM_MEMBER_GROUP_OWNER_ID](der/DERCUSTOM_MEMBER_GROUP_OWNER_ID)|[成员(MEMBER)](module/Base/member)|自定义关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_GROUP_SECTION_SECTION_ID](der/DER1N_GROUP_SECTION_SECTION_ID)|[分组(SECTION)](module/Base/section)|1:N关系||

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
|移动需求|move_order|用户自定义|默认|不支持||||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/group/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/group/query/View)|VIEW|否|否 |否 ||
|[无分组(no_section)](module/Base/group/query/no_section)|no_section|否|否 |否 ||
|[公开(public)](module/Base/group/query/public)|public|否|否 |否 ||
|[团队成员(user)](module/Base/group/query/user)|user|否|否 |否 ||
|[团队管理员(user_group_admin)](module/Base/group/query/user_group_admin)|user_group_admin|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/group/dataset/Default)|DEFAULT|数据查询|是|||
|[无分组(no_section)](module/Base/group/dataset/no_section)|no_section|数据查询|否|||
|[团队默认读取(reader)](module/Base/group/dataset/reader)|reader|数据查询|否|||
|[团队成员(user)](module/Base/group/dataset/user)|user|数据查询|否|||
|[团队管理员(user_group_admin)](module/Base/group/dataset/user_group_admin)|user_group_admin|数据查询|否|||

## 数据权限

##### 管理员（读） :id=group-ADMIN_R

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[团队管理员(user_group_admin)](module/Base/group#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读） :id=group-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=group-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `UPDATE`
* `CREATE`
* `READ`



##### 团队成员（读） :id=group-USER_R

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[团队成员(user)](module/Base/group#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|团队名称|LIKE||
|N_SECTION_ID_EQ|分组标识|EQ||
|N_SECTION_NAME_EQ|所属分组|EQ||
|N_SECTION_NAME_LIKE|所属分组|LIKE||
|N_VISIBILITY_EQ|可见范围|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 新建分组 | create_section | 新建分组 |无数据|用户自定义||
| 新建团队 | create_group | 新建团队 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建团队](app/view/group_quick_create_view)</details>||
| 编辑 | toolbar_tree_exp_view_node_cm_deuiaction1_click | 编辑团队 |单项数据|<details><summary>打开视图或向导（模态）</summary>[编辑团队](app/view/group_update_view)</details>||
| 编辑 | toolbar_tree_exp_view_node1_cm_deuiaction1_click | 编辑 |单项数据|用户自定义||
| 删除 | toolbar_tree_exp_view_node2_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 编辑 | toolbar_tree_exp_view_node2_cm_deuiaction1_click | 编辑团队 |单项数据|<details><summary>打开视图或向导（模态）</summary>[编辑团队](app/view/group_update_view)</details>||
| 删除 | toolbar_tree_exp_view_node1_cm_deuiaction2_click | 删除 |单项数据|用户自定义||
| 删除 | toolbar_tree_exp_view_node_cm_deuiaction2_click | 删除 |单项数据|用户自定义||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[删除类别或分组](module/Base/group/uilogic/remove_section_or_category)|remove_section_or_category|调用树节点删除方法，删除当前树节点数据|
|[新建分组](module/Base/group/uilogic/create_section)|create_section|团队页左侧树的新建分组逻辑|
|[编辑类别或分组](module/Base/group/uilogic/edit_section_or_category)|edit_section_or_category|调用树节点修改方法，编辑当前树节点的类别或分组|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/group?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/group?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/group?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/group?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/group?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/group?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/group?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/group?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/group?id=界面逻辑`">
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