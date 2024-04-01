# 看板(Board)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|名称|NAME|文本，可指定长度|200|[默认规则](module/ProjMgmt/Board/value_rule/Name#default)||√||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/ProjMgmt/Board/value_rule/Id#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/ProjMgmt/Board/value_rule/Update_man#default)||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/ProjMgmt/Board/value_rule/Create_man#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|产品标识|PROJECT_ID|外键值|100|[默认规则](module/ProjMgmt/Board/value_rule/Project_id#default)||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DER1N_ENTRY_BOARD_BOARD_ID](der/DER1N_ENTRY_BOARD_BOARD_ID)|[看板栏(ENTRY)](module/ProjMgmt/Entry)|1:N关系||
|[DER1N_SWIMLANE_BOARD_BOARD_ID](der/DER1N_SWIMLANE_BOARD_BOARD_ID)|[泳道(SWIMLANE)](module/ProjMgmt/Swimlane)|1:N关系||
|[DER1N_WORK_ITEM_BOARD_BOARD_ID](der/DER1N_WORK_ITEM_BOARD_BOARD_ID)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|1:N关系||

#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_BOARD_PROJECT_PROJECT_ID](der/DER1N_BOARD_PROJECT_PROJECT_ID)|[项目(PROJECT)](module/ProjMgmt/Project)|1:N关系||
<!-- tabs:end -->

## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#Board_Create)|||
|Update|Update|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[生成默认看板栏和泳道](module/ProjMgmt/Board/logic/create_default_entry)|create_default_entry|无|||



## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[数据查询(DEFAULT)](module/ProjMgmt/Board/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProjMgmt/Board/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/ProjMgmt/Board/dataset/Default)|DEFAULT|数据查询|是|||




## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_NAME_LIKE|名称|LIKE|
|N_ID_EQ|标识|EQ|
|N_PROJECT_ID_EQ|产品标识|EQ|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 新建看板 | New | 新建看板 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建看板](app/view/boardquick_create_view)</details>|否|无||

