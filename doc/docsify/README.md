# 产品生命周期管理系统


#### 系统模块

|    模块名称col200   | 代码名col200      |  模型组col200   |   备注col400  |
| --------  |------------| -----    |-------- |
|[基础管理](module/Base)|Base||主要包含基础类、通用类业务实体的管理，如目录、评论、关注、人员等。|
|[产品管理](module/ProdMgmt)|ProdMgmt||主要包含产品相关业务实体的管理，如：产品、需求、工单、客户等。|
|[项目管理](module/ProjMgmt)|ProjMgmt||主要包含项目相关业务实体的管理，如：项目、项目集、工作项、迭代、发布等。|
|[测试管理](module/TestMgmt)|TestMgmt||主要包含测试相关的业务实体的管理，如：测试库、测试计划、测试用例、执行用例等。|
|[知识管理](module/Wiki)|Wiki||主要包含知识空间相关业务实体的管理，如：空间、页面等。|
|[协作空间](module/team)|team|||
|[全文检索](module/FTR)|FTR||全文检索相关业务实体管理。|
|[系统管理](module/ibizsysmgr)|ibizsysmgr|ibizsysmgr[^ibizsysmgr]|部门及人员业务实体的映射。|
|[ebsx系统管理](module/ebsx)|ebsx|ebsx模型组[^ebsx]||
|[模型扩展](module/extension)|extension|||

#### 工作流

|  中文名col200      |   代码名col200  |  引擎类型col150 |  版本数量col100   |  备注col350  |
|  --------   |------------  |  :-----:   |  -----   |  -------- |
|[用例评审](workflow/case_review_flow.md)|case_review_flow|Java Activiti|1|测试用|


#### 服务接口

|  中文名col200      |   代码名col200 |   备注col600  |
|  --------   |------------  |  -----   |
|[ServiceAPI](api/ServiceAPI/ServiceAPI)|ServiceAPI||

#### 对接外部接口

|  中文名col200      |   代码名col200  |    备注col600  |
|  --------   |------------|    -----   |
|[extension](client/extension/extension)|extension||
|[iBizRT客户端](client/iBizRTClient/iBizRTClient)|iBizRTClient||
|[ibizsysmgr](client/ibizsysmgr/ibizsysmgr)|ibizsysmgr||

#### 系统应用

|  中文名col200      |   代码名col200  |   备注col600  |
|  --------   |------------ |  -----   |
|[<i class="fa-solid fa-desktop"></i>产品生命周期管理系统](app/plmweb)|plmweb||


#### 国际化支持此

|  中文名col200      |   代码名col200  |   资源项col100    |   备注col500  |
|  --------   |------------ |  ----- |  :-----:   |
|[英文](i18n/EN)|EN|287||
|[中文简体](i18n/ZH_CN)|ZH_CN|8||

#### 数据库支持

|  中文名col200      |   代码名col200  |   备注col600  |
|  --------   |------------|  -----   |
|[MYSQL5](db/MYSQL5)|MYSQL5||
[^ibizsysmgr]: ibizsysmgr系统模型组
[^ebsx]: allinone模型组
