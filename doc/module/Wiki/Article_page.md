# 页面(Article_page)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|编号|IDENTIFIER|文本，可指定长度|100|[值规则](module/Wiki/Article_page/value_rule/Identifier#defvaluerule)<br>[默认规则](module/Wiki/Article_page/value_rule/Identifier#default)|[页面编号](index/sequence_index#seq_page_id)|√||
|正文格式|FORMAT_TYPE|单项选择(文本值)|60|[默认规则](module/Wiki/Article_page/value_rule/Format_type#default)||||
|序号|SEQUENCE|数值|0|||||
|正文|CONTENT|长文本，没有长度限制|1048576|[默认规则](module/Wiki/Article_page/value_rule/Content#default)||||
|类型|TYPE|[单项选择(文本值)](index/dictionary_index#Page_type "页面类型")|60|[默认规则](module/Wiki/Article_page/value_rule/Type#default)||||
|是否星标|IS_FAVORITE|文本，可指定长度|200|[默认规则](module/Wiki/Article_page/value_rule/Is_favorite#default)||||
|是否叶子节点|IS_LEAF|是否逻辑|0|||||
|空间编号|SPACE_IDENTIFIER|外键值附加数据|15|[默认规则](module/Wiki/Article_page/value_rule/Space_identifier#default)||||
|附件|ATTACHMENTS|一对多关系数据集合|1048576|[默认规则](module/Wiki/Article_page/value_rule/Attachments#default)||||
|是否已归档|IS_ARCHIVED|是否逻辑|0|||||
|是否已删除|IS_DELETED|是否逻辑|0|||||
|关注|ATTENTIONS|一对多关系数据集合|1048576|[默认规则](module/Wiki/Article_page/value_rule/Attentions#default)||||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|[默认规则](module/Wiki/Article_page/value_rule/Show_identifier#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/Wiki/Article_page/value_rule/Id#default)||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/Wiki/Article_page/value_rule/Update_man#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|主题|NAME|文本，可指定长度|200|[默认规则](module/Wiki/Article_page/value_rule/Name#default)||√||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/Wiki/Article_page/value_rule/Create_man#default)||||
|空间标识|SPACE_ID|外键值|100|[默认规则](module/Wiki/Article_page/value_rule/Space_id#default)||||
|父页面标识|PARENT_ID|外键值|100|[默认规则](module/Wiki/Article_page/value_rule/Parent_id#default)||||
|空间名称|SPACE_NAME|外键值文本|200|[默认规则](module/Wiki/Article_page/value_rule/Space_name#default)||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DER1N_PAGE_PAGE_PARENT_ID](der/DER1N_PAGE_PAGE_PARENT_ID)|[页面(PAGE)](module/Wiki/Article_page)|1:N关系||
|[DER1N_PAGE_VERSION_PAGE_PAGE_ID](der/DER1N_PAGE_VERSION_PAGE_PAGE_ID)|[页面版本(PAGE_VERSION)](module/Wiki/Page_version)|1:N关系||
|[DERCOSTOM_COMMENT_PAGE_PRINCIPAL_ID](der/DERCOSTOM_COMMENT_PAGE_PRINCIPAL_ID)|[评论(COMMENT)](module/Base/Comment)|自定义关系||
|[DERCUSTOM_ATTENTION_PAGE_OWNER_ID](der/DERCUSTOM_ATTENTION_PAGE_OWNER_ID)|[关注(ATTENTION)](module/Base/Attention)|自定义关系||
|[DERCUSTOM_PAGE_ATTACHMENT](der/DERCUSTOM_PAGE_ATTACHMENT)|[附件(ATTACHMENT)](module/Base/Attachment)|自定义关系||

#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_PAGE_PAGE_PARENT_ID](der/DER1N_PAGE_PAGE_PARENT_ID)|[页面(PAGE)](module/Wiki/Article_page)|1:N关系||
|[DER1N_PAGE_SPACE_SPACE_ID](der/DER1N_PAGE_SPACE_SPACE_ID)|[空间(SPACE)](module/Wiki/Space)|1:N关系||
<!-- tabs:end -->

## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#Article_page_Create)|||
|Update|Update|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#Article_page_Get)|||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|删除|Delete|[实体处理逻辑](module/Wiki/Article_page/logic/delete "删除")|默认|不支持||||
|设置星标|Favorite|[实体处理逻辑](module/Wiki/Article_page/logic/favorite "设置星标")|默认|不支持||||
|从模板获取数据|Get_form_stencil|[实体处理逻辑](module/Wiki/Article_page/logic/get_form_stencil "获取模板数据")|默认|不支持||||
|无操作|Nothing|[实体处理逻辑](module/Wiki/Article_page/logic/nothing "无操作")|默认|不支持||||
|恢复|Recover|[实体处理逻辑](module/Wiki/Article_page/logic/recover "恢复")|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||
|另存为模板|Save_to_stencil|[实体处理逻辑](module/Wiki/Article_page/logic/save_to_stencil "另存为模板")|默认|不支持||||
|取消星标|Un_favorite|[实体处理逻辑](module/Wiki/Article_page/logic/un_favorite "取消星标")|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[生成最近访问](module/Wiki/Article_page/logic/create_recent)|create_recent|无|||
|[删除](module/Wiki/Article_page/logic/delete)|delete|无|||
|[设置星标](module/Wiki/Article_page/logic/favorite)|favorite|无|||
|[获取模板数据](module/Wiki/Article_page/logic/get_form_stencil)|get_form_stencil|无|||
|[无操作](module/Wiki/Article_page/logic/nothing)|nothing|无|||
|[恢复](module/Wiki/Article_page/logic/recover)|recover|无|||
|[另存为模板](module/Wiki/Article_page/logic/save_to_stencil)|save_to_stencil|无|||
|[取消星标](module/Wiki/Article_page/logic/un_favorite)|un_favorite|无|||


## 主状态控制

<p class="panel-title"><b>控制属性</b></p>

* `是否星标(IS_FAVORITE)` 



> 控制属性未配置代码表，或者代码表未配置代码项



## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[数据查询(DEFAULT)](module/Wiki/Article_page/query/Default)|DEFAULT|是|否 |否 ||
|[主页(home_page)](module/Wiki/Article_page/query/Home_page)|home_page|否|否 |否 ||
|[已删除页面(is_deleted)](module/Wiki/Article_page/query/Is_deleted)|is_deleted|否|否 |否 ||
|[我的收藏(my_favorite_page)](module/Wiki/Article_page/query/My_favorite_page)|my_favorite_page|否|否 |否 ||
|[无父页面(no_parent_page)](module/Wiki/Article_page/query/No_parent_page)|no_parent_page|否|否 |否 ||
|[正常(normal)](module/Wiki/Article_page/query/Normal)|normal|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/Wiki/Article_page/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/Wiki/Article_page/dataset/Default)|DEFAULT|数据查询|是|||
|[主页(home_page)](module/Wiki/Article_page/dataset/Home_page)|home_page|数据查询|否|||
|[已删除页面(is_deleted)](module/Wiki/Article_page/dataset/Is_deleted)|is_deleted|数据查询|否|||
|[我的收藏(my_favorite_page)](module/Wiki/Article_page/dataset/My_favorite_page)|my_favorite_page|数据查询|否|||
|[无父页面(no_parent_page)](module/Wiki/Article_page/dataset/No_parent_page)|no_parent_page|数据查询|否|||
|[正常(normal)](module/Wiki/Article_page/dataset/Normal)|normal|数据查询|否|||




## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_FORMAT_TYPE_EQ|正文格式|EQ|
|N_TYPE_EQ|类型|EQ|
|N_IS_FAVORITE_EQ|是否星标|EQ|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|主题|LIKE|
|N_SPACE_ID_EQ|空间标识|EQ|
|N_PARENT_ID_EQ|父页面标识|EQ|
|N_PARENT_ID_ISNULL|父页面标识|ISNULL|
|N_SPACE_NAME_EQ|空间名称|EQ|
|N_SPACE_NAME_LIKE|空间名称|LIKE|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 重命名 | toolbar_tree_exp_viewnode_2_cm_deuiaction2_click | 重命名 |单项数据|用户自定义|否|无||
| 关闭 | toolbar_show_view_modeltoolbar_deuiaction3_click | 关闭 |单项数据|用户自定义|否|无||
| 添加附件 | add_attachments | 添加附件 |无数据|用户自定义|否|无||
| 删除 | delete | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Delete](#行为)|是|引用视图或树节点||
| 重命名 | toolbar_tree_exp_viewnode_5_cm_deuiaction2_click | 重命名 |单项数据|用户自定义|否|无||
| 从模板新建（打开从模板新建视图） | get_form_stencil | 从模版新建 |单项数据|<details><summary>打开视图或向导（模态）</summary>[新建页面](app/view/article_pagenew_view_form_stencil)</details>|否|引用视图或树节点||
| 评论 | toolbar_show_customViewtoolbar_deuiaction2_click | 评论 |单项数据|用户自定义|否|无||
| 关闭 | toolbar_show_viewtoolbar_deuiaction3_click | 关闭 |单项数据|用户自定义|否|无||
| 重命名 | toolbar_tree_exp_viewnode_1_cm_deuiaction2_click | 重命名 |单项数据|用户自定义|否|无||
| 删除 | toolbar_tree_exp_viewnode_2_cm_deuiaction1_click | 删除 |单项数据|用户自定义|否|无||
| 新建分组 | toolbar_tree_exp_viewtreeexpbar_toolbar_deuiaction2_click | 新建分组 |单项数据|用户自定义|否|无||
| 删除 | toolbar_tree_exp_viewnode_4_cm_deuiaction1_click | 删除 |单项数据|用户自定义|否|无||
| 取消收藏 | cancel_favorite | 取消收藏 |单项数据（主键）|<details><summary>后台调用</summary>[Un_favorite](#行为)|是|引用视图或树节点||
| 另存为模板 | save_to_stencil | 另存为模板 |单项数据|<details><summary>后台调用</summary>[Save_to_stencil](#行为)|是|引用视图或树节点||
| 打开界面编辑页 | open_page_edit_view | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[页面](app/view/article_pageedit_view_document)</details>|否|引用视图或树节点||
| 恢复 | recover | 恢复 |多项数据（主键）|<details><summary>后台调用</summary>[Recover](#行为)|是|引用视图或树节点||
| 评论 | toolbar_show_view_modeltoolbar_deuiaction2_click | 评论 |单项数据|用户自定义|否|无||
| 收藏 | add_favorite | 收藏 |单项数据（主键）|<details><summary>后台调用</summary>[Favorite](#行为)|是|引用视图或树节点||
| 重命名 | toolbar_tree_exp_viewnode_3_cm_deuiaction2_click | 重命名 |单项数据|用户自定义|否|无||
| 关闭 | toolbar_show_customViewtoolbar_deuiaction3_click | 关闭 |单项数据|用户自定义|否|无||
| 从模板新建 | toolbar_tree_exp_viewtreeexpbar_toolbar_deuiaction4_click | 模板中心 |单项数据|<details><summary>打开视图或向导（模态）</summary>[模板中心](app/view/stencillist_exp_view)</details>|否|无||
| 快速新建文档 | quick_create_page_document | 新建页面 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建页面](app/view/article_pagecreate_view_document)</details>|否|引用视图或树节点||
| 关闭 | toolbar_re_show_viewtoolbar_deuiaction3_click | 关闭 |单项数据|用户自定义|否|无||
| 上传附件 | upload_attachment | 上传 |无数据|用户自定义|否|无||
| 重命名 | toolbar_tree_exp_viewnode_4_cm_deuiaction2_click | 重命名 |单项数据|用户自定义|否|无||
| 显示模板 | show_stencil | 显示模板 |无数据|用户自定义|否|无||
| 删除 | toolbar_tree_exp_viewnode_1_cm_deuiaction1_click | 删除 |单项数据|用户自定义|否|无||
| 删除 | toolbar_tree_exp_viewnode_5_cm_deuiaction1_click | 删除 |单项数据|用户自定义|否|无||
| 评论 | toolbar_re_show_viewtoolbar_deuiaction2_click | 评论 |单项数据|用户自定义|否|无||
| 评论 | toolbar_show_viewtoolbar_deuiaction2_click | 评论 |单项数据|用户自定义|否|无||
| 删除 | toolbar_tree_exp_viewnode_3_cm_deuiaction1_click | 删除 |单项数据|用户自定义|否|无||


## 界面逻辑
|  中文名 | 代码名 |
| --------|--------|
|[新建分组](module/Wiki/Article_page/uilogic/create_section)|create_section|
|[关闭评论区](module/Wiki/Article_page/uilogic/close_comment)|close_comment|
|[添加附件数据](module/Wiki/Article_page/uilogic/add_attachment)|add_attachment|
|[删除页面](module/Wiki/Article_page/uilogic/delete_page)|delete_page|
|[显示模板](module/Wiki/Article_page/uilogic/show_stencil)|show_stencil|
|[编辑节点](module/Wiki/Article_page/uilogic/edit_section_or_category)|edit_section_or_category|
|[显示评论区](module/Wiki/Article_page/uilogic/show_commnet)|show_commnet|
|[刷新当前表格](module/Wiki/Article_page/uilogic/refresh_current_grid)|refresh_current_grid|
