# 部门(sys_department)  <!-- {docsify-ignore-all} -->


部门映射实体


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|业务类别|BUSINESS_CATEGORY|文本数组|2000|是||
|创建时间|CREATE_TIME|日期时间型||否||
|创建人|CREATOR|文本，可指定长度|100|否||
|DC|DC|文本，可指定长度|200|是||
|部门名称|DEPARTMENT_NAME|文本，可指定长度|200|否||
|部门编号|DEPARTMENT_NUMBER|文本，可指定长度|100|否||
|备注|DESCRIPTION|长文本，长度1000|2000|是||
|DN|DN|文本，可指定长度|200|是||
|逻辑有效标记|ENABLED|是否逻辑|1|否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|组织机构标识|ORGANIZATION_ID|文本，可指定长度|100|是||
|组织机构名称|ORGANIZATION_NAME|文本，可指定长度|100|是||
|机构编号|ORGANIZATION_NUMBER|文本，可指定长度|100|是||
|上级部门标识|PARENT_ID|文本，可指定长度|100|是||
|上级部门名称|PARENT_NAME|文本，可指定长度|100|是||
|上级标识|PARENT_UNIT_ID|文本，可指定长度|200|是||
|上级名称|PARENT_UNIT_NAME|文本，可指定长度|200|是||
|简称|SHORT_NAME|文本，可指定长度|100|是||
|排序|SORT|大整型|20|是||
|最后更新人|UPDATER|文本，可指定长度|100|否||
|最后更新时间|UPDATE_TIME|日期时间型||否||


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
|[数据查询(DEFAULT)](module/ibizsysmgr/sys_department/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ibizsysmgr/sys_department/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ibizsysmgr/sys_department/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_DEPARTMENT_NAME_LIKE|部门名称|LIKE||
|N_ID_EQ|标识|EQ||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ibizsysmgr/sys_department?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ibizsysmgr/sys_department?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ibizsysmgr/sys_department?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ibizsysmgr/sys_department?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ibizsysmgr/sys_department?id=搜索模式`">
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