# 协作空间(team) <!-- {docsify-ignore-all} -->



### 实体

|    名称col200   | 代码名col150      |  实体类型col150   | 存储模式col100 | 表名称col200   |    联合主键col100   |  主状态col100   |  权限控制col150  |  启用审计col100    |  备注col500  |
| --------  |------------| -----   |  --------|  --------|  --------|    -------- | -------- | -------- |-------- |
|[讨论(DISCUSS_POST)](module/team/discuss_post)|discuss_post|主实体|SQL|DISCUSS_POST|否|否|自控制|否||
|[讨论回复(DISCUSS_REPLY)](module/team/discuss_reply)|discuss_reply|主实体|SQL|DISCUSS_REPLY|否|否|自控制|否||
|[话题(DISCUSS_TOPIC)](module/team/discuss_topic)|discuss_topic|主实体|SQL|DISCUSS_TOPIC|否|否|自控制|否||
|[关键结果(KEY_RESULT)](module/team/key_result)|key_result|主实体|SQL|KEY_RESULT|否|否|自控制|否||
|[目标(OBJECTIVE)](module/team/objective)|objective|主实体|SQL|OBJECTIVE|否|否|自控制|否||
|[周期(PERIOD)](module/team/period)|period|主实体|SQL|PERIOD|否|否|自控制|否|OKR周期|
|[进展(UPDATE_RECORD)](module/team/update_record)|update_record|主实体|SQL|UPDATE_RECORD|否|否|自控制|否||

### ER图

|  中文名col200      |   代码名col150    |  备注col450  |
|  --------   |------------ |  -------- |
|[协作空间](er/team)|team||

