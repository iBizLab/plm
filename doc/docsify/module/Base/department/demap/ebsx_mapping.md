## ebsx部门映射(ebsx_mapping) <!-- {docsify-ignore-all} -->



<br>

<p class="panel-title"><b>实体</b></p>

* [部门(DEPARTMENT)](module/Base/DEPARTMENT)

<p class="panel-title"><b>映射实体</b></p>

* [部门(SYS_DEPT)](module/ebsx/SYS_DEPT)


<p class="panel-title"><b>属性映射</b></p>

* `属性等价`
`HEAD_ID(部门负责人标识)` <i class="fa fa-angle-double-right"/></i> `DEPTLEADER(部门领导)`
* `属性等价`
`PARENT_ID(父部门标识)` <i class="fa fa-angle-double-right"/></i> `PDEPTID(上级部门)`
* `属性等价`
`ID(标识)` <i class="fa fa-angle-double-right"/></i> `DEPTID(部门标识)`
* `属性等价`
`IDENTIFIER(部门标识/编号)` <i class="fa fa-angle-double-right"/></i> `DEPTCODE(部门代码)`
* `属性等价`
`NAME(名称)` <i class="fa fa-angle-double-right"/></i> `DEPTNAME(部门名称)`

<p class="panel-title"><b>行为映射</b></p>

* `默认`
`Create` <i class="fa fa-angle-double-right"/></i> `Create`
* `默认`
`Update` <i class="fa fa-angle-double-right"/></i> `Update`
* `默认`
`Remove` <i class="fa fa-angle-double-right"/></i> `Remove`
* `默认`
`Get` <i class="fa fa-angle-double-right"/></i> `Get`
* `默认`
`GetDraft` <i class="fa fa-angle-double-right"/></i> `GetDraft`
* `默认`
`CheckKey` <i class="fa fa-angle-double-right"/></i> `CheckKey`
* `默认`
`Save` <i class="fa fa-angle-double-right"/></i> `Save`

<p class="panel-title"><b>查询映射</b></p>

* `内部处理`
`DEFAULT(数据查询)` <i class="fa fa-angle-double-right"/></i> `DEFAULT(数据查询)` 并且 `启用查询条件`
* `内部处理`
`root(根部门)` <i class="fa fa-angle-double-right"/></i> `DEFAULT(数据查询)` 并且 `启用查询条件`
* `默认`
`VIEW(默认（全部数据）)` <i class="fa fa-angle-double-right"/></i> `VIEW(默认（全部数据）)` 

<p class="panel-title"><b>集合映射</b></p>

* `内部处理`
`DEFAULT(数据集)` <i class="fa fa-angle-double-right"/></i> `DEFAULT(数据集)` 并且 `启用查询条件`
* `内部处理`
`root(根部门)` <i class="fa fa-angle-double-right"/></i> `DEFAULT(数据集)` 并且 `启用查询条件`
