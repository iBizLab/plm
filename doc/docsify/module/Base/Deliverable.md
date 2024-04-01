# 交付物(Deliverable)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|所属数据标识|OWNER_ID|文本，可指定长度|100|[默认规则](module/Base/Deliverable/value_rule/Owner_id#default)||||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|[默认规则](module/Base/Deliverable/value_rule/Owner_type#default)||||
|所属对象子类型|OWNER_SUBTYPE|文本，可指定长度|100|[默认规则](module/Base/Deliverable/value_rule/Owner_subtype#default)||||
|文件标识|FILE_ID|文件|500|[默认规则](module/Base/Deliverable/value_rule/File_id#default)||||
|工作项编号|WORK_ITEM_IDENTIFIER|文本，可指定长度|100|[默认规则](module/Base/Deliverable/value_rule/Work_item_identifier#default)||||
|工作项标题|WORK_ITEM_TITLE|文本，可指定长度|100|[默认规则](module/Base/Deliverable/value_rule/Work_item_title#default)||||
|标题|TITLE|文本，可指定长度|100|[默认规则](module/Base/Deliverable/value_rule/Title#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Deliverable/value_rule/Create_man#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/Base/Deliverable/value_rule/Id#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/Base/Deliverable/value_rule/Name#default)||√||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Deliverable/value_rule/Update_man#default)||||


## 关系
<!-- tabs:start -->


#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_WORK_ITEM_DELIVERABLE](der/DERCUSTOM_WORK_ITEM_DELIVERABLE)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|自定义关系||
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



## 主状态控制

<p class="panel-title"><b>控制属性</b></p>

* `名称(NAME)` 



> 控制属性未配置代码表，或者代码表未配置代码项



## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[数据查询(DEFAULT)](module/Base/Deliverable/query/Default)|DEFAULT|是|否 |否 ||
|[项目下的交付物(project_deliverable)](module/Base/Deliverable/query/Project_deliverable)|project_deliverable|否|否 |是 ||
|[默认（全部数据）(VIEW)](module/Base/Deliverable/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/Deliverable/dataset/Default)|DEFAULT|数据查询|是|||
|[项目下的交付物(project_deliverable)](module/Base/Deliverable/dataset/Project_deliverable)|project_deliverable|数据查询|否|||


## 数据权限

##### 全部数据（读写） :id=Deliverable-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `CREATE`
* `UPDATE`
* `DELETE`






## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_OWNER_ID_EQ|所属数据标识|EQ|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|名称|LIKE|
|N_NAME_EQ|名称|EQ|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 取消 | panel_Usr0118680010_button_calluilogic_click | 取消 |单项数据|用户自定义|否|无||
| 提交（表单中） | submit_form | 提交 |单项数据（主键）|用户自定义|否|无||
| 交付物下载 | download | 下载 |单项数据|用户自定义|否|无||
| 新建交付目标 | create_deliver_target | 新建交付目标 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建交付目标](app/view/deliverablequick_create_view)</details>|否|引用视图或树节点||
| 提交 | submit | 提交 |单项数据（主键）|用户自定义|否|引用视图或树节点||
| 添加控件显示 | show_add_input | 添加交付目标 |无数据|用户自定义|否|无||
| 删除（表单中） | del_form | 删除 |单项数据（主键）|用户自定义|否|无||
| 确定 | panel_Usr0118680010_button_calluilogic1_click | 确定 |单项数据|用户自定义|否|无||
| 删除 | del_grid | 删除 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)|是|引用视图或树节点||
| 上传附件 | upload_attachment | 上传 |无数据|用户自定义|否|无||


## 界面逻辑
|  中文名 | 代码名 |
| --------|--------|
|[提交（表单中）](module/Base/Deliverable/uilogic/submit_form)|submit_form|
|[提交](module/Base/Deliverable/uilogic/submit)|submit|
|[输入框区域隐藏](module/Base/Deliverable/uilogic/hidden_input_area)|hidden_input_area|
|[获取交付目标总条数](module/Base/Deliverable/uilogic/get_deliverable_total)|get_deliverable_total|
|[删除（表单中）](module/Base/Deliverable/uilogic/del)|del|
|[新建交付目标](module/Base/Deliverable/uilogic/create_deliverable)|create_deliverable|
|[输入框区域展示](module/Base/Deliverable/uilogic/show_input_area)|show_input_area|
