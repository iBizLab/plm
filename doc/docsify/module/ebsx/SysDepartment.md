# 部门(SysDepartment)  <!-- {docsify-ignore-all} -->


部门映射实体


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|业务编码|BCODE|文本，可指定长度|100|是||
|创建时间|CREATEDATE|日期时间型||是||
|钉钉部门标识|DDDEPTID|文本，可指定长度|100|是||
|部门代码|DEPTCODE|文本，可指定长度|100|否||
|部门全称|DEPTFULLNAME|文本，可指定长度|100|是||
|部门标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|DEPTID|全局唯一标识，文本类型，用户不可见|100|否||
|部门领导|DEPTLEADER|文本，可指定长度|500|是||
|部门领导标识|DEPTLEADERID|文本，可指定长度|500|是||
|部门级别|DEPTLEVEL|整型||是||
|部门名称|DEPTNAME|文本，可指定长度|100|否||
|区属|DOMAINS|文本，可指定长度|100|是||
|逻辑有效|ENABLE|是否逻辑||是||
|启用标志|ISVALID|是否逻辑||是||
|分管领导标识|LEADERID|文本，可指定长度|500|是||
|分管领导|LEADERNAME|文本，可指定长度|500|是||
|单位|ORGID|文本，可指定长度|100|否||
|单位名称|ORGNAME|文本，可指定长度|100|是||
|上级部门|PDEPTID|文本，可指定长度|100|是||
|上级部门|PDEPTNAME|文本，可指定长度|100|是||
|保留|RESERVER|文本，可指定长度|100|是||
|保留10|RESERVER10|长文本，没有长度限制|1048576|是||
|保留11|RESERVER11|整型||是||
|保留12|RESERVER12|整型||是||
|保留13|RESERVER13|整型||是||
|保留14|RESERVER14|整型||是||
|保留15|RESERVER15|数值||是||
|保留16|RESERVER16|数值||是||
|保留17|RESERVER17|大数值||是||
|保留18|RESERVER18|大数值||是||
|保留19|RESERVER19|日期时间型||是||
|保留2|RESERVER2|文本，可指定长度|100|是||
|保留20|RESERVER20|日期时间型||是||
|保留3|RESERVER3|文本，可指定长度|100|是||
|保留4|RESERVER4|文本，可指定长度|100|是||
|保留5|RESERVER5|文本，可指定长度|200|是||
|保留6|RESERVER6|文本，可指定长度|200|是||
|保留7|RESERVER7|文本，可指定长度|1000|是||
|保留8|RESERVER8|文本，可指定长度|1000|是||
|保留9|RESERVER9|长文本，没有长度限制|1048576|是||
|部门简称|SHORTNAME|文本，可指定长度|100|是||
|排序|SHOWORDER|整型||是||
|更新时间|UPDATEDATE|日期时间型||是||
|企业微信部门标识|WXWORKDEPTID|文本，可指定长度|100|是||


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
|[数据查询(DEFAULT)](module/ebsx/SysDepartment/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ebsx/SysDepartment/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ebsx/SysDepartment/dataset/Default)|DEFAULT|数据查询|是|||

## 数据权限

##### 全部数据（读） :id=SysDepartment-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=SysDepartment-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `UPDATE`
* `DELETE`
* `CREATE`



##### 当前部门（读） :id=SysDepartment-CURDEPT_R

<p class="panel-title"><b>数据范围</b></p>

* `部门范围` ： <i class="fa fa-check-square"/></i> 当前部门

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 当前部门（读写） :id=SysDepartment-CURDEPT_RW

<p class="panel-title"><b>数据范围</b></p>

* `部门范围` ： <i class="fa fa-check-square"/></i> 当前部门

<p class="panel-title"><b>数据能力</b></p>

* `UPDATE`
* `CREATE`
* `DELETE`
* `READ`



##### 当前组织（读） :id=SysDepartment-CURORG_R

<p class="panel-title"><b>数据范围</b></p>

* `组织范围` ： <i class="fa fa-check-square"/></i> 当前组织

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 当前组织（读写） :id=SysDepartment-CURORG_RW

<p class="panel-title"><b>数据范围</b></p>

* `组织范围` ： <i class="fa fa-check-square"/></i> 当前组织

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `CREATE`
* `UPDATE`
* `READ`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_DEPTID_EQ|部门标识|EQ||
|N_DEPTNAME_LIKE|部门名称|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ebsx/SysDepartment?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/SysDepartment?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/SysDepartment?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/SysDepartment?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/SysDepartment?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/SysDepartment?id=搜索模式`">
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