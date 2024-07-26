# 协作空间(Team) <!-- {docsify-ignore-all} -->

主要包含话题相关业务实体的管理，如讨论 、话题等。

### 实体

|    名称col200   | 代码名col150      |  实体类型col150   | 存储模式col100 | 表名称col200   |    联合主键col100   |  主状态col100   |  权限控制col150  |  启用审计col100    |  备注col500  |
| --------  |------------| -----   |  --------|  --------|  --------|    -------- | -------- | -------- |-------- |
|[协作成员(DISCUSS_MEMBER)](module/Team/discuss_member)|discuss_member|关系实体|SQL|MEMBER|是|否|附属主实体控制（未映射自控）|否|记录话题的团队成员及其角色设置。|
|[讨论(DISCUSS_POST)](module/Team/discuss_post)|discuss_post|主实体|SQL|DISCUSS_POST|否|否|附属主实体控制（未映射自控）|否|根据话题发起的讨论，使成员围绕话题展开讨论|
|[讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply)|discuss_reply|主实体|SQL|DISCUSS_REPLY|否|否|附属主实体控制（未映射自控）|否|记录讨论下的回复信息，包括回复内容、回复人等信息。|
|[话题(DISCUSS_TOPIC)](module/Team/discuss_topic)|discuss_topic|主实体|SQL|DISCUSS_TOPIC|否|否|自控制|否|话题是交流信息和分享知识的讨论集合。|
|[关键结果(KEY_RESULT)](module/Team/key_result)|key_result|主实体|SQL|KEY_RESULT|否|否|自控制|否||
|[目标(OBJECTIVE)](module/Team/objective)|objective|主实体|SQL|OBJECTIVE|否|否|自控制|否||
|[周期(PERIOD)](module/Team/period)|period|主实体|SQL|PERIOD|否|否|自控制|否|OKR周期|
|[进展(UPDATE_RECORD)](module/Team/update_record)|update_record|主实体|SQL|UPDATE_RECORD|否|否|自控制|否||

### ER图

|  中文名col200      |   代码名col150    |  备注col450  |
|  --------   |------------ |  -------- |
|[协作空间](er/team)|team||

