# 产品(product)  <!-- {docsify-ignore-all} -->


产品管理核心实体，包含产品的基本信息、生命周期状态等。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|主题色|COLOR|文本，可指定长度|100|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|产品标识|IDENTIFIER|文本，可指定长度|100|否||
|是否已归档|IS_ARCHIVED|是否逻辑||是||
|是否已删除|IS_DELETED|是否逻辑||是||
|是否星标|IS_FAVORITE|文本，可指定长度|200|是||
|产品成员|MEMBERS|一对多关系数据集合|1048576|是||
|产品名称|NAME|文本，可指定长度|200|否||
|所属对象|SCOPE_ID|文本，可指定长度|100|是||
|所属|SCOPE_TYPE|[单项选择(文本值)](index/dictionary_index#scope_type "所属类型（通用）")|60|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|可见范围|VISIBILITY|单项选择(文本值)|60|否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_CHANNEL_PRODUCT_PRODUCT_ID](der/DER1N_CHANNEL_PRODUCT_PRODUCT_ID)|[工单渠道(CHANNEL)](module/ProdMgmt/channel)|1:N关系||
|[DER1N_CUSTOMER_PRODUCT_PRODUCT_ID](der/DER1N_CUSTOMER_PRODUCT_PRODUCT_ID)|[客户(CUSTOMER)](module/ProdMgmt/customer)|1:N关系||
|[DER1N_IDEA_PRODUCT_PRODUCT_ID](der/DER1N_IDEA_PRODUCT_PRODUCT_ID)|[需求(IDEA)](module/ProdMgmt/idea)|1:N关系||
|[DER1N_IDEA_TEMPLATE_PRODUCT_PRODUCT_ID](der/DER1N_IDEA_TEMPLATE_PRODUCT_PRODUCT_ID)|[需求模板(IDEA_TEMPLATE)](module/ProdMgmt/idea_template)|1:N关系||
|[DER1N_PLAN_PRODUCT_PRODUCT_ID](der/DER1N_PLAN_PRODUCT_PRODUCT_ID)|[排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan)|1:N关系||
|[DER1N_PRODUCT_MEMBER_PRODUCT_PRODUCT_ID](der/DER1N_PRODUCT_MEMBER_PRODUCT_PRODUCT_ID)|[产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member)|1:N关系||
|[DER1N_PRODUCT_TAG_PRODUCT_PRODUCT_ID](der/DER1N_PRODUCT_TAG_PRODUCT_PRODUCT_ID)|[产品标签(PRODUCT_TAG)](module/ProdMgmt/product_tag)|1:N关系||
|[DER1N_PRODUCT_TICKET_TYPE_PRODUCT_PRODUCT_ID](der/DER1N_PRODUCT_TICKET_TYPE_PRODUCT_PRODUCT_ID)|[产品工单类型(PRODUCT_TICKET_TYPE)](module/ProdMgmt/product_ticket_type)|1:N关系||
|[DER1N_TICKET_PRODUCT_PRODUCT_ID](der/DER1N_TICKET_PRODUCT_PRODUCT_ID)|[工单(TICKET)](module/ProdMgmt/ticket)|1:N关系||
|[DERCUSTOM_ADDON_PRODUCT_OWNER_ID](der/DERCUSTOM_ADDON_PRODUCT_OWNER_ID)|[组件(ADDON)](module/Base/addon)|自定义关系||
|[DERCUSTOM_BASELINE_PRODUCT_OWNER_ID](der/DERCUSTOM_BASELINE_PRODUCT_OWNER_ID)|[基线(BASELINE)](module/Base/baseline)|自定义关系||
|[DERCUSTOM_FAVORITE_PRODUCT](der/DERCUSTOM_FAVORITE_PRODUCT)|[收藏(FAVORITE)](module/Base/favorite)|自定义关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DERINDEX_PRODUCT_REFERENCES_INDEX](der/DERINDEX_PRODUCT_REFERENCES_INDEX)|[引用索引(REFERENCES_INDEX)](module/Base/references_index)|索引关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#product_Create)|||
|CreateTemp|CreateTemp|内置方法|默认|不支持||||
|CreateTempMajor|CreateTempMajor|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#product_Get)|||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|GetDraftTemp|GetDraftTemp|内置方法|默认|不支持||||
|GetDraftTempMajor|GetDraftTempMajor|内置方法|默认|不支持||||
|GetTemp|GetTemp|内置方法|默认|不支持||||
|GetTempMajor|GetTempMajor|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|RemoveTemp|RemoveTemp|内置方法|默认|支持||||
|RemoveTempMajor|RemoveTempMajor|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持|[附加操作](index/action_logic_index#product_Update)|||
|UpdateTemp|UpdateTemp|内置方法|默认|不支持||||
|UpdateTempMajor|UpdateTempMajor|内置方法|默认|不支持||||
|激活|activate|[实体处理逻辑](module/ProdMgmt/product/logic/activate "激活")|默认|不支持||||
|归档|archive|[实体处理逻辑](module/ProdMgmt/product/logic/archive "归档")|默认|不支持||||
|变更管理员角色|change_admin_role|[实体处理逻辑](module/ProdMgmt/product/logic/change_admin_role "变更管理员角色")|默认|不支持||||
|删除|delete|[实体处理逻辑](module/ProdMgmt/product/logic/delete "删除")|默认|不支持||||
|设置星标|favorite|[实体处理逻辑](module/ProdMgmt/product/logic/favorite "设置星标")|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/ProdMgmt/product/logic/nothing "无操作")|默认|不支持||||
|其他实体关联空间|other_re_space|[实体处理逻辑](module/ProdMgmt/product/logic/product_re_space "产品关联空间")|默认|不支持||||
|产品计数器|product_counters|[实体处理逻辑](module/ProdMgmt/product/logic/product_counters "产品关联分页计数器")|默认|不支持||||
|产品首页组件计数|product_index_addon_counter|[实体处理逻辑](module/ProdMgmt/product/logic/product_addon_authority "产品组件权限计数器")|默认|不支持||||
|产品移动|product_move|[实体处理逻辑](module/ProdMgmt/product/logic/product_move "产品移动")|默认|不支持||||
|产品只读用户判断|product_readonly_recognize|[实体处理逻辑](module/ProdMgmt/product/logic/get_product_member_one "获取产品成员")|默认|不支持||||
|恢复|recover|[实体处理逻辑](module/ProdMgmt/product/logic/recover "恢复")|默认|不支持||||
|取消星标|un_favorite|[实体处理逻辑](module/ProdMgmt/product/logic/un_favorite "取消星标")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[产品关联分页计数器](module/ProdMgmt/product/logic/product_counters)|product_counters|无||计算关系分页下事件的条数|
|[产品关联空间](module/ProdMgmt/product/logic/product_re_space)|product_re_space|无||产品关联空间操作，生成正反向关联数据|
|[产品移动](module/ProdMgmt/product/logic/product_move)|product_move|无||产品更多设置中移动产品|
|[产品组件权限计数器](module/ProdMgmt/product/logic/product_addon_authority)|product_addon_authority|无||获取产品组件权限|
|[创建之前](module/ProdMgmt/product/logic/before_create)|before_create|无||创建产品之前，对添加的产品成员进行处理|
|[删除](module/ProdMgmt/product/logic/delete)|delete|无||产品数据的逻辑删除，修改产品的是否删除属性值|
|[取消星标](module/ProdMgmt/product/logic/un_favorite)|un_favorite|无||产品取消星标|
|[变更管理员角色](module/ProdMgmt/product/logic/change_admin_role)|change_admin_role|无||批量变更管理员角色身份（role_id）|
|[归档](module/ProdMgmt/product/logic/archive)|archive|无||未归档产品数据的归档处理，修改产品的归档状态为已归档|
|[恢复](module/ProdMgmt/product/logic/recover)|recover|无||恢复已删除状态产品数据，修改产品的是否删除属性值，并恢复访问记录|
|[批量更新最近访问父名称](module/ProdMgmt/product/logic/recent_parent_name)|recent_parent_name|属性逻辑||产品名称属性变更时触发最近访问的父名称更新|
|[批量更新最近访问父标识](module/ProdMgmt/product/logic/recent_parent_identifier)|recent_parent_identifier|属性逻辑||产品编号属性变更时触发最近访问的父标识更新|
|[无操作](module/ProdMgmt/product/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[是否删除变更附加逻辑](module/ProdMgmt/product/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑||产品删除或恢复时时触发相应的通知消息|
|[是否归档变更附加逻辑](module/ProdMgmt/product/logic/is_archived_onchange)|is_archived_onchange|属性逻辑||产品归档或激活数据时触发相应的通知消息|
|[激活](module/ProdMgmt/product/logic/activate)|activate|无||激活已归档状态产品，修改产品的归档属性|
|[生成产品工单类型](module/ProdMgmt/product/logic/create_product_ticket)|create_product_ticket|无||产品建立时将工单类型中is_system=1的数据同步至产品工单类型中|
|[生成最近访问](module/ProdMgmt/product/logic/create_recent)|create_recent|无||在用户对产品数据进行了get或update操作时生成相应的访问记录|
|[自动创建人员](module/ProdMgmt/product/logic/auto_create_members)|auto_create_members|无||当所属选择"团队"时，点击完成后自动添加团队下的所有成员。|
|[获取产品成员](module/ProdMgmt/product/logic/get_product_member_one)|get_product_member_one|无||获取产品成员信息，用于判断当前用户权限|
|[获取快速新建产品集合](module/ProdMgmt/product/logic/quick_create)|quick_create|无||用于获取可快速新建的产品集合|
|[设置星标](module/ProdMgmt/product/logic/favorite)|favorite|无||设置为星标产品|

## 功能配置
| 中文名col200    | 功能类型col150    | 功能实体col200 |  备注col700|
| --------  | :----:    | ---- |----- |
|实体通知设置|通知设置|[通知设置(SYSTEM_EXTENSION_NOTIFY_SETTING)](module/extension/system_extension_notify_setting)||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/ProdMgmt/product/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProdMgmt/product/query/View)|VIEW|否|否 |否 ||
|[管理员(admin)](module/ProdMgmt/product/query/admin)|admin|否|否 |否 ||
|[已归档(archived)](module/ProdMgmt/product/query/archived)|archived|否|否 |否 ||
|[当前产品(cur_product)](module/ProdMgmt/product/query/cur_product)|cur_product|否|否 |否 ||
|[特定用户(customer_user)](module/ProdMgmt/product/query/customer_user)|customer_user|否|否 |否 ||
|[已删除(deleted)](module/ProdMgmt/product/query/deleted)|deleted|否|否 |否 ||
|[查询星标(favorite)](module/ProdMgmt/product/query/favorite)|favorite|否|否 |否 ||
|[查询星标（管理用户）(favorite_user)](module/ProdMgmt/product/query/favorite_user)|favorite_user|否|否 |否 ||
|[正常状态(normal)](module/ProdMgmt/product/query/normal)|normal|否|否 |否 ||
|[公开(public)](module/ProdMgmt/product/query/public)|public|否|否 |否 ||
|[只读用户(reader)](module/ProdMgmt/product/query/reader)|reader|否|否 |否 ||
|[未星标产品(unfavorite)](module/ProdMgmt/product/query/unfavorite)|unfavorite|否|否 |否 ||
|[未星标产品（管理用户）(unfavorite_user)](module/ProdMgmt/product/query/unfavorite_user)|unfavorite_user|否|否 |否 ||
|[操作用户(user)](module/ProdMgmt/product/query/user)|user|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ProdMgmt/product/dataset/Default)|DEFAULT|数据查询|是|||
|[管理员(admin)](module/ProdMgmt/product/dataset/admin)|admin|数据查询|否|||
|[已归档(archived)](module/ProdMgmt/product/dataset/archived)|archived|数据查询|否|||
|[当前产品(cur_product)](module/ProdMgmt/product/dataset/cur_product)|cur_product|数据查询|否|||
|[特定用户(customer_user)](module/ProdMgmt/product/dataset/customer_user)|customer_user|数据查询|否|||
|[已删除(deleted)](module/ProdMgmt/product/dataset/deleted)|deleted|数据查询|否|||
|[查询星标(favorite)](module/ProdMgmt/product/dataset/favorite)|favorite|数据查询|否|||
|[主表格查询(main)](module/ProdMgmt/product/dataset/main)|main|数据查询|否|||
|[主表格查询（移动端）(mob_main)](module/ProdMgmt/product/dataset/mob_main)|mob_main|数据查询|否|||
|[正常状态(normal)](module/ProdMgmt/product/dataset/normal)|normal|数据查询|否|||
|[快速新建查询(quick)](module/ProdMgmt/product/dataset/quick)|quick|[实体逻辑](module/ProdMgmt/product/logic/quick_create)|否|||
|[快速新建查询（管理用户）(quick_user)](module/ProdMgmt/product/dataset/quick_user)|quick_user|数据查询|否|||
|[只读用户(reader)](module/ProdMgmt/product/dataset/reader)|reader|数据查询|否|||
|[操作用户(user)](module/ProdMgmt/product/dataset/user)|user|数据查询|否|||

## 数据权限

##### 管理员（读写） :id=product-ADMIN_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[管理员(admin)](module/ProdMgmt/product#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `SUBDATA`
* `DELETE`
* `UPDATE`
* `READ`



##### 全部数据（读写） :id=product-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `SUBDATA`
* `UPDATE`
* `DELETE`
* `CREATE`



##### 全部数据（写） :id=product-ALL_W

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`



##### 特定用户（读） :id=product-CUSTOMER_USER_R

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[特定用户(customer_user)](module/ProdMgmt/product#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 只读用户（读） :id=product-USER_R

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[只读用户(reader)](module/ProdMgmt/product#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 普通用户（读写） :id=product-USER_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[操作用户(user)](module/ProdMgmt/product#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `SUBDATA`



## 消息通知

|    中文名col200   | 代码名col150       |  消息队列col200   |  消息模板col200 |  通知目标col150     |  备注col350  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[产品归档/激活通知](module/ProdMgmt/product/notify/archived_nofity)|archived_nofity|[默认消息队列](index/notify_index)|[产品通知模板(归档/激活产品)](index/notify_index#product_archived_or_activate)|当前产品成员 ||
|[产品删除/恢复通知](module/ProdMgmt/product/notify/delete_notify)|delete_notify|[默认消息队列](index/notify_index)|[产品通知模板(删除/恢复产品)](index/notify_index#product_remove_or_recover)|当前产品成员 ||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_ID_NOTEQ|标识|NOTEQ||
|N_IDENTIFIER_EQ|产品标识|EQ||
|N_IS_ARCHIVED_EQ|是否已归档|EQ||
|N_IS_DELETED_EQ|是否已删除|EQ||
|N_NAME_LIKE|产品名称|LIKE||
|N_SCOPE_TYPE_EQ|所属|EQ||
|N_VISIBILITY_EQ|可见范围|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 产品新建（移动端） | mob_product_create | 产品新建 |无数据|<details><summary>打开视图或向导（模态）</summary>[产品新建](app/view/product_mob_create_view)</details>||
| 添加产品成员 | add_product_member | 添加成员 |无数据|系统预定义||
| 打开产品配置 | open_global_setting | 产品配置 |无数据|用户自定义||
| 进行中_删除 | in_progress_into_deleted | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)||
| 设置管理员 | change_admin_role | 设置管理员 |单项数据（主键）|<details><summary>后台调用</summary>[change_admin_role](#行为)||
| 产品设置（移动端） | mob_product_setting | 产品设置 |单项数据|<details><summary>打开视图或向导（模态）</summary>[产品设置](app/view/product_mob_setting_view)</details>||
| 已归档_删除 | delete | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)||
| 产品成员（移动端） | mob_project_member | 产品成员 |无数据|<details><summary>打开视图或向导（模态）</summary>[产品成员](app/view/product_member_mob_list_view)</details>||
| 配置 | panel_usr1021297820_button_calluilogic_click | 表单设计 |单项数据|<details><summary>打开视图或向导（模态）</summary>[表单设计](app/view/psdeformdesign_modal)</details>||
| 更多设置 | opne_setting_view | 更多设置 |单项数据（主键）|用户自定义||
| 移动产品 | product_move | 移动产品 |单项数据（主键）|<details><summary>后台调用</summary>[product_move](#行为)||
| 产品信息 | open_show_view | 产品信息 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[产品信息](app/view/product_show_edit_view)</details>||
| 进行中_归档 | in_progress_into_archived | 归档 |单项数据（主键）|<details><summary>后台调用</summary>[archive](#行为)||
| 打开产品列表（移动端） | mob_open_product_list | 打开产品列表 |无数据|<details><summary>打开视图或向导（模态）</summary>[产品](app/view/product_mob_list_view)</details>||
| 打开产品导航页 | open_product_exp_page | 打开产品导航页 |无数据|<details><summary>打开顶级视图</summary>[产品管理](app/view/product_tree_exp_view)</details>||
| 新开窗口（产品） | open_new | 新窗口打开 |单项数据（主键）|<details><summary>打开HTML页面</summary>*./#/-/index/product=${data.id}/product_index_view/srfnav=usrdrgroup1228809432/idea_tree_exp_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D;srfnav=root%3Anode/idea_all_grid_view/-*</details>||
| 打开产品首页视图 | open_index_view | 打开产品首页视图 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[产品](app/view/product_index_view)</details>||
| 取消星标 | cancel_favorite | 取消星标 |单项数据（主键）|<details><summary>后台调用</summary>[un_favorite](#行为)||
| 已删除_恢复 | recover | 恢复 |单项数据（主键）|<details><summary>后台调用</summary>[recover](#行为)||
| 回收站 | open_deleted_view | 回收站 |单项数据（主键）|用户自定义||
| 编辑基本信息 | open_edit_view | 编辑基本信息 |单项数据（主键）|用户自定义||
| 设置星标 | add_favorite | 设置星标 |单项数据（主键）|<details><summary>后台调用</summary>[favorite](#行为)||
| 产品删除（进行中-移动端） | mob_in_progress_into_deleted | 产品删除 |单项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)||
| 新建产品 | create_product | 新建产品 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建产品](app/view/product_create_wizard_view)</details>||
| 产品成员 | open_product_member | 产品成员 |单项数据（主键）|用户自定义||
| 产品回收站（移动端） | mob_product_recycle_bin | 回收站 |单项数据|<details><summary>打开视图或向导（模态）</summary>[回收站](app/view/product_mob_recycle_tab_view)</details>||
| 已归档_激活 | activate | 激活 |单项数据（主键）|<details><summary>后台调用</summary>[activate](#行为)||
| 打开新建产品 | open_new_product | 打开新建产品 |单项数据|<details><summary>打开顶级视图</summary>[产品](app/view/product_index_view)</details>||
| 产品高级设置（移动端） | mob_advanced_setting | 高级设置 |单项数据|<details><summary>打开视图或向导（模态）</summary>[高级设置](app/view/product_mob_ad_setting_view)</details>||
| 产品归档（进行中-移动端） | mob_in_progress_into_archived | 产品归档 |单项数据（主键）|<details><summary>后台调用</summary>[archive](#行为)||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[批量删除产品成员临时数据](module/ProdMgmt/product/uilogic/remove_batch_temp)|remove_batch_temp|获取产品内所有临时成员数据并删除|
|[计算表格列行为状态(product)](module/ProdMgmt/product/uilogic/calc_column_action_state)|calc_column_action_state|用于动态控制收藏和取消收藏的禁用状态|
|[通知刷新](module/ProdMgmt/product/uilogic/notify_refresh)|notify_refresh|通知页面刷新|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ProdMgmt/product?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product?id=功能配置`">
  功能配置
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product?id=消息通知`">
  消息通知
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product?id=界面逻辑`">
  界面逻辑
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
show_der:'major',


      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>