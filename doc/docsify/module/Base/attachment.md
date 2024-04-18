# 附件(attachment)  <!-- {docsify-ignore-all} -->


与工作项或文档、需求等实体关联的文件，用于提供额外信息。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|文件标识|FILE_ID|文件|500|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|是||
|所属数据标识|OWNER_ID|文本，可指定长度|100|是||
|所属对象子类型|OWNER_SUBTYPE|文本，可指定长度|100|是||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|是||
|父对象版本标识|PARENT_VERSION_ID|文本，可指定长度|100|是||
|标题|TITLE|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|工作项编号|WORK_ITEM_IDENTIFIER|文本，可指定长度|100|是||
|工作项标题|WORK_ITEM_TITLE|文本，可指定长度|100|是||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_ATTACHMENT_STENCIL](der/DERCUSTOM_ATTACHMENT_STENCIL)|[页面模板(STENCIL)](module/Wiki/stencil)|自定义关系||
|[DERCUSTOM_IDEA_ATTACHMENT](der/DERCUSTOM_IDEA_ATTACHMENT)|[需求(IDEA)](module/ProdMgmt/idea)|自定义关系||
|[DERCUSTOM_PAGE_ATTACHMENT](der/DERCUSTOM_PAGE_ATTACHMENT)|[页面(PAGE)](module/Wiki/article_page)|自定义关系||
|[DERCUSTOM_REVIEW_ATTACHMENT](der/DERCUSTOM_REVIEW_ATTACHMENT)|[评审(REVIEW)](module/TestMgmt/review)|自定义关系||
|[DERCUSTOM_TEST_CASE_ATTACHMENT](der/DERCUSTOM_TEST_CASE_ATTACHMENT)|[用例(TEST_CASE)](module/TestMgmt/test_case)|自定义关系||
|[DERCUSTOM_TICKET_ATTACHMENT](der/DERCUSTOM_TICKET_ATTACHMENT)|[工单(TICKET)](module/ProdMgmt/ticket)|自定义关系||
|[DERCUSTOM_WORK_ITEM_ATTACHMENT](der/DERCUSTOM_WORK_ITEM_ATTACHMENT)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|自定义关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/attachment/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/attachment/query/View)|VIEW|否|否 |否 ||
|[项目下的交付物(project_deliverable)](module/Base/attachment/query/project_deliverable)|project_deliverable|否|否 |是 ||
|[工作项交付物(work_item_deliverable)](module/Base/attachment/query/work_item_deliverable)|work_item_deliverable|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/attachment/dataset/Default)|DEFAULT|数据查询|是|||
|[项目下的交付物(project_deliverable)](module/Base/attachment/dataset/project_deliverable)|project_deliverable|数据查询|否|||
|[工作项交付物(work_item_deliverable)](module/Base/attachment/dataset/work_item_deliverable)|work_item_deliverable|数据查询|否|||

## 数据权限

##### 全部数据（读写） :id=attachment-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`
* `READ`
* `UPDATE`
* `DELETE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_CREATE_MAN_EQ|建立人|EQ||
|N_CREATE_TIME_EQ|建立时间|EQ||
|N_CREATE_TIME_GTANDEQ|建立时间|GTANDEQ||
|N_CREATE_TIME_LTANDEQ|建立时间|LTANDEQ||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_OWNER_ID_EQ|所属数据标识|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 附件下载 | download | 下载 |单项数据|用户自定义||
| 附件删除（表格） | delete_grid | 删除 |单项数据|用户自定义||
| 添加附件数据（表格） | add_attachments_grid | 添加附件数据 |无数据|用户自定义||
| 附件删除 | delete | 删除 |单项数据（主键）|用户自定义||
| 上传附件 | upload_attachment | 上传 |无数据|用户自定义||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[添加附件数据](module/Base/attachment/uilogic/add_attachment)|add_attachment|调用附件上传行为，添加附件数据|
|[添加附件数据(表格)](module/Base/attachment/uilogic/add_attachment_grid)|add_attachment_grid|调用附件上传行为，添加附件数据|
|[计算附件是否隐藏逻辑](module/Base/attachment/uilogic/calc_attachment_hidden)|calc_attachment_hidden|根据表格数据判断附件表格的显示或隐藏|
|[附件删除](module/Base/attachment/uilogic/remove_attachment)|remove_attachment|自动判断为表格或表单附件，按类别删除|
|[附件删除（表格）](module/Base/attachment/uilogic/remove_attachment_grid)|remove_attachment_grid|调用表格的行删除方法，删除指定行附件|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/attachment?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/attachment?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/attachment?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/attachment?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/attachment?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/attachment?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/attachment?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/attachment?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/attachment?id=界面逻辑`">
  界面逻辑
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
show_der:'minor',


      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>