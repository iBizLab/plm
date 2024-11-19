# 需求模板(idea_template)  <!-- {docsify-ignore-all} -->


记录产品的需求模版相关信息。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|类别路径|CATEGORIES|外键值附加数据|2000|是||
|类别标识|CATEGORY_ID|外键值|100|是||
|名称|CATEGORY_NAME|外键值文本|200|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|描述|DESCRIPTION|长文本，没有长度限制|1048576|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|全局模板|IS_GLOBAL|是否逻辑||是||
|名称|NAME|文本，可指定长度|200|是||
|产品|PRODUCT_ID|外键值|100|是||
|产品标识|PRODUCT_IDENTIFIER|外键值附加数据|15|是||
|产品名称|PRODUCT_NAME|外键值文本|200|是||
|子产品标识|SECTION_ID|外键值附加数据|100|是||
|子产品名称|SECTION_NAME|外键值附加数据|200|是||
|标题|TITLE|文本，可指定长度|500|否||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_IDEA_TEMPLATE_CATEGORY_CATEGORY_ID](der/DER1N_IDEA_TEMPLATE_CATEGORY_CATEGORY_ID)|[类别(CATEGORY)](module/Base/category)|1:N关系||
|[DER1N_IDEA_TEMPLATE_PRODUCT_PRODUCT_ID](der/DER1N_IDEA_TEMPLATE_PRODUCT_PRODUCT_ID)|[产品(PRODUCT)](module/ProdMgmt/product)|1:N关系||

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

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[无操作](module/ProdMgmt/idea_template/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/ProdMgmt/idea_template/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProdMgmt/idea_template/query/View)|VIEW|否|否 |否 ||
|[全局需求模板(global)](module/ProdMgmt/idea_template/query/global)|global|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ProdMgmt/idea_template/dataset/Default)|DEFAULT|数据查询|是|||
|[全局需求模板(global)](module/ProdMgmt/idea_template/dataset/global)|global|数据查询|否|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_CATEGORY_ID_EQ|类别标识|EQ||
|N_CATEGORY_NAME_EQ|名称|EQ||
|N_CATEGORY_NAME_LIKE|名称|LIKE||
|N_ID_EQ|标识|EQ||
|N_IS_GLOBAL_EQ|全局模板|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_PRODUCT_ID_EQ|产品|EQ||
|N_PRODUCT_NAME_EQ|产品名称|EQ||
|N_PRODUCT_NAME_LIKE|产品名称|LIKE||
|N_TITLE_LIKE|标题|LIKE||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 编辑模板 | template_edit | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[模板](app/view/idea_template_edit_view)</details>||
| 打开需求模板编辑 | template_global_edit | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[模板](app/view/idea_template_global_edit_view)</details>||
| 删除模板 | template_delete | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ProdMgmt/idea_template?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/idea_template?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/idea_template?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/idea_template?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/idea_template?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/idea_template?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/idea_template?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/idea_template?id=界面行为`">
  界面行为
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