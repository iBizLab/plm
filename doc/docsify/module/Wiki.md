# 知识管理(Wiki) <!-- {docsify-ignore-all} -->

主要包含知识空间相关业务实体的管理，如：空间、页面等。

### 实体

|    名称col200   | 代码名col150      |  实体类型col150   | 存储模式col100 | 表名称col200   |    联合主键col100   |  主状态col100   |  权限控制col150  |  启用审计col100    |  备注col500  |
| --------  |------------| -----   |  --------|  --------|  --------|    -------- | -------- | -------- |-------- |
|[页面(PAGE)](module/Wiki/article_page)|article_page|主实体|SQL|PAGE|否|否|附属主实体控制（未映射自控）|否|存储知识文档的页面，支持内容编辑和版本管理。|
|[空间(SPACE)](module/Wiki/space)|space|主实体|SQL|SPACE|否|否|自控制|否|定义PLM系统中用于协作、知识共享和文档管理的虚拟空间。|
|[空间成员(SPACE_MEMBER)](module/Wiki/space_member)|space_member|关系实体|SQL|SPACE_MEMBER|是|否|附属主实体控制（未映射自控）|否|记录PLM系统中各知识库或协作空间的成员。|
|[页面模板(STENCIL)](module/Wiki/stencil)|stencil|主实体|SQL|STENCIL|否|否|附属主实体控制（未映射自控）|否|用于快速创建知识文档的标准模板，确保格式的一致性。|

### ER图

|  中文名col200      |   代码名col150    |  备注col450  |
|  --------   |------------ |  -------- |
|[知识管理-wiki](er/wiki)|wiki||

