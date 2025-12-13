## ebsx组织映射(DEMap) <!-- {docsify-ignore-all} -->



<br>

<p class="panel-title"><b>实体</b></p>

* [组织(ORGANIZATION)](module/Base/ORGANIZATION)

<p class="panel-title"><b>映射实体</b></p>

* [组织(SYS_ORG)](module/ebsx/SYS_ORG)


<p class="panel-title"><b>属性映射</b></p>

* `属性等价`
`SORT(排序)` <i class="fa fa-angle-double-right"/></i> `SHOWORDER(排序)`
* `属性等价`
`NAME(名称)` <i class="fa fa-angle-double-right"/></i> `ORGNAME(名称)`
* `属性等价`
`ID(标识)` <i class="fa fa-angle-double-right"/></i> `ORGID(单位标识)`
* `属性等价`
`PID(父标识)` <i class="fa fa-angle-double-right"/></i> `PORGID(上级单位)`
* `属性等价`
`PNAME(名称)` <i class="fa fa-angle-double-right"/></i> `PORGNAME(上级单位)`
* `属性等价`
`ENABLE(逻辑有效标志)` <i class="fa fa-angle-double-right"/></i> `ENABLE(逻辑有效)`

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
`DEFAULT(数据查询)` <i class="fa fa-angle-double-right"/></i> `DEFAULT(数据查询)` 
* `默认`
`VIEW(默认（全部数据）)` <i class="fa fa-angle-double-right"/></i> `VIEW(默认（全部数据）)` 

<p class="panel-title"><b>集合映射</b></p>

* `默认`
`DEFAULT(数据集)` <i class="fa fa-angle-double-right"/></i> `DEFAULT(数据集)` 
