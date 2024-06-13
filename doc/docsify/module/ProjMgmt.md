# 项目管理(ProjMgmt) <!-- {docsify-ignore-all} -->

主要包含项目相关业务实体的管理，如：项目、项目集、工作项、迭代、发布等。

### 实体

|    名称col200   | 代码名col150      |  实体类型col150   | 存储模式col100 | 表名称col200   |    联合主键col100   |  主状态col100   |  权限控制col150  |  启用审计col100    |  备注col500  |
| --------  |------------| -----   |  --------|  --------|  --------|    -------- | -------- | -------- |-------- |
|[基线工作项(BASELINE_WORK_ITEM)](module/ProjMgmt/baseline_work_item)|baseline_work_item|主实体|无存储||是|否|附属主实体控制（未映射自控）|否|存储基线所包含的工作项|
|[看板(BOARD)](module/ProjMgmt/board)|board|主实体|SQL|BOARD|否|否|附属主实体控制|否|用于可视化项目和任务进度的工具。|
|[日容量(DAY_CAPACITY)](module/ProjMgmt/day_capacity)|day_capacity|主实体|无存储||否|否|自控制|否|定义团队或个人在单日内可承担的工作量。|
|[看板栏(ENTRY)](module/ProjMgmt/entry)|entry|主实体|SQL|ENTRY|否|否|附属主实体控制（未映射自控）|否|看板管理的一个单元，代表看板中的一个列，用于看板中工作项状态管理。|
|[项目进度(PROGRESS)](module/ProjMgmt/progress)|progress|主实体|SQL|PROGRESS|否|否|自控制|否|跟踪项目的完成度。|
|[项目(PROJECT)](module/ProjMgmt/project)|project|主实体|SQL|PROJECT|否|否|自控制|否|PLM系统的核心业务实体，代表一个项目整体，包含项目的基本信息、状态、时间线等。|
|[项目成员(PROJECT_MEMBER)](module/ProjMgmt/project_member)|project_member|关系实体|SQL|PROJECT_MEMBER|是|否|附属主实体控制（未映射自控）|否|记录项目的团队成员及其角色设置。|
|[项目标签(PROJECT_TAG)](module/ProjMgmt/project_tag)|project_tag|主实体|SQL|PROJECT_TAG|否|否|自控制|否|用于分类和识别不同项目的标签系统，便于管理和检索；所有项目共用。|
|[项目发布(RELEASE)](module/ProjMgmt/release)|release|主实体|SQL|PROJECT_RELEASE|否|否|附属主实体控制|否|跟踪和管理项目的发布。|
|[迭代(SPRINT)](module/ProjMgmt/sprint)|sprint|主实体|SQL|SPRINT|否|是|附属主实体控制|否|产品开发过程中的一次迭代或冲刺，用于规划和跟踪一段时间内的开发任务。|
|[迭代变更(SPRINT_ALTERATION)](module/ProjMgmt/sprint_alteration)|sprint_alteration|主实体|SQL|SPRINT_ALTERATION|否|否|无控制|否||
|[发布阶段(STAGE)](module/ProjMgmt/stage)|stage|主实体|SQL|STAGE|否|否|自控制|否|跟踪项目发布的各个阶段。|
|[泳道(SWIMLANE)](module/ProjMgmt/swimlane)|swimlane|主实体|SQL|SWIMLANE|否|否|附属主实体控制（未映射自控）|否|在项目开发工作中使用，用于区分不同流程阶段。|
|[流转记录(TRANSITION_HISTORY)](module/ProjMgmt/transition_history)|transition_history|主实体|SQL|TRANSITION_HISTORY|否|否|自控制|否|记录工作项状态变更的历史记录。|
|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|work_item|主实体|SQL|WORK_ITEM|否|是|附属主实体控制（未映射自控）|是|项目管理中的基本单元，可包含不同类型的工作项如任务、需求、缺陷等。|
|[工作项状态(WORK_ITEM_STATE)](module/ProjMgmt/work_item_state)|work_item_state|主实体|SQL|WORK_ITEM_STATE|否|否|自控制|否|代表工作项在生命周期中的不同阶段状态，支持用户为工作项自定义状态。|
|[工作项类型(WORK_ITEM_TYPE)](module/ProjMgmt/work_item_type)|work_item_type|主实体|SQL|WORK_ITEM_TYPE|否|否|自控制|否|仅瀑布类型项目可以自定义工作项类型（定义瀑布型项目中可自定义的不同工作项类别。）|
|[工作项操作向导(WORK_ITEM_WIZARD)](module/ProjMgmt/work_item_wizard)|work_item_wizard|主实体|无存储||否|否|自控制|否||
|[工作项操作向导明细(WORK_ITEM_WIZARD_DETAIL)](module/ProjMgmt/work_item_wizard_detail)|work_item_wizard_detail|主实体|无存储||否|否|自控制|否||

### ER图

|  中文名col200      |   代码名col150    |  备注col450  |
|  --------   |------------ |  -------- |
|[项目管理-KANBAN](er/projmgmt_kanban)|projmgmt_kanban||
|[项目管理-waterfall](er/projmgmt_waterfall)|projmgmt_waterfall||
|[项目管理-scrum](er/projmgmt_scrum)|projmgmt_scrum||

