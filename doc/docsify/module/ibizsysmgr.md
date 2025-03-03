# 系统管理(ibizsysmgr) <!-- {docsify-ignore-all} -->

部门及人员业务实体的映射。

### 实体

|    名称col200   | 代码名col150      |  实体类型col150   | 存储模式col100 | 表名称col200   |    联合主键col100   |  主状态col100   |  权限控制col150  |  启用审计col100    |  备注col500  |
| --------  |------------| -----   |  --------|  --------|  --------|    -------- | -------- | -------- |-------- |
|[部门(SYS_DEPARTMENT)](module/ibizsysmgr/sys_department)|sys_department|主实体|ServiceAPI||否|否|自控制|否|部门映射实体|
|[组织(SYS_ORGANIZATION)](module/ibizsysmgr/sys_organization)|sys_organization|主实体|ServiceAPI||否|否|自控制|否|组织映射实体|
|[人员(SYS_PERSON)](module/ibizsysmgr/sys_person)|sys_person|主实体|ServiceAPI||是|否|自控制|否|人员映射实体|
|[系统角色(SYS_ROLE_UAA)](module/ibizsysmgr/sys_role)|sys_role|主实体|ServiceAPI||否|否|自控制|否|角色映射实体|
|[系统角色成员(SYS_ROLE_MEMBER)](module/ibizsysmgr/sys_role_member)|sys_role_member|主实体|ServiceAPI||否|否|自控制|否|角色成员映射实体|

