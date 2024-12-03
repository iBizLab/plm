# 页面(article_page)  <!-- {docsify-ignore-all} -->


存储知识文档的页面，支持内容编辑和版本管理。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|访问密码|ACCESS_PASSWORD|文本，可指定长度|100|是||
|附件|ATTACHMENTS|一对多关系数据集合|1048576|是||
|关注|ATTENTIONS|一对多关系数据集合|1048576|是||
|关注数|ATTENTION_COUNT|文本，可指定长度|200|是||
|类别路径|CATEGORIES|长文本，长度1000|2000|是||
|选择版本标识|CHOOSE_VERSION_ID|文本，可指定长度|100|是||
|选择版本名称|CHOOSE_VERSION_NAME|文本，可指定长度|100|是||
|评论数|COMMENT_COUNT|文本，可指定长度|200|是||
|正文|CONTENT|长文本，没有长度限制|16777215|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|当前版本标识|CUR_VERSION_ID|文本，可指定长度|100|是||
|当前版本名称|CUR_VERSION_NAME|文本，可指定长度|100|是||
|共享有效期|EXPIRATION_DATE|日期型||是||
|正文格式|FORMAT_TYPE|单项选择(文本值)|60|是||
|图标|ICON|文本，可指定长度|500|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|编号<sup class="footnote-symbol">[[序列]](index/sequence_index#seq_page_id)</sup>|IDENTIFIER|文本，可指定长度|100|是||
|是否已归档|IS_ARCHIVED|是否逻辑||是||
|是否已删除|IS_DELETED|是否逻辑||是||
|是否星标|IS_FAVORITE|文本，可指定长度|200|是||
|是否叶子节点|IS_LEAF|是否逻辑||是||
|是否锁定|IS_LOCK|是否逻辑||是||
|是否发布|IS_PUBLISHED|是否逻辑||是||
|是否开启共享|IS_SHARED|单项选择(文本值)|60|是||
|是否同时共享子页面|IS_SHARED_SUBSET|单项选择(文本值)|60|是||
|主题|NAME|文本，可指定长度|200|否||
|父页面标识|PARENT_ID|外键值|100|是||
|发布状态|PUBLISHED|是否逻辑||是||
|发布正文|PUBLISH_CONTENT|长文本，没有长度限制|16777215|是||
|发布人|PUBLISH_MAN|文本，可指定长度|100|是||
|发布主题|PUBLISH_NAME|文本，可指定长度|200|是||
|发布时间|PUBLISH_TIME|日期时间型||是||
|共享只读能力|READ_SHARED|是否逻辑|200|是||
|最近创建日期|RECENT_CREATE_DAYS|整型||是||
|序号|SEQUENCE|数值||是||
|共享人|SHARED_BY|文本，可指定长度|100|是||
|共享时间|SHARED_TIME|日期时间型||是||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|是||
|空间标识|SPACE_ID|外键值|100|否||
|空间编号|SPACE_IDENTIFIER|外键值附加数据|15|是||
|空间名称|SPACE_NAME|外键值文本|200|是||
|类型|TYPE|[单项选择(文本值)](index/dictionary_index#page_type "页面类型")|60|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


###### 属性组

<el-row>
<el-tabs v-model="show_field_group">

<el-tab-pane label="高级搜索" name="field_group_advanced_search">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|空间标识|SPACE_ID|外键值|100|否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|是||
|主题|NAME|文本，可指定长度|200|否||
|空间名称|SPACE_NAME|外键值文本|200|是||

</el-tab-pane>
<el-tab-pane label="名称" name="field_group_name">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|发布主题|PUBLISH_NAME|文本，可指定长度|200|是||
|主题|NAME|文本，可指定长度|200|否||
|空间标识|SPACE_ID|外键值|100|否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|父页面标识|PARENT_ID|外键值|100|是||
|图标|ICON|文本，可指定长度|500|是||

</el-tab-pane>
<el-tab-pane label="通用属性组" name="field_group_normal">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|是否同时共享子页面|IS_SHARED_SUBSET|单项选择(文本值)|60|是||
|是否开启共享|IS_SHARED|单项选择(文本值)|60|是||
|图标|ICON|文本，可指定长度|500|是||
|是否锁定|IS_LOCK|是否逻辑||是||
|选择版本标识|CHOOSE_VERSION_ID|文本，可指定长度|100|是||
|选择版本名称|CHOOSE_VERSION_NAME|文本，可指定长度|100|是||
|类别路径|CATEGORIES|长文本，长度1000|2000|是||
|正文格式|FORMAT_TYPE|单项选择(文本值)|60|是||
|是否星标|IS_FAVORITE|文本，可指定长度|200|是||
|发布状态|PUBLISHED|是否逻辑||是||
|发布主题|PUBLISH_NAME|文本，可指定长度|200|是||
|发布正文|PUBLISH_CONTENT|长文本，没有长度限制|16777215|是||
|发布人|PUBLISH_MAN|文本，可指定长度|100|是||
|发布时间|PUBLISH_TIME|日期时间型||是||
|是否发布|IS_PUBLISHED|是否逻辑||是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|当前版本名称|CUR_VERSION_NAME|文本，可指定长度|100|是||
|是否已删除|IS_DELETED|是否逻辑||是||
|正文|CONTENT|长文本，没有长度限制|16777215|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|编号<sup class="footnote-symbol">[[序列]](index/sequence_index#seq_page_id)</sup>|IDENTIFIER|文本，可指定长度|100|是||
|建立时间|CREATE_TIME|日期时间型||否||
|主题|NAME|文本，可指定长度|200|否||
|空间编号|SPACE_IDENTIFIER|外键值附加数据|15|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|关注|ATTENTIONS|一对多关系数据集合|1048576|是||
|当前版本标识|CUR_VERSION_ID|文本，可指定长度|100|是||
|编号|SHOW_IDENTIFIER|文本，可指定长度|200|是||
|更新时间|UPDATE_TIME|日期时间型||否||
|父页面标识|PARENT_ID|外键值|100|是||
|空间名称|SPACE_NAME|外键值文本|200|是||
|是否叶子节点|IS_LEAF|是否逻辑||是||
|附件|ATTACHMENTS|一对多关系数据集合|1048576|是||
|序号|SEQUENCE|数值||是||
|类型|TYPE|[单项选择(文本值)](index/dictionary_index#page_type "页面类型")|60|是||
|是否已归档|IS_ARCHIVED|是否逻辑||是||
|空间标识|SPACE_ID|外键值|100|否||

</el-tab-pane>
<el-tab-pane label="共享属性" name="field_group_shared_fields">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|主题|NAME|文本，可指定长度|200|否||
|是否开启共享|IS_SHARED|单项选择(文本值)|60|是||
|是否同时共享子页面|IS_SHARED_SUBSET|单项选择(文本值)|60|是||
|共享有效期|EXPIRATION_DATE|日期型||是||
|发布主题|PUBLISH_NAME|文本，可指定长度|200|是||
|更新时间|UPDATE_TIME|日期时间型||否||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|共享人|SHARED_BY|文本，可指定长度|100|是||
|共享时间|SHARED_TIME|日期时间型||是||
|空间标识|SPACE_ID|外键值|100|否||

</el-tab-pane>
<el-tab-pane label="共享只读" name="field_group_shared_read">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|是否开启共享|IS_SHARED|单项选择(文本值)|60|是||
|共享只读能力|READ_SHARED|是否逻辑|200|是||

</el-tab-pane>

</el-tabs>
</el-row>

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_PAGE_PAGE_PARENT_ID](der/DER1N_PAGE_PAGE_PARENT_ID)|[页面(PAGE)](module/Wiki/article_page)|1:N关系||
|[DERCOSTOM_COMMENT_PAGE_PRINCIPAL_ID](der/DERCOSTOM_COMMENT_PAGE_PRINCIPAL_ID)|[评论(COMMENT)](module/Base/comment)|自定义关系||
|[DERCUSTOM_ATTENTION_PAGE_OWNER_ID](der/DERCUSTOM_ATTENTION_PAGE_OWNER_ID)|[关注(ATTENTION)](module/Base/attention)|自定义关系||
|[DERCUSTOM_MEMBER_PAGE_OWNER_ID](der/DERCUSTOM_MEMBER_PAGE_OWNER_ID)|[成员(MEMBER)](module/Base/member)|自定义关系||
|[DERCUSTOM_PAGE_ATTACHMENT](der/DERCUSTOM_PAGE_ATTACHMENT)|[附件(ATTACHMENT)](module/Base/attachment)|自定义关系||
|[DERCUSTOM_PAGE_SEARCH_ATTACHMENT](der/DERCUSTOM_PAGE_SEARCH_ATTACHMENT)|[附件搜索(SEARCH_ATTACHMENT)](module/Base/search_attachment)|自定义关系||
|[DERCUSTOM_PAGE_SEARCH_COMMENT](der/DERCUSTOM_PAGE_SEARCH_COMMENT)|[评论搜索(SEARCH_COMMENT)](module/Base/search_comment)|自定义关系||
|[DERCUSTOM_PAGE_VERSION_PAGE](der/DERCUSTOM_PAGE_VERSION_PAGE)|[页面版本(PAGE_VERSION)](module/Wiki/page_version)|自定义关系||
|[DERCUSTOM_RELATION_TARGET_PAGE](der/DERCUSTOM_RELATION_TARGET_PAGE)|[关联(RELATION)](module/Base/relation)|自定义关系||
|[DERCUSTOM_VERSION_PAGE](der/DERCUSTOM_VERSION_PAGE)|[版本(VERSION)](module/Base/version)|自定义关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_PAGE_PAGE_PARENT_ID](der/DER1N_PAGE_PAGE_PARENT_ID)|[页面(PAGE)](module/Wiki/article_page)|1:N关系||
|[DER1N_PAGE_SPACE_SPACE_ID](der/DER1N_PAGE_SPACE_SPACE_ID)|[空间(SPACE)](module/Wiki/space)|1:N关系||
|[DERCUSTOM_SHARED_SPACE_PAGE](der/DERCUSTOM_SHARED_SPACE_PAGE)|[共享空间(SHARED_SPACE)](module/Wiki/shared_space)|自定义关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#article_page_Create)|||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#article_page_Get)|||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持|[附加操作](index/action_logic_index#article_page_Update)|||
|校验共享访问密码|check_access_password|[实体处理逻辑](module/Wiki/article_page/logic/access_password "校验共享访问密码")|默认|不支持||||
|检验共享页面|check_shared|[实体处理逻辑](module/Wiki/article_page/logic/check_shared "检验共享页面")|默认|不支持||||
|关闭共享|closed_shared|[实体处理逻辑](module/Wiki/article_page/logic/closed_shared "关闭共享")|默认|不支持||||
|生成版本|commit_version|[实体处理逻辑](module/Wiki/article_page/logic/commit_version "生成版本")|默认|不支持||||
|复制页面|copy_page|[实体处理逻辑](module/Wiki/article_page/logic/copy_page "复制页面")|默认|不支持||||
|删除|delete|[实体处理逻辑](module/Wiki/article_page/logic/delete "删除")|默认|不支持||||
|导出页面为PDF|export_to_pdf|[实体处理逻辑](module/Wiki/article_page/logic/export_to_pdf "导出页面为pdf")|默认|不支持||||
|设置星标|favorite|[实体处理逻辑](module/Wiki/article_page/logic/favorite "设置星标")|默认|不支持||||
|完成关注|finish_add_attention|[实体处理逻辑](module/Wiki/article_page/logic/finish_add_attention "完成关注")|默认|不支持||||
|获取草稿页面|get_draft_pages|[实体处理逻辑](module/Wiki/article_page/logic/get_draft_pages "获取草稿页面")|默认|不支持||||
|锁定页面|lock_page|[实体处理逻辑](module/Wiki/article_page/logic/lock_page "锁定页面")|默认|不支持||||
|移动需求|move_order|用户自定义|默认|不支持||||
|移动页面|move_page|[实体处理逻辑](module/Wiki/article_page/logic/move_page "移动页面")|默认|不支持||||
|根据模板新建草稿|new_draft_form_stencil|[实体处理逻辑](module/Wiki/article_page/logic/get_form_stencil "获取模板数据")|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/Wiki/article_page/logic/nothing "无操作")|默认|不支持||||
|发布页面|publish_page|[实体处理逻辑](module/Wiki/article_page/logic/publish_page "发布页面")|默认|不支持||||
|发布页面（测试）|publish_page_test|[实体处理逻辑](module/Wiki/article_page/logic/publish_page "发布页面")|默认|不支持||||
|恢复|recover|[实体处理逻辑](module/Wiki/article_page/logic/recover "恢复")|默认|不支持||||
|恢复到历史版本|recover_version|[实体处理逻辑](module/Wiki/article_page/logic/recover_version "恢复历史版本")|默认|不支持||||
|另存为模板|save_to_stencil|[实体处理逻辑](module/Wiki/article_page/logic/save_to_stencil "另存为模板")|默认|不支持||||
|保存命名版本|name_version_save|[实体处理逻辑](module/Wiki/article_page/logic/set_name_version "保存命名版本")|默认|不支持||||
|获取共享设置|shared|[实体处理逻辑](module/Wiki/article_page/logic/get_shared_info "获取共享信息")|默认|不支持||||
|共享设置|shared_setting|[实体处理逻辑](module/Wiki/article_page/logic/shared_setting "共享设置")|默认|不支持|[附加操作](index/action_logic_index#article_page_shared_setting)|||
|获取页面共享链接|shared_url|[实体处理逻辑](module/Wiki/article_page/logic/shared_url "获取页面共享链接")|默认|不支持||||
|取消星标|un_favorite|[实体处理逻辑](module/Wiki/article_page/logic/un_favorite "取消星标")|默认|不支持||||
|解锁页面|unlock_page|[实体处理逻辑](module/Wiki/article_page/logic/unlock_page "解锁页面")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[保存命名版本](module/Wiki/article_page/logic/set_name_version)|set_name_version|无||设置命名版本：新建命名版本并保存|
|[共享空间下搜索页面](module/Wiki/article_page/logic/space_shared_search)|space_shared_search|无||共享空间下搜索页面时使用|
|[共享空间主页](module/Wiki/article_page/logic/space_shared_home)|space_shared_home|无||共享空间下获取主页|
|[共享空间查询顶层页面](module/Wiki/article_page/logic/space_shared_top)|space_shared_top|无||共享空间下获取顶级页面，查询无parent_id的页面数据|
|[共享设置](module/Wiki/article_page/logic/shared_setting)|shared_setting|无||共享设置|
|[关闭共享](module/Wiki/article_page/logic/closed_shared)|closed_shared|无||页面关闭共享|
|[删除](module/Wiki/article_page/logic/delete)|delete|无||页面数据的逻辑删除，修改页面的是否删除属性值|
|[发布页面](module/Wiki/article_page/logic/publish_page)|publish_page|无||页面发布，设置发布状态及发布人，发布时间|
|[发布页面（测试）](module/Wiki/article_page/logic/publish_page_test)|publish_page_test|无||（测试）页面发布，设置发布状态及发布人，发布时间|
|[取消星标](module/Wiki/article_page/logic/un_favorite)|un_favorite|无||页面取消收藏|
|[另存为模板](module/Wiki/article_page/logic/save_to_stencil)|save_to_stencil|无||将当前页面存为组织/空间模板|
|[同步发布名称与名称](module/Wiki/article_page/logic/sync_name)|sync_name|无||同步发布名称与名称|
|[基线规划页面数据查询](module/Wiki/article_page/logic/baseline_plan_page)|baseline_plan_page|无||基线规划工作项时，填充页面当前版本名称|
|[复制子页面](module/Wiki/article_page/logic/copy_child_page)|copy_child_page|无||复制页面时调用|
|[复制页面](module/Wiki/article_page/logic/copy_page)|copy_page|无||复制页面，会调用复制子页面处理逻辑|
|[完成关注](module/Wiki/article_page/logic/finish_add_attention)|finish_add_attention|无|||
|[导出页面为pdf](module/Wiki/article_page/logic/export_to_pdf)|export_to_pdf|无||导出页面为pdf|
|[恢复](module/Wiki/article_page/logic/recover)|recover|无||恢复已删除状态页面数据，修改页面的是否删除属性值，并恢复访问记录|
|[恢复历史版本](module/Wiki/article_page/logic/recover_version)|recover_version|无||恢复页面版本至某一指定历史版本|
|[无操作](module/Wiki/article_page/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[查询空间下的共享页面](module/Wiki/article_page/logic/space_shared_pages)|space_shared_pages|无||查询空间下的共享页面，通过父级标识查询子页面|
|[校验共享访问密码](module/Wiki/article_page/logic/access_password)|access_password|无||校验共享访问密码|
|[检验共享页面](module/Wiki/article_page/logic/check_shared)|check_shared|无||共享页面打开前，判断是否设置密码和有效期|
|[生成最近访问](module/Wiki/article_page/logic/create_recent)|create_recent|无||在用户对页面数据进行了get或update操作时生成相应的访问记录|
|[生成版本](module/Wiki/article_page/logic/commit_version)|commit_version|无||生成页面版本|
|[移动子页面](module/Wiki/article_page/logic/move_child_page)|move_child_page|无||移动子页面至知识空间|
|[移动页面](module/Wiki/article_page/logic/move_page)|move_page|无||移动页面至知识空间|
|[置空共享访问密码](module/Wiki/article_page/logic/reset_shared_pwd)|reset_shared_pwd|无||默认Get行为Reset共享访问密码|
|[获取共享信息](module/Wiki/article_page/logic/get_shared_info)|get_shared_info|无||页面共享设置表单，获取逻辑|
|[获取共享页面标题](module/Wiki/article_page/logic/get_shared_title)|get_shared_title|无||获取共享页面顶部标题|
|[获取历史版本](module/Wiki/article_page/logic/get_by_version)|get_by_version|无||获取当前页面的历史版本记录|
|[获取模板数据](module/Wiki/article_page/logic/get_form_stencil)|get_form_stencil|无||获取页面的模板数据，并返回|
|[获取知识空间成员](module/Wiki/article_page/logic/get_space_member)|get_space_member|无||获取知识空间成员信息，用于判断当前用户权限|
|[获取草稿页面](module/Wiki/article_page/logic/get_draft_pages)|get_draft_pages|无||查询并返回草稿数据|
|[获取页面共享链接](module/Wiki/article_page/logic/shared_url)|shared_url|无||获取页面共享链接|
|[解锁页面](module/Wiki/article_page/logic/unlock_page)|unlock_page|无||修改页面的is_lock字段|
|[设置星标](module/Wiki/article_page/logic/favorite)|favorite|无||加入到我的收藏页面|
|[访问密码加密](module/Wiki/article_page/logic/encrypt_access_key)|encrypt_access_key|无||访问密码加密|
|[访问密码解密](module/Wiki/article_page/logic/decrypt_access_key)|decrypt_access_key|无||访问密码解密|
|[锁定页面](module/Wiki/article_page/logic/lock_page)|lock_page|无||修改页面的is_lock字段|

## 功能配置
| 中文名col200    | 功能类型col150    | 功能实体col200 |  备注col700|
| --------  | :----:    | ---- |----- |
|version|版本控制|[版本(VERSION)](module/Base/version)|//autocommit=true|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Wiki/article_page/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Wiki/article_page/query/View)|VIEW|否|否 |否 ||
|[高级搜索(advanced_search)](module/Wiki/article_page/query/advanced_search)|advanced_search|否|否 |否 ||
|[全部共享页面查询(all_shared_pages)](module/Wiki/article_page/query/all_shared_pages)|all_shared_pages|否|否 |否 ||
|[基线选择页面(baseline_choose_page)](module/Wiki/article_page/query/baseline_choose_page)|baseline_choose_page|否|否 |否 ||
|[子页面(child_page)](module/Wiki/article_page/query/child_page)|child_page|否|否 |否 ||
|[选择共享页面(choose_shared)](module/Wiki/article_page/query/choose_shared)|choose_shared|否|否 |否 ||
|[草稿页面(draft_page)](module/Wiki/article_page/query/draft_page)|draft_page|否|否 |否 ||
|[主页(home_page)](module/Wiki/article_page/query/home_page)|home_page|否|否 |否 ||
|[已删除页面(is_deleted)](module/Wiki/article_page/query/is_deleted)|is_deleted|否|否 |否 ||
|[我的收藏(my_favorite_page)](module/Wiki/article_page/query/my_favorite_page)|my_favorite_page|否|否 |否 ||
|[过滤器默认查询(my_filter)](module/Wiki/article_page/query/my_filter)|my_filter|否|否 |否 ||
|[无父页面(no_parent_page)](module/Wiki/article_page/query/no_parent_page)|no_parent_page|否|否 |否 ||
|[正常(normal)](module/Wiki/article_page/query/normal)|normal|否|否 |否 ||
|[仅页面(only_page)](module/Wiki/article_page/query/only_page)|only_page|否|否 |否 |只查询页面。不包含分组及草稿|
|[public](module/Wiki/article_page/query/public)|public|否|否 |否 ||
|[reader](module/Wiki/article_page/query/reader)|reader|否|否 |否 ||
|[共享页面(shared_page)](module/Wiki/article_page/query/shared_page)|shared_page|否|否 |否 ||
|[共享自读权限(shared_reader)](module/Wiki/article_page/query/shared_reader)|shared_reader|否|否 |否 ||
|[共享搜索页面(shared_search)](module/Wiki/article_page/query/shared_search)|shared_search|否|否 |否 ||
|[共享子页面(shared_sub_pages)](module/Wiki/article_page/query/shared_sub_pages)|shared_sub_pages|否|否 |否 ||
|[与我共享(shared_with_me)](module/Wiki/article_page/query/shared_with_me)|shared_with_me|否|否 |否 ||
|[与我共享编辑权限(shared_with_me_edit)](module/Wiki/article_page/query/shared_with_me_edit)|shared_with_me_edit|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Wiki/article_page/dataset/Default)|DEFAULT|数据查询|是|||
|[高级搜索(advanced_search)](module/Wiki/article_page/dataset/advanced_search)|advanced_search|数据查询|否|||
|[全部共享页面查询(all_shared_pages)](module/Wiki/article_page/dataset/all_shared_pages)|all_shared_pages|数据查询|否|||
|[基线选择页面(baseline_choose_page)](module/Wiki/article_page/dataset/baseline_choose_page)|baseline_choose_page|数据查询|否|||
|[基线规划页面(baseline_plan_page)](module/Wiki/article_page/dataset/baseline_plan_page)|baseline_plan_page|[实体逻辑](module/Wiki/article_page/logic/baseline_plan_page)|否|||
|[选择共享页面(choose_shared)](module/Wiki/article_page/dataset/choose_shared)|choose_shared|数据查询|否|||
|[草稿页面(draft_page)](module/Wiki/article_page/dataset/draft_page)|draft_page|数据查询|否|||
|[主页(home_page)](module/Wiki/article_page/dataset/home_page)|home_page|数据查询|否|||
|[已删除页面(is_deleted)](module/Wiki/article_page/dataset/is_deleted)|is_deleted|数据查询|否|||
|[我的收藏(my_favorite_page)](module/Wiki/article_page/dataset/my_favorite_page)|my_favorite_page|数据查询|否|||
|[过滤器默认查询(my_filter)](module/Wiki/article_page/dataset/my_filter)|my_filter|数据查询|否|||
|[无父页面(no_parent_page)](module/Wiki/article_page/dataset/no_parent_page)|no_parent_page|数据查询|否|||
|[正常(normal)](module/Wiki/article_page/dataset/normal)|normal|数据查询|否|||
|[空间页面(移动端)(normal_tree_page)](module/Wiki/article_page/dataset/normal_tree_page)|normal_tree_page|数据查询|否|[TreeGridDEDataSetRuntime](index/plugin_index#UsrSFPlugin0407757309)||
|[仅页面(only_page)](module/Wiki/article_page/dataset/only_page)|only_page|数据查询|否||只查询页面。不包含分组及草稿|
|[reader](module/Wiki/article_page/dataset/reader)|reader|数据查询|否|||
|[共享页面(shared_page)](module/Wiki/article_page/dataset/shared_page)|shared_page|数据查询|否|||
|[共享只读用户(shared_reader)](module/Wiki/article_page/dataset/shared_reader)|shared_reader|数据查询|否|||
|[共享搜索页面(shared_search)](module/Wiki/article_page/dataset/shared_search)|shared_search|数据查询|否|||
|[共享子页面(shared_sub_pages)](module/Wiki/article_page/dataset/shared_sub_pages)|shared_sub_pages|数据查询|否|||
|[与我共享(shared_with_me)](module/Wiki/article_page/dataset/shared_with_me)|shared_with_me|数据查询|否|||
|[与我共享编辑权限(shared_with_me_edit)](module/Wiki/article_page/dataset/shared_with_me_edit)|shared_with_me_edit|数据查询|否|||
|[共享空间主页(space_shared_home)](module/Wiki/article_page/dataset/space_shared_home)|space_shared_home|[实体逻辑](module/Wiki/article_page/logic/space_shared_home)|否|||
|[查询空间下的共享页面(space_shared_pages)](module/Wiki/article_page/dataset/space_shared_pages)|space_shared_pages|[实体逻辑](module/Wiki/article_page/logic/space_shared_pages)|否|||
|[共享空间下搜索页面(space_shared_search)](module/Wiki/article_page/dataset/space_shared_search)|space_shared_search|[实体逻辑](module/Wiki/article_page/logic/space_shared_search)|否|||
|[共享空间查询顶层页面(space_shared_top)](module/Wiki/article_page/dataset/space_shared_top)|space_shared_top|[实体逻辑](module/Wiki/article_page/logic/space_shared_top)|否|||

## 数据权限

##### 全部数据（读写） :id=article_page-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `UPDATE`
* `READ`
* `CREATE`



##### 与我共享(写) :id=article_page-SHAERD_W

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[与我共享编辑权限(shared_with_me_edit)](module/Wiki/article_page#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ(空间(READ))`
* `UPDATE`



##### 只读共享(读) :id=article_page-SHARED_R

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[共享只读用户(shared_reader)](module/Wiki/article_page#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ(空间(READ))`



##### 操作用户(读) :id=article_page-USER_R

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[reader](module/Wiki/article_page#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `READ(空间(READ))`



##### 操作用户(写) :id=article_page-USER_W

<p class="panel-title"><b>数据范围</b></p>

* `无`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE(空间(SUBDATA))`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ATTENTIONS_EXISTS__N_USER_ID_EQ|关注|EXISTS||
|N_CATEGORIES_LIKE|类别路径|LIKE||
|N_CONTENT_LIKE|正文|LIKE||
|N_CREATE_MAN_EQ|建立人|EQ||
|N_CREATE_MAN_IN|建立人|IN||
|N_CREATE_MAN_ISNOTNULL|建立人|ISNOTNULL||
|N_CREATE_MAN_ISNULL|建立人|ISNULL||
|N_CREATE_MAN_NOTEQ|建立人|NOTEQ||
|N_CREATE_MAN_NOTIN|建立人|NOTIN||
|N_CREATE_TIME_EQ|建立时间|EQ||
|N_CREATE_TIME_GTANDEQ|建立时间|GTANDEQ||
|N_CREATE_TIME_LTANDEQ|建立时间|LTANDEQ||
|N_FORMAT_TYPE_EQ|正文格式|EQ||
|N_ID_EQ|标识|EQ||
|N_ID_IN|标识|IN||
|N_ID_NOTEQ|标识|NOTEQ||
|N_IDENTIFIER_EQ|编号|EQ||
|N_IDENTIFIER_LIKE|编号|LIKE||
|N_IS_ARCHIVED_EQ|是否已归档|EQ||
|N_IS_DELETED_EQ|是否已删除|EQ||
|N_IS_SHARED_EQ|是否开启共享|EQ||
|N_IS_SHARED_SUBSET_EQ|是否同时共享子页面|EQ||
|N_NAME_LIKE|主题|LIKE||
|N_PARENT_ID_EQ|父页面标识|EQ||
|N_PARENT_ID_ISNOTNULL|父页面标识|ISNOTNULL||
|N_PARENT_ID_ISNULL|父页面标识|ISNULL||
|N_PUBLISH_MAN_EQ|发布人|EQ||
|N_PUBLISH_TIME_GTANDEQ|发布时间|GTANDEQ||
|N_PUBLISH_TIME_LTANDEQ|发布时间|LTANDEQ||
|N_RECENT_CREATE_DAYS_LTANDEQ|最近创建日期|LTANDEQ||
|N_SHOW_IDENTIFIER_EQ|编号|EQ||
|N_SHOW_IDENTIFIER_LIKE|编号|LIKE||
|N_SPACE_ID_EQ|空间标识|EQ||
|N_SPACE_NAME_EQ|空间名称|EQ||
|N_SPACE_NAME_LIKE|空间名称|LIKE||
|N_TYPE_EQ|类型|EQ||
|N_UPDATE_TIME_GTANDEQ|更新时间|GTANDEQ||
|N_UPDATE_TIME_LTANDEQ|更新时间|LTANDEQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 移动端重命名 | mob_rename | 重命名 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[页面](app/view/article_page_mob_rename_view)</details>||
| 上传图标 | upload_icon | 上传图标 |单项数据|<details><summary>打开视图或向导（模态）</summary>[上传图标](app/view/article_page_upload_icon_option_view)</details>||
| 页面导入 | page_upload | 导入页面 |无数据|<details><summary>打开数据导入视图</summary>[多类型页面数据导入]()</details>||
| 删除 | toolbar_tree_exp_view_draft_cm_deuiaction1_click | 删除 |单项数据|用户自定义||
| 删除 | toolbar_tree_exp_view_node4_cm_deuiaction1_click | 删除 |单项数据|用户自定义||
| 发布 | release | 发布 |单项数据|用户自定义||
| 新建页面（移动端） | mob_create_page | 新建页面 |无数据|<details><summary>打开视图或向导（模态）</summary>[页面](app/view/article_page_mob_create_view)</details>||
| 解锁页面 | unlock_page | 解锁页面 |单项数据（主键）|<details><summary>后台调用</summary>[unlock_page](#行为)||
| 移动页面 | move_page | 移动页面 |单项数据（主键）|<details><summary>后台调用</summary>[move_page](#行为)||
| 重命名 | toolbar_tree_exp_view_node5_cm_deuiaction2_click | 重命名 |单项数据|用户自定义||
| 打开界面编辑页（移动端） | mob_open_page_edit_view | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[页面](app/view/article_page_mob_document_edit_view)</details>||
| 新建子分组 | toolbar_tree_exp_view_node3_cm_deuiaction4_click | 新建子分组 |单项数据|用户自定义||
| 切换草稿 | draft | 草稿 |无数据|用户自定义||
| 草稿箱(移动端) | mob_draft | 草稿箱 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[草稿箱](app/view/article_page_mob_draft_list_view)</details>||
| 保存命名版本 | set_name_version | 保存命名版本 |单项数据|<details><summary>后台调用</summary>[name_version_save](#行为)||
| 新建子分组 | toolbar_tree_exp_view_draft_cm_deuiaction4_click | 新建子分组 |单项数据|用户自定义||
| 评论 | toolbar_model_show_view_noupdown_toolbar_deuiaction2_click | 评论 |单项数据|用户自定义||
| 关闭 | toolbar_show_custom_view_toolbar_deuiaction3_click | 关闭 |单项数据|用户自定义||
| 打开界面编辑页 | open_page_edit_view | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[页面](app/view/article_page_document_edit_view)</details>||
| 新建页面（快速新建） | quick_new_page | 新建页面 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建页面](app/view/article_page_quick_new_page_option_view)</details>||
| 新建子分组 | toolbar_tree_exp_view_node5_cm_deuiaction4_click | 新建子分组 |单项数据|用户自定义||
| 复制页面 | copy_page | 复制页面 |单项数据（主键）|<details><summary>后台调用</summary>[copy_page](#行为)||
| 收藏 | add_favorite | 收藏 |单项数据（主键）|<details><summary>后台调用</summary>[favorite](#行为)||
| 新建子分组 | toolbar_tree_exp_view_node2_cm_deuiaction4_click | 新建子分组 |单项数据|用户自定义||
| 打开页面 | open_more_page | 打开页面 |无数据|用户自定义||
| 从模板新建 | toolbar_tree_exp_view_treeexpbar_toolbar_deuiaction4_click | 模板中心 |单项数据|<details><summary>打开视图或向导（模态）</summary>[模板中心](app/view/stencil_list_exp_view)</details>||
| 关闭 | toolbar_re_show_view_toolbar_deuiaction3_click | 关闭 |单项数据|用户自定义||
| 关闭共享（管理表格操作列） | closed_shared_management | 关闭共享 |单项数据（主键）|<details><summary>后台调用</summary>[closed_shared](#行为)||
| 锁定页面 | lock_page | 锁定页面 |单项数据（主键）|<details><summary>后台调用</summary>[lock_page](#行为)||
| 删除 | toolbar_tree_exp_view_node5_cm_deuiaction1_click | 删除 |单项数据|用户自定义||
| 重命名 | toolbar_tree_exp_view_node4_cm_deuiaction2_click | 重命名 |单项数据|用户自定义||
| 上传附件 | upload_attachment | 上传 |无数据|用户自定义||
| 移动端删除 | mob_delete | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)||
| 与我共享_编辑 | shared_with_me_edit | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[页面](app/view/article_page_document_edit_view)</details>||
| 恢复历史版本 | recover_version | 恢复此版本 |单项数据（主键）|<details><summary>后台调用</summary>[recover_version](#行为)||
| 删除 | toolbar_tree_exp_view_node2_cm_deuiaction1_click | 删除 |单项数据|用户自定义||
| 评论 | toolbar_model_show_view_toolbar_deuiaction2_click | 评论 |单项数据|用户自定义||
| 页面共享设置（移动端） | mob_shared_setting | 页面共享 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[页面](app/view/article_page_mob_option_view)</details>||
| 重命名 | toolbar_tree_exp_view_node1_cm_deuiaction2_click | 重命名 |单项数据|用户自定义||
| 恢复历史版本并通知刷新 | recover_version_refresh | 恢复历史版本并通知刷新 |单项数据（主键）|用户自定义||
| 移动端新建子分组 | mob_new_section | 新建子分组 |无数据|<details><summary>打开视图或向导（模态）</summary>[页面](app/view/article_page_mob_add_childgroup_view)</details>||
| 新建子分组 | toolbar_tree_exp_view_node1_cm_deuiaction4_click | 新建子分组 |单项数据|用户自定义||
| 添加附件 | add_attachments | 添加附件 |无数据|用户自定义||
| 关闭共享（移动端） | closed_shared_mob | 关闭共享 |单项数据（主键）|<details><summary>后台调用</summary>[closed_shared](#行为)||
| 复制共享页面链接 | copy_shared_url | 复制链接 |单项数据|用户自定义||
| 评论 | toolbar_re_show_view_toolbar_deuiaction2_click | 评论 |单项数据|用户自定义||
| 重命名 | toolbar_tree_exp_view_node3_cm_deuiaction2_click | 重命名 |单项数据|用户自定义||
| 删除 | delete | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[delete](#行为)||
| 移动端新建子页面（文档） | mob_create_child_document | 新建子页面 |无数据|<details><summary>打开视图或向导（模态）</summary>[页面](app/view/article_page_mob_create_view)</details>||
| 快速新建页面后续操作 | after_create_page | 新建文档 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建页面](app/view/article_page_after_new_edit_view)</details>||
| 从模板新建（打开从模板新建视图） | get_form_stencil | 从模版新建 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[新建页面](app/view/article_page_create_form_stencil_edit_view)</details>||
| 关闭 | toolbar_model_show_view_toolbar_deuiaction3_click | 关闭 |单项数据|用户自定义||
| 打开评论列表（移动端） | mob_open_comment_list | 打开评论列表 |单项数据|<details><summary>打开视图或向导（模态）</summary>[评论](app/view/comment_mob_comment_md_view)</details>||
| 删除 | toolbar_tree_exp_view_node1_cm_deuiaction1_click | 删除 |单项数据|用户自定义||
| 关闭共享 | closed_shared | 关闭共享 |单项数据（主键）|<details><summary>后台调用</summary>[closed_shared](#行为)||
| 共享设置（管理表格操作列） | open_shared_setting_management | 共享设置 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[共享设置](app/view/article_page_shared_setting_view)</details>||
| 开启页面共享 | open_shared | 页面共享 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[共享设置](app/view/article_page_shared_setting_view)</details>||
| 打开历史版本视图 | open_version_view | 历史版本 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[历史版本](app/view/page_version_list_exp_view)</details>||
| 关闭 | toolbar_show_view_toolbar_deuiaction3_click | 关闭 |单项数据|用户自定义||
| 取消收藏 | cancel_favorite | 取消收藏 |单项数据（主键）|<details><summary>后台调用</summary>[un_favorite](#行为)||
| 打开关注列表（移动端） | open_attention_list | 打开关注列表 |单项数据|<details><summary>打开视图或向导（模态）</summary>[页面关注](app/view/attention_mob_page_md_view)</details>||
| 删除 | toolbar_tree_exp_view_node3_cm_deuiaction1_click | 删除 |单项数据|用户自定义||
| 另存为模板 | save_to_stencil | 另存为模板 |单项数据|<details><summary>后台调用</summary>[save_to_stencil](#行为)||
| 恢复 | recover | 恢复 |多项数据（主键）|<details><summary>后台调用</summary>[recover](#行为)||
| 回收站 | open_deleted_view | 回收站 |无数据|用户自定义||
| 重命名 | toolbar_tree_exp_view_node2_cm_deuiaction2_click | 重命名 |单项数据|用户自定义||
| 重命名 | toolbar_tree_exp_view_draft_cm_deuiaction2_click | 重命名 |单项数据|用户自定义||
| 打开页面信息 | open_page_info | 打开页面信息 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[页面信息](app/view/article_page_page_detail_edit_view)</details>||
| 查看空间成员 | open_space_member | 空间成员 |无数据|用户自定义||
| 恢复_视图消息 | recover_message | 恢复 |单项数据（主键）|<details><summary>后台调用</summary>[recover](#行为)||
| 快速新建文档 | quick_create_page_document | 新建页面 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建页面](app/view/article_page_qucik_create_view)</details>||
| 打开更新日志 | open_show_update_logs | 打开更新日志 |单项数据|<details><summary>打开视图或向导（模态）</summary>[更新](app/view/article_page_show_update_log_view)</details>||
| 新建子页面（文档） | create_child_document | 新建文档 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建页面](app/view/article_page_qucik_create_view)</details>||
| 共享设置 | open_shared_setting | 共享设置 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[共享设置](app/view/article_page_shared_setting_view)</details>||
| 新建分组 | toolbar_tree_exp_view_treeexpbar_toolbar_deuiaction2_click | 新建分组 |单项数据|用户自定义||
| 开启页面共享（移动端） | mob_open_shared | 开启页面共享 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[页面](app/view/article_page_mob_option_view)</details>||
| 移动端收藏 | mob_add_favorite | 收藏 |单项数据（主键）|<details><summary>后台调用</summary>[favorite](#行为)||
| 评论 | toolbar_show_view_toolbar_deuiaction2_click | 评论 |单项数据|用户自定义||
| 演示 | demonstrate_document | 演示 |无数据|用户自定义||
| 关闭 | toolbar_model_show_view_noupdown_toolbar_deuiaction3_click | 关闭 |单项数据|用户自定义||
| 评论 | toolbar_show_custom_view_toolbar_deuiaction2_click | 评论 |单项数据|用户自定义||
| 新建子分组 | toolbar_tree_exp_view_node4_cm_deuiaction4_click | 新建子分组 |单项数据|用户自定义||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[共享设置表单加载数据](module/Wiki/article_page/uilogic/shared_form_data)|shared_form_data|共享设置表单加载数据|
|[关闭模板中心](module/Wiki/article_page/uilogic/close_stencil)|close_stencil|关闭模板中心|
|[关闭评论区](module/Wiki/article_page/uilogic/close_comment)|close_comment|隐藏评论区，同时显示评论按钮|
|[切换导航树显示状态](module/Wiki/article_page/uilogic/change_tree_state)|change_tree_state|切换页面导航树显示状态|
|[删除页面](module/Wiki/article_page/uilogic/delete_page)|delete_page|调用树节点的删除方法，删除指定页面|
|[删除页面显示隐藏](module/Wiki/article_page/uilogic/deleted_visible)|deleted_visible|已删除页面显示隐藏|
|[后续刷新](module/Wiki/article_page/uilogic/refresh)|refresh|后续刷新页面共享视图|
|[复制共享链接](module/Wiki/article_page/uilogic/copy_shared_url)|copy_shared_url|复制共享页面链接|
|[恢复历史版本并通知刷新](module/Wiki/article_page/uilogic/page_refresh)|page_refresh|恢复到指定版本，并调用刷新方法|
|[新建分组](module/Wiki/article_page/uilogic/create_section)|create_section|调用树节点新建方法，新建分组|
|[新建发布并通知刷新](module/Wiki/article_page/uilogic/save_notify_refresh)|save_notify_refresh|保存当前页面内容并刷新页面，点击发布按钮，触发保存非草稿页面|
|[新建子分组](module/Wiki/article_page/uilogic/create_children_section)|create_children_section|调用树节点新建方法，新建子分组|
|[显示评论区](module/Wiki/article_page/uilogic/show_commnet)|show_commnet|打开评论区，同时隐藏评论按钮|
|[添加附件数据](module/Wiki/article_page/uilogic/add_attachment)|add_attachment|调用附件上传行为，添加附件数据|
|[编辑节点](module/Wiki/article_page/uilogic/edit_section_or_category)|edit_section_or_category|编辑树节点|

## 导入模式

* **多类型页面数据导入**


存储知识文档的页面，支持内容编辑和版本管理。


<el-descriptions direction="vertical" :column="10" :size="size" border>
<el-descriptions-item label="发布正文">-</el-descriptions-item>
<el-descriptions-item label="类型">-</el-descriptions-item>
<el-descriptions-item label="正文格式">-</el-descriptions-item>
<el-descriptions-item label="空间名称">-</el-descriptions-item>
<el-descriptions-item label="空间标识">-</el-descriptions-item>
<el-descriptions-item label="父页面标识">-</el-descriptions-item>
<el-descriptions-item label="主题">-</el-descriptions-item>
<el-descriptions-item label="正文">-</el-descriptions-item>
<el-descriptions-item label="是否发布">-</el-descriptions-item>
<el-descriptions-item label="发布状态">-</el-descriptions-item>
</el-descriptions>

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Wiki/article_page?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/article_page?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/article_page?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/article_page?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/article_page?id=功能配置`">
  功能配置
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/article_page?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/article_page?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/article_page?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/article_page?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/article_page?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/article_page?id=界面逻辑`">
  界面逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Wiki/article_page?id=导入模式`">
  导入模式
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
show_der:'major',
show_field_group:'field_group_advanced_search',

      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>