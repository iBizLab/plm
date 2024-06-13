# 扩展存储(extend_storage)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|大整形值|BIGINT_VALUE|大整型|20|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|时间值|DATETIME_VALUE|日期时间型||是||
|数值值|DECIMAL_VALUE|数值||是||
|浮点值|DOUBLE_VALUE|浮点||是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|整形值|INT_VALUE|整型||是||
|长文本值|LONGSTRING_VALUE|长文本，没有长度限制|1048576|是||
|名称|NAME|文本，可指定长度|200|是||
|所属数据标识|OWNER_ID|文本，可指定长度|100|是||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|是||
|文本值|STRING_VALUE|文本，可指定长度|4000|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||

<p class="panel-title"><b>联合主键</b></p>

  * `所属数据对象(OWNER_TYPE)`
  * `所属数据标识(OWNER_ID)`
  * `名称(NAME)`

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

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/extend_storage/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/extend_storage/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/extend_storage/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_BIGINT_VALUE_EQ|大整形值|EQ||
|N_DATETIME_VALUE_EQ|时间值|EQ||
|N_DECIMAL_VALUE_EQ|数值值|EQ||
|N_DOUBLE_VALUE_EQ|浮点值|EQ||
|N_ID_EQ|标识|EQ||
|N_INT_VALUE_EQ|整形值|EQ||
|N_LONGSTRING_VALUE_ISNULL|长文本值|ISNULL||
|N_LONGSTRING_VALUE_LIKE|长文本值|LIKE||
|N_NAME_EQ|名称|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_OWNER_ID_EQ|所属数据标识|EQ||
|N_OWNER_TYPE_EQ|所属数据对象|EQ||
|N_STRING_VALUE_EQ|文本值|EQ||
|N_STRING_VALUE_ISNULL|文本值|ISNULL||
|N_STRING_VALUE_LIKE|文本值|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/extend_storage?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/extend_storage?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/extend_storage?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/extend_storage?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/extend_storage?id=搜索模式`">
  搜索模式
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