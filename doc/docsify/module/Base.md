# 基础管理(Base) <!-- {docsify-ignore-all} -->

主要包含基础类、通用类业务实体的管理，如目录、评论、关注、人员等。

### 实体

|    名称col200   | 代码名col150      |  实体类型col150   | 存储模式col100 | 表名称col200   |    联合主键col100   |  主状态col100   |  权限控制col150  |  启用审计col100    |  备注col500  |
| --------  |------------| -----   |  --------|  --------|  --------|    -------- | -------- | -------- |-------- |
|[活动(ACTIVITY)](module/Base/activity)|activity|主实体|SQL|ACTIVITY|否|否|自控制|否|记录系统中用户或系统行为的日志，可以是实体属性更新、状态变更等。|
|[组件(ADDON)](module/Base/addon)|addon|主实体|SQL|ADDON|是|否|附属主实体控制（未映射自控）|否|存储系统子产品中的组件信息，例如：客户、需求、工作项等|
|[资源组件(ADDON_RESOURCE)](module/Base/addon_resource)|addon_resource|主实体|SQL|ADDON|否|否|附属主实体控制（未映射自控）|否|存储项目品管理中资源组件的数据|
|[组件权限成员(ADDON_ROLE_MEMBER)](module/Base/addon_role_member)|addon_role_member|主实体|SQL|ADDON_ROLE_MEMBER|否|否|自控制|否|存储组件对应的成员|
|[附件(ATTACHMENT)](module/Base/attachment)|attachment|动态附属实体|SQL|ATTACHMENT|否|否|自控制|否|与工作项或文档、需求等实体关联的文件，用于提供额外信息。|
|[关注(ATTENTION)](module/Base/attention)|attention|主实体|SQL|ATTENTION|是|否|附属主实体控制|否|允许用户标记重要的项目或信息，以便于跟踪和及时获取更新。|
|[基线(BASELINE)](module/Base/baseline)|baseline|主实体|SQL|BASELINE|否|否|附属主实体控制|否|用于查看和管理基线相关信息。|
|[类别(CATEGORY)](module/Base/category)|category|主实体|SQL|CATEGORY|否|否|自控制|否|逻辑上用于分类存储其他实体的容器。|
|[评论(COMMENT)](module/Base/comment)|comment|主实体|SQL|COMMENT|否|否|附属主实体控制|否|用于存储用户在需求、工单、工作项、页面、等内容上发布的评论。|
|[通用规则(COMMON_FLOW)](module/Base/common_flow)|common_flow|主实体|无存储||否|否|自控制|否|用于存储通用规则|
|[交付物(DELIVERABLE)](module/Base/deliverable)|deliverable|主实体|SQL|ATTACHMENT|否|否|附属主实体控制|否|工作项中产出的具体成果物，包括文档、软件代码、报告等。|
|[部门(DEPARTMENT)](module/Base/department)|department|主实体|无存储||否|否|自控制|否|用于查看和管理企业的部门信息。|
|[数据字典(DICTIONARY)](module/Base/dictionary_data)|dictionary_data|主实体|SQL|DICTIONARY|否|否|自控制|否|用于记录基础数据字典。|
|[动态应用菜单(DYNA_APPMENU)](module/Base/dyna_appmenu)|dyna_appmenu|主实体|SQL|DYNA_APPMENU|否|否|自控制|否|配置动态菜单功能必备。|
|[动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard)|dyna_dashboard|主实体|SQL|DYNADASHBOARD|否|否|附属主实体控制（未映射自控）|否|配置动态数据看板功能必备。|
|[动态看板部件配置(DYNA_PORTLET_SETTING)](module/Base/dyna_portlet_setting)|dyna_portlet_setting|主实体|无存储||否|否|自控制|否||
|[扩展日志(EXTEND_LOG)](module/Base/extend_log)|extend_log|主实体|SQL|EXTEND_LOG|否|否|自控制|否||
|[扩展存储(EXTEND_STORAGE)](module/Base/extend_storage)|extend_storage|主实体|SQL|EXTEND_STORAGE|是|否|自控制|否||
|[收藏(FAVORITE)](module/Base/favorite)|favorite|主实体|SQL|FAVORITE|是|否|自控制|否|用户自定义的收藏记录，方便快速访问常用的实体或页面。|
|[团队(GROUP)](module/Base/group)|group|主实体|SQL|USER_GROUP|否|否|自控制|否|记录团队信息。|
|[洞察力(INSIGHT)](module/Base/insight)|insight|主实体|SQL|INSIGHT|否|否|自控制|否|用于存储报表标识类型等，通过重定向视图导向对应的报表视图，可使用view://机制|
|[岗位(JOB)](module/Base/job)|job|主实体|无存储||否|否|自控制|否|记录人员岗位信息。|
|[登录日志(LOGIN_LOG)](module/Base/login_log)|login_log|主实体|无存储||否|否|自控制|否|存储员工登录信息|
|[后台管理(MANAGEMENT)](module/Base/management)|management|主实体|无存储||否|否|自控制|否|用于后台管理界面展示。|
|[成员(MEMBER)](module/Base/member)|member|主实体|SQL|MEMBER|是|否|附属主实体控制（未映射自控）|否|公共成员实体。|
|[通知设置(NOTIFY_SETTING)](module/Base/notify_setting)|notify_setting|主实体|无存储||否|否|自控制|否|记录个人通知设置信息|
|[系统参数(PARAMETER)](module/Base/parameter)|parameter|主实体|SQL|PARAMETER|否|否|自控制|否|用于记录系统默认参数。|
|[文件夹(PORTFOLIO)](module/Base/portfolio)|portfolio|主实体|SQL|PORTFOLIO|否|否|自控制|否|用于项目集查看及管理，可以统一协调项目工作，把控整体进度。|
|[文件夹成员(PORTFOLIO_MEMBER)](module/Base/portfolio_member)|portfolio_member|关系实体|SQL|PORTFOLIO_MEMBER|是|否|附属主实体控制（未映射自控）|否|记录项目集团队中各个成员的角色·，方便管理和协作。|
|[最近访问(RECENT)](module/Base/recent)|recent|主实体|SQL|RECENT|是|否|自控制|否|记录用户最近访问过的实体记录，便于快速回溯和提高工作效率。|
|[引用索引(REFERENCES_INDEX)](module/Base/references_index)|references_index|主实体|无存储||否|否|自控制|否||
|[关联(RELATION)](module/Base/relation)|relation|主实体|SQL|RELATION|是|否|自控制|否|用于记录不同实体间的关系，如需求与工单、工作项与缺陷等。|
|[资源组件成员(RESOURCE_MEMBER)](module/Base/resource_member)|resource_member|主实体|无存储||否|否|自控制|否|存储不同资源组件所包含的成员|
|[角色(ROLE)](module/Base/role)|role|主实体|无存储||否|否|自控制|否|用于系统角色管理。|
|[附件搜索(SEARCH_ATTACHMENT)](module/Base/search_attachment)|search_attachment|主实体|SQL|ATTACHMENT|否|否|自控制|否|高级搜索中的附件搜索。|
|[评论搜索(SEARCH_COMMENT)](module/Base/search_comment)|search_comment|主实体|SQL|COMMENT|否|否|自控制|否|高级搜索中的评论搜索。|
|[分组(SECTION)](module/Base/section)|section|主实体|SQL|SECTION|否|否|自控制|否|用于结构化管理需求、工单等。|
|[序列(SEQUENCE_GENERATOR)](module/Base/sequence_generator)|sequence_generator|主实体|SQL|SEQUENCE_GENERATOR|否|否|自控制|否|生成并存储唯一的序列号。|
|[企业(TEAM)](module/Base/team)|team|主实体|无存储||否|否|自控制|否|记录企业组织结构。|
|[规则模板(TEMPLATE_FLOW)](module/Base/template_flow)|template_flow|主实体|无存储||否|否|自控制|否|用于承载规则模板实体|
|[企业用户(USER)](module/Base/user)|user|主实体|无存储||否|否|自控制|否|记录使用PLM系统的用户信息。（无存储，通过外部服务获取用户数据）|
|[版本(VERSION)](module/Base/version)|version|主实体|SQL|VERSION|否|否|附属主实体控制（未映射自控）|否|用于管理和记录软件的版本历史和变更。|
|[附加数据版本(VERSION_DATA)](module/Base/version_data)|version_data|主实体|SQL|VERSION_DATA|否|否|自控制|否|用于管理和记录软件的版本附加数据历史和变更。|
|[工作(WORK)](module/Base/work)|work|主实体|SQL|WORK|是|否|附属主实体控制（未映射自控）|否|用于查看及管理项目集所包含的具体项目清单。|
|[工时(WORKLOAD)](module/Base/workload)|workload|主实体|SQL|WORKLOAD|否|否|自控制|否|记录项目执行过程中各类工作的时间消耗。|
|[工时类别(WORKLOAD_TYPE)](module/Base/workload_type)|workload_type|主实体|SQL|WORKLOAD_TYPE|否|否|自控制|否|用于区分和管理工时记录的不同类别。|
|[工作台(WORKSPACE)](module/Base/workspace)|workspace|主实体|无存储||否|否|自控制|否|用于工作台界面展示。|

### ER图

|  中文名col200      |   代码名col150    |  备注col450  |
|  --------   |------------ |  -------- |
|[组织管理](er/org)|org||
|[通用-关联\索引](er/base_relation)|base_relation||
|[组件管理](er/addon)|addon||

