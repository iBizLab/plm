# 扩展日志(Extend_log)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|所属数据标识|OWNER_ID|文本，可指定长度|200|[默认规则](module/Base/Extend_log/value_rule/Owner_id#default)||||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|[默认规则](module/Base/Extend_log/value_rule/Owner_type#default)||||
|所属对象子类型|OWNER_SUBTYPE|文本，可指定长度|100|[默认规则](module/Base/Extend_log/value_rule/Owner_subtype#default)||||
|类别|CATEGORY|文本，可指定长度|100|[默认规则](module/Base/Extend_log/value_rule/Category#default)||||
|级别|LEVEL|文本，可指定长度|100|[默认规则](module/Base/Extend_log/value_rule/Level#default)||||
|日志信息|INFO|长文本，没有长度限制|1048576|[默认规则](module/Base/Extend_log/value_rule/Info#default)||||
|起始时间|START_AT|日期时间型|0|||||
|结束时间|END_AT|日期时间型|0|||||
|持续时间|ELAPSED_TIME|整型|11|||||
|状态|STATE|文本，可指定长度|100|[默认规则](module/Base/Extend_log/value_rule/State#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/Base/Extend_log/value_rule/Name#default)||√||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/Base/Extend_log/value_rule/Id#default)||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Extend_log/value_rule/Update_man#default)||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/Base/Extend_log/value_rule/Create_man#default)||||


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
|[数据查询(DEFAULT)](module/Base/Extend_log/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/Extend_log/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/Extend_log/dataset/Default)|DEFAULT|数据查询|是|||


## 数据权限

##### 全部数据（读写） :id=Extend_log-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `READ`
* `CREATE`
* `UPDATE`






## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_OWNER_ID_EQ|所属数据标识|EQ|
|N_OWNER_SUBTYPE_EQ|所属对象子类型|EQ|
|N_NAME_LIKE|名称|LIKE|
|N_ID_EQ|标识|EQ|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 打开详情信息 | open_info_view | 详情 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[日志信息](app/view/extend_loginfo_view)</details>|否|无||

