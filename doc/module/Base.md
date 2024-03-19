# 基础(Base) <!-- {docsify-ignore-all} -->



|    名称   | 代码名      |  实体类型   |  存储模式 |  表名称  |  逻辑有效   |  联合主键   |  主状态   |  权限控制  |  启用审计    |  备注  |
| --------  |------------| -----   |  --------|  --------|  --------|  -------- |  -------- | -------- | -------- |-------- |
|[活动(ACTIVITIY)](module/Base/Activitiy)|Activitiy|主实体|SQL|ACTIVITIY|否|否|否|自控制|否||
|[附件(ATTACHMENT)](module/Base/Attachment)|Attachment|动态附属实体|SQL|ATTACHMENT|否|否|否|自控制|否||
|[关注(ATTENTION)](module/Base/Attention)|Attention|主实体|SQL|ATTENTION|否|是|否|自控制|否||
|[类别(CATEGORY)](module/Base/Category)|Category|主实体|SQL|CATEGORY|否|否|否|自控制|否||
|[评论(COMMENT)](module/Base/Comment)|Comment|主实体|SQL|COMMENT|否|否|否|自控制|否||
|[通用规则(COMMON_FLOW)](module/Base/Common_flow)|Common_flow|主实体|无存储||否|否|否|自控制|否|用于存储通用规则|
|[交付物(DELIVERABLE)](module/Base/Deliverable)|Deliverable|动态附属实体|SQL|ATTACHMENT|否|否|是|自控制|否||
|[部门(DEPARTMENT)](module/Base/Department)|Department|主实体|无存储||否|否|否|自控制|否||
|[动态数据看板(DYNADASHBOARD)](module/Base/Dynadashboard)|Dynadashboard|主实体|SQL|DYNADASHBOARD|否|否|否|自控制|否||
|[扩展日志(EXTEND_LOG)](module/Base/Extend_log)|Extend_log|主实体|SQL|EXTEND_LOG|否|否|否|自控制|否||
|[扩展存储(EXTEND_STORAGE)](module/Base/Extend_storage)|Extend_storage|主实体|SQL|EXTEND_STORAGE|否|是|否|自控制|否||
|[收藏(FAVORITE)](module/Base/Favorite)|Favorite|主实体|SQL|FAVORITE|否|是|否|自控制|否||
|[团队(GROUP)](module/Base/Group)|Group|主实体|无存储||否|否|否|自控制|否||
|[洞察力(INSIGHT)](module/Base/Insight)|Insight|主实体|SQL|INSIGHT|否|否|否|自控制|否|用于存储报表标识类型等，通过重定向视图导向对应的报表视图，可使用view://机制|
|[岗位(JOB)](module/Base/Job)|Job|主实体|无存储||否|否|否|自控制|否||
|[主状态值代理(MSVALUEPROXY)](module/Base/MSValueProxy)|MSValueProxy|主实体|无存储||否|否|否|自控制|否||
|[文件夹(PORTFOLIO)](module/Base/Portfolio)|Portfolio|主实体|SQL|PORTFOLIO|否|否|是|自控制|否||
|[文件夹成员(PORTFOLIO_MEMBER)](module/Base/Portfolio_member)|Portfolio_member|关系实体|SQL|PORTFOLIO_MEMBER|否|是|否|附属主实体控制（未映射自控）|否||
|[最近访问(RECENT)](module/Base/Recent)|Recent|主实体|SQL|RECENT|否|是|否|自控制|否||
|[引用索引(REFERENCES_INDEX)](module/Base/References_index)|References_index|主实体|无存储||否|否|否|自控制|否||
|[关联(RELATION)](module/Base/Relation)|Relation|主实体|SQL|RELATION|否|是|否|自控制|否||
|[角色(ROLE)](module/Base/Role)|Role|主实体|无存储||否|否|否|自控制|否||
|[分组(SECTION)](module/Base/Section)|Section|主实体|SQL|SECTION|否|否|否|自控制|否||
|[序列(SEQUENCE_GENERATOR)](module/Base/Sequence_generator)|Sequence_generator|主实体|SQL|SEQUENCE_GENERATOR|否|否|否|自控制|否||
|[企业(TEAM)](module/Base/Team)|Team|主实体|无存储||否|否|否|自控制|否||
|[规则模板(TEMPLATE_FLOW)](module/Base/Template_flow)|Template_flow|主实体|无存储||否|否|否|自控制|否|用于承载规则模板实体|
|[企业用户(USER)](module/Base/User)|User|主实体|无存储||否|否|否|自控制|否||
|[工作(WORK)](module/Base/Work)|Work|主实体|SQL|WORK|否|是|否|附属主实体控制（未映射自控）|否||
|[工时(WORKLOAD)](module/Base/Workload)|Workload|主实体|SQL|WORKLOAD|否|否|否|自控制|否||
|[工时类别(WORKLOAD_TYPE)](module/Base/Workload_type)|Workload_type|主实体|SQL|WORKLOAD_TYPE|否|否|否|自控制|否||

