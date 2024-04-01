# 空间成员(Space_member)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|登录名|USER_ID|外键值|100|[默认规则](module/Wiki/Space_member/value_rule/User_id#default)||√||
|角色|ROLE_ID|[单项选择(文本值)](index/dictionary_index#Role_type "角色类型")|60|[默认规则](module/Wiki/Space_member/value_rule/Role_id#default)||||
|空间编号|SPACE_IDENTIFIER|外键值附加数据|15|[默认规则](module/Wiki/Space_member/value_rule/Space_identifier#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/Wiki/Space_member/value_rule/Id#default)||||
|姓名|NAME|外键值文本|200|[默认规则](module/Wiki/Space_member/value_rule/Name#default)||√||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/Wiki/Space_member/value_rule/Update_man#default)||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/Wiki/Space_member/value_rule/Create_man#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|空间标识|SPACE_ID|外键值|100|[默认规则](module/Wiki/Space_member/value_rule/Space_id#default)||||
|名称|SPACE_NAME|外键值文本|200|[默认规则](module/Wiki/Space_member/value_rule/Space_name#default)||||


<p class="panel-title"><b>联合主键</b></p>

  * `空间标识(SPACE_ID)`
  * `登录名(USER_ID)`

## 关系
<!-- tabs:start -->


#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_SPACE_MEMBER_SPACE_SPACE_ID](der/DER1N_SPACE_MEMBER_SPACE_SPACE_ID)|[空间(SPACE)](module/Wiki/Space)|1:N关系||
|[DER1N_SPACE_MEMBER_USER_USER_ID](der/DER1N_SPACE_MEMBER_USER_USER_ID)|[企业用户(USER)](module/Base/User)|1:N关系||
<!-- tabs:end -->

## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#Space_member_Create)|||
|Update|Update|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持|[附加操作](index/action_logic_index#Space_member_Remove)|||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[通过标识通知成员](module/Wiki/Space_member/logic/notify_by_id)|notify_by_id|无|||



## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[数据查询(DEFAULT)](module/Wiki/Space_member/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Wiki/Space_member/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/Wiki/Space_member/dataset/Default)|DEFAULT|数据查询|是|||


## 消息通知

|    名称   | 代码名       |  消息队列   |  消息模板 |  通知目标     |  备注  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[加入知识库成员通知](module/Wiki/Space_member/notify/create_member_notify)|create_member_notify|[默认消息队列](index/notify_index)|[知识库通知模板(加入空间成员)](index/notify_index#space_member_create)|成员 ||
|[移除空间成员通知](module/Wiki/Space_member/notify/remover_member_notify)|remover_member_notify|[默认消息队列](index/notify_index)|[知识库通知模板(移除空间成员)](index/notify_index#space_member_remove)|成员 ||


## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_USER_ID_EQ|登录名|EQ|
|N_ROLE_ID_EQ|角色|EQ|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|姓名|LIKE|
|N_SPACE_ID_EQ|空间标识|EQ|
|N_SPACE_NAME_EQ|名称|EQ|
|N_SPACE_NAME_LIKE|名称|LIKE|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 移除成员 | remove_member | 移除成员 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)|是|引用视图或树节点||


## 界面逻辑
|  中文名 | 代码名 |
| --------|--------|
|[新建空间默认临时成员](module/Wiki/Space_member/uilogic/create_default_temp_members)|create_default_temp_members|
