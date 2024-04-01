# 测试库成员(Library_member)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|登录名|USER_ID|外键值|100|[默认规则](module/TestMgmt/Library_member/value_rule/User_id#default)||√||
|角色|ROLE_ID|[单项选择(文本值)](index/dictionary_index#Role_type "角色类型")|60|[默认规则](module/TestMgmt/Library_member/value_rule/Role_id#default)||||
|测试库名称|LIBRARY_NAME|外键值文本|200|[默认规则](module/TestMgmt/Library_member/value_rule/Library_name#default)||||
|测试库编号|LIBRARY_IDENTIFIER|外键值附加数据|15|[默认规则](module/TestMgmt/Library_member/value_rule/Library_identifier#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/TestMgmt/Library_member/value_rule/Id#default)||||
|姓名|NAME|外键值文本|200|[默认规则](module/TestMgmt/Library_member/value_rule/Name#default)||√||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/TestMgmt/Library_member/value_rule/Create_man#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/TestMgmt/Library_member/value_rule/Update_man#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|测试库标识|LIBRARY_ID|外键值|100|[默认规则](module/TestMgmt/Library_member/value_rule/Library_id#default)||||


<p class="panel-title"><b>联合主键</b></p>

  * `测试库标识(LIBRARY_ID)`
  * `登录名(USER_ID)`

## 关系
<!-- tabs:start -->


#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_LIBRARY_MEMBER_LIBRARY_LIBRARY_ID](der/DER1N_LIBRARY_MEMBER_LIBRARY_LIBRARY_ID)|[测试库(LIBRARY)](module/TestMgmt/Library)|1:N关系||
|[DER1N_LIBRARY_MEMBER_USER_USER_ID](der/DER1N_LIBRARY_MEMBER_USER_USER_ID)|[企业用户(USER)](module/Base/User)|1:N关系||
<!-- tabs:end -->

## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#Library_member_Create)|||
|CreateTemp|CreateTemp|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持|[附加操作](index/action_logic_index#Library_member_Remove)|||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|新建测试库成员|Create_library_member|[实体处理逻辑](module/TestMgmt/Library_member/logic/create_library_member "新建测试库成员")|默认|不支持||||
|新建临时管理员|Create_temp_admin|[实体处理逻辑](module/TestMgmt/Library_member/logic/create_temp_admin "新建临时管理员")|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[新建测试库成员](module/TestMgmt/Library_member/logic/create_library_member)|create_library_member|无|||
|[新建临时管理员](module/TestMgmt/Library_member/logic/create_temp_admin)|create_temp_admin|无|||
|[通过标识通知成员](module/TestMgmt/Library_member/logic/notify_by_id)|notify_by_id|无|||



## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[当前测试库成员(cur_library_member)](module/TestMgmt/Library_member/query/Cur_library_member)|cur_library_member|否|否 |否 ||
|[数据查询(DEFAULT)](module/TestMgmt/Library_member/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/TestMgmt/Library_member/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[当前测试库成员(cur_library_member)](module/TestMgmt/Library_member/dataset/Cur_library_member)|cur_library_member|数据查询|否|||
|[数据集(DEFAULT)](module/TestMgmt/Library_member/dataset/Default)|DEFAULT|数据查询|是|||


## 数据权限

##### 全部数据（读） :id=Library_member-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`




## 消息通知

|    名称   | 代码名       |  消息队列   |  消息模板 |  通知目标     |  备注  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[加入测试库成员通知](module/TestMgmt/Library_member/notify/library_member_create)|library_member_create|[默认消息队列](index/notify_index)|[测试库通知模板(加入测试库成员)](index/notify_index#library_member_create)|勾选对象 ||
|[移除测试库成员通知](module/TestMgmt/Library_member/notify/library_member_remove)|library_member_remove|[默认消息队列](index/notify_index)|[测试库通知模板(移除测试库成员)](index/notify_index#library_member_remove)|勾选对象 ||


## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_USER_ID_EQ|登录名|EQ|
|N_ROLE_ID_EQ|角色|EQ|
|N_LIBRARY_NAME_EQ|测试库名称|EQ|
|N_LIBRARY_NAME_LIKE|测试库名称|LIKE|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|姓名|LIKE|
|N_LIBRARY_ID_EQ|测试库标识|EQ|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 跳转至成员设置 | jump_to_member_set | 跳转至成员设置 |无数据|用户自定义|否|无||
| 删除成员 | delete_member | 删除成员 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)|是|引用视图或树节点||


## 界面逻辑
|  中文名 | 代码名 |
| --------|--------|
|[新建测试库默认临时成员](module/TestMgmt/Library_member/uilogic/create_default_temp_members)|create_default_temp_members|
|[跳转至成员设置](module/TestMgmt/Library_member/uilogic/jump_to_member_set)|jump_to_member_set|
