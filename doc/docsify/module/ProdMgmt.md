# 产品管理(ProdMgmt) <!-- {docsify-ignore-all} -->



|    名称   | 代码名      |  实体类型   |  存储模式 |  表名称  |  逻辑有效   |  联合主键   |  主状态   |  权限控制  |  启用审计    |  备注  |
| --------  |------------| -----   |  --------|  --------|  --------|  -------- |  -------- | -------- | -------- |-------- |
|[工单渠道(CHANNEL)](module/ProdMgmt/Channel)|Channel|主实体|SQL|CHANNEL|否|否|否|自控制|否||
|[客户(CUSTOMER)](module/ProdMgmt/Customer)|Customer|主实体|SQL|CUSTOMER|否|否|否|附属主实体控制（未映射自控）|是||
|[需求(IDEA)](module/ProdMgmt/Idea)|Idea|主实体|SQL|IDEA|否|否|是|附属主实体控制（未映射自控）|是|产品需求|
|[产品(PRODUCT)](module/ProdMgmt/Product)|Product|主实体|SQL|PRODUCT|否|否|是|自控制|是||
|[产品成员(PRODUCT_MEMBER)](module/ProdMgmt/Product_member)|Product_member|关系实体|SQL|PRODUCT_MEMBER|否|是|否|附属主实体控制（未映射自控）|否||
|[排期(PRODUCT_PLAN)](module/ProdMgmt/Product_plan)|Product_plan|主实体|SQL|PRODUCT_PLAN|否|否|否|附属主实体控制|否||
|[产品标签(PRODUCT_TAG)](module/ProdMgmt/Product_tag)|Product_tag|主实体|SQL|PRODUCT_TAG|否|否|否|附属主实体控制（未映射自控）|否|产品专有标签|
|[产品工单类型(PRODUCT_TICKET_TYPE)](module/ProdMgmt/Product_ticket_type)|Product_ticket_type|主实体|SQL|PRODUCT_TICKET_TYPE|否|否|否|自控制|否||
|[工单(TICKET)](module/ProdMgmt/Ticket)|Ticket|主实体|SQL|TICKET|否|否|是|附属主实体控制（未映射自控）|是||
|[工单类型(TICKET_TYPE)](module/ProdMgmt/Ticket_type)|Ticket_type|主实体|SQL|TICKET_TYPE|否|否|否|自控制|否||

