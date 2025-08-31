## ibizsysmgr部门映射(ibizsysmgr) <!-- {docsify-ignore-all} -->



<br>

<p class="panel-title"><b>实体</b></p>

* [部门(DEPARTMENT)](module/Base/DEPARTMENT)

<p class="panel-title"><b>映射实体</b></p>

* [部门(SYS_DEPARTMENT)](module/ibizsysmgr/SYS_DEPARTMENT)


<p class="panel-title"><b>属性映射</b></p>

* `属性等价`
`PARENT_ID(父部门标识)` <i class="fa fa-angle-double-right"/></i> `PARENT_ID(上级部门标识)`
* `属性等价`
`NAME(名称)` <i class="fa fa-angle-double-right"/></i> `DEPARTMENT_NAME(部门名称)`
* `属性等价`
`CREATE_MAN(建立人)` <i class="fa fa-angle-double-right"/></i> `CREATOR(创建人)`
* `属性等价`
`IS_LEAF(是否叶子节点)` <i class="fa fa-angle-double-right"/></i> `IS_LEAF(是否叶子节点)`
* `属性等价`
`ORGANIZATION_ID(组织标识)` <i class="fa fa-angle-double-right"/></i> `ORGANIZATION_ID(组织机构标识)`
* `属性等价`
`IDENTIFIER(部门标识/编号)` <i class="fa fa-angle-double-right"/></i> `DEPARTMENT_NUMBER(部门编号)`
* `属性等价`
`UPDATE_MAN(更新人)` <i class="fa fa-angle-double-right"/></i> `UPDATER(最后更新人)`
* `属性等价`
`SORT(排序)` <i class="fa fa-angle-double-right"/></i> `SORT(排序)`
* `属性等价`
`ID(标识)` <i class="fa fa-angle-double-right"/></i> `ID(标识)`
* `属性等价`
`DESCRIPTION(备注)` <i class="fa fa-angle-double-right"/></i> `DESCRIPTION(备注)`
* `属性等价`
`PNAME(父名称)` <i class="fa fa-angle-double-right"/></i> `PARENT_NAME(上级部门名称)`
* `属性等价`
`CREATE_TIME(建立时间)` <i class="fa fa-angle-double-right"/></i> `CREATE_TIME(创建时间)`
* `属性等价`
`UPDATE_TIME(更新时间)` <i class="fa fa-angle-double-right"/></i> `UPDATE_TIME(最后更新时间)`

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

* `默认`
`root(根部门)` <i class="fa fa-angle-double-right"/></i> `DEFAULT(数据查询)` 并且 `启用查询条件`
* `默认`
`DEFAULT(数据查询)` <i class="fa fa-angle-double-right"/></i> `DEFAULT(数据查询)` 并且 `启用查询条件`
* `默认`
`VIEW(默认（全部数据）)` <i class="fa fa-angle-double-right"/></i> `VIEW(默认（全部数据）)` 

<p class="panel-title"><b>集合映射</b></p>

* `默认`
`DEFAULT(数据集)` <i class="fa fa-angle-double-right"/></i> `DEFAULT(数据集)` 并且 `启用查询条件`
* `默认`
`root(根部门)` <i class="fa fa-angle-double-right"/></i> `DEFAULT(数据集)` 并且 `启用查询条件`
