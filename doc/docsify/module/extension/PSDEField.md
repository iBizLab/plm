# 实体属性(PSDEField)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|允许空值|ALLOWEMPTY|是否逻辑||否||
|代码名称|CODENAME|文本，可指定长度|60|是||
|建立时间|CREATEDATE|日期时间型|8|否||
|建立人|CREATEMAN|文本，可指定长度|60|否||
|属性类型|DEFTYPE|单项选择(数值)||否||
|扩展标记|EXTENSION_TAG|文本，可指定长度|200|是||
|扩展标记2|EXTENSION_TAG2|文本，可指定长度|200|是||
|扩展标记3|EXTENSION_TAG3|文本，可指定长度|200|是||
|扩展标记4|EXTENSION_TAG4|文本，可指定长度|200|是||
|属性标记|FIELDTAG|文本，可指定长度|100|是||
|属性标记2|FIELDTAG2|文本，可指定长度|100|是||
|长度|LENGTH|整型||是||
|中文名称|LOGICNAME|文本，可指定长度|60|否||
|浮点精度|PRECISION2|整型||是||
|数据类型|PSDATATYPEID|文本，可指定长度|100|否||
|数据类型|PSDATATYPENAME|文本，可指定长度|100|否||
|实体属性标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|PSDEFIELDID|全局唯一标识，文本类型，用户不可见|100|否||
|实体属性名称|PSDEFIELDNAME|文本，可指定长度|200|是||
|实体|PSDEID|文本，可指定长度|100|否||
|实体|PSDENAME|文本，可指定长度|100|否||
|更新时间|UPDATEDATE|日期时间型|8|否||
|更新人|UPDATEMAN|文本，可指定长度|60|否||
|用户标记|USERTAG|文本，可指定长度|100|是||
|用户标记2|USERTAG2|文本，可指定长度|100|是||
|用户标记3|USERTAG3|文本，可指定长度|50|是||
|用户标记4|USERTAG4|文本，可指定长度|50|是||


## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|[实体处理逻辑](module/extension/PSDEField/logic/GetDraft "GetDraft")|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[GetDraft](module/extension/PSDEField/logic/GetDraft)|GetDraft|无||未完成|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/extension/PSDEField/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/extension/PSDEField/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/extension/PSDEField/dataset/Default)|DEFAULT|数据查询|是|||

## 数据权限

##### 全部数据（读写） :id=PSDEField-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`
* `DELETE`
* `READ`
* `UPDATE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_DEFTYPE_EQ|属性类型|EQ||
|N_FIELDTAG_EQ|属性标记|EQ||
|N_FIELDTAG2_EQ|属性标记2|EQ||
|N_PSDEFIELDID_EQ|实体属性标识|EQ||
|N_PSDEFIELDNAME_LIKE|实体属性名称|LIKE||
|N_PSDEID_EQ|实体|EQ||
|N_PSDENAME_EQ|实体|EQ||
|N_PSDENAME_LIKE|实体|LIKE||
|N_USERTAG_EQ|用户标记|EQ||
|N_USERTAG_NOTEQ|用户标记|NOTEQ||
|N_USERTAG2_EQ|用户标记2|EQ||
|N_USERTAG2_NOTEQ|用户标记2|NOTEQ||
|N_USERTAG3_EQ|用户标记3|EQ||
|N_USERTAG3_NOTEQ|用户标记3|NOTEQ||
|N_USERTAG4_EQ|用户标记4|EQ||
|N_USERTAG4_NOTEQ|用户标记4|NOTEQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 编辑属性 | edit_field | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[实体属性](app/view/psde_field_quick_cfg_view)</details>||
| 删除属性 | remove_field | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/extension/PSDEField?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDEField?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDEField?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDEField?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDEField?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDEField?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDEField?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDEField?id=界面行为`">
  界面行为
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