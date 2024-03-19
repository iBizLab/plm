# 附件(Attachment)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|所属数据标识|OWNER_ID|文本，可指定长度|100|[默认规则](module/Base/Attachment/value_rule/Owner_id#default)||||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|[默认规则](module/Base/Attachment/value_rule/Owner_type#default)||||
|所属对象子类型|OWNER_SUBTYPE|文本，可指定长度|100|[默认规则](module/Base/Attachment/value_rule/Owner_subtype#default)||||
|文件标识|FILE_ID|文件|500|[默认规则](module/Base/Attachment/value_rule/File_id#default)||||
|工作项编号|WORK_ITEM_IDENTIFIER|文本，可指定长度|100|[默认规则](module/Base/Attachment/value_rule/Work_item_identifier#default)||||
|工作项标题|WORK_ITEM_TITLE|文本，可指定长度|100|[默认规则](module/Base/Attachment/value_rule/Work_item_title#default)||||
|标题|TITLE|文本，可指定长度|100|[默认规则](module/Base/Attachment/value_rule/Title#default)||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Attachment/value_rule/Create_man#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/Base/Attachment/value_rule/Id#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/Base/Attachment/value_rule/Name#default)||√||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Attachment/value_rule/Update_man#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||


## 关系
<!-- tabs:start -->


#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_ATTACHMENT_STENCIL](der/DERCUSTOM_ATTACHMENT_STENCIL)|[页面模板(STENCIL)](module/Wiki/Stencil)|自定义关系||
|[DERCUSTOM_IDEA_ATTACHMENT](der/DERCUSTOM_IDEA_ATTACHMENT)|[需求(IDEA)](module/ProdMgmt/Idea)|自定义关系||
|[DERCUSTOM_PAGE_ATTACHMENT](der/DERCUSTOM_PAGE_ATTACHMENT)|[页面(PAGE)](module/Wiki/Article_page)|自定义关系||
|[DERCUSTOM_RUN_ATTACHMENT](der/DERCUSTOM_RUN_ATTACHMENT)|[执行用例(RUN)](module/TestMgmt/Run)|自定义关系||
|[DERCUSTOM_TEST_CASE_ATTACHMENT](der/DERCUSTOM_TEST_CASE_ATTACHMENT)|[用例(TEST_CASE)](module/TestMgmt/Test_case)|自定义关系||
|[DERCUSTOM_TICKET_ATTACHMENT](der/DERCUSTOM_TICKET_ATTACHMENT)|[工单(TICKET)](module/ProdMgmt/Ticket)|自定义关系||
|[DERCUSTOM_WORK_ITEM_ATTACHMENT](der/DERCUSTOM_WORK_ITEM_ATTACHMENT)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|自定义关系||
<!-- tabs:end -->

## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||




## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[数据查询(DEFAULT)](module/Base/Attachment/query/Default)|DEFAULT|是|否 |否 ||
|[项目下的交付物(project_deliverable)](module/Base/Attachment/query/Project_deliverable)|project_deliverable|否|否 |是 ||
|[默认（全部数据）(VIEW)](module/Base/Attachment/query/View)|VIEW|否|否 |否 ||
|[工作项交付物(work_item_deliverable)](module/Base/Attachment/query/Work_item_deliverable)|work_item_deliverable|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/Attachment/dataset/Default)|DEFAULT|数据查询|是|||
|[项目下的交付物(project_deliverable)](module/Base/Attachment/dataset/Project_deliverable)|project_deliverable|数据查询|否|||
|[工作项交付物(work_item_deliverable)](module/Base/Attachment/dataset/Work_item_deliverable)|work_item_deliverable|数据查询|否|||


## 数据权限

##### 全部数据（读写） :id=Attachment-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`
* `READ`
* `UPDATE`
* `DELETE`






## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_OWNER_ID_EQ|所属数据标识|EQ|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|名称|LIKE|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 附件下载 | download | 下载 |单项数据|用户自定义|否|无||
| 附件删除（表格） | delete_grid | 删除 |单项数据|用户自定义|否|无||
| 添加附件数据（表格） | add_attachments_grid | 添加附件数据 |无数据|用户自定义|否|无||
| 附件删除 | delete | 删除 |单项数据（主键）|用户自定义|否|无||
| 上传附件 | upload_attachment | 上传 |无数据|用户自定义|否|无||


## 界面逻辑
|  中文名 | 代码名 |
| --------|--------|
|[添加附件数据(表格)](module/Base/Attachment/uilogic/add_attachment_grid)|add_attachment_grid|
|[添加附件数据](module/Base/Attachment/uilogic/add_attachment)|add_attachment|
|[附件删除](module/Base/Attachment/uilogic/remove_attachment)|remove_attachment|
|[附件删除（表格）](module/Base/Attachment/uilogic/remove_attachment_grid)|remove_attachment_grid|
|[计算附件是否隐藏逻辑](module/Base/Attachment/uilogic/calc_attachment_hidden)|calc_attachment_hidden|
