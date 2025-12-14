# 空间(space)  <!-- {docsify-ignore-all} -->


定义PLM系统中用于协作、知识共享和文档管理的虚拟空间。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|分类路径|CATEGORIES|外键值附加数据|2000|是||
|分类|CATEGORY_ID|外键值|100|是||
|分类|CATEGORY_NAME|外键值文本|200|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|空间标识|IDENTIFIER|文本，可指定长度|100|否||
|是否已归档|IS_ARCHIVED|是否逻辑||是||
|是否已删除|IS_DELETED|是否逻辑||是||
|是否星标|IS_FAVORITE|文本，可指定长度|200|是||
|是否开启共享|IS_SHARED|[单项选择(文本值)](index/dictionary_index#space_shared_status "空间共享状态")|60|是||
|成员|MEMBERS|一对多关系数据集合|1048576|是||
|空间名称|NAME|文本，可指定长度|200|否||
|所属对象|SCOPE_ID|文本，可指定长度|100|是||
|所属|SCOPE_TYPE|[单项选择(文本值)](index/dictionary_index#user_scope_type "所属类型（包含个人）")|60|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|用户标记|USER_TAG|文本，可指定长度|200|是||
|用户标记2|USER_TAG2|文本，可指定长度|200|是||
|可见范围|VISIBILITY|单项选择(文本值)|60|否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_PAGE_SPACE_SPACE_ID](der/DER1N_PAGE_SPACE_SPACE_ID)|[页面(PAGE)](module/Wiki/article_page)|1:N关系||
|[DER1N_SPACE_MEMBER_SPACE_SPACE_ID](der/DER1N_SPACE_MEMBER_SPACE_SPACE_ID)|[空间成员(SPACE_MEMBER)](module/Wiki/space_member)|1:N关系||
|[DER1N_STENCIL_SPACE_SPACE_ID](der/DER1N_STENCIL_SPACE_SPACE_ID)|[页面模板(STENCIL)](module/Wiki/stencil)|1:N关系||
|[DERCUSTOM_ADDON_SPACE_OWNER_ID](der/DERCUSTOM_ADDON_SPACE_OWNER_ID)|[组件(ADDON)](module/Base/addon)|自定义关系||
|[DERCUSTOM_AI_KB_DOCUMENT_SYNC_SPACE](der/DERCUSTOM_AI_KB_DOCUMENT_SYNC_SPACE)|[知识库文档同步(AI_KB_DOCUMENT_SYNC)](module/ai/ai_kb_document_sync)|自定义关系||
|[DERCUSTOM_BASELINE_SPACE_OWNER_ID](der/DERCUSTOM_BASELINE_SPACE_OWNER_ID)|[基线(BASELINE)](module/Base/baseline)|自定义关系||
|[DERCUSTOM_GUIDELINE_SPACE_SPACE_ID](der/DERCUSTOM_GUIDELINE_SPACE_SPACE_ID)|[流程准则(GUIDELINE)](module/TestMgmt/guideline)|自定义关系||
|[DERCUSTOM_RELATION_TARGET_SPACE](der/DERCUSTOM_RELATION_TARGET_SPACE)|[关联(RELATION)](module/Base/relation)|自定义关系||
|[DERCUSTOM_REVIEW_SPACE_PRINCIPAL_ID](der/DERCUSTOM_REVIEW_SPACE_PRINCIPAL_ID)|[评审(REVIEW)](module/TestMgmt/review)|自定义关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_SPACE_CATEGORY_CATEGORY_ID](der/DER1N_SPACE_CATEGORY_CATEGORY_ID)|[类别(CATEGORY)](module/Base/category)|1:N关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#space_Create)|||
|CreateTemp|CreateTemp|内置方法|默认|不支持||||
|CreateTempMajor|CreateTempMajor|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#space_Get)|||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|GetDraftTemp|GetDraftTemp|内置方法|默认|不支持||||
|GetDraftTempMajor|GetDraftTempMajor|内置方法|默认|不支持||||
|GetTemp|GetTemp|内置方法|默认|不支持||||
|GetTempMajor|GetTempMajor|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|RemoveTemp|RemoveTemp|内置方法|默认|支持||||
|RemoveTempMajor|RemoveTempMajor|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|UpdateTemp|UpdateTemp|内置方法|默认|不支持||||
|UpdateTempMajor|UpdateTempMajor|内置方法|默认|不支持||||
|激活|activate|[实体处理逻辑](module/Wiki/space/logic/activate "激活")|默认|不支持||||
|归档|archive|[实体处理逻辑](module/Wiki/space/logic/archive "归档")|默认|不支持||||
|变更管理员角色|change_admin_role|[实体处理逻辑](module/Wiki/space/logic/change_admin_role "变更管理员角色")|默认|不支持||||
|取消关联|del_relation|[实体处理逻辑](module/Wiki/space/logic/del_relation "取消关联")|默认|不支持||||
|删除|delete|[实体处理逻辑](module/Wiki/space/logic/delete "删除")|默认|不支持||||
|设置星标|favorite|[实体处理逻辑](module/Wiki/space/logic/favorite "设置星标")|默认|不支持||||
|标记主空间|mark_main_space|[实体处理逻辑](module/Wiki/space/logic/mark_main_space "标记主空间")|默认|不支持||||
|移出分类|move_out_category|[实体处理逻辑](module/Wiki/space/logic/move_out_category "移出分类")|默认|不支持||||
|移动空间|move_space|[实体处理逻辑](module/Wiki/space/logic/move_space "移动空间")|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/Wiki/space/logic/nothing "无操作")|默认|不支持||||
|开启共享|open_shared|[实体处理逻辑](module/Wiki/space/logic/open_shared "开启共享")|默认|不支持||||
|其他实体关联空间|other_re_space|[实体处理逻辑](module/Wiki/space/logic/other_re_space "其他实体关联空间")|默认|不支持||||
|判断当前用户角色|recognize_cur_user_role|[实体处理逻辑](module/Wiki/space/logic/recognize_cur_user_role "判断当前用户角色")|默认|不支持||||
|恢复|recover|[实体处理逻辑](module/Wiki/space/logic/recover "恢复")|默认|不支持||||
|空间首页组件计数|space_index_addon_counter|[实体处理逻辑](module/Wiki/space/logic/space_addon_authority "空间组件权限计数器")|默认|不支持||||
|取消星标|un_favorite|[实体处理逻辑](module/Wiki/space/logic/un_favorite "取消星标")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[其他实体关联空间](module/Wiki/space/logic/other_re_space)|other_re_space|无||其他实体关联空间操作，生成正反向关联数据|
|[创建之前](module/Wiki/space/logic/before_create)|before_create|无||创建空间之前，对添加的空间成员进行处理|
|[创建空间流程准则](module/Wiki/space/logic/auto_create_guideline)|auto_create_guideline|无||创建产品后，自动生成产品内的评审规则|
|[删除](module/Wiki/space/logic/delete)|delete|无||空间数据的逻辑删除，修改产品的是否删除属性值|
|[判断当前用户角色](module/Wiki/space/logic/recognize_cur_user_role)|recognize_cur_user_role|无||判断当前用户角色|
|[取消关联](module/Wiki/space/logic/del_relation)|del_relation|无||空间取消关联数据（正反向关联数据同时删除）|
|[取消星标](module/Wiki/space/logic/un_favorite)|un_favorite|无||空间取消星标|
|[变更管理员角色](module/Wiki/space/logic/change_admin_role)|change_admin_role|无||批量变更管理员角色身份（role_id）|
|[开启共享](module/Wiki/space/logic/open_shared)|open_shared|无||空间开启共享|
|[归档](module/Wiki/space/logic/archive)|archive|无||未归档空间数据的归档处理，修改空间的归档状态为已归档|
|[恢复](module/Wiki/space/logic/recover)|recover|无||已删除状态空间数据的恢复，修改空间的是否删除属性值，并恢复访问记录|
|[无操作](module/Wiki/space/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[是否删除变更附加逻辑](module/Wiki/space/logic/is_deleted_onchange)|is_deleted_onchange|属性逻辑||空间删除或恢复时触发相应的通知消息|
|[是否归档变更附加逻辑](module/Wiki/space/logic/is_archived_onchange)|is_archived_onchange|属性逻辑||空间归档或激活时触发相应的通知消息|
|[标记主空间](module/Wiki/space/logic/mark_main_space)|mark_main_space|无|||
|[激活](module/Wiki/space/logic/activate)|activate|无||激活已归档状态空间，修改空间的归档属性|
|[生成最近访问](module/Wiki/space/logic/create_recent)|create_recent|无||在用户对空间数据进行了get或update操作时生成相应的访问记录|
|[移出分类](module/Wiki/space/logic/move_out_category)|move_out_category|无||将空间移除分类|
|[移动空间](module/Wiki/space/logic/move_space)|move_space|无||更新空间的所属、可见范围|
|[空间组件权限计数器](module/Wiki/space/logic/space_addon_authority)|space_addon_authority|无||获取空间组件权限|
|[自动创建主页](module/Wiki/space/logic/auto_create_home_page)|auto_create_home_page|无||附加在实体的CREATE行为后，自动生成模板化的主页|
|[自动创建人员](module/Wiki/space/logic/auto_create_members)|auto_create_members|无||当所属选择"团队"时，点击完成后自动添加团队下的所有成员，若选择个人，则添加个人为所属成员。|
|[获取关联的空间](module/Wiki/space/logic/get_re_space)|get_re_space|无|||
|[获取快速新建空间集合](module/Wiki/space/logic/quick_create)|quick_create|无||用于获取可快速新建的空间集合|
|[获取知识空间成员](module/Wiki/space/logic/get_space_member_one)|get_space_member_one|无||获取知识空间成员信息，用于判断当前用户权限|
|[设置星标](module/Wiki/space/logic/favorite)|favorite|无||设置为星标产品|

## 功能配置
| 中文名col200    | 功能类型col150    | 功能实体col200 |  备注col700|
| --------  | :----:    | ---- |----- |
|实体通知设置|通知设置|[通知设置(SYSTEM_EXTENSION_NOTIFY_SETTING)](module/extension/system_extension_notify_setting)||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Wiki/space/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Wiki/space/query/View)|VIEW|否|否 |否 ||
|[管理员(admin)](module/Wiki/space/query/admin)|admin|否|否 |否 ||
|[已归档(archived)](module/Wiki/space/query/archived)|archived|否|否 |否 ||
|[目录下空间(category_space)](module/Wiki/space/query/category_space)|category_space|否|否 |否 ||
|[当前空间(cur_space)](module/Wiki/space/query/cur_space)|cur_space|否|否 |否 ||
|[当前空间(current)](module/Wiki/space/query/current)|current|否|否 |否 ||
|[已删除(deleted)](module/Wiki/space/query/deleted)|deleted|否|否 |否 ||
|[查询星标(favorite)](module/Wiki/space/query/favorite)|favorite|否|否 |否 ||
|[查询星标（管理用户）(favorite_user)](module/Wiki/space/query/favorite_user)|favorite_user|否|否 |否 ||
|[移动端非星标空间(mob_unfavorite)](module/Wiki/space/query/mob_unfavorite)|mob_unfavorite|否|否 |是 ||
|[未存在目录中的空间(no_category_space)](module/Wiki/space/query/no_category_space)|no_category_space|否|否 |否 ||
|[未关联的空间（产品）(no_re_space_product)](module/Wiki/space/query/no_re_space_product)|no_re_space_product|否|否 |否 ||
|[正常状态(normal)](module/Wiki/space/query/normal)|normal|否|否 |否 ||
|[产品关联的空间(product_re_space)](module/Wiki/space/query/product_re_space)|product_re_space|否|否 |否 ||
|[公开(public)](module/Wiki/space/query/public)|public|否|否 |否 ||
|[只读用户(reader)](module/Wiki/space/query/reader)|reader|否|否 |否 ||
|[非星标空间(unfavorite)](module/Wiki/space/query/unfavorite)|unfavorite|否|否 |否 ||
|[非星标空间（管理用户）(unfavorite_user)](module/Wiki/space/query/unfavorite_user)|unfavorite_user|否|否 |否 ||
|[操作用户(user)](module/Wiki/space/query/user)|user|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Wiki/space/dataset/Default)|DEFAULT|数据查询|是|||
|[管理员(admin)](module/Wiki/space/dataset/admin)|admin|数据查询|否|||
|[已归档(archived)](module/Wiki/space/dataset/archived)|archived|数据查询|否|||
|[目录下空间(category_space)](module/Wiki/space/dataset/category_space)|category_space|数据查询|否|||
|[当前空间(current)](module/Wiki/space/dataset/current)|current|数据查询|否|||
|[已删除(deleted)](module/Wiki/space/dataset/deleted)|deleted|数据查询|否|||
|[查询星标(favorite)](module/Wiki/space/dataset/favorite)|favorite|数据查询|否|||
|[主表格查询(main)](module/Wiki/space/dataset/main)|main|数据查询|否|||
|[移动端主表格查询(mob_main)](module/Wiki/space/dataset/mob_main)|mob_main|数据查询|否|||
|[未存在目录中的空间(no_category_space)](module/Wiki/space/dataset/no_category_space)|no_category_space|数据查询|否|||
|[未关联的空间(no_re_space)](module/Wiki/space/dataset/no_re_space)|no_re_space|数据查询|否|||
|[正常状态(normal)](module/Wiki/space/dataset/normal)|normal|数据查询|否|||
|[关联的空间(other_re_space)](module/Wiki/space/dataset/other_re_space)|other_re_space|[实体逻辑](module/Wiki/space/logic/get_re_space)|否|||
|[快速新建查询(quick)](module/Wiki/space/dataset/quick)|quick|[实体逻辑](module/Wiki/space/logic/quick_create)|否|||
|[快速新建查询（管理用户）(quick_user)](module/Wiki/space/dataset/quick_user)|quick_user|数据查询|否|||
|[只读用户(reader)](module/Wiki/space/dataset/reader)|reader|数据查询|否|||
|[操作用户(user)](module/Wiki/space/dataset/user)|user|数据查询|否|||

## 数据权限

##### 管理员（读写） :id=space-ADMIN_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[管理员(admin)](module/Wiki/space#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `SHARED`
* `READ`
* `SUBDATA`
* `UPDATE`
* `DELETE`



##### 全部数据（读写） :id=space-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`
* `SUBDATA`
* `READ`
* `UPDATE`
* `SHARED`
* `DELETE`



##### 空间数据（写） :id=space-ALL_W

<p class="panel-title"><b>数据范围</b></p>

* `无`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`



##### 只读用户（读） :id=space-USER_R

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[只读用户(reader)](module/Wiki/space#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 普通用户（读写） :id=space-USER_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[操作用户(user)](module/Wiki/space#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`
* `SUBDATA`
* `READ`



## 消息通知

|    中文名col200   | 代码名col150       |  消息队列col200   |  消息模板col200 |  通知目标col150     |  备注col350  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[空间归档/激活通知](module/Wiki/space/notify/archived_or_activate_notify)|archived_or_activate_notify|[默认消息队列](index/notify_index)|[空间通知模板(归档/激活空间)](index/notify_index#space_archived_or_activate)|当前空间成员 ||
|[空间删除/恢复通知](module/Wiki/space/notify/remove_or_recover_notify)|remove_or_recover_notify|[默认消息队列](index/notify_index)|[空间通知模板(删除/恢复空间)](index/notify_index#space_remove_or_recover)|当前空间成员 ||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_CATEGORY_ID_EQ|分类|EQ||
|N_CATEGORY_NAME_EQ|分类|EQ||
|N_CATEGORY_NAME_LIKE|分类|LIKE||
|N_ID_EQ|标识|EQ||
|N_IS_SHARED_EQ|是否开启共享|EQ||
|N_NAME_LIKE|空间名称|LIKE||
|N_SCOPE_ID_EQ|所属对象|EQ||
|N_SCOPE_TYPE_EQ|所属|EQ||
|N_USER_TAG_EQ|用户标记|EQ||
|N_USER_TAG_LIKE|用户标记|LIKE||
|N_USER_TAG2_EQ|用户标记2|EQ||
|N_USER_TAG2_LIKE|用户标记2|LIKE||
|N_VISIBILITY_EQ|可见范围|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 新建目录 | create_category | 新建目录 |无数据|用户自定义||
| 编辑空间基本信息 | edit_space_info | 编辑基本信息 |单项数据（主键）|用户自定义||
| 取消关联（其他实体关联） | del_relation | 取消关联 |单项数据（主键）|<details><summary>后台调用</summary>[del_relation](#行为)|其他实体关联需求表格、需求关联需求表格上界面行为组调用；|
| 进行中_删除 | in_progress_into_deleted | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)||
| 设置管理员 | change_admin_role | 设置管理员 |单项数据（主键）|<details><summary>后台调用</summary>[change_admin_role](#行为)||
| 空间设置（移动端） | mob_setting | 空间设置 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[空间设置](app/view/space_mob_setting_view)</details>||
| 更多设置 | more_setting | 更多设置 |单项数据（主键）|用户自定义||
| 查看空间信息 | space_info | 空间信息 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[空间信息](app/view/space_info_view)</details>||
| 产品关联空间 | product_relation_space | 添加关联空间 |无数据|<details><summary>打开视图或向导（模态）</summary>[关联空间](app/view/space_choose_option_view)</details>||
| 已归档_删除 | delete | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)||
| 项目关联空间 | project_relation_space | 添加关联空间 |无数据|<details><summary>打开视图或向导（模态）</summary>[关联空间](app/view/space_choose_option_view)</details>||
| 进行中_归档 | in_progress_into_archived | 归档 |单项数据（主键）|<details><summary>后台调用</summary>[archive](#行为)||
| 新建空间（移动端） | mob_create_space | 新建空间 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建](app/view/space_mob_create_space_view)</details>||
| 打开空间分页导航视图（移动端） | mob_open_space_list | 打开空间列表 |无数据|<details><summary>打开视图或向导（模态）</summary>[知识](app/view/space_mob_tab_exp_view)</details>||
| 开启共享 | open_shared | 开启共享 |单项数据（主键）|<details><summary>后台调用</summary>[open_shared](#行为)||
| 空间共享设置 | space_shared_setting | 共享设置 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[共享空间](app/view/shared_space_setting_view)</details>||
| 新开窗口（空间） | open_new | 新窗口打开 |单项数据（主键）|<details><summary>打开HTML页面</summary>*./#/-/index/space=${data.id}/space_index_view/srfnav=drgroup/article_page_tree_exp_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D;*</details>||
| 打开空间主页面 | open_space_index | 打开空间主页面 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[空间](app/view/space_index_view)</details>||
| 取消星标 | cancel_favorite | 取消星标 |单项数据（主键）|<details><summary>后台调用</summary>[un_favorite](#行为)||
| 已删除_恢复 | recover | 恢复 |单项数据（主键）|<details><summary>后台调用</summary>[recover](#行为)||
| 移动端移动空间 | mob_move_space | 移动空间 |单项数据（主键）|<details><summary>后台调用</summary>[move_space](#行为)||
| 回收站 | open_deleted_view | 回收站 |单项数据（主键）|用户自定义||
| 设置星标 | add_favorite | 设置星标 |单项数据（主键）|<details><summary>后台调用</summary>[favorite](#行为)||
| 空间成员(移动端) | mob_space_member | 空间成员 |无数据|<details><summary>打开视图或向导（模态）</summary>[空间成员](app/view/space_member_mob_list_view)</details>||
| 打开空间配置 | open_space_setting | 空间配置 |无数据|用户自定义||
| 移动端进行中_删除 | mob_in_progress_into_deleted | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)||
| 打开空间导航页 | open_space_exp_page | 打开空间导航页 |无数据|<details><summary>打开顶级视图</summary>[知识管理](app/view/space_tree_exp_view)</details>||
| 移出分类 | move_out_category | 移出分类 |多项数据（主键）|<details><summary>后台调用</summary>[move_out_category](#行为)||
| 查看空间成员 | open_space_member | 空间成员 |单项数据（主键）|用户自定义||
| 移动空间 | move_space | 移动空间 |单项数据（主键）|<details><summary>后台调用</summary>[move_space](#行为)||
| 打开新建空间 | open_new_space | 打开新建空间 |单项数据|<details><summary>打开顶级视图</summary>[空间](app/view/space_index_view)</details>||
| 新建空间 | create_space | 新建空间 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建空间](app/view/space_create_wizard_view)</details>||
| 已归档_激活 | activate | 激活 |单项数据（主键）|<details><summary>后台调用</summary>[activate](#行为)||
| 标记主知识库 | mark_main_space | 标记主知识库 |单项数据（主键）|<details><summary>后台调用</summary>[mark_main_space](#行为)||
| 添加空间成员 | add_space_member | 添加成员 |无数据|系统预定义||
| 高级设置（移动端） | mob_advanced_setting | 高级设置 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[高级设置](app/view/space_mob_advanced_set_view)</details>||
| 移动端进行中_归档 | mob_in_progress_into_archived | 归档 |单项数据（主键）|<details><summary>后台调用</summary>[archive](#行为)||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[产品关联空间](module/Wiki/space/uilogic/product_relation_space)|product_relation_space|调用后台关联逻辑，产品关联空间并生成正反关联数据|
|[判断当前用户角色（关联）](module/Wiki/space/uilogic/recognize_cur_user_role)|recognize_cur_user_role|产品/项目中的页面组件下，判断进入的用户角色|
|[刷新当前表格](module/Wiki/space/uilogic/refresh_current_grid)|refresh_current_grid|刷新当前表格|
|[批量删除空间成员临时数据](module/Wiki/space/uilogic/remove_batch_temp)|remove_batch_temp|获取空间内所有临时成员数据并删除|
|[新建目录](module/Wiki/space/uilogic/create_category)|create_category|新建空间目录|
|[计算表格列行为状态(space)](module/Wiki/space/uilogic/calc_column_action_state)|calc_column_action_state|用于动态控制收藏和取消收藏的禁用状态|
|[项目关联空间](module/Wiki/space/uilogic/project_relation_space)|project_relation_space|调用后台关联逻辑，项目关联空间并生成正反关联数据|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Wiki/space?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/space?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/space?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/space?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/space?id=功能配置`">
  功能配置
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/space?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/space?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/space?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/space?id=消息通知`">
  消息通知
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/space?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/space?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/space?id=界面逻辑`">
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