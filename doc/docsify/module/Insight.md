# 效能度量(Insight) <!-- {docsify-ignore-all} -->

主要包含效能度量相关业务实体的管理，如仪表盘、报表等。

### 实体

|    名称col200   | 代码名col150      |  实体类型col150   | 存储模式col100 | 表名称col200   |    联合主键col100   |  主状态col100   |  权限控制col150  |  启用审计col100    |  备注col500  |
| --------  |------------| -----   |  --------|  --------|  --------|    -------- | -------- | -------- |-------- |
|[效能成员(INSIGHT_MEMBER)](module/Insight/insight_member)|insight_member|关系实体|SQL|MEMBER|是|否|附属主实体控制（未映射自控）|否|存储效能视图对应的成员|
|[效能报表(INSIGHT_REPORT)](module/Insight/insight_report)|insight_report|主实体|SQL|INSIGHT_REPORT|否|否|附属主实体控制（未映射自控）|否|存储效能报表中的基本信息以及所属视图|
|[效能视图(INSIGHT_VIEW)](module/Insight/insight_view)|insight_view|主实体|SQL|INSIGHT_VIEW|否|否|自控制|否|存储效能视图的基本信息|

### ER图

|  中文名col200      |   代码名col150    |  备注col450  |
|  --------   |------------ |  -------- |
|[效能度量](er/insight)|insight||

