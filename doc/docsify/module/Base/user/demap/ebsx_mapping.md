## ebsx映射(ebsx_mapping) <!-- {docsify-ignore-all} -->



<br>

<p class="panel-title"><b>实体</b></p>

* [企业用户(USER)](module/Base/USER)

<p class="panel-title"><b>映射实体</b></p>

* [人员(SYS_EMP)](module/ebsx/SYS_EMP)


<p class="panel-title"><b>属性映射</b></p>

* `属性等价`
`DEPARTMENT_NAME(部门名称)` <i class="fa fa-angle-double-right"/></i> `MDEPTNAME(主部门名称)`
* `属性等价`
`MOBILE(手机号)` <i class="fa fa-angle-double-right"/></i> `PHONE(手机号)`
* `属性等价`
`EMPLOYEE_NUMBER(工号)` <i class="fa fa-angle-double-right"/></i> `USERCODE(用户工号)`
* `属性等价`
`JOB_NAME(职位名称)` <i class="fa fa-angle-double-right"/></i> `POSTNAME(岗位名称)`
* `属性等价`
`AVATAR(头像)` <i class="fa fa-angle-double-right"/></i> `USERICON(照片)`
* `属性等价`
`ORGANIZATION_NAME(组织名称)` <i class="fa fa-angle-double-right"/></i> `ORGNAME(单位名称)`
* `属性等价`
`ORGANIZATION_ID(组织标识)` <i class="fa fa-angle-double-right"/></i> `ORGID(单位)`
* `属性等价`
`NAME(登录名)` <i class="fa fa-angle-double-right"/></i> `LOGINNAME(登录名)`
* `属性等价`
`STATUS(状态)` <i class="fa fa-angle-double-right"/></i> `STATE(人员状态)`
* `属性等价`
`JOB_ID(岗位标识)` <i class="fa fa-angle-double-right"/></i> `POSTID(岗位标识)`
* `属性等价`
`ID(标识)` <i class="fa fa-angle-double-right"/></i> `USERID(用户标识)`
* `属性等价`
`DISPLAY_NAME(姓名)` <i class="fa fa-angle-double-right"/></i> `PERSONNAME(姓名)`
* `属性等价`
`TITLE(职位)` <i class="fa fa-angle-double-right"/></i> `POSTNAME(岗位名称)`
* `属性等价`
`DEPARTMENT_ID(部门标识)` <i class="fa fa-angle-double-right"/></i> `MDEPTID(主部门)`
* `属性等价`
`PASSWORD(密码)` <i class="fa fa-angle-double-right"/></i> `PASSWORD(密码)`
* `属性等价`
`EMAIL(邮箱)` <i class="fa fa-angle-double-right"/></i> `EMAIL(邮件)`
* `属性等价`
`REPORT_FLAG(统计)` <i class="fa fa-angle-double-right"/></i> `REPORT_FLAG(统计)`

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
`变更密码` <i class="fa fa-angle-double-right"/></i> `变更密码`
* `默认`
`CheckKey` <i class="fa fa-angle-double-right"/></i> `CheckKey`
* `默认`
`初始化密码` <i class="fa fa-angle-double-right"/></i> `初始化密码`
* `默认`
`Save` <i class="fa fa-angle-double-right"/></i> `Save`

<p class="panel-title"><b>查询映射</b></p>

* `内部处理`
`unassigned_dept(未分配部门)` <i class="fa fa-angle-double-right"/></i> `DEFAULT(数据查询)` 并且 `启用查询条件`
* `内部处理`
`DEFAULT(数据查询)` <i class="fa fa-angle-double-right"/></i> `DEFAULT(数据查询)` 并且 `启用查询条件`
* `默认`
`user(当前用户)` <i class="fa fa-angle-double-right"/></i> `DEFAULT(数据查询)` 并且 `启用查询条件`

<p class="panel-title"><b>集合映射</b></p>

* `内部处理`
`unassigned_dept(未分配部门)` <i class="fa fa-angle-double-right"/></i> `DEFAULT(数据集)` 并且 `启用查询条件`
* `默认`
`user(当前用户)` <i class="fa fa-angle-double-right"/></i> `DEFAULT(数据集)` 并且 `启用查询条件`
* `内部处理`
`DEFAULT(数据集)` <i class="fa fa-angle-double-right"/></i> `DEFAULT(数据集)` 并且 `启用查询条件`
* `默认`
`user(当前用户)` <i class="fa fa-angle-double-right"/></i> `user(当前用户)` 
