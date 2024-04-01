# 产品(Product)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|产品标识|IDENTIFIER|文本，可指定长度|100|[默认规则](module/ProdMgmt/Product/value_rule/Identifier#default)||√||
|可见范围|VISIBILITY|单项选择(文本值)|60|[默认规则](module/ProdMgmt/Product/value_rule/Visibility#default)||||
|主题色|COLOR|文本，可指定长度|100|[默认规则](module/ProdMgmt/Product/value_rule/Color#default)||||
|描述|DESCRIPTION|长文本，长度1000|2000|[默认规则](module/ProdMgmt/Product/value_rule/Description#default)||||
|是否已归档|IS_ARCHIVED|是否逻辑|0|||||
|是否已删除|IS_DELETED|是否逻辑|0|||||
|是否星标|IS_FAVORITE|文本，可指定长度|200|[默认规则](module/ProdMgmt/Product/value_rule/Is_favorite#default)||||
|产品成员|MEMBERS|一对多关系数据集合|1048576|[默认规则](module/ProdMgmt/Product/value_rule/Members#default)||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/ProdMgmt/Product/value_rule/Create_man#default)||||
|产品名称|NAME|文本，可指定长度|200|[默认规则](module/ProdMgmt/Product/value_rule/Name#default)||√||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/ProdMgmt/Product/value_rule/Update_man#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/ProdMgmt/Product/value_rule/Id#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DER1N_CHANNEL_PRODUCT_PRODUCT_ID](der/DER1N_CHANNEL_PRODUCT_PRODUCT_ID)|[工单渠道(CHANNEL)](module/ProdMgmt/Channel)|1:N关系||
|[DER1N_CUSTOMER_PRODUCT_PRODUCT_ID](der/DER1N_CUSTOMER_PRODUCT_PRODUCT_ID)|[客户(CUSTOMER)](module/ProdMgmt/Customer)|1:N关系||
|[DER1N_IDEA_PRODUCT_PRODUCT_ID](der/DER1N_IDEA_PRODUCT_PRODUCT_ID)|[需求(IDEA)](module/ProdMgmt/Idea)|1:N关系||
|[DER1N_PLAN_PRODUCT_PRODUCT_ID](der/DER1N_PLAN_PRODUCT_PRODUCT_ID)|[排期(PRODUCT_PLAN)](module/ProdMgmt/Product_plan)|1:N关系||
|[DER1N_PRODUCT_MEMBER_PRODUCT_PRODUCT_ID](der/DER1N_PRODUCT_MEMBER_PRODUCT_PRODUCT_ID)|[产品成员(PRODUCT_MEMBER)](module/ProdMgmt/Product_member)|1:N关系||
|[DER1N_PRODUCT_TAG_PRODUCT_PRODUCT_ID](der/DER1N_PRODUCT_TAG_PRODUCT_PRODUCT_ID)|[产品标签(PRODUCT_TAG)](module/ProdMgmt/Product_tag)|1:N关系||
|[DER1N_PRODUCT_TICKET_TYPE_PRODUCT_PRODUCT_ID](der/DER1N_PRODUCT_TICKET_TYPE_PRODUCT_PRODUCT_ID)|[产品工单类型(PRODUCT_TICKET_TYPE)](module/ProdMgmt/Product_ticket_type)|1:N关系||
|[DER1N_TICKET_PRODUCT_PRODUCT_ID](der/DER1N_TICKET_PRODUCT_PRODUCT_ID)|[工单(TICKET)](module/ProdMgmt/Ticket)|1:N关系||
|[DERCUSTOM_FAVORITE_PRODUCT](der/DERCUSTOM_FAVORITE_PRODUCT)|[收藏(FAVORITE)](module/Base/Favorite)|自定义关系||

#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DERINDEX_PRODUCT_REFERENCES_INDEX](der/DERINDEX_PRODUCT_REFERENCES_INDEX)|[引用索引(REFERENCES_INDEX)](module/Base/References_index)|索引关系||
<!-- tabs:end -->

## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#Product_Create)|||
|CreateTemp|CreateTemp|内置方法|默认|不支持||||
|CreateTempMajor|CreateTempMajor|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持|[附加操作](index/action_logic_index#Product_Update)|||
|UpdateTemp|UpdateTemp|内置方法|默认|不支持||||
|UpdateTempMajor|UpdateTempMajor|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|RemoveTemp|RemoveTemp|内置方法|默认|支持||||
|RemoveTempMajor|RemoveTempMajor|内置方法|默认|支持||||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#Product_Get)|||
|GetTemp|GetTemp|内置方法|默认|不支持||||
|GetTempMajor|GetTempMajor|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|GetDraftTemp|GetDraftTemp|内置方法|默认|不支持||||
|GetDraftTempMajor|GetDraftTempMajor|内置方法|默认|不支持||||
|激活|Activate|[实体处理逻辑](module/ProdMgmt/Product/logic/activate "激活")|默认|不支持||||
|归档|Archive|[实体处理逻辑](module/ProdMgmt/Product/logic/archive "归档")|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|删除|Delete|[实体处理逻辑](module/ProdMgmt/Product/logic/delete "删除")|默认|不支持||||
|设置星标|Favorite|[实体处理逻辑](module/ProdMgmt/Product/logic/favorite "设置星标")|默认|不支持||||
|产品计数器|Product_counters|[实体处理逻辑](module/ProdMgmt/Product/logic/product_counters "产品关联分页计数器")|默认|不支持||||
|恢复|Recover|[实体处理逻辑](module/ProdMgmt/Product/logic/recover "恢复")|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||
|取消星标|Un_favorite|[实体处理逻辑](module/ProdMgmt/Product/logic/un_favorite "取消星标")|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[激活](module/ProdMgmt/Product/logic/activate)|activate|无|||
|[归档](module/ProdMgmt/Product/logic/archive)|archive|无|||
|[创建之前](module/ProdMgmt/Product/logic/before_create)|before_create|无|||
|[生成最近访问](module/ProdMgmt/Product/logic/create_recent)|create_recent|无|||
|[删除](module/ProdMgmt/Product/logic/delete)|delete|无|||
|[设置星标](module/ProdMgmt/Product/logic/favorite)|favorite|无|||
|[是否归档变更附加逻辑](module/ProdMgmt/Product/logic/is_archived_onchange)|is_archived_onchange|属性逻辑|||
|[是否删除变更附加逻辑](module/ProdMgmt/Product/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑|||
|[产品关联分页计数器](module/ProdMgmt/Product/logic/product_counters)|product_counters|无||计算关系分页下事件的条数|
|[批量更新最近访问父标识](module/ProdMgmt/Product/logic/recent_parent_identifier)|recent_parent_identifier|属性逻辑|||
|[批量更新最近访问父名称](module/ProdMgmt/Product/logic/recent_parent_name)|recent_parent_name|属性逻辑|||
|[恢复](module/ProdMgmt/Product/logic/recover)|recover|无|||
|[取消星标](module/ProdMgmt/Product/logic/un_favorite)|un_favorite|无|||


## 主状态控制

<p class="panel-title"><b>控制属性</b></p>

* `是否星标(IS_FAVORITE)` 



> 控制属性未配置代码表，或者代码表未配置代码项



## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[管理员(admin)](module/ProdMgmt/Product/query/Admin)|admin|否|否 |否 ||
|[已归档(archived)](module/ProdMgmt/Product/query/Archived)|archived|否|否 |否 ||
|[数据查询(DEFAULT)](module/ProdMgmt/Product/query/Default)|DEFAULT|是|否 |否 ||
|[已删除(deleted)](module/ProdMgmt/Product/query/Deleted)|deleted|否|否 |否 ||
|[查询星标(favorite)](module/ProdMgmt/Product/query/Favorite)|favorite|否|否 |否 ||
|[正常状态(normal)](module/ProdMgmt/Product/query/Normal)|normal|否|否 |否 ||
|[操作用户(user)](module/ProdMgmt/Product/query/User)|user|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProdMgmt/Product/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[管理员(admin)](module/ProdMgmt/Product/dataset/Admin)|admin|数据查询|否|||
|[已归档(archived)](module/ProdMgmt/Product/dataset/Archived)|archived|数据查询|否|||
|[数据集(DEFAULT)](module/ProdMgmt/Product/dataset/Default)|DEFAULT|数据查询|是|||
|[已删除(deleted)](module/ProdMgmt/Product/dataset/Deleted)|deleted|数据查询|否|||
|[查询星标(favorite)](module/ProdMgmt/Product/dataset/Favorite)|favorite|数据查询|否|||
|[正常状态(normal)](module/ProdMgmt/Product/dataset/Normal)|normal|数据查询|否|||
|[操作用户(user)](module/ProdMgmt/Product/dataset/User)|user|数据查询|否|||


## 数据权限

##### 管理员（读写） :id=Product-ADMIN_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[管理员(admin)](module/ProdMgmt/Product#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `SUBDATA`
* `UPDATE`
* `DELETE`



##### 全部数据（读写） :id=Product-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `UPDATE`
* `DELETE`
* `CREATE`
* `SUBDATA`



##### 全部数据（写） :id=Product-ALL_W

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `CREATE`
* `UPDATE`



##### 当前部门（读写） :id=Product-CURDEPT_RW

<p class="panel-title"><b>数据范围</b></p>

* `部门范围` ： <i class="fa fa-check-square"/></i> 当前部门

<p class="panel-title"><b>数据能力</b></p>




##### 当前机构（读写） :id=Product-CURORG_RW

<p class="panel-title"><b>数据范围</b></p>

* `组织范围` ： <i class="fa fa-check-square"/></i> 当前组织

<p class="panel-title"><b>数据能力</b></p>




##### 普通用户（读写） :id=Product-USER_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[操作用户(user)](module/ProdMgmt/Product#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `SUBDATA`
* `READ`




## 消息通知

|    名称   | 代码名       |  消息队列   |  消息模板 |  通知目标     |  备注  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[产品归档/激活通知](module/ProdMgmt/Product/notify/archived_nofity)|archived_nofity|[默认消息队列](index/notify_index)|[产品通知模板(归档/激活产品)](index/notify_index#product_archive)|当前产品成员 ||
|[产品删除/恢复通知](module/ProdMgmt/Product/notify/delete_notify)|delete_notify|[默认消息队列](index/notify_index)|[产品通知模板(删除/恢复产品)](index/notify_index#product_remove)|当前产品成员 ||


## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_VISIBILITY_EQ|可见范围|EQ|
|N_IS_ARCHIVED_EQ|是否已归档|EQ|
|N_IS_DELETED_EQ|是否已删除|EQ|
|N_IS_FAVORITE_EQ|是否星标|EQ|
|N_NAME_LIKE|产品名称|LIKE|
|N_ID_EQ|标识|EQ|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 打开产品配置 | open_global_setting | 产品配置 |无数据|<details><summary>打开视图或向导（模态）</summary>[产品中心配置](app/view/producttree_exp_view_config)</details>|否|无||
| 取消星标 | cancel_favorite | 取消星标 |单项数据（主键）|<details><summary>后台调用</summary>[Un_favorite](#行为)|是|引用树节点父节点||
| 已删除_恢复 | recover | 恢复 |单项数据（主键）|<details><summary>后台调用</summary>[Recover](#行为)|是|引用视图或树节点||
| 回收站 | open_deleted_view | 回收站 |单项数据（主键）|用户自定义|否|无||
| 编辑基本信息 | open_edit_view | 编辑基本信息 |单项数据（主键）|用户自定义|否|无||
| 设置星标 | add_favorite | 设置星标 |单项数据（主键）|<details><summary>后台调用</summary>[Favorite](#行为)|是|引用树节点父节点||
| 进行中_删除 | in_progress_into_deleted | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Delete](#行为)|是|引用视图或树节点||
| 已归档_删除 | delete | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Delete](#行为)|是|引用视图或树节点||
| 产品成员 | open_product_member | 产品成员 |单项数据（主键）|用户自定义|否|无||
| 更多设置 | opne_setting_view | 更多设置 |单项数据（主键）|用户自定义|否|无||
| 产品信息 | open_show_view | 产品信息 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[产品信息](app/view/productshow_eidt_view)</details>|否|无||
| 进行中_归档 | in_progress_into_archived | 归档 |单项数据（主键）|<details><summary>后台调用</summary>[Archive](#行为)|是|引用视图或树节点||
| 已归档_激活 | activate | 激活 |单项数据（主键）|<details><summary>后台调用</summary>[Activate](#行为)|是|引用视图或树节点||
| 打开产品导航页 | open_product_exp_page | 打开产品导航页 |无数据|<details><summary>打开顶级视图</summary>[产品管理](app/view/producttree_exp_view)</details>|否|无||
| 新开窗口（产品） | open_new | 新窗口打开 |单项数据（主键）|<details><summary>打开HTML页面</summary>*./#/-/index/product=${data.id}/productindex_view/srfnav=usrdrgroup1228809432/ideatree_exp_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D;srfnav=root%3Anode/ideagrid_view_all/-*</details>|否|无||
| 打开产品首页视图 | open_index_view | 打开产品首页视图 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[产品](app/view/productindex_view)</details>|否|无||


## 界面逻辑
|  中文名 | 代码名 |
| --------|--------|
|[批量删除产品成员临时数据](module/ProdMgmt/Product/uilogic/remove_batch_temp)|remove_batch_temp|
|[刷新当前表格](module/ProdMgmt/Product/uilogic/refresh_current_grid)|refresh_current_grid|
