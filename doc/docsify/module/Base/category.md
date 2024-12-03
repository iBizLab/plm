# 类别(category)  <!-- {docsify-ignore-all} -->


逻辑上用于分类存储其他实体的容器。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|类别路径|CATEGORIES|长文本，长度1000|2000|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|是否叶子节点|IS_LEAF|是否逻辑||是||
|是否叶子节点2|IS_LEAF2|是否逻辑||是||
|叶子节点标识|LEAF_FLAG|整型||是||
|名称|NAME|文本，可指定长度|200|是||
|所属数据标识|OWNER_ID|文本，可指定长度|100|是||
|所属对象子类型|OWNER_SUBTYPE|文本，可指定长度|100|是||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|是||
|父标识|PID|外键值|100|是||
|分组标识|SECTION_ID|外键值|100|是||
|名称|SECTION_NAME|外键值文本|200|是||
|序号|SEQUENCE|数值||是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_CATEGORY_CATEGORY_PID](der/DER1N_CATEGORY_CATEGORY_PID)|[类别(CATEGORY)](module/Base/category)|1:N关系||
|[DER1N_IDEA_CATEGORY_CATEGORY_ID](der/DER1N_IDEA_CATEGORY_CATEGORY_ID)|[需求(IDEA)](module/ProdMgmt/idea)|1:N关系||
|[DER1N_IDEA_TEMPLATE_CATEGORY_CATEGORY_ID](der/DER1N_IDEA_TEMPLATE_CATEGORY_CATEGORY_ID)|[需求模板(IDEA_TEMPLATE)](module/ProdMgmt/idea_template)|1:N关系||
|[DER1N_SPACE_CATEGORY_CATEGORY_ID](der/DER1N_SPACE_CATEGORY_CATEGORY_ID)|[空间(SPACE)](module/Wiki/space)|1:N关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_CATEGORY_CATEGORY_PID](der/DER1N_CATEGORY_CATEGORY_PID)|[类别(CATEGORY)](module/Base/category)|1:N关系||
|[DER1N_CATEGORY_SECTION_SECTION_ID](der/DER1N_CATEGORY_SECTION_SECTION_ID)|[分组(SECTION)](module/Base/section)|1:N关系||
|[DERCUSTOM_CATEGORY_INSIGHT_REPORT](der/DERCUSTOM_CATEGORY_INSIGHT_REPORT)|[效能报表(INSIGHT_REPORT)](module/Insight/insight_report)|自定义关系||
|[DERCUSTOM_CATEGORY_PRODUCT_PLAN](der/DERCUSTOM_CATEGORY_PRODUCT_PLAN)|[排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan)|自定义关系||

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
|删除子类别|delete_child_category|[实体处理逻辑](module/Base/category/logic/delete_child_category "删除类别及子类别")|默认|不支持||||
|移动需求|move_order|用户自定义|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[删除类别及子类别](module/Base/category/logic/delete_child_category)|delete_child_category|无||删除类别及其下子类别（测试）|
|[设置默认分组](module/Base/category/logic/set_section)|set_section|属性逻辑||设置默认分组|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/category/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/category/query/View)|VIEW|否|否 |否 ||
|[检查名称是否重复(check_name)](module/Base/category/query/check_name)|check_name|否|否 |否 ||
|[通用类别（代码表）(common_categories)](module/Base/category/query/common_categories)|common_categories|否|否 |否 ||
|[当前产品需求类别(cur_product_idea_category)](module/Base/category/query/cur_product_idea_category)|cur_product_idea_category|否|否 |否 ||
|[无父类(no_parent)](module/Base/category/query/no_parent)|no_parent|否|否 |否 ||
|[无分组的类别（且父标识不为空）(no_section)](module/Base/category/query/no_section)|no_section|否|否 |否 ||
|[主模块(product_idea_category)](module/Base/category/query/product_idea_category)|product_idea_category|否|否 |否 |需求下子产品中父标识为空的模块|
|[排期计划类别(product_plan)](module/Base/category/query/product_plan)|product_plan|否|否 |否 ||
|[空间目录(space_category)](module/Base/category/query/space_category)|space_category|否|否 |否 ||
|[空间目录（顶级）(space_category_top)](module/Base/category/query/space_category_top)|space_category_top|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/category/dataset/Default)|DEFAULT|数据查询|是|||
|[检查名称是否重复(check_name)](module/Base/category/dataset/check_name)|check_name|数据查询|否|||
|[当前项目类别(common_categories)](module/Base/category/dataset/common_categories)|common_categories|数据查询|否|||
|[当前产品需求类别(cur_product_idea_category)](module/Base/category/dataset/cur_product_idea_category)|cur_product_idea_category|数据查询|否|||
|[无父类(no_parent)](module/Base/category/dataset/no_parent)|no_parent|数据查询|否|||
|[无分组的类别(no_section)](module/Base/category/dataset/no_section)|no_section|数据查询|否|||
|[主模块(product_idea_category)](module/Base/category/dataset/product_idea_category)|product_idea_category|数据查询|否||需求下子产品中父标识为空的模块|
|[排期计划类别(product_plan)](module/Base/category/dataset/product_plan)|product_plan|数据查询|否|||
|[空间目录(space_category)](module/Base/category/dataset/space_category)|space_category|数据查询|否|||
|[空间目录（顶级）(space_category_top)](module/Base/category/dataset/space_category_top)|space_category_top|数据查询|否|||

## 数据权限

##### 全部数据（读写） :id=category-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `CREATE`
* `UPDATE`
* `READ`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_OWNER_ID_EQ|所属数据标识|EQ||
|N_OWNER_SUBTYPE_EQ|所属对象子类型|EQ||
|N_OWNER_TYPE_EQ|所属数据对象|EQ||
|N_PID_EQ|父标识|EQ||
|N_PID_ISNOTNULL|父标识|ISNOTNULL||
|N_PID_ISNULL|父标识|ISNULL||
|N_SECTION_ID_EQ|分组标识|EQ||
|N_SECTION_NAME_EQ|名称|EQ||
|N_SECTION_NAME_LIKE|名称|LIKE||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 删除 | toolbar_category_tree_exp_view_node_cm_deuiaction1_click | 删除 |单项数据|用户自定义||
| 删除 | toolbar_category_tree_exp_view_node1_cm_deuiaction1_click | 删除 |单项数据|用户自定义||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[删除类别或分组](module/Base/category/uilogic/remove_section_or_category)|remove_section_or_category|调用树节点删除方法，删除当前树节点数据|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/category?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/category?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/category?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/category?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/category?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/category?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/category?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/category?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/category?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/category?id=界面逻辑`">
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