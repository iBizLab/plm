## ebsx角色成员映射(DEMap2) <!-- {docsify-ignore-all} -->



<br>

<p class="panel-title"><b>实体</b></p>

* [系统角色成员(ROLE_MEMBER)](module/Base/ROLE_MEMBER)

<p class="panel-title"><b>映射实体</b></p>

* [用户角色关系(SYS_USER_ROLE)](module/ebsx/SYS_USER_ROLE)


<p class="panel-title"><b>属性映射</b></p>

* `属性等价`
`MEMBER_UID(用户组/人员标识)` <i class="fa fa-angle-double-right"/></i> `USERID(用户标识)`
* `属性等价`
`ROLE_ID(系统角色标识)` <i class="fa fa-angle-double-right"/></i> `SYS_ROLEID(角色)`
* `属性等价`
`ID(标识)` <i class="fa fa-angle-double-right"/></i> `SYS_USER_ROLEID(用户角色关系标识)`

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
