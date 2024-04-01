# 页面模板(Stencil)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|正文|CONTENT|长文本，没有长度限制|1048576|[默认规则](module/Wiki/Stencil/value_rule/Content#default)||||
|全局模板|IS_GLOBAL|是否逻辑|0|||||
|附件|ATTACHMENTS|一对多关系数据集合|1048576|[默认规则](module/Wiki/Stencil/value_rule/Attachments#default)||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/Wiki/Stencil/value_rule/Create_man#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/Wiki/Stencil/value_rule/Name#default)||√||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/Wiki/Stencil/value_rule/Id#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/Wiki/Stencil/value_rule/Update_man#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|空间标识|SPACE_ID|外键值|100|[默认规则](module/Wiki/Stencil/value_rule/Space_id#default)||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DERCUSTOM_ATTACHMENT_STENCIL](der/DERCUSTOM_ATTACHMENT_STENCIL)|[附件(ATTACHMENT)](module/Base/Attachment)|自定义关系||

#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_STENCIL_SPACE_SPACE_ID](der/DER1N_STENCIL_SPACE_SPACE_ID)|[空间(SPACE)](module/Wiki/Space)|1:N关系||
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
|无操作|Nothing|[实体处理逻辑](module/Wiki/Stencil/logic/nothing "无操作")|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[无操作](module/Wiki/Stencil/logic/nothing)|nothing|无|||



## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[数据查询(DEFAULT)](module/Wiki/Stencil/query/Default)|DEFAULT|是|否 |否 ||
|[非空间下模板(no_space_stencil)](module/Wiki/Stencil/query/No_space_stencil)|no_space_stencil|否|否 |否 ||
|[空间下页面模板(space_stencil)](module/Wiki/Stencil/query/Space_stencil)|space_stencil|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/Wiki/Stencil/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/Wiki/Stencil/dataset/Default)|DEFAULT|数据查询|是|||
|[非空间下模板(no_space_stencil)](module/Wiki/Stencil/dataset/No_space_stencil)|no_space_stencil|数据查询|否|||
|[空间下页面模板(space_stencil)](module/Wiki/Stencil/dataset/Space_stencil)|space_stencil|数据查询|否|||


## 数据权限

##### 全部数据（读） :id=Stencil-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=Stencil-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `DELETE`
* `UPDATE`
* `CREATE`






## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_NAME_LIKE|名称|LIKE|
|N_ID_EQ|标识|EQ|
|N_SPACE_ID_EQ|空间标识|EQ|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 编辑 | toolbar_edit_view_showtoolbar_deuiaction1_click | 页面模板 |单项数据|<details><summary>打开视图或向导（模态）</summary>[页面模板](app/view/stenciledit_view)</details>|否|无||
| 编辑模板 | edit_stencil | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[页面模板](app/view/stenciledit_view)</details>|否|引用视图或树节点||
| 使用此模板 | panel_Usr0312103524_button_calluilogic_click | 使用此模板 |单项数据|用户自定义|否|无||
| 删除 | delete | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)|是|引用视图或树节点||


## 界面逻辑
|  中文名 | 代码名 |
| --------|--------|
|[打开新建页面并关闭模板中心](module/Wiki/Stencil/uilogic/open_new_page)|open_new_page|
