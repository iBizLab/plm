# 项目成员(Project_member)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|登录名|USER_ID|外键值|100|[默认规则](module/ProjMgmt/Project_member/value_rule/User_id#default)||√||
|角色|ROLE_ID|[单项选择(文本值)](index/dictionary_index#Role_type "角色类型")|60|[默认规则](module/ProjMgmt/Project_member/value_rule/Role_id#default)||||
|项目名称|PROJECT_NAME|外键值文本|200|[默认规则](module/ProjMgmt/Project_member/value_rule/Project_name#default)||||
|项目标识（编号）|PROJECT_IDENTIFIER|外键值附加数据|15|[默认规则](module/ProjMgmt/Project_member/value_rule/Project_identifier#default)||||
|周工作日|WEEKDAY|单项选择(数值)|0|||||
|日容量|DAY_CAPACITIES|一对一关系数据对象|1048576|[默认规则](module/ProjMgmt/Project_member/value_rule/Day_capacities#default)||||
|项目类型|PROJECT_TYPE|[外键值附加数据](index/dictionary_index#Project_type "项目类型")|60|[默认规则](module/ProjMgmt/Project_member/value_rule/Project_type#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/ProjMgmt/Project_member/value_rule/Id#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/ProjMgmt/Project_member/value_rule/Update_man#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/ProjMgmt/Project_member/value_rule/Create_man#default)||||
|姓名|NAME|外键值文本|200|[默认规则](module/ProjMgmt/Project_member/value_rule/Name#default)||√||
|项目标识|PROJECT_ID|外键值|100|[默认规则](module/ProjMgmt/Project_member/value_rule/Project_id#default)||||


<p class="panel-title"><b>联合主键</b></p>

  * `项目标识(PROJECT_ID)`
  * `登录名(USER_ID)`

## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[项目成员-日容量](der/项目成员-日容量)|[日容量(DAY_CAPACITY)](module/ProjMgmt/Day_capacity)|自定义关系||

#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_PROJECT_MEMBER_PROJECT_PROJECT_ID](der/DER1N_PROJECT_MEMBER_PROJECT_PROJECT_ID)|[项目(PROJECT)](module/ProjMgmt/Project)|1:N关系||
|[DER1N_PROJECT_MEMBER_USER_USER_ID](der/DER1N_PROJECT_MEMBER_USER_USER_ID)|[企业用户(USER)](module/Base/User)|1:N关系||
<!-- tabs:end -->

## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#Project_member_Create)|||
|Update|Update|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持|[附加操作](index/action_logic_index#Project_member_Remove)|||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|新建项目成员|Create_project_member|[实体处理逻辑](module/ProjMgmt/Project_member/logic/create_project_member "新建项目成员")|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[新建项目成员](module/ProjMgmt/Project_member/logic/create_project_member)|create_project_member|无|||
|[通过标识通知成员](module/ProjMgmt/Project_member/logic/notify_by_id)|notify_by_id|无|||



## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[当前项目成员(CUR_PROJECT)](module/ProjMgmt/Project_member/query/Cur_project)|CUR_PROJECT|否|否 |否 ||
|[数据查询(DEFAULT)](module/ProjMgmt/Project_member/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProjMgmt/Project_member/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[当前项目成员(CUR_PROJECT)](module/ProjMgmt/Project_member/dataset/Cur_project)|CUR_PROJECT|数据查询|否|||
|[数据集(DEFAULT)](module/ProjMgmt/Project_member/dataset/Default)|DEFAULT|数据查询|是|||


## 数据权限

##### 全部数据（读） :id=Project_member-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`




## 消息通知

|    名称   | 代码名       |  消息队列   |  消息模板 |  通知目标     |  备注  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[加入项目成员通知](module/ProjMgmt/Project_member/notify/create_member_notify)|create_member_notify|[默认消息队列](index/notify_index)|[项目通知模板(加入项目成员)](index/notify_index#project_member_create)|项目成员 ||
|[移除项目成员通知](module/ProjMgmt/Project_member/notify/remove_member_nofity)|remove_member_nofity|[默认消息队列](index/notify_index)|[项目通知模板(移除项目成员)](index/notify_index#project_member_remove)|移除的项目成员 ||


## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_USER_ID_EQ|登录名|EQ|
|N_ROLE_ID_EQ|角色|EQ|
|N_PROJECT_NAME_EQ|项目名称|EQ|
|N_PROJECT_NAME_LIKE|项目名称|LIKE|
|N_WEEKDAY_EQ|周工作日|EQ|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|姓名|LIKE|
|N_PROJECT_ID_EQ|项目标识|EQ|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 跳转至成员设置 | jump_to_member_set | 跳转至成员设置 |无数据|用户自定义|否|无||
| 移除成员 | remove_member | 移除成员 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)|是|引用视图或树节点||


## 界面逻辑
|  中文名 | 代码名 |
| --------|--------|
|[新建项目默认临时成员](module/ProjMgmt/Project_member/uilogic/create_default_temp_members)|create_default_temp_members|
|[跳转至成员设置](module/ProjMgmt/Project_member/uilogic/jump_to_member_set)|jump_to_member_set|
