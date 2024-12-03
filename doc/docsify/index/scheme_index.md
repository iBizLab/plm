# 数据结构 <!-- {docsify-ignore-all} -->

### 默认数据库架构
#### 活动(ACTIVITY)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|AUDITINFO|审计信息|TEXT|是|1048576|||
|AUDITTYPE|审计类型|VARCHAR|是|100|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IPADDRESS|访问地址|VARCHAR|是|500|||
|NAME|名称|VARCHAR|是|200|||
|OBJECTID|对象标识|VARCHAR|是|100|||
|OBJECTTYPE|对象类型|VARCHAR|是|100|||
|OPPERSONID|操作人|VARCHAR|是|100|||
|OPPERSONNAME|操作人|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 组件(ADDON)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|ADDON_TYPE|组件类型|VARCHAR|是|100|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DESCRIPTION|描述|VARCHAR|是|2000|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IS_ENABLED|启用|INT|是||||
|NAME|名称|VARCHAR|是|200|||
|ORDER_VALUE|排序|INT|是||||
|OWNER_ID|所属标识|VARCHAR|是|100|||
|OWNER_SUBTYPE|所属子类型|VARCHAR|是|100|||
|OWNER_TYPE|所属类型|VARCHAR|是|100|||
|SETTING_MODEL|配置模型|TEXT|是|1048576|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 应用插件活动(ADDON_APPLICATION_ACTIVITY)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|ACTION|操作|VARCHAR|是|100|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DEBUG_INFO|调试日志信息|TEXT|是|1048576|||
|ELAPSED_TIME|持续时间|INT|是|11|||
|END_AT|结束时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|INFO|日志信息|TEXT|是|1048576|||
|LEVEL|级别|VARCHAR|是|100|||
|NAME|名称|VARCHAR|是|200|||
|PID|父标识|VARCHAR|是|100|||
|START_AT|起始时间|DATETIME|是||||
|STATE|状态|VARCHAR|是|100|||
|SYSTEM_ID|系统标识|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 组件权限成员(ADDON_ROLE_MEMBER)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|ADDON_ID|组件标识|VARCHAR|是|100|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|TYPE|成员类型|INT|是||||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|USER_OBJ_ID|用户对象标识|VARCHAR|是|100|||
#### 附件(ATTACHMENT)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|FILE_ID|文件标识|VARCHAR|是|500|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|OWNER_ID|所属数据标识|VARCHAR|是|100|||
|OWNER_SUBTYPE|所属对象子类型|VARCHAR|是|100|||
|OWNER_TYPE|所属数据对象|VARCHAR|是|100|||
|PARENT_VERSION_ID|父对象版本标识|VARCHAR|是|100|||
|TITLE|标题|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|WORK_ITEM|工作项|TEXT|是|1048576|||
#### 关注(ATTENTION)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|OWNER_ID|所属数据标识|VARCHAR|是|100|||
|OWNER_SUBTYPE|所属对象子类型|VARCHAR|是|100|||
|OWNER_TYPE|所属数据对象|VARCHAR|是|100|||
|TYPE|关注类型|VARCHAR|是|60|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|USER_ID|关注人|VARCHAR|是|100|||
#### 基线(BASELINE)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|ASSIGNEE_ID|负责人标识|VARCHAR|是|100|||
|ASSIGNEE_NAME|负责人|VARCHAR|是|100|||
|CATEGORIES|类别|VARCHAR|是|2000|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DESCRIPTION|描述|VARCHAR|是|2000|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|OWNER_ID|所属数据标识|VARCHAR|是|100|||
|OWNER_SUBTYPE|所属对象子类型|VARCHAR|是|100|||
|OWNER_TYPE|所属数据对象|VARCHAR|是|100|||
|STATUS|状态|VARCHAR|是|60|||
|TYPE|基线类型|VARCHAR|是|60|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 看板(BOARD)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|PROJECT_ID|产品标识|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 代码分支(BRANCH)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|REPOSITORY_ID|仓库标识|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 分支提交关联(BRANCH_REF_COMMIT)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|META_ID|标识|VARCHAR|是|100|||
|NAME|名称|VARCHAR|是|200|||
|REPOSITORY_ID|仓库标识|VARCHAR|是|100|||
|SHA|SHA值|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 用例执行历史(CASE_HISTORY)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CASE_ID|测试用例标识|VARCHAR|是|100|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 类别(CATEGORY)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CATEGORIES|类别路径|VARCHAR|是|2000|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IS_LEAF|是否叶子节点|INT|是||||
|IS_LEAF2|是否叶子节点2|INT|是||||
|NAME|名称|VARCHAR|是|200|||
|OWNER_ID|所属数据标识|VARCHAR|是|100|||
|OWNER_SUBTYPE|所属对象子类型|VARCHAR|是|100|||
|OWNER_TYPE|所属数据对象|VARCHAR|是|100|||
|PID|父标识|VARCHAR|是|100|||
|SECTION_ID|分组标识|VARCHAR|是|100|||
|SEQUENCE|序号|DECIMAL|是||||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 工单渠道(CHANNEL)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|PRODUCT_ID|产品标识|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 评论(COMMENT)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CONTENT|内容|TEXT|是|1048576|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|OWNER_TYPE|所属数据对象|VARCHAR|是|100|||
|PID|父标识|VARCHAR|是|100|||
|PRINCIPAL_ID|评论主体标识|VARCHAR|是|100|||
|PRINCIPAL_NAME|评论主体名称|VARCHAR|是|100|||
|PRINCIPAL_TYPE|评论主体类型|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 文档正文(CONTENT)
#### 客户(CUSTOMER)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|ASSIGNEE_ID|负责人标识|VARCHAR|是|100|||
|ASSIGNEE_NAME|负责人|VARCHAR|是|100|||
|CATEGORIES|类别|VARCHAR|是|2000|||
|CATEGORIES_NAME|类别|VARCHAR|是|2000|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DESCRIPTION|描述|VARCHAR|是|2000|||
|GRADE_ID|等级|VARCHAR|是|60|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|INDUSTRY_ID|行业|VARCHAR|是|60|||
|IS_ARCHIVED|是否已归档|INT|是||||
|IS_DELETED|是否已删除|INT|是||||
|LOGO|品牌标识|VARCHAR|是|100|||
|NAME|名称|VARCHAR|是|500|||
|PRODUCT_ID|产品标识|VARCHAR|是|100|||
|SCALE|规模|INT|是||||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 数据同步任务(DATA_SYNC_TASK)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 数据字典(DICTIONARY)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CATALOG|字典目录|VARCHAR|是|60|||
|COLOR|颜色|VARCHAR|是|100|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IS_SYSTEM|是否系统默认|INT|是||||
|NAME|名称|VARCHAR|是|200|||
|SEQUENCE|序号|DECIMAL|是||||
|TYPE|类型|VARCHAR|是|60|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|VAL|值|VARCHAR|是|100|||
#### 讨论(DISCUSS_POST)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CONTENT|讨论内容|TEXT|是|1048576|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|HEAT|热度|INT|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IS_DELETED|是否已删除|INT|是||||
|NAME|名称|VARCHAR|是|200|||
|STATUS|状态|VARCHAR|是|60|||
|TOPIC_ID|话题标识|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 讨论回复(DISCUSS_REPLY)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CONTENT|回复内容|TEXT|是|1048576|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DISCUSS_NAME|属性|VARCHAR|是|100|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|POST_ID|讨论标识|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 话题(DISCUSS_TOPIC)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DESCRIPTION|描述|VARCHAR|是|2000|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IDENTIFIER|话题标识|VARCHAR|是|100|||
|IS_ARCHIVED|是否已归档|INT|是||||
|IS_DELETED|是否已删除|INT|是||||
|NAME|名称|VARCHAR|是|200|||
|SCOPE_ID|所属对象|VARCHAR|是|100|||
|SCOPE_TYPE|所属|VARCHAR|是|60|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|VISIBILITY|可见范围|VARCHAR|是|60|||
#### 动态数据看板(DYNADASHBOARD)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|APPID|应用标识|VARCHAR|是|100|||
|CREATEDATE|建立时间|DATETIME|是|8|||
|CREATEMAN|建立人|VARCHAR|是|60|||
|DESC|描述|TEXT|是|1048576|||
|DYNADASHBOARDID<i class="fa fa-key"></i>|动态数据看板标识|VARCHAR|否|200|||
|DYNADASHBOARDNAME|动态数据看板名称|VARCHAR|是|200|||
|EXAMPLE_CHART|示例图|TEXT|是|1048576|||
|IS_SYSTEM|是否系统类型|INT|是||||
|MODEL|模型|TEXT|是|1048576|||
|MODELID|模型标识|VARCHAR|是|100|||
|OWNER_ID|所属数据标识|VARCHAR|是|100|||
|OWNER_TYPE|所属数据类型|VARCHAR|是|100|||
|SEQUENCES|序号|DECIMAL|是||||
|TYPE|看板类型|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|USERID|用户标识|VARCHAR|是|100|||
#### 动态应用菜单(DYNA_APPMENU)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|APPID|应用标识|VARCHAR|是|100|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|MODEL|模型|TEXT|是|1048576|||
|MODELID|模型标识|VARCHAR|是|100|||
|NAME|名称|VARCHAR|是|200|||
|OWNER_ID|所属数据标识|VARCHAR|是|100|||
|OWNER_TYPE|所属数据类型|VARCHAR|是|100|||
|TYPE|看板类型|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|USERID|用户标识|VARCHAR|是|100|||
#### 看板栏(ENTRY)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|BOARD_ID|看板标识|VARCHAR|是|100|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IS_SPLIT|是否将看板栏拆分为进行中和已完成|INT|是||||
|IS_SYSTEM|是否系统标记|INT|是||||
|NAME|名称|VARCHAR|是|200|||
|PROJECT_ID|项目标识|VARCHAR|是|100|||
|SHOWORDER|排序|INT|是||||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 执行人(EXECUTOR)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ESTIMATED_WORKLOAD|预估工时|DECIMAL|是||1||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IS_ASSIGNEE|是否负责人|INT|是||||
|NAME|名称|VARCHAR|是|200|||
|OWNER_ID|所属数据标识|VARCHAR|是|100|||
|OWNER_SUBTYPE|所属对象子类型|VARCHAR|是|100|||
|OWNER_TYPE|所属数据对象|VARCHAR|是|100|||
|SEQUENCE|序号|DECIMAL|是||||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|USER_ID|关注人|VARCHAR|是|100|||
|USER_NAME|执行人名称|VARCHAR|是|200|||
#### 扩展日志(EXTEND_LOG)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CATEGORY|类别|VARCHAR|是|100|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DEBUG_INFO|调试日志信息|TEXT|是|1048576|||
|ELAPSED_TIME|持续时间|INT|是|11|||
|END_AT|结束时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|INFO|日志信息|TEXT|是|1048576|||
|LEVEL|级别|VARCHAR|是|100|||
|NAME|名称|VARCHAR|是|200|||
|OWNER_ID|所属数据标识|VARCHAR|是|200|||
|OWNER_SUBTYPE|所属对象子类型|VARCHAR|是|100|||
|OWNER_TYPE|所属数据对象|VARCHAR|是|100|||
|START_AT|起始时间|DATETIME|是||||
|STATE|状态|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 扩展存储(EXTEND_STORAGE)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|BIGINT_VALUE|大整形值|BIGINT|是|20|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DATETIME_VALUE|时间值|DATETIME|是||||
|DECIMAL_VALUE|数值值|DECIMAL|是||1||
|DOUBLE_VALUE|浮点值|FLOAT|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|INT_VALUE|整形值|INT|是||||
|LONGSTRING_VALUE|长文本值|TEXT|是|1048576|||
|NAME|名称|VARCHAR|是|200|||
|OWNER_ID|所属数据标识|VARCHAR|是|100|||
|OWNER_TYPE|所属数据对象|VARCHAR|是|100|||
|STRING_VALUE|文本值|VARCHAR|是|4000|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 收藏(FAVORITE)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|OWNER_ID|所属数据标识|VARCHAR|是|100|||
|OWNER_SUBTYPE|所属对象子类型|VARCHAR|是|100|||
|OWNER_TYPE|所属数据对象|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 流程准则(GUIDELINE)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IS_ENABLED|是否启用|INT|是|100|||
|NAME|名称|VARCHAR|是|200|||
|OBJECT_TYPE|对象类型|VARCHAR|是|100|||
|REVIEW_ACTION_RULE|评审后置动作|TEXT|是|1048576|||
|REVIEW_RULE|评审规则|TEXT|是|1048576|||
|REVIEW_STAGE|评审阶段|TEXT|是|1048576|||
|SCOPE_ID|所属主体标识|VARCHAR|是|100|||
|SUBJECT_TYPE|主题类型|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 认证日志(IBZAUTHLOG)
#### 需求(IDEA)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|ASSIGNEE_ID|负责人|VARCHAR|是|100|||
|ASSIGNEE_NAME|负责人|VARCHAR|是|100|||
|CATEGORY_ID|类别标识|VARCHAR|是|100|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|CUR_VERSION_ID|当前版本标识|VARCHAR|是|100|||
|DESCRIPTION|描述|TEXT|是|1048576|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IDEA_FROM|需求来源|VARCHAR|是|60|||
|IDEA_TYPE|需求类型|VARCHAR|是|60|||
|IDENTIFIER|编号|VARCHAR|是|100|||
|IS_ARCHIVED|是否已归档|INT|是||||
|IS_DELETED|是否已删除|INT|是||||
|NAME|名称|VARCHAR|是|200|||
|PLAN_AT|计划时间|VARCHAR|是|100|||
|PLAN_AT_FROM|计划开始时间|DATETIME|是||||
|PLAN_AT_GRANULARITY|计划时间周期单位|VARCHAR|是|60|||
|PLAN_AT_TO|计划结束时间|DATETIME|是||||
|PRIORITY|优先级|VARCHAR|是|60|||
|PRODUCT_ID|产品|VARCHAR|是|100|||
|PROGRESS|进度|DECIMAL|是||||
|REAL_AT|实际时间|VARCHAR|是|100|||
|REAL_AT_FROM|实际开始时间|DATETIME|是||||
|REAL_AT_GRANULARITY|计划时间周期单位|VARCHAR|是|60|||
|REAL_AT_TO|实际结束时间|DATETIME|是||||
|SEQUENCE|序号|DECIMAL|是||||
|STATE|状态|VARCHAR|是|60|||
|SUITE|模块|VARCHAR|是|100|||
|TITLE|标题|VARCHAR|是|500|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 需求模板(IDEA_TEMPLATE)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CATEGORY_ID|类别标识|VARCHAR|是|100|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DESCRIPTION|描述|TEXT|是|1048576|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|ID2|标识2|VARCHAR|是|100|||
|IS_GLOBAL|全局模板|INT|是||||
|NAME|名称|VARCHAR|是|200|||
|PRODUCT_ID|产品|VARCHAR|是|100|||
|SUITE|模块|VARCHAR|是|100|||
|TITLE|标题|VARCHAR|是|500|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 洞察力(INSIGHT)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|BELONG|归属|VARCHAR|是|100|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DESC|描述|TEXT|是|1048576|||
|GROUP|组别|VARCHAR|是|60|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|TYPE|报表类型|VARCHAR|是|60|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|VIEW_URL|报表呈现视图|TEXT|是|1048576|||
#### 效能报表(INSIGHT_REPORT)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CATEGORIES|类别|VARCHAR|是|2000|||
|CHART_TYPE|图表类型|VARCHAR|是|60|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DESC|描述|TEXT|是|1048576|||
|GROUP|组别|VARCHAR|是|60|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IS_SYSTEM|是否系统类型|INT|是||||
|NAME|名称|VARCHAR|是|200|||
|REPORT_TYPE|报表类型|VARCHAR|是|100|||
|TEMPLATE_MODEL|模板模型|TEXT|是|1048576|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|VIEW_ID|视图标识|VARCHAR|是|100|||
#### 效能视图(INSIGHT_VIEW)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DESCRIPTION|描述|VARCHAR|是|2000|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IDENTIFIER|视图标识|VARCHAR|是|100|||
|IS_ARCHIVED|是否已归档|INT|是||||
|IS_DELETED|是否已删除|INT|是||||
|NAME|名称|VARCHAR|是|200|||
|SCOPE_ID|所属对象|VARCHAR|是|100|||
|SCOPE_TYPE|所属|VARCHAR|是|60|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|VISIBILITY|可见范围|VARCHAR|是|60|||
#### 关键结果(KEY_RESULT)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|OBJECTIVE_ID|目标标识|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 测试库(LIBRARY)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|COLOR|主题色|VARCHAR|是|100|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DESCRIPTION|描述|VARCHAR|是|2000|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IDENTIFIER|测试库标识|VARCHAR|是|100|||
|IS_ARCHIVED|是否已归档|INT|是||||
|IS_DELETED|是否已删除|INT|是||||
|NAME|名称|VARCHAR|是|200|||
|SCOPE_ID|所属对象|VARCHAR|是|100|||
|SCOPE_TYPE|所属|VARCHAR|是|60|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|VISIBILITY|可见范围|VARCHAR|是|60|||
#### 测试库成员(LIBRARY_MEMBER)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|LIBRARY_ID|测试库标识|VARCHAR|是|100|||
|NAME|名称|VARCHAR|是|200|||
|ROLE_ID|角色|VARCHAR|是|60|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|USER_ID|用户标识|VARCHAR|是|100|||
#### 部门(LOCAL_DEPARTMENT)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|HEAD_ID|部门负责人标识|VARCHAR|是|100|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|PARENT_ID|父部门标识|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 企业用户(LOCAL_USER)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|AVATAR|头像|VARCHAR|是|500|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DEPARTMENT_ID|部门标识|VARCHAR|是|100|||
|DISPLAY_NAME|姓名|VARCHAR|是|200|||
|EMAIL|邮箱|VARCHAR|是|100|||
|EMPLOYEE_NUMBER|工号|VARCHAR|是|100|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|MOBILE|手机号|VARCHAR|是|100|||
|NAME|名称|VARCHAR|是|200|||
|PASSWORD|密码|VARCHAR|是|200|||
|STATUS|状态|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 成员(MEMBER)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|OWNER_ID|所属数据标识|VARCHAR|是|100|||
|OWNER_SUBTYPE|所属对象子类型|VARCHAR|是|100|||
|OWNER_TYPE|所属数据对象|VARCHAR|是|100|||
|ROLE_ID|角色|VARCHAR|是|60|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|USER_ID|登录名|VARCHAR|是|100|||
#### 目标(OBJECTIVE)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|PERIOD_ID|周期标识|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 页面(PAGE)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|ACCESS_PASSWORD|访问密码|VARCHAR|是|100|||
|CATEGORIES|类别路径|VARCHAR|是|2000|||
|CONTENT|正文|TEXT|是|1048576|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|CUR_VERSION_ID|当前版本标识|VARCHAR|是|100|||
|CUR_VERSION_NAME|当前版本名称|VARCHAR|是|100|||
|DATA|数据|TEXT|是|1048576|||
|EXPIRATION_DATE|共享有效期|DATETIME|是||||
|FORMAT_TYPE|正文格式|VARCHAR|是|60|||
|ICON|图标|VARCHAR|是|500|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IDENTIFIER|编号|VARCHAR|是|100|||
|IS_ARCHIVED|是否已归档|INT|是||||
|IS_DELETED|是否已删除|INT|是||||
|IS_LEAF|是否叶子节点|INT|是||||
|IS_LOCK|是否锁定|INT|是||||
|IS_PUBLISHED|是否发布|INT|是||||
|IS_SHARED|是否开启共享|VARCHAR|是|60|||
|IS_SHARED_SUBSET|是否同时共享子页面|VARCHAR|是|60|||
|NAME|名称|VARCHAR|是|200|||
|PARENT_ID|父页面标识|VARCHAR|是|100|||
|PUBLISHED|发布状态|INT|是||||
|PUBLISH_CONTENT|发布正文|TEXT|是|1048576|||
|PUBLISH_MAN|发布人|VARCHAR|是|100|||
|PUBLISH_NAME|发布主题|VARCHAR|是|200|||
|PUBLISH_TIME|发布时间|DATETIME|是||||
|SEQUENCE|序号|DECIMAL|是||||
|SHARED_BY|共享人|VARCHAR|是|100|||
|SHARED_TIME|共享时间|DATETIME|是||||
|SPACE_ID|空间标识|VARCHAR|是|100|||
|TYPE|类型|VARCHAR|是|60|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 系统参数(PARAMETER)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 周期(PERIOD)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 文件夹(PORTFOLIO)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|ASSIGNEE_ID|负责人标识|VARCHAR|是|100|||
|ASSIGNEE_NAME|负责人|VARCHAR|是|100|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DESCRIPTION|描述|VARCHAR|是|2000|||
|END_AT|结束时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IDENTIFIER|文件夹标识|VARCHAR|是|100|||
|IS_DELETED|是否已删除|INT|是||||
|NAME|名称|VARCHAR|是|200|||
|START_AT|开始时间|DATETIME|是||||
|STATE|状态|VARCHAR|是|60|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 文件夹成员(PORTFOLIO_MEMBER)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|PORTFOLIO_ID|文件夹标识|VARCHAR|是|100|||
|ROLE_ID|角色|VARCHAR|是|60|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|USER_ID|用户标识|VARCHAR|是|100|||
#### 产品(PRODUCT)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|COLOR|主题色|VARCHAR|是|100|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DESCRIPTION|描述|VARCHAR|是|2000|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IDENTIFIER|产品标识|VARCHAR|是|100|||
|IS_ARCHIVED|是否已归档|INT|是||||
|IS_DELETED|是否已删除|INT|是||||
|NAME|名称|VARCHAR|是|200|||
|SCOPE_ID|所属对象|VARCHAR|是|100|||
|SCOPE_TYPE|所属|VARCHAR|是|60|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|VISIBILITY|可见范围|VARCHAR|是|60|||
#### 产品成员(PRODUCT_MEMBER)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|姓名|VARCHAR|是|200|||
|PRODUCT_ID|产品标识|VARCHAR|是|100|||
|ROLE_ID|角色|VARCHAR|是|60|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|USER_ID|用户标识|VARCHAR|是|100|||
#### 排期(PRODUCT_PLAN)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|ASSIGNEE_ID|负责人标识|VARCHAR|是|100|||
|ASSIGNEE_NAME|负责人|VARCHAR|是|100|||
|CATEGORIES|类别|VARCHAR|是|2000|||
|CATEGORIES_NAME|类别|VARCHAR|是|2000|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|END_AT|计划结束|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IS_DELETED|是否已删除|INT|是||||
|IS_LEAF|是否叶子节点|INT|是||||
|NAME|名称|VARCHAR|是|200|||
|PRODUCT_ID|产品标识|VARCHAR|是|100|||
|SEQUENCE|序号|DECIMAL|是||||
|START_AT|计划开始|DATETIME|是||||
|TYPE|类型|VARCHAR|是|1000|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 产品标签(PRODUCT_TAG)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|PRODUCT_ID|产品标识|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 产品工单类型(PRODUCT_TICKET_TYPE)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DESCRIPTION|描述|VARCHAR|是|2000|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|PRODUCT_ID|产品标识|VARCHAR|是|100|||
|TICKET_TYPE_ID|工单类型标识|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 项目进度(PROGRESS)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|PROJECT_ID|项目标识|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 项目(PROJECT)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|ACTUAL_END_AT|实际结束时间|DATETIME|是||||
|ACTUAL_START_AT|实际开始时间|DATETIME|是||||
|ASSIGNEE_ID|负责人标识|VARCHAR|是|100|||
|ASSIGNEE_NAME|负责人|VARCHAR|是|100|||
|COLOR|主题色|VARCHAR|是|100|||
|CONSUME_TIME|消耗时间|VARCHAR|是|100|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DESCRIPTION|描述|VARCHAR|是|2000|||
|END_AT|结束时间|DATETIME|是||||
|EXPECTED_TIME|预计时间|VARCHAR|是|100|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IDENTIFIER|项目标识|VARCHAR|是|100|||
|IS_ARCHIVED|是否已归档|INT|是||||
|IS_DELETED|是否已删除|INT|是||||
|IS_LOCAL_CONFIGURE|是否本地配置|INT|是||||
|NAME|名称|VARCHAR|是|200|||
|NOTICE|公告|TEXT|是|1048576|||
|SCOPE_ID|所属对象|VARCHAR|是|100|||
|SCOPE_TYPE|所属|VARCHAR|是|60|||
|START_AT|开始时间|DATETIME|是||||
|STATE|状态|VARCHAR|是|60|||
|TYPE|类型|VARCHAR|是|60|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|VISIBILITY|可见范围|VARCHAR|是|60|||
#### 项目成员(PROJECT_MEMBER)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DAY_CAPACITIES|日容量|TEXT|是|1048576|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|姓名|VARCHAR|是|200|||
|PROJECT_ID|项目标识|VARCHAR|是|100|||
|ROLE_ID|角色|VARCHAR|是|60|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|USER_ID|用户标识|VARCHAR|是|100|||
|WEEKDAY|周工作日|INT|是||||
#### 项目发布(PROJECT_RELEASE)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|ASSIGNEE_ID|负责人标识|VARCHAR|是|100|||
|ASSIGNEE_NAME|负责人|VARCHAR|是|100|||
|CATEGORIES|类别|VARCHAR|是|2000|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DESCRIPTION|描述|VARCHAR|是|2000|||
|END_AT|发布时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|PROJECT_ID|项目标识|VARCHAR|是|100|||
|START_AT|开始时间|DATETIME|是||||
|STATUS|状态|VARCHAR|是|60|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 项目状态(PROJECT_STATE)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|COLOR|颜色|VARCHAR|是|100|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IS_SYSTEM|是否系统类型|INT|是||||
|NAME|名称|VARCHAR|是|200|||
|SEQUENCE|序号|DECIMAL|是||||
|STYLE|样式表|VARCHAR|是|100|||
|TYPE|状态类别|VARCHAR|是|60|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 项目标签(PROJECT_TAG)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 拉取提交(PULL_REQUEST)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|REPOSITORY_ID|仓库标识|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 最近访问(RECENT)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IDENTIFIER|编号|VARCHAR|是|100|||
|IS_DELETED|是否已删除|INT|是||||
|NAME|名称|VARCHAR|是|500|||
|OWNER_ID|所属数据标识|VARCHAR|是|100|||
|OWNER_SUBTYPE|所属对象子类型|VARCHAR|是|100|||
|OWNER_TYPE|所属数据对象|VARCHAR|是|100|||
|RECENT_PARENT|访问父类|VARCHAR|是|200|||
|RECENT_PARENT_IDENTIFIER|访问父类编号|VARCHAR|是|100|||
|RECENT_PARENT_NAME|访问父类名称|VARCHAR|是|100|||
|TYPE|访问类型|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 工作项关联(RELATION)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|CUR_VERSION_ID|当前版本标识|VARCHAR|是|100|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|LEVEL|重要程度|VARCHAR|是|60|||
|NAME|名称|VARCHAR|是|200|||
|OWNER_TYPE|所属数据对象|VARCHAR|是|100|||
|PARENT_VERSION_ID|父对象版本标识|VARCHAR|是|100|||
|PRINCIPAL_ID|关联主体标识|VARCHAR|是|100|||
|PRINCIPAL_TYPE|关联主体类型|VARCHAR|是|100|||
|RELATION_TYPE|关联类型|VARCHAR|是|100|||
|TARGET_ID|关联目标标识|VARCHAR|是|100|||
|TARGET_TYPE|关联目标类型|VARCHAR|是|100|||
|TARGET_VERSION_ID|目标对象版本标识|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 评审(REVIEW)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|ACTION_RULE|后置动作|TEXT|是|1048576|||
|CATEGORIES|类别|VARCHAR|是|2000|||
|COMPLETED_AT|完成时间|DATETIME|是||||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DESCRIPTION|描述|VARCHAR|是|2000|||
|GUIDELINE_ID|流程准则标识|VARCHAR|是|100|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IDENTIFIER|编号|VARCHAR|是|100|||
|LIBRARY_ID|测试库标识|VARCHAR|是|100|||
|NAME|名称|VARCHAR|是|200|||
|RULE|规则|TEXT|是|1048576|||
|STAGE|阶段|TEXT|是|1048576|||
|STATE|评审状态|VARCHAR|是|60|||
|SUBMITTED_AT|提交时间|DATETIME|是||||
|SUBMITTER_ID|提交人标识|VARCHAR|是|100|||
|SUBMITTER_NAME|提交人|VARCHAR|是|100|||
|TYPE|评审类型|VARCHAR|是|60|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 评审内容扩展(REVIEW_CONTENT_EXTEND)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CHANGE_TYPE|变更类型|VARCHAR|是|100|||
|CHANGE_VERSION|变更版本|TEXT|是|1048576|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|FINAL_STAGE_RESULTS|最终评审结果|VARCHAR|是|60|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|REVIEW_RESULT|评审结果|VARCHAR|是|60|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 评审结果(REVIEW_RESULT)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|COMMENT|评审意见|VARCHAR|是|2000|||
|CONTENT_ID|评审内容标识|VARCHAR|是|100|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|RESULT_STATE|状态|INT|是||||
|SEQUENCES|顺序|INT|是||||
|STAGE_ID|阶段标识|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 评审阶段(REVIEW_STAGE)
#### 执行用例(RUN)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CASE_ID|测试用例标识|VARCHAR|是|100|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|CUR_VERSION_ID|当前版本标识|VARCHAR|是|100|||
|EXECUTED_AT|执行时间|DATETIME|是||||
|EXECUTOR_ID|执行人标识|VARCHAR|是|100|||
|EXECUTOR_NAME|执行人|VARCHAR|是|100|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IS_NEWEST|是否最新|INT|是||||
|NAME|名称|VARCHAR|是|200|||
|PARENT_VERSION_ID|父对象版本标识|VARCHAR|是|100|||
|PLAN_ID|测试计划标识|VARCHAR|是|100|||
|PRIORITY|优先级|VARCHAR|是|60|||
|REMARK|备注|VARCHAR|是|2000|||
|STATUS|执行结果|VARCHAR|是|60|||
|STEPS|步骤|TEXT|是|1048576|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 执行结果(RUN_HISTORY)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|EXECUTED_AT|执行时间|DATETIME|是||||
|EXECUTOR_ID|执行人标识|VARCHAR|是|100|||
|EXECUTOR_NAME|执行人|VARCHAR|是|100|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|REMARK|备注|VARCHAR|是|2000|||
|RUN_ID|执行用例标识|VARCHAR|是|100|||
|STATUS|执行结果|VARCHAR|是|60|||
|STEPS|步骤|TEXT|是|1048576|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 代码提交(SCM_COMMIT)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|MESSAGE|提交消息|VARCHAR|是|200|||
|SHA<i class="fa fa-key"></i>|SHA值|VARCHAR|否|100|||
#### 代码评审(SCM_REVIEW)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|PULL_REQUEST_ID|拉取提交标识|VARCHAR|是|100|||
|REPOSITORY_ID|仓库标识|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 分组(SECTION)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IS_LEAF|是否叶子节点|INT|是||||
|NAME|名称|VARCHAR|是|200|||
|OWNER_ID|所属数据标识|VARCHAR|是|100|||
|OWNER_SUBTYPE|所属对象子类型|VARCHAR|是|100|||
|OWNER_TYPE|所属数据对象|VARCHAR|是|100|||
|SEQUENCE|序号|DECIMAL|是||||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 序列(SEQUENCE_GENERATOR)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|CURRENT_VALUE|当前值|BIGINT|是|20|||
|GROUP_TAG|分组标记|VARCHAR|是|200|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 空间(SPACE)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|ACCESS_PASSWORD|访问密码|VARCHAR|是|100|||
|CATEGORY_ID|分类|VARCHAR|是|100|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DESCRIPTION|描述|VARCHAR|是|2000|||
|EXPIRATION_DATE|共享链接有效期|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IDENTIFIER|空间标识|VARCHAR|是|100|||
|IS_ARCHIVED|是否已归档|INT|是||||
|IS_DELETED|是否已删除|INT|是||||
|IS_SHARED|是否开启共享|VARCHAR|是|60|||
|NAME|名称|VARCHAR|是|200|||
|SCOPE_ID|所属对象|VARCHAR|是|100|||
|SCOPE_TYPE|所属|VARCHAR|是|60|||
|SHARED_BY|共享人|VARCHAR|是|100|||
|SHARED_PAGES|共享页面标识|TEXT|是|1048576|||
|SHARED_TIME|共享时间|DATETIME|是||||
|SHOW_LOGO|共享展示图标|VARCHAR|是|100|||
|SHOW_TITLE|共享展示标题|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|VISIBILITY|可见范围|VARCHAR|是|60|||
#### 空间成员(SPACE_MEMBER)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|ROLE_ID|角色|VARCHAR|是|60|||
|SPACE_ID|空间标识|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|USER_ID|用户标识|VARCHAR|是|100|||
#### 迭代(SPRINT)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|ASSIGNEE_ID|负责人标识|VARCHAR|是|100|||
|ASSIGNEE_NAME|负责人|VARCHAR|是|100|||
|CATEGORIES|类别|VARCHAR|是|2000|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DESCRIPTION|描述|VARCHAR|是|2000|||
|END_AT|结束时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|PID|父标识|VARCHAR|是|100|||
|PROJECT_ID|产品标识|VARCHAR|是|100|||
|START_AT|开始时间|DATETIME|是||||
|STATUS|状态|VARCHAR|是|60|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 迭代变更(SPRINT_ALTERATION)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|SPRINT_ID|迭代标识|VARCHAR|是|100|||
|SPRINT_STATUS|迭代状态|VARCHAR|是|60|||
|TYPE|类型|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|WORK_ITEM_ID|工作项标识|VARCHAR|是|100|||
#### 发布阶段(STAGE)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|COLOR|颜色|VARCHAR|是|100|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IS_CURRENT|是否发布当前阶段|INT|是||||
|NAME|名称|VARCHAR|是|200|||
|OPERATED_TIME|操作时间|DATETIME|是||||
|PID|父级标识|VARCHAR|是|100|||
|RELEASE_ID|项目发布标识|VARCHAR|是|100|||
|SEQUENCE|排序|DECIMAL|是||||
|TYPE|阶段类型|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 页面模板(STENCIL)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CONTENT|正文|TEXT|是|1048576|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|FORMAT_TYPE|正文格式|VARCHAR|是|60|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IS_GLOBAL|全局模板|INT|是||||
|NAME|名称|VARCHAR|是|200|||
|SPACE_ID|空间标识|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 泳道(SWIMLANE)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|BOARD_ID|看板标识|VARCHAR|是|100|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|PROJECT_ID|项目标识|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 用例(TEST_CASE)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|CUR_VERSION_ID|当前版本标识|VARCHAR|是|100|||
|DESCRIPTION|描述|TEXT|是|1048576|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IDENTIFIER|编号|VARCHAR|是|100|||
|IS_ARCHIVED|是否已归档|INT|是||||
|IS_DELETED|是否已删除|INT|是||||
|LEVEL|重要程度|VARCHAR|是|60|||
|MAINTENANCE_ID|维护人标识|VARCHAR|是|100|||
|MAINTENANCE_NAME|维护人|VARCHAR|是|100|||
|NAME|名称|VARCHAR|是|200|||
|PRECONDITION|前置条件|TEXT|是|1048576|||
|REVIEW_RESULT_STATE|评审结果|VARCHAR|是|60|||
|STATE|评审状态|VARCHAR|是|60|||
|STEPS|用例步骤|TEXT|是|1048576|||
|SUITE_ID|用例模块标识|VARCHAR|是|100|||
|TEST_LIBRARY_ID|测试库标识|VARCHAR|是|100|||
|TEST_TYPE|测试类型|VARCHAR|是|60|||
|TITLE|标题|VARCHAR|是|500|||
|TYPE|用例类型|VARCHAR|是|60|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 用例模板(TEST_CASE_TEMPLATE)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DESCRIPTION|描述|TEXT|是|1048576|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IS_ARCHIVED|是否已归档|INT|是||||
|IS_DELETED|是否已删除|INT|是||||
|LEVEL|重要程度|VARCHAR|是|60|||
|NAME|名称|VARCHAR|是|200|||
|PRECONDITION|前置条件|TEXT|是|1048576|||
|STATE|评审状态|VARCHAR|是|60|||
|STEPS|步骤|TEXT|是|1048576|||
|SUITE_ID|用例模块标识|VARCHAR|是|100|||
|TEST_LIBRARY_ID|测试库标识|VARCHAR|是|100|||
|TEST_TYPE|测试类型|VARCHAR|是|60|||
|TITLE|标题|VARCHAR|是|500|||
|TYPE|用例类型|VARCHAR|是|60|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 测试计划(TEST_PLAN)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|ASSIGNEE_ID|负责人标识|VARCHAR|是|100|||
|ASSIGNEE_NAME|负责人|VARCHAR|是|100|||
|CATEGORIES|类别|VARCHAR|是|2000|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|END_AT|结束时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|LIBRARY_ID|测试库标识|VARCHAR|是|100|||
|NAME|名称|VARCHAR|是|200|||
|PROJECT_ID|关联项目|VARCHAR|是|100|||
|RELEASE_ID|项目发布标识|VARCHAR|是|100|||
|SPRINT_ID|关联迭代|VARCHAR|是|100|||
|START_AT|开始时间|DATETIME|是||||
|STATUS|状态|VARCHAR|是|60|||
|SUMMARY|测试报告概要|TEXT|是|1048576|||
|TYPE|测试分类|VARCHAR|是|60|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 用例模块(TEST_SUITE)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IS_LEAF|是否叶子节点|INT|是||||
|LIBRARY_ID|测试库标识|VARCHAR|是|100|||
|NAME|名称|VARCHAR|是|200|||
|PID|父标识|VARCHAR|是|100|||
|SEQUENCE|序号|DECIMAL|是||||
|SUITES|模块路径|VARCHAR|是|500|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 工单(TICKET)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|ASSIGNEE_ID|负责人标识|VARCHAR|是|100|||
|ASSIGNEE_NAME|负责人|VARCHAR|是|100|||
|CHANNEL|渠道|VARCHAR|是|100|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|CUSTOMER_ID|客户标识|VARCHAR|是|100|||
|DESCRIPTION|描述|TEXT|是|1048576|||
|ESTIMATED_AT|预计时间|VARCHAR|是|100|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IDENTIFIER|编号|VARCHAR|是|100|||
|IS_ARCHIVED|是否已归档|INT|是||||
|IS_DELETED|是否已删除|INT|是||||
|LEVEL|重要程度|INT|是||||
|NAME|名称|VARCHAR|是|200|||
|PRIORITY|优先级|VARCHAR|是|60|||
|PRODUCT_ID|产品标识|VARCHAR|是|100|||
|SOLUTION|解决方案|VARCHAR|是|60|||
|SOLUTION_WAY|解决办法|VARCHAR|是|2000|||
|STATE|状态|VARCHAR|是|60|||
|SUBMITTED_AT|提交时间|DATETIME|是||||
|SUBMITTER_ID|提交人标识|VARCHAR|是|100|||
|SUBMITTER_NAME|提交人|VARCHAR|是|100|||
|TAGS|标签|VARCHAR|是|2000|||
|TITLE|标题|VARCHAR|是|500|||
|TYPE|类型|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 工单类型(TICKET_TYPE)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DESCRIPTION|描述|VARCHAR|是|2000|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IS_SYSTEM|是否系统默认|INT|是||||
|NAME|名称|VARCHAR|是|200|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 流转记录(TRANSITION_HISTORY)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|FROM_STATE|源状态|VARCHAR|是|100|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|OWNER_ID|所属数据标识|VARCHAR|是|100|||
|OWNER_SUBTYPE|所属对象子类型|VARCHAR|是|100|||
|OWNER_TYPE|所属数据对象|VARCHAR|是|100|||
|TO_STATE|目标状态|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 进展(UPDATE_RECORD)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|KEY_RESULT_ID|关键结果标识|VARCHAR|是|100|||
|NAME|名称|VARCHAR|是|200|||
|OBJECTIVE_ID|目标标识|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 团队(USER_GROUP)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|AVATAR|头像|VARCHAR|是|500|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DESCRIPTION|描述|VARCHAR|是|2000|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|SECTION_ID|分组标识|VARCHAR|是|100|||
|SEQUENCE|序号|DECIMAL|是||||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|VISIBILITY|可见范围|VARCHAR|是|60|||
#### 项目发布(VERSION)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DATA|数据|TEXT|是|1048576|||
|DESCRIPTION|描述|VARCHAR|是|2000|||
|FILTER|过滤属性|VARCHAR|是|100|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IDENTIFIER|版本|DECIMAL|是|10|||
|IS_NAMED|是否命名|INT|是||||
|MANUAL|手动提交|INT|是||||
|NAME|名称|VARCHAR|是|200|||
|OWNER_ID|所属数据标识|VARCHAR|是|100|||
|OWNER_TYPE|所属数据对象|VARCHAR|是|100|||
|OWNER_VERSION_ID|所属对象版本标识|VARCHAR|是|100|||
|RESTORABLE|支持恢复|VARCHAR|是|100|||
|SUB_OWNER_ID|所属子数据标识|VARCHAR|是|100|||
|SUB_OWNER_TYPE|所属子数据对象|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 附加数据版本(VERSION_DATA)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DATA|数据|TEXT|是|1048576|||
|DATESET|数据集|VARCHAR|是|200|||
|DESCRIPTION|描述|VARCHAR|是|2000|||
|FILTER|过滤属性|VARCHAR|是|100|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|OWNER_ID|所属数据标识|VARCHAR|是|100|||
|OWNER_TYPE|所属数据对象|VARCHAR|是|100|||
|PARENT_ID|所属父数据标识|VARCHAR|是|100|||
|PARENT_TYPE|所属父数据对象|VARCHAR|是|100|||
|PARENT_VERSION_ID|父对象版本标识|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 工作(WORK)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|PILOT_ID|关联主体标识|VARCHAR|是|100|||
|PORTFOLIO_ID|文件夹标识|VARCHAR|是|100|||
|PRINCIPAL_ID|关联主体标识|VARCHAR|是|100|||
|PRINCIPAL_TYPE|关联主体类型|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 工时(WORKLOAD)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|DESCRIPTION|描述|TEXT|是|1048576|||
|DURATION|时长|DECIMAL|是||1||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IDENTIFIER|编号|VARCHAR|是|100|||
|NAME|名称|VARCHAR|是|500|||
|OWNER_TYPE|所属数据对象|VARCHAR|是|100|||
|PRINCIPAL_ID|关联主体标识|VARCHAR|是|100|||
|PRINCIPAL_TYPE|关联主体类型|VARCHAR|是|100|||
|RECENT_PARENT|访问父类|VARCHAR|是|100|||
|RECENT_PARENT_IDENTIFIER|访问父类编号|VARCHAR|是|100|||
|RECENT_PARENT_NAME|访问父类名称|VARCHAR|是|100|||
|REGISTER_DATE|工作日期|DATETIME|是||||
|TYPE_ID|类别|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|WORK_ITEM_TYPE_ID|工作项类型|TEXT|是|1048576|||
#### 工时类别(WORKLOAD_TYPE)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|SEQUENCE|序号|DECIMAL|是||||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
#### 工作项(WORK_ITEM)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|ACTUAL_END_AT|实际结束时间|DATETIME|是||||
|ACTUAL_START_AT|实际开始时间|DATETIME|是||||
|ASSIGNEE_ID|负责人标识|VARCHAR|是|100|||
|ASSIGNEE_NAME|负责人|VARCHAR|是|100|||
|BACKLOG_FROM|需求来源|VARCHAR|是|60|||
|BACKLOG_TYPE|需求类型|VARCHAR|是|60|||
|BOARD_ID|看板标识|VARCHAR|是|100|||
|COMPLETED_AT|完成时间|DATETIME|是||||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|CUR_VERSION_ID|当前版本标识|VARCHAR|是|100|||
|DESCRIPTION|描述|TEXT|是|1048576|||
|END_AT|结束时间|DATETIME|是||||
|ENTRY_ID|看板栏标识|VARCHAR|是|100|||
|ENTRY_POSITION|所在看板栏位置|INT|是||||
|ENTRY_STATUS|看板栏状态|VARCHAR|是|100|||
|FINISHER|完成人|VARCHAR|是|100|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IDENTIFIER|编号|VARCHAR|是|100|||
|IS_ARCHIVED|是否已归档|INT|是||||
|IS_DELETED|是否已删除|INT|是||||
|IS_LEAF|是否叶子节点|INT|是||||
|JOB_TYPE|任务类别|VARCHAR|是|60|||
|MULTIPLE_PEOPLE|多人任务|INT|是||||
|PID|父标识|VARCHAR|是|100|||
|PRIORITY|优先级|VARCHAR|是|100|||
|PROJECT_ID|项目标识|VARCHAR|是|100|||
|REAPPEAR_PROBABILITY|复现概率|VARCHAR|是|60|||
|RELEASE_ID|项目发布标识|VARCHAR|是|100|||
|RISK|风险|VARCHAR|是|60|||
|SEQUENCE|序号|DECIMAL|是||||
|SEVERITY|严重程度|VARCHAR|是|60|||
|SOLUTION_WAY|解决办法|VARCHAR|是|2000|||
|SPRINT_ID|迭代标识|VARCHAR|是|100|||
|START_AT|开始时间|DATETIME|是||||
|STATE|状态|VARCHAR|是|100|||
|SWIMLANE_ID|泳道标识|VARCHAR|是|100|||
|TAGS|标签|VARCHAR|是|2000|||
|TITLE|标题|VARCHAR|是|500|||
|TOP_ID|顶级工作项标识|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|WORK_ITEM_TYPE_ID|工作项类型标识|VARCHAR|是|100|||
#### 工作项快照(WORK_ITEM_SNAPSHOT)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|ACTUAL_WORKLOAD|实际工时|VARCHAR|是|100|||
|ASSIGNEE_ID|负责人|VARCHAR|是|100|||
|ASSIGNEE_NAME|负责人|VARCHAR|是|100|||
|BACKLOG_FROM|需求来源|VARCHAR|是|60|||
|BACKLOG_TYPE|需求类型|VARCHAR|是|60|||
|BOARD_ID|看板标识|VARCHAR|是|100|||
|BOARD_NAME|看板名称|VARCHAR|是|100|||
|COMPLETED_AT|完成时间|VARCHAR|是|100|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|CUR_VERSION_ID|当前版本标识|VARCHAR|是|100|||
|DESCRIPTION|描述|VARCHAR|是|100|||
|END_AT|结束时间|VARCHAR|是|100|||
|ENTRY_ID|看板栏标识|VARCHAR|是|100|||
|ENTRY_NAME|看板栏名称|VARCHAR|是|100|||
|ENTRY_POSITION|所在看板栏位置|VARCHAR|是|100|||
|ENTRY_STATUS|看板栏状态|VARCHAR|是|100|||
|ESTIMATED_WORKLOAD|预估工时|VARCHAR|是|100|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IDENTIFIER|编号|VARCHAR|是|100|||
|IS_ARCHIVED|是否已归档|VARCHAR|是|100|||
|IS_DELETED|是否已删除|VARCHAR|是|100|||
|IS_LEAF|是否叶子节点|VARCHAR|是|100|||
|JOB_TYPE|任务类别|VARCHAR|是|60|||
|NAME|名称|VARCHAR|是|200|||
|PID|父标识|VARCHAR|是|100|||
|PRIORITY|优先级|VARCHAR|是|100|||
|PROJECT_ID|项目|VARCHAR|是|100|||
|PROJECT_IDENTIFIER|项目标识|VARCHAR|是|100|||
|PROJECT_NAME|所属项目|VARCHAR|是|100|||
|PROJECT_TYPE|项目类型|VARCHAR|是|100|||
|PTITLE|父工作项|VARCHAR|是|100|||
|REAPPEAR_PROBABILITY|复现概率|VARCHAR|是|60|||
|RELEASE_ID|项目发布标识|VARCHAR|是|100|||
|REMAINING_WORKLOAD|剩余工时|VARCHAR|是|100|||
|RISK|风险|VARCHAR|是|60|||
|SEVERITY|严重程度|VARCHAR|是|60|||
|SPRINT_ID|迭代标识|VARCHAR|是|100|||
|SPRINT_NAME|迭代名称|VARCHAR|是|100|||
|START_AT|开始时间|VARCHAR|是|100|||
|STATE|状态|VARCHAR|是|100|||
|STATE_TYPE|工作项状态类型|VARCHAR|是|100|||
|SWIMLANE_ID|泳道标识|VARCHAR|是|100|||
|TAGS|标签|VARCHAR|是|2000|||
|TOP_ID|顶级工作项标识|VARCHAR|是|100|||
|TOP_TITLE|顶级工作项标题|VARCHAR|是|100|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|WORK_ITEM_TYPE_GROUP|工作项类型分组|VARCHAR|是|100|||
|WORK_ITEM_TYPE_ID|工作项类型|VARCHAR|是|100|||
|WORK_ITEM_TYPE_NAME|工作项类型|VARCHAR|是|100|||
|WORK_ITEM_TYPE_SEQUENCE|工作项类型序号|VARCHAR|是|100|||
#### 工作项状态(WORK_ITEM_STATE)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|COLOR|颜色|VARCHAR|是|100|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IS_SYSTEM|是否系统类型|INT|是||||
|NAME|名称|VARCHAR|是|200|||
|SEQUENCE|序号|DECIMAL|是||||
|STYLE|样式表|VARCHAR|是|100|||
|TYPE|状态类型|VARCHAR|是|60|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|WORK_ITEM_TYPE_ID|工作项类型标识|VARCHAR|是|100|||
#### 工作项类型(WORK_ITEM_TYPE)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|CODE|编码|VARCHAR|是|100|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|GROUP|类型分组|VARCHAR|是|60|||
|ICON|图标|TEXT|是|100|||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|IS_SYSTEM|是否归属系统|INT|是||||
|NAME|名称|VARCHAR|是|200|||
|ORGIN_STATE|原始状态|VARCHAR|是|100|||
|PROJECT_ID|项目标识|VARCHAR|是|100|||
|PROJECT_TYPE|项目类型|VARCHAR|是|60|||
|SEQUENCE|序号|DECIMAL|是||||
|SUB_TYPE|下级类型|VARCHAR|是|200|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
### db2
#### 应用视图主题(APP_VIEW_THEME)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|APP_TAG|应用标记|VARCHAR|是|100|||
|APP_VIEW_TAG|应用视图标记|VARCHAR|是|100|||
|CAPTION|标题|VARCHAR|是|200|||
|CREATE_MAN|建立人|VARCHAR|是|100|||
|CREATE_TIME|建立时间|DATETIME|是||||
|ID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|NAME|名称|VARCHAR|是|200|||
|ORDER_VALUE|排序值|INT|是||||
|OWNER_TYPE|所有者类型|VARCHAR|是|30|||
|SYSTEM_TAG|系统标记|VARCHAR|是|100|||
|THEME_MODEL|主题模型|TEXT|是|1048576|||
|UPDATE_MAN|更新人|VARCHAR|是|100|||
|UPDATE_TIME|更新时间|DATETIME|是||||
|VALID_FLAG|启用标记|INT|是||||
#### 认证日志(IBZAUTHLOG)
|  列名col150 |  中文名col150 | 数据类型col150 |允许为空col100 |长度col100|精度col100 | 备注col500 |
| --------|------------ |   -------- | -------- | -------- | -------- |-------- |
|AUTHAGENT|认证方式|VARCHAR|是|100|||
|AUTHCODE|认证结果|VARCHAR|是|15|||
|AUTHTIME|认证时间|DATETIME|是||||
|DOMAINS|域|VARCHAR|是|100|||
|IPADDR|IP地址|VARCHAR|是|100|||
|LOGID<i class="fa fa-key"></i>|标识|VARCHAR|否|100|||
|MACADDR|MAC地址|VARCHAR|是|100|||
|PERSONNAME|用户名称|VARCHAR|是|100|||
|USERAGENT|客户端|VARCHAR|是|100|||
|USERID|用户全局标识|VARCHAR|是|100|||
|USERNAME|用户全局名|VARCHAR|是|100|||






