## ebsx_admin_mapping(ebsx_admin_mapping) <!-- {docsify-ignore-all} -->



<br>

<p class="panel-title"><b>实体</b></p>

* [登录日志(LOGIN_LOG)](module/Base/LOGIN_LOG)

<p class="panel-title"><b>映射实体</b></p>

* [认证日志(AUTH_LOG_ADMIN)](module/ebsx/AUTH_LOG_ADMIN)


<p class="panel-title"><b>属性映射</b></p>

* `属性等价`
`AUTHCODE(认证结果)` <i class="fa fa-angle-double-right"/></i> `AUTHCODE(认证结果)`
* `属性等价`
`LOGIN_METHOD(登录方式)` <i class="fa fa-angle-double-right"/></i> `AUTHAGENT(认证方式)`
* `属性等价`
`ACTIVE_MEMBERS(活跃成员数)` <i class="fa fa-angle-double-right"/></i> `ACTIVE_MEMBERS(活跃成员数)`
* `属性等价`
`USER_AGENT(客户端)` <i class="fa fa-angle-double-right"/></i> `USERAGENT(客户端)`
* `属性等价`
`AUTHTIME(登录时间)` <i class="fa fa-angle-double-right"/></i> `AUTHTIME(认证时间)`
* `属性等价`
`USER_NAME(用户名称)` <i class="fa fa-angle-double-right"/></i> `PERSONNAME(用户名称)`
* `属性等价`
`ID(标识)` <i class="fa fa-angle-double-right"/></i> `LOGID(标识)`
* `属性等价`
`IP(IP地址)` <i class="fa fa-angle-double-right"/></i> `IPADDR(IP地址)`
* `属性等价`
`USER_ID(用户标识)` <i class="fa fa-angle-double-right"/></i> `USERID(用户全局标识)`
* `属性等价`
`NAME(名称)` <i class="fa fa-angle-double-right"/></i> `USERNAME(用户全局名)`

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
* `默认`
`cur_user(当前用户)` <i class="fa fa-angle-double-right"/></i> `cur_user(当前用户)` 

<p class="panel-title"><b>集合映射</b></p>

* `默认`
`ECHARTS_DATAS(获取活跃人员图表数据)` <i class="fa fa-angle-double-right"/></i> `group_by_data(日期分组集合)` 
* `默认`
`CUR_USER(当前用户)` <i class="fa fa-angle-double-right"/></i> `cur_user(当前用户)` 并且 `启用查询条件`
* `默认`
`DISTINCT_USERID(排重用户)` <i class="fa fa-angle-double-right"/></i> `distinct_userid(排重用户)` 
* `默认`
`DEFAULT(数据集)` <i class="fa fa-angle-double-right"/></i> `DEFAULT(数据集)` 
