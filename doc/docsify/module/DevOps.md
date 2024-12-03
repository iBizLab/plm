# DevOps数据集成(DevOps) <!-- {docsify-ignore-all} -->

DevOps数据集成

### 实体

|    名称col200   | 代码名col150      |  实体类型col150   | 存储模式col100 | 表名称col200   |    联合主键col100   |  主状态col100   |  权限控制col150  |  启用审计col100    |  备注col500  |
| --------  |------------| -----   |  --------|  --------|  --------|    -------- | -------- | -------- |-------- |
|[代码分支(BRANCH)](module/DevOps/branch)|branch|主实体|SQL|BRANCH|否|否|自控制|否||
|[分支提交关联(BRANCH_REF_COMMIT)](module/DevOps/branch_ref_commit)|branch_ref_commit|主实体|SQL|BRANCH_REF_COMMIT|否|否|自控制|否||
|[构建(BUILD)](module/DevOps/build)|build|主实体|无存储||否|否|自控制|否|考虑使用central中pipeline作为数据来源，该实体用于映射|
|[代码提交(COMMIT)](module/DevOps/commit)|commit|主实体|SQL|scm_commit|否|否|自控制|否||
|[拉取提交(PULL_REQUEST)](module/DevOps/pull_request)|pull_request|主实体|SQL|PULL_REQUEST|否|否|自控制|否||
|[代码仓库(REPOSITORY)](module/DevOps/repository)|repository|主实体|无存储||否|否|自控制|否|考虑使用central代码仓库表作为数据来源，该实体用于映射|
|[代码评审(SCM_REVIEW)](module/DevOps/scm_review)|scm_review|主实体|SQL|SCM_REVIEW|否|否|自控制|否||

### ER图

|  中文名col200      |   代码名col150    |  备注col450  |
|  --------   |------------ |  -------- |
|[DevOps数据集成](er/DevOps)|DevOps||

