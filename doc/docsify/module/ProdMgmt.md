# 产品管理(ProdMgmt) <!-- {docsify-ignore-all} -->

主要包含产品相关业务实体的管理，如：产品、需求、工单、客户等。

### 实体

|    名称col200   | 代码名col150      |  实体类型col150   | 存储模式col100 | 表名称col200   |    联合主键col100   |  主状态col100   |  权限控制col150  |  启用审计col100    |  备注col500  |
| --------  |------------| -----   |  --------|  --------|  --------|    -------- | -------- | -------- |-------- |
|[基线需求(BASELINE_IDEA)](module/ProdMgmt/baseline_idea)|baseline_idea|主实体|无存储||是|否|附属主实体控制（未映射自控）|否|记录产品基线中规划的需求。|
|[工单渠道(CHANNEL)](module/ProdMgmt/channel)|channel|主实体|SQL|CHANNEL|否|否|自控制|否|客户服务请求的来源渠道，如电话、邮件、网站等。|
|[客户(CUSTOMER)](module/ProdMgmt/customer)|customer|主实体|SQL|CUSTOMER|否|否|附属主实体控制（未映射自控）|是|记录客户信息基本信息。|
|[需求(IDEA)](module/ProdMgmt/idea)|idea|主实体|SQL|IDEA|否|是|附属主实体控制（未映射自控）|是|记录产品开发过程中的用户需求。|
|[需求模板(IDEA_TEMPLATE)](module/ProdMgmt/idea_template)|idea_template|主实体|SQL|IDEA_TEMPLATE|否|否|无控制|否|记录产品的需求模版相关信息。|
|[产品(PRODUCT)](module/ProdMgmt/product)|product|主实体|SQL|PRODUCT|否|否|自控制|否|产品管理核心实体，包含产品的基本信息、生命周期状态等。|
|[产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member)|product_member|关系实体|SQL|PRODUCT_MEMBER|是|否|附属主实体控制（未映射自控）|否|记录产品团队中各个成员的角色·，方便管理和协作。|
|[排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan)|product_plan|主实体|SQL|PRODUCT_PLAN|否|否|附属主实体控制|否|规划产品的开发和发布时间表，包括各个阶段的开始和结束时间，包含需求。|
|[产品标签(PRODUCT_TAG)](module/ProdMgmt/product_tag)|product_tag|主实体|SQL|PRODUCT_TAG|否|否|附属主实体控制（未映射自控）|否|为产品分配的标签，用于标识产品特性、类型和分类，便于管理和筛选。|
|[产品工单类型(PRODUCT_TICKET_TYPE)](module/ProdMgmt/product_ticket_type)|product_ticket_type|主实体|SQL|PRODUCT_TICKET_TYPE|是|否|附属主实体控制（未映射自控）|否|区分产品工单的类型，如缺陷、需求等，用于工单管理。|
|[工单(TICKET)](module/ProdMgmt/ticket)|ticket|主实体|SQL|TICKET|否|是|附属主实体控制（未映射自控）|是|用于追踪和管理产品相关的客户请求和问题解决过程。|
|[工单类型(TICKET_TYPE)](module/ProdMgmt/ticket_type)|ticket_type|主实体|SQL|TICKET_TYPE|否|否|自控制|否|定义不同的工单类别，用以区分各种客户请求或问题。|

### ER图

|  中文名col200      |   代码名col150    |  备注col450  |
|  --------   |------------ |  -------- |
|[产品管理](er/prodmgmt)|prodmgmt||

