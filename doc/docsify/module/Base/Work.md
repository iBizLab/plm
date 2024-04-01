# 工作(Work)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|关联主体标识|PRINCIPAL_ID|文本，可指定长度|100|[默认规则](module/Base/Work/value_rule/Principal_id#default)||||
|关联主体标识|PILOT_ID|文本，可指定长度|100|[默认规则](module/Base/Work/value_rule/Pilot_id#default)||||
|关联主体类型|PRINCIPAL_TYPE|文本，可指定长度|100|[默认规则](module/Base/Work/value_rule/Principal_type#default)||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Work/value_rule/Create_man#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/Base/Work/value_rule/Name#default)||√||
|建立时间|CREATE_TIME|日期时间型|0|||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/Base/Work/value_rule/Id#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Work/value_rule/Update_man#default)||||
|文件夹标识|PORTFOLIO_ID|外键值|100|[默认规则](module/Base/Work/value_rule/Portfolio_id#default)||||


<p class="panel-title"><b>联合主键</b></p>

  * `文件夹标识(PORTFOLIO_ID)`
  * `关联主体标识(PRINCIPAL_ID)`

## 关系
<!-- tabs:start -->


#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_WORK_PORTFOLIO_PORTFOLIO_ID](der/DER1N_WORK_PORTFOLIO_PORTFOLIO_ID)|[文件夹(PORTFOLIO)](module/Base/Portfolio)|1:N关系||
|[DERCUSTOM_WORK_PROJECT_PILOT_ID](der/DERCUSTOM_WORK_PROJECT_PILOT_ID)|[项目(PROJECT)](module/ProjMgmt/Project)|自定义关系||
<!-- tabs:end -->

## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|添加项目|Add_project|[实体处理逻辑](module/Base/Work/logic/add_project "添加项目")|默认|不支持||||
|添加项目集|Add_project_portfolio|[实体处理逻辑](module/Base/Work/logic/add_project_portfolio "添加项目集")|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[添加项目](module/Base/Work/logic/add_project)|add_project|无|||
|[添加项目集](module/Base/Work/logic/add_project_portfolio)|add_project_portfolio|无|||



## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[数据查询(DEFAULT)](module/Base/Work/query/Default)|DEFAULT|是|否 |否 ||
|[项目集下的工作(item_set_owner)](module/Base/Work/query/Item_set_owner)|item_set_owner|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/Work/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/Work/dataset/Default)|DEFAULT|数据查询|是|||
|[项目集下的工作(item_set_owner)](module/Base/Work/dataset/Item_set_owner)|item_set_owner|数据查询|否|||


## 数据权限

##### 操作用户(写) :id=Work-USER_W

<p class="panel-title"><b>数据范围</b></p>


<p class="panel-title"><b>数据能力</b></p>

* `CREATE`






## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_PRINCIPAL_ID_EQ|关联主体标识|EQ|
|N_PILOT_ID_EQ|关联主体标识|EQ|
|N_NAME_LIKE|名称|LIKE|
|N_ID_EQ|标识|EQ|
|N_PORTFOLIO_ID_EQ|文件夹标识|EQ|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 选择项目集 | choose_item_set | 选择项目集 |无数据|<details><summary>后台调用</summary>[Add_project_portfolio](#行为)|是|引用视图或树节点||
| 选择项目 | choose_project | 选择项目 |无数据|<details><summary>后台调用</summary>[Add_project](#行为)|是|引用视图或树节点||

