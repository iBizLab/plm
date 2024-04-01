# 客户(Customer)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|规模|SCALE|整型|0|||||
|描述|DESCRIPTION|长文本，长度1000|2000|[默认规则](module/ProdMgmt/Customer/value_rule/Description#default)||||
|是否已归档|IS_ARCHIVED|是否逻辑|0|||||
|是否已删除|IS_DELETED|是否逻辑|0|||||
|品牌标识|LOGO|文本，可指定长度|100|[默认规则](module/ProdMgmt/Customer/value_rule/Logo#default)||||
|等级|GRADE_ID|[单项选择(文本值)](index/dictionary_index#Customer_level "客户等级")|60|[默认规则](module/ProdMgmt/Customer/value_rule/Grade_id#default)||||
|行业|INDUSTRY_ID|[单项选择(文本值)](index/dictionary_index#Customer_sector "客户行业")|60|[默认规则](module/ProdMgmt/Customer/value_rule/Industry_id#default)||||
|类别|CATEGORIES|长文本，长度1000|2000|[默认规则](module/ProdMgmt/Customer/value_rule/Categories#default)||||
|类别|CATEGORIES_NAME|长文本，长度1000|2000|[默认规则](module/ProdMgmt/Customer/value_rule/Categories_name#default)||||
|产品名称|PRODUCT_NAME|外键值文本|200|[默认规则](module/ProdMgmt/Customer/value_rule/Product_name#default)||||
|负责人|ASSIGNEE_NAME|外键值文本|100|[默认规则](module/ProdMgmt/Customer/value_rule/Assignee_name#default)||||
|负责人标识|ASSIGNEE_ID|外键值|100|[默认规则](module/ProdMgmt/Customer/value_rule/Assignee_id#default)||||
|关注|ATTENTIONS|一对多关系数据集合|1048576|[默认规则](module/ProdMgmt/Customer/value_rule/Attentions#default)||||
|工单总数|TICKET_TOTAL|整型|0|||||
|已完成工单数|TICKET_FINISH|整型|0|||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/ProdMgmt/Customer/value_rule/Id#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|客户名称|NAME|文本，可指定长度|500|[默认规则](module/ProdMgmt/Customer/value_rule/Name#default)||√||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/ProdMgmt/Customer/value_rule/Update_man#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/ProdMgmt/Customer/value_rule/Create_man#default)||||
|产品标识|PRODUCT_ID|外键值|100|[默认规则](module/ProdMgmt/Customer/value_rule/Product_id#default)||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DER1N_TICKET_CUSTOMER_CUSTOMER_ID](der/DER1N_TICKET_CUSTOMER_CUSTOMER_ID)|[工单(TICKET)](module/ProdMgmt/Ticket)|1:N关系||
|[DERCUSTOM_ATTENTION_CUSTOMER_OWNER_ID](der/DERCUSTOM_ATTENTION_CUSTOMER_OWNER_ID)|[关注(ATTENTION)](module/Base/Attention)|自定义关系||
|[DERCUSTOM_COMMENT_CUSTOMER_PRINCIPAL_ID](der/DERCUSTOM_COMMENT_CUSTOMER_PRINCIPAL_ID)|[评论(COMMENT)](module/Base/Comment)|自定义关系||
|[DERCUSTOM_RELATION_CUSTOMER](der/DERCUSTOM_RELATION_CUSTOMER)|[关联(RELATION)](module/Base/Relation)|自定义关系||

#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_CUSTOMER_PRODUCT_PRODUCT_ID](der/DER1N_CUSTOMER_PRODUCT_PRODUCT_ID)|[产品(PRODUCT)](module/ProdMgmt/Product)|1:N关系||
|[DER1N_CUSTOMER_USER_ASSIGNEE_ID](der/DER1N_CUSTOMER_USER_ASSIGNEE_ID)|[企业用户(USER)](module/Base/User)|1:N关系||
<!-- tabs:end -->

## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持|[附加操作](index/action_logic_index#Customer_Remove)|||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|添加至类别|Add_categories|[实体处理逻辑](module/ProdMgmt/Customer/logic/add_categories "添加至类别")|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|取消关联|Del_relation|[实体处理逻辑](module/ProdMgmt/Customer/logic/del_relation "取消关联")|默认|不支持||||
|获取关注人|Get_attention|内置方法|默认|不支持||||
|无操作|Nothing|[实体处理逻辑](module/ProdMgmt/Customer/logic/nothing "无操作")|默认|不支持||||
|其他实体关联客户|Others_relation_customer|[实体处理逻辑](module/ProdMgmt/Customer/logic/others_relation_customer "其他实体关联客户")|默认|不支持||||
|产品客户关联分页计数器|Product_customer_re_counters|[实体处理逻辑](module/ProdMgmt/Customer/logic/product_customer_re_counters "产品客户关联分页计数器")|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[添加至类别](module/ProdMgmt/Customer/logic/add_categories)|add_categories|无|||
|[变更负责人附加逻辑](module/ProdMgmt/Customer/logic/assignee_onchage)|assignee_onchage|属性逻辑|||
|[取消关联](module/ProdMgmt/Customer/logic/del_relation)|del_relation|无|||
|[无操作](module/ProdMgmt/Customer/logic/nothing)|nothing|无|||
|[其他实体关联客户](module/ProdMgmt/Customer/logic/others_relation_customer)|others_relation_customer|无|||
|[产品客户关联分页计数器](module/ProdMgmt/Customer/logic/product_customer_re_counters)|product_customer_re_counters|无|||



## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[评论通知负责人(comment_notify_assignee)](module/ProdMgmt/Customer/query/Comment_notify_assignee)|comment_notify_assignee|否|否 |否 ||
|[数据查询(DEFAULT)](module/ProdMgmt/Customer/query/Default)|DEFAULT|是|否 |否 ||
|[需求未关联的客户(idea_notre_customer)](module/ProdMgmt/Customer/query/Idea_notre_customer)|idea_notre_customer|否|否 |否 ||
|[需求关联客户(idea_relation_customer)](module/ProdMgmt/Customer/query/Idea_relation_customer)|idea_relation_customer|否|否 |否 ||
|[正常状态(normal)](module/ProdMgmt/Customer/query/Normal)|normal|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProdMgmt/Customer/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[评论通知负责人(comment_notify_assignee)](module/ProdMgmt/Customer/dataset/Comment_notify_assignee)|comment_notify_assignee|数据查询|否|||
|[数据集(DEFAULT)](module/ProdMgmt/Customer/dataset/Default)|DEFAULT|数据查询|是|||
|[需求未关联的客户(idea_noitre_customer)](module/ProdMgmt/Customer/dataset/Idea_notre_customer)|idea_noitre_customer|数据查询|否|||
|[需求关联客户(idea_relation_customer)](module/ProdMgmt/Customer/dataset/Idea_relation_customer)|idea_relation_customer|数据查询|否|||
|[正常状态(normal)](module/ProdMgmt/Customer/dataset/Normal)|normal|数据查询|否|||


## 数据权限

##### 操作用户(写) :id=Customer-USER_W

<p class="panel-title"><b>数据范围</b></p>


<p class="panel-title"><b>数据能力</b></p>

* `CREATE(产品(SUBDATA))`




## 消息通知

|    名称   | 代码名       |  消息队列   |  消息模板 |  通知目标     |  备注  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[取消分配负责人通知](module/ProdMgmt/Customer/notify/assignee_cancel_notify)|assignee_cancel_notify|[默认消息队列](index/notify_index)|[客户通知模板(取消分配负责人)](index/notify_index#customer_assignee_cancel)|负责人 ||
|[分配负责人通知](module/ProdMgmt/Customer/notify/assignee_notify)|assignee_notify|[默认消息队列](index/notify_index)|[客户通知模板(分配负责人)](index/notify_index#customer_assignee)|负责人 ||
|[变更负责人通知](module/ProdMgmt/Customer/notify/assignee_onchage_notify)|assignee_onchage_notify|[默认消息队列](index/notify_index)|[客户通知模板(变更负责人)](index/notify_index#customer_assignee_onchange)|创建人 ||
|[删除客户通知](module/ProdMgmt/Customer/notify/remove_notify)|remove_notify|[默认消息队列](index/notify_index)|[客户通知模板(删除客户)](index/notify_index#customer_remove)|创建人 负责人 ||


## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_GRADE_ID_EQ|等级|EQ|
|N_INDUSTRY_ID_EQ|行业|EQ|
|N_CATEGORYS_ISNULL|类别|ISNULL|
|N_CATEGORYS_LIKE|类别|LIKE|
|N_PRODUCT_NAME_EQ|产品名称|EQ|
|N_PRODUCT_NAME_LIKE|产品名称|LIKE|
|N_ASSIGNEE_ID_EQ|负责人标识|EQ|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|客户名称|LIKE|
|N_PRODUCT_ID_EQ|产品标识|EQ|


## 导入模式
* 产品客户导入

|客户名称|负责人|等级|规模|行业|描述|
| :------: | :------: | :------: | :------: | :------: | :------: |
| - | - | - | - | - | - |



## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 删除 | toolbar_tree_exp_viewnode_2_cm_deuiaction2_click | 删除 |单项数据|用户自定义|否|无||
| 测试界面行为权限 | test_aciton | 测试 |无数据|用户自定义|否|无||
| 添加客户（其他实体关联） | other_add_relation_customer | 添加客户 |无数据|用户自定义|否|引用视图或树节点||
| 取消关联 | del_relation | 取消关联 |单项数据（主键）|<details><summary>后台调用</summary>[Del_relation](#行为)|是|引用视图或树节点||
| 编辑 | toolbar_tree_exp_viewnode_1_cm_deuiaction1_click | 编辑 |单项数据|用户自定义|否|无||
| 删除 | delete_customer | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)|是|无||
| 添加至类别（多选） | add_categories | 设置类别 |多项数据（主键）|<details><summary>后台调用</summary>[Add_categories](#行为)|是|引用视图或树节点||
| 删除 | toolbar_tree_exp_viewnode_1_cm_deuiaction2_click | 删除 |单项数据|用户自定义|否|无||
| 编辑 | toolbar_tree_exp_viewnode_2_cm_deuiaction1_click | 编辑 |单项数据|用户自定义|否|无||
| 新建类别 | toolbar_tree_exp_viewtreeexpbar_toolbar_deuiaction2_click | 新建类别 |单项数据|用户自定义|否|无||
| 新建分组 | toolbar_tree_exp_viewtreeexpbar_toolbar_deuiaction1_click | 新建分组 |单项数据|用户自定义|否|无||


## 界面逻辑
|  中文名 | 代码名 |
| --------|--------|
|[新建类别](module/ProdMgmt/Customer/uilogic/create_category)|create_category|
|[新建分组](module/ProdMgmt/Customer/uilogic/create_section)|create_section|
|[删除类别或分组](module/ProdMgmt/Customer/uilogic/remove_section_or_category)|remove_section_or_category|
|[编辑类别或分组](module/ProdMgmt/Customer/uilogic/edit_section_or_category)|edit_section_or_category|
|[设置树选择为多选](module/ProdMgmt/Customer/uilogic/set_tree_multiple)|set_tree_multiple|
|[关联客户值变更](module/ProdMgmt/Customer/uilogic/relation_customer_change)|relation_customer_change|
|[触发计数器刷新](module/ProdMgmt/Customer/uilogic/refresh_counter)|refresh_counter|
|[选择下拉框区域展示](module/ProdMgmt/Customer/uilogic/show_choose_area)|show_choose_area|
