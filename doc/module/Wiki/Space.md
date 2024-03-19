# 空间(Space)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|空间标识|IDENTIFIER|文本，可指定长度|100|[默认规则](module/Wiki/Space/value_rule/Identifier#default)||√||
|可见范围|VISIBILITY|单项选择(文本值)|60|[默认规则](module/Wiki/Space/value_rule/Visibility#default)||||
|描述|DESCRIPTION|长文本，长度1000|2000|[默认规则](module/Wiki/Space/value_rule/Description#default)||||
|是否已归档|IS_ARCHIVED|是否逻辑|0|||||
|是否已删除|IS_DELETED|是否逻辑|0|||||
|是否星标|IS_FAVORITE|文本，可指定长度|200|[默认规则](module/Wiki/Space/value_rule/Is_favorite#default)||||
|分类路径|CATEGORIES|外键值附加数据|2000|[默认规则](module/Wiki/Space/value_rule/Categories#default)||||
|成员|MEMBERS|一对多关系数据集合|1048576|[默认规则](module/Wiki/Space/value_rule/Members#default)||||
|空间名称|NAME|文本，可指定长度|200|[默认规则](module/Wiki/Space/value_rule/Name#default)||√||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/Wiki/Space/value_rule/Id#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/Wiki/Space/value_rule/Update_man#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/Wiki/Space/value_rule/Create_man#default)||||
|分类|CATEGORY_ID|外键值|100|[默认规则](module/Wiki/Space/value_rule/Category_id#default)||||
|分类|CATEGORY_NAME|外键值文本|200|[默认规则](module/Wiki/Space/value_rule/Category_name#default)||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DER1N_PAGE_SPACE_SPACE_ID](der/DER1N_PAGE_SPACE_SPACE_ID)|[页面(PAGE)](module/Wiki/Article_page)|1:N关系||
|[DER1N_SPACE_MEMBER_SPACE_SPACE_ID](der/DER1N_SPACE_MEMBER_SPACE_SPACE_ID)|[空间成员(SPACE_MEMBER)](module/Wiki/Space_member)|1:N关系||
|[DER1N_STENCIL_SPACE_SPACE_ID](der/DER1N_STENCIL_SPACE_SPACE_ID)|[页面模板(STENCIL)](module/Wiki/Stencil)|1:N关系||
|[DERCUSTOM_RELATION_SPACE](der/DERCUSTOM_RELATION_SPACE)|[关联(RELATION)](module/Base/Relation)|自定义关系||

#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_SPACE_CATEGORY_CATEGORY_ID](der/DER1N_SPACE_CATEGORY_CATEGORY_ID)|[类别(CATEGORY)](module/Base/Category)|1:N关系||
<!-- tabs:end -->

## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#Space_Create)|||
|CreateTemp|CreateTemp|内置方法|默认|不支持||||
|CreateTempMajor|CreateTempMajor|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|UpdateTemp|UpdateTemp|内置方法|默认|不支持||||
|UpdateTempMajor|UpdateTempMajor|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|RemoveTemp|RemoveTemp|内置方法|默认|支持||||
|RemoveTempMajor|RemoveTempMajor|内置方法|默认|支持||||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#Space_Get)|||
|GetTemp|GetTemp|内置方法|默认|不支持||||
|GetTempMajor|GetTempMajor|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|GetDraftTemp|GetDraftTemp|内置方法|默认|不支持||||
|GetDraftTempMajor|GetDraftTempMajor|内置方法|默认|不支持||||
|激活|Activate|[实体处理逻辑](module/Wiki/Space/logic/activate "激活")|默认|不支持||||
|添加空间|Add_space|[实体处理逻辑](module/Wiki/Space/logic/add_space "添加空间")|默认|不支持||||
|归档|Archive|[实体处理逻辑](module/Wiki/Space/logic/archive "归档")|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|取消关联|Del_relation|[实体处理逻辑](module/Wiki/Space/logic/del_relation "取消关联")|默认|不支持||||
|删除|Delete|[实体处理逻辑](module/Wiki/Space/logic/delete "删除")|默认|不支持||||
|设置星标|Favorite|[实体处理逻辑](module/Wiki/Space/logic/favorite "设置星标")|默认|不支持||||
|移出分类|Move_out_category|[实体处理逻辑](module/Wiki/Space/logic/move_out_category "移出分类")|默认|不支持||||
|无操作|Nothing|[实体处理逻辑](module/Wiki/Space/logic/nothing "无操作")|默认|不支持||||
|其他实体关联空间|Other_re_space|[实体处理逻辑](module/Wiki/Space/logic/other_re_space "其他实体关联空间")|默认|不支持||||
|恢复|Recover|[实体处理逻辑](module/Wiki/Space/logic/recover "恢复")|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||
|取消星标|Un_favorite|[实体处理逻辑](module/Wiki/Space/logic/un_favorite "取消星标")|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[激活](module/Wiki/Space/logic/activate)|activate|无|||
|[添加空间](module/Wiki/Space/logic/add_space)|add_space|无|||
|[归档](module/Wiki/Space/logic/archive)|archive|无|||
|[自动创建主页](module/Wiki/Space/logic/auto_create_home_page)|auto_create_home_page|无||附加在实体的CREATE行为后|
|[创建之前](module/Wiki/Space/logic/before_create)|before_create|无|||
|[生成最近访问](module/Wiki/Space/logic/create_recent)|create_recent|无|||
|[取消关联](module/Wiki/Space/logic/del_relation)|del_relation|无|||
|[删除](module/Wiki/Space/logic/delete)|delete|无|||
|[设置星标](module/Wiki/Space/logic/favorite)|favorite|无|||
|[移出分类](module/Wiki/Space/logic/move_out_category)|move_out_category|无|||
|[无操作](module/Wiki/Space/logic/nothing)|nothing|无|||
|[其他实体关联空间](module/Wiki/Space/logic/other_re_space)|other_re_space|无|||
|[恢复](module/Wiki/Space/logic/recover)|recover|无|||
|[取消星标](module/Wiki/Space/logic/un_favorite)|un_favorite|无|||


## 主状态控制

<p class="panel-title"><b>控制属性</b></p>

* `是否星标(IS_FAVORITE)` 



> 控制属性未配置代码表，或者代码表未配置代码项



## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[管理员(admin)](module/Wiki/Space/query/Admin)|admin|否|否 |否 ||
|[已归档(archived)](module/Wiki/Space/query/Archived)|archived|否|否 |否 ||
|[目录下空间(category_space)](module/Wiki/Space/query/Category_space)|category_space|否|否 |否 ||
|[数据查询(DEFAULT)](module/Wiki/Space/query/Default)|DEFAULT|是|否 |否 ||
|[已删除(deleted)](module/Wiki/Space/query/Deleted)|deleted|否|否 |否 ||
|[查询星标(favorite)](module/Wiki/Space/query/Favorite)|favorite|否|否 |否 ||
|[未存在目录中的空间(no_category_space)](module/Wiki/Space/query/No_category_space)|no_category_space|否|否 |否 ||
|[未关联的空间（产品）(no_re_space_product)](module/Wiki/Space/query/No_re_space_product)|no_re_space_product|否|否 |否 ||
|[正常状态(normal)](module/Wiki/Space/query/Normal)|normal|否|否 |否 ||
|[产品关联的空间(product_re_space)](module/Wiki/Space/query/Product_re_space)|product_re_space|否|否 |否 ||
|[操作用户(user)](module/Wiki/Space/query/User)|user|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/Wiki/Space/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[管理员(admin)](module/Wiki/Space/dataset/Admin)|admin|数据查询|否|||
|[已归档(archived)](module/Wiki/Space/dataset/Archived)|archived|数据查询|否|||
|[目录下空间(category_space)](module/Wiki/Space/dataset/Category_space)|category_space|数据查询|否|||
|[数据集(DEFAULT)](module/Wiki/Space/dataset/Default)|DEFAULT|数据查询|是|||
|[已删除(deleted)](module/Wiki/Space/dataset/Deleted)|deleted|数据查询|否|||
|[查询星标(favorite)](module/Wiki/Space/dataset/Favorite)|favorite|数据查询|否|||
|[未存在目录中的空间(no_category_space)](module/Wiki/Space/dataset/No_category_space)|no_category_space|数据查询|否|||
|[未关联的空间(no_re_space)](module/Wiki/Space/dataset/No_re_space)|no_re_space|数据查询|否|||
|[正常状态(normal)](module/Wiki/Space/dataset/Normal)|normal|数据查询|否|||
|[关联的空间(other_re_space)](module/Wiki/Space/dataset/Other_re_space)|other_re_space|数据查询|否|||
|[操作用户(user)](module/Wiki/Space/dataset/User)|user|数据查询|否|||


## 数据权限

##### 管理员（读写） :id=Space-ADMIN_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[管理员(admin)](module/Wiki/Space#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `SUBDATA`
* `UPDATE`
* `DELETE`



##### 全部数据（读写） :id=Space-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`
* `READ`
* `DELETE`
* `UPDATE`
* `SUBDATA`



##### 全部数据（写） :id=Space-ALL_W

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`
* `UPDATE`
* `DELETE`



##### 普通用户（读写） :id=Space-USER_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[操作用户(user)](module/Wiki/Space#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `SUBDATA`
* `READ`






## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_VISIBILITY_EQ|可见范围|EQ|
|N_IS_FAVORITE_EQ|是否星标|EQ|
|N_NAME_LIKE|空间名称|LIKE|
|N_ID_EQ|标识|EQ|
|N_CATEGORY_ID_EQ|分类|EQ|
|N_CATEGORY_NAME_EQ|分类|EQ|
|N_CATEGORY_NAME_LIKE|分类|LIKE|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 新建目录 | create_category | 新建目录 |无数据|用户自定义|否|无||
| 打开空间主页面 | open_space_index | 打开空间主页面 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[空间](app/view/spaceindex_view)</details>|否|无||
| 取消星标 | cancel_favorite | 取消星标 |单项数据（主键）|<details><summary>后台调用</summary>[Un_favorite](#行为)|是|引用树节点父节点||
| 编辑空间基本信息 | edit_space_info | 编辑基本信息 |单项数据（主键）|用户自定义|否|无||
| 产品关联空间 | add_re_space | 添加关联空间 |无数据|<details><summary>打开视图或向导（模态）</summary>[关联空间](app/view/spaceproduct_choose_re_space)</details>|否|引用视图或树节点||
| 已删除_恢复 | recover | 恢复 |单项数据（主键）|<details><summary>后台调用</summary>[Recover](#行为)|是|引用视图或树节点||
| 取消关联（其他实体关联） | del_relation | 取消关联 |单项数据（主键）|<details><summary>后台调用</summary>[Del_relation](#行为)|是|引用树节点父节点||
| 回收站 | open_deleted_view | 回收站 |单项数据（主键）|用户自定义|否|无||
| 设置星标 | add_favorite | 设置星标 |单项数据（主键）|<details><summary>后台调用</summary>[Favorite](#行为)|是|引用树节点父节点||
| 进行中_删除 | in_progress_into_deleted | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Delete](#行为)|是|引用视图或树节点||
| 打开空间配置 | open_space_setting | 空间配置 |无数据|<details><summary>打开视图或向导（模态）</summary>[配置中心](app/view/spacetree_exp_view_config)</details>|否|无||
| 更多设置 | more_setting | 更多设置 |单项数据（主键）|用户自定义|否|无||
| 打开空间导航页 | open_space_exp_page | 打开空间导航页 |无数据|<details><summary>打开顶级视图</summary>[知识管理](app/view/spacetree_exp_view)</details>|否|无||
| 查看空间信息 | space_info | 空间信息 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[空间信息](app/view/spaceinfo_view)</details>|否|引用视图或树节点||
| 移出分类 | move_out_category | 移出分类 |多项数据（主键）|<details><summary>后台调用</summary>[Move_out_category](#行为)|是|引用视图或树节点||
| 查看空间成员 | open_space_member | 空间成员 |单项数据（主键）|用户自定义|否|无||
| 已归档_删除 | delete | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Delete](#行为)|是|引用视图或树节点||
| 进行中_归档 | in_progress_into_archived | 归档 |单项数据（主键）|<details><summary>后台调用</summary>[Archive](#行为)|是|引用视图或树节点||
| 已归档_激活 | activate | 激活 |单项数据（主键）|<details><summary>后台调用</summary>[Activate](#行为)|是|引用视图或树节点||
| 新开窗口（空间） | open_new | 新窗口打开 |单项数据（主键）|<details><summary>打开HTML页面</summary>*./#/-/index/space=${data.id}/spaceindex_view/srfnav=drgroup/article_pagetree_exp_view/srfnavctx=%257B%2522srfdefaulttoroutedepth%2522%253A3%257D;*</details>|否|无||


## 界面逻辑
|  中文名 | 代码名 |
| --------|--------|
|[新建目录](module/Wiki/Space/uilogic/create_category)|create_category|
|[产品关联空间](module/Wiki/Space/uilogic/product__re_space)|product__re_space|
|[批量删除空间成员临时数据](module/Wiki/Space/uilogic/remove_batch_temp)|remove_batch_temp|
|[刷新当前表格](module/Wiki/Space/uilogic/refresh_current_grid)|refresh_current_grid|
