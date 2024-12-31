# ebsx系统管理(ebsx) <!-- {docsify-ignore-all} -->

ebsx部门及人员业务实体的映射。

### 实体

|    名称col200   | 代码名col150      |  实体类型col150   | 存储模式col100 | 表名称col200   |    联合主键col100   |  主状态col100   |  权限控制col150  |  启用审计col100    |  备注col500  |
| --------  |------------| -----   |  --------|  --------|  --------|    -------- | -------- | -------- |-------- |
|[认证日志(SYS_AUTHLOG)](module/ebsx/AuthLog)|AuthLog|主实体|ServiceAPI||否|否|自控制|否|认证日志信息|
|[系统角色(SYS_ROLE)](module/ebsx/Role)|Role|主实体|ServiceAPI||否|否|自控制|否|角色映射实体|
|[部门(SYS_DEPT)](module/ebsx/SysDepartment)|SysDepartment|主实体|ServiceAPI||否|否|自控制|否|部门映射实体|
|[人员(SYS_EMP)](module/ebsx/SysEmployee)|SysEmployee|主实体|ServiceAPI||否|否|自控制|否|人员映射实体|
|[组织(SYS_ORG)](module/ebsx/SysOrganization)|SysOrganization|主实体|ServiceAPI||否|否|自控制|否|组织映射实体|
|[待办(SYS_TODO)](module/ebsx/SysTodo)|SysTodo|主实体|ServiceAPI||否|否|自控制|否|待办信息|
|[用户角色关系(SYS_USER_ROLE)](module/ebsx/UserRole)|UserRole|主实体|ServiceAPI||否|否|自控制|否|角色成员映射实体|
|[应用视图主题(APP_VIEW_THEME)](module/ebsx/app_view_theme)|app_view_theme|主实体|SQL|APP_VIEW_THEME|否|否|自控制|否||
|[认证日志(AUTH_LOG_ADMIN)](module/ebsx/auth_log_admin)|auth_log_admin|主实体|SQL|IBZAUTHLOG|否|否|自控制|否|记录登录认证相关信息。|

