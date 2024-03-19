# 项目管理(ProjMgmt) <!-- {docsify-ignore-all} -->



|    名称   | 代码名      |  实体类型   |  存储模式 |  表名称  |  逻辑有效   |  联合主键   |  主状态   |  权限控制  |  启用审计    |  备注  |
| --------  |------------| -----   |  --------|  --------|  --------|  -------- |  -------- | -------- | -------- |-------- |
|[看板(BOARD)](module/ProjMgmt/Board)|Board|主实体|SQL|BOARD|否|否|否|附属主实体控制（未映射自控）|否||
|[日容量(DAY_CAPACITY)](module/ProjMgmt/Day_capacity)|Day_capacity|主实体|无存储||否|否|否|自控制|否||
|[看板栏(ENTRY)](module/ProjMgmt/Entry)|Entry|主实体|SQL|ENTRY|否|否|否|附属主实体控制（未映射自控）|否||
|[项目进度(PROGRESS)](module/ProjMgmt/Progress)|Progress|主实体|SQL|PROGRESS|否|否|否|自控制|否||
|[项目(PROJECT)](module/ProjMgmt/Project)|Project|主实体|SQL|PROJECT|否|否|是|自控制|否||
|[项目成员(PROJECT_MEMBER)](module/ProjMgmt/Project_member)|Project_member|关系实体|SQL|PROJECT_MEMBER|否|是|否|附属主实体控制（未映射自控）|否||
|[项目标签(PROJECT_TAG)](module/ProjMgmt/Project_tag)|Project_tag|主实体|SQL|PROJECT_TAG|否|否|否|自控制|否|所有项目共用|
|[项目发布(RELEASE)](module/ProjMgmt/Release)|Release|主实体|SQL|PROJECT_RELEASE|否|否|否|附属主实体控制（未映射自控）|否||
|[迭代(SPRINT)](module/ProjMgmt/Sprint)|Sprint|主实体|SQL|SPRINT|否|否|是|附属主实体控制（未映射自控）|否||
|[迭代类别(SPRINT_CATEGORY)](module/ProjMgmt/Sprint_category)|Sprint_category|主实体|SQL|SPRINT_CATEGORY|否|否|否|自控制|否||
|[迭代分组(SPRINT_SECTION)](module/ProjMgmt/Sprint_section)|Sprint_section|主实体|SQL|SPRINT_SECTION|否|否|否|自控制|否||
|[发布阶段(STAGE)](module/ProjMgmt/Stage)|Stage|主实体|SQL|STAGE|否|否|否|自控制|否||
|[泳道(SWIMLANE)](module/ProjMgmt/Swimlane)|Swimlane|主实体|SQL|SWIMLANE|否|否|否|附属主实体控制（未映射自控）|否||
|[流转记录(TRANSITION_HISTORY)](module/ProjMgmt/Transition_history)|Transition_history|主实体|SQL|TRANSITION_HISTORY|否|否|否|自控制|否||
|[版本（temp）(VERSION)](module/ProjMgmt/Version)|Version|主实体|SQL|VERSION|否|否|否|附属主实体控制（未映射自控）|否||
|[发布类别(VERSION_CATEGORY)](module/ProjMgmt/Version_category)|Version_category|主实体|SQL|VERSION_CATEGORY|否|否|否|自控制|否||
|[发布分组(VERSION_SECTION)](module/ProjMgmt/Version_section)|Version_section|主实体|SQL|VERSION_SECTION|否|否|否|自控制|否||
|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|Work_item|主实体|SQL|WORK_ITEM|否|否|是|附属主实体控制（未映射自控）|是||
|[工作项状态(WORK_ITEM_STATE)](module/ProjMgmt/Work_item_state)|Work_item_state|主实体|SQL|WORK_ITEM_STATE|否|否|否|自控制|否||
|[工作项类型(WORK_ITEM_TYPE)](module/ProjMgmt/Work_item_type)|Work_item_type|主实体|SQL|WORK_ITEM_TYPE|否|否|否|自控制|否|仅瀑布类型项目可以自定义工作项类型|

