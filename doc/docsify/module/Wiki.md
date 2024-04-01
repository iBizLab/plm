# 知识管理(Wiki) <!-- {docsify-ignore-all} -->



|    名称   | 代码名      |  实体类型   |  存储模式 |  表名称  |  逻辑有效   |  联合主键   |  主状态   |  权限控制  |  启用审计    |  备注  |
| --------  |------------| -----   |  --------|  --------|  --------|  -------- |  -------- | -------- | -------- |-------- |
|[页面(PAGE)](module/Wiki/Article_page)|Article_page|主实体|SQL|PAGE|否|否|是|附属主实体控制（未映射自控）|否||
|[页面版本(PAGE_VERSION)](module/Wiki/Page_version)|Page_version|主实体|SQL|PAGE_VERSION|否|否|否|自控制|否||
|[空间(SPACE)](module/Wiki/Space)|Space|主实体|SQL|SPACE|否|否|是|自控制|否||
|[空间成员(SPACE_MEMBER)](module/Wiki/Space_member)|Space_member|关系实体|SQL|SPACE_MEMBER|否|是|否|附属主实体控制（未映射自控）|否||
|[页面模板(STENCIL)](module/Wiki/Stencil)|Stencil|主实体|SQL|STENCIL|否|否|否|自控制|否||

