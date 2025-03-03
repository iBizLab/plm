## ibizsysmgr人员映射(ibizsysmgr) <!-- {docsify-ignore-all} -->



<br>

<p class="panel-title"><b>实体</b></p>

* [企业用户(USER)](module/Base/USER)

<p class="panel-title"><b>映射实体</b></p>

* [人员(SYS_PERSON)](module/ibizsysmgr/SYS_PERSON)


<p class="panel-title"><b>属性映射</b></p>

* `属性等价`
`USER_ID(用户ID)` <i class="fa fa-angle-double-right"/></i> `ID(标识)`
* `属性等价`
`TITLE(职位)` <i class="fa fa-angle-double-right"/></i> `TITLE(职位)`
* `属性等价`
`STATUS(状态)` <i class="fa fa-angle-double-right"/></i> `STATUS(状态)`
* `属性等价`
`DEPARTMENT_ID(部门标识)` <i class="fa fa-angle-double-right"/></i> `MDEPARTMENT_ID(主部门)`
* `属性等价`
`ORGANIZATION_ID(组织标识)` <i class="fa fa-angle-double-right"/></i> `ORGANIZATION_ID(组织标识)`
* `属性等价`
`DEPARTMENT_NAME(部门)` <i class="fa fa-angle-double-right"/></i> `MDEPARTMENT_NAME(主部门)`
* `属性等价`
`NAME(登录名)` <i class="fa fa-angle-double-right"/></i> `UID(uid/loginname)`
* `属性等价`
`MOBILE(手机号)` <i class="fa fa-angle-double-right"/></i> `MOBILE(移动电话)`
* `属性等价`
`ORGANIZATION_NAME(组织名称)` <i class="fa fa-angle-double-right"/></i> `ORGANIZATION_NAME(组织名称)`
* `属性等价`
`AVATAR(头像)` <i class="fa fa-angle-double-right"/></i> `AVATAR(头像)`
* `属性等价`
`DISPLAY_NAME(姓名)` <i class="fa fa-angle-double-right"/></i> `DISPLAY_NAME(名称)`
* `属性等价`
`ID(标识)` <i class="fa fa-angle-double-right"/></i> `ID(标识)`
* `属性等价`
`EMAIL(邮箱)` <i class="fa fa-angle-double-right"/></i> `MAIL(电子邮箱)`
* `属性等价`
`EMPLOYEE_NUMBER(工号)` <i class="fa fa-angle-double-right"/></i> `EMPLOYEE_NUMBER(人员编号)`
* `属性等价`
`REPORT_FLAG(统计)` <i class="fa fa-angle-double-right"/></i> `REPORT_FLAG(统计)`
* `属性等价`
`CREATE_TIME(建立时间)` <i class="fa fa-angle-double-right"/></i> `CREATE_TIME(建立时间)`
* `属性等价`
`UPDATE_TIME(更新时间)` <i class="fa fa-angle-double-right"/></i> `UPDATE_TIME(更新时间)`

<p class="panel-title"><b>行为映射</b></p>

* `默认`
`获取用户简要信息` <i class="fa fa-angle-double-right"/></i> `获取人员简要信息`
* `默认`
`Update` <i class="fa fa-angle-double-right"/></i> `Update`
* `默认`
`GetDraft` <i class="fa fa-angle-double-right"/></i> `GetDraft`
* `默认`
`Remove` <i class="fa fa-angle-double-right"/></i> `Remove`
* `默认`
`Save` <i class="fa fa-angle-double-right"/></i> `Save`
* `默认`
`获取人员全量信息` <i class="fa fa-angle-double-right"/></i> `Get`
* `默认`
`Create` <i class="fa fa-angle-double-right"/></i> `Create`
* `默认`
`重置密码` <i class="fa fa-angle-double-right"/></i> `重置密码`
* `默认`
`CheckKey` <i class="fa fa-angle-double-right"/></i> `CheckKey`

<p class="panel-title"><b>查询映射</b></p>

* `内部处理`
`DEFAULT(数据查询)` <i class="fa fa-angle-double-right"/></i> `DEFAULT(数据查询)` 并且 `启用查询条件`
* `内部处理`
`unassigned_dept(未分配部门)` <i class="fa fa-angle-double-right"/></i> `DEFAULT(数据查询)` 并且 `启用查询条件`

<p class="panel-title"><b>集合映射</b></p>

* `内部处理`
`unassigned_dept(未分配部门)` <i class="fa fa-angle-double-right"/></i> `DEFAULT(数据集)` 并且 `启用查询条件`
* `内部处理`
`DEFAULT(数据集)` <i class="fa fa-angle-double-right"/></i> `DEFAULT(数据集)` 并且 `启用查询条件`
* `默认`
`user(当前用户)` <i class="fa fa-angle-double-right"/></i> `user(当前用户)` 
