# 实体处理逻辑(PSDELogic)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|扩展状态|APPLYFLAG|[单项选择(数值)](index/dictionary_index#Extension_status "扩展状态")|0|||||
|附加到指定行为|ATTACHTOPSDEACTIONNAME|文本，可指定长度|100|[默认规则](module/extension/PSDELogic/value_rule/AttachToPSDEActionName#default)||||
|附加到指定行为|ATTACHTOPSDEACTIONID|文本，可指定长度|100|[默认规则](module/extension/PSDELogic/value_rule/AttachToPSDEActionId#default)||||
|扩展模型|DYNAMODELFLAG|是否逻辑|0|||||
|附加到指定数据集|ATTACHTOPSDEDATASETID|文本，可指定长度|100|[默认规则](module/extension/PSDELogic/value_rule/AttachToPSDEDataSetId#default)||||
|附加到指定数据集|ATTACHTOPSDEDATASETNAME|文本，可指定长度|100|[默认规则](module/extension/PSDELogic/value_rule/AttachToPSDEDataSetName#default)||||
|定时触发策略|TIMERPOLICY|文本，可指定长度|100|[默认规则](module/extension/PSDELogic/value_rule/TimerPolicy#default)||||
|最后运行状态|LAST_STATE|[单项选择(文本值)](index/dictionary_index#Log_state "日志状态")|200|[默认规则](module/extension/PSDELogic/value_rule/Last_state#default)||||
|监控事件|EVENTS|[多项选择(文本值)](index/dictionary_index#Enable_action "可供选择的触发器")|500|[默认规则](module/extension/PSDELogic/value_rule/Events#default)||||
|忽略异常|IGNOREEXCEPTION|是否逻辑|0|||||
|线程模式|THREADMODE|文本，可指定长度|100|[默认规则](module/extension/PSDELogic/value_rule/ThreadMode#default)||||
|最后运行时间|LAST_START_AT|日期时间型|0|||||
|实体处理逻辑标识|PSDELOGICID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/extension/PSDELogic/value_rule/PSDELogicId#default)||||
|更新人|UPDATEMAN|文本，可指定长度|60|[默认规则](module/extension/PSDELogic/value_rule/UpdateMan#default)||||
|实体处理逻辑名称|PSDELOGICNAME|文本，可指定长度|200|[默认规则](module/extension/PSDELogic/value_rule/PSDELogicName#default)||√||
|建立人|CREATEMAN|文本，可指定长度|60|[默认规则](module/extension/PSDELogic/value_rule/CreateMan#default)||||
|更新时间|UPDATEDATE|日期时间型|8|||||
|建立时间|CREATEDATE|日期时间型|8|||||
|实体|PSDEID|文本，可指定长度|100|[默认规则](module/extension/PSDELogic/value_rule/PSDEId#default)||||
|实体|PSDENAME|文本，可指定长度|100|[默认规则](module/extension/PSDELogic/value_rule/PSDEName#default)||||
|代码标识|CODENAME|文本，可指定长度|60|[默认规则](module/extension/PSDELogic/value_rule/CodeName#default)||√||
|逻辑子类|LOGICSUBTYPE|[单项选择(文本值)](index/dictionary_index#DELogicSubType "逻辑子类")|30|[默认规则](module/extension/PSDELogic/value_rule/LogicSubType#default)||||
|启用|VALIDFLAG|是否逻辑|0|||||
|逻辑类型|LOGICTYPE|文本，可指定长度|50|[默认规则](module/extension/PSDELogic/value_rule/LogicType#default)||||
|备注|MEMO|长文本，长度1000|2000|[默认规则](module/extension/PSDELogic/value_rule/Memo#default)||||
|扩展标记|EXTENSION_TAG|文本，可指定长度|200|[默认规则](module/extension/PSDELogic/value_rule/Extension_tag#default)||||
|扩展标记2|EXTENSION_TAG2|文本，可指定长度|200|[默认规则](module/extension/PSDELogic/value_rule/Extension_tag2#default)||||
|扩展标记3|EXTENSION_TAG3|文本，可指定长度|200|[默认规则](module/extension/PSDELogic/value_rule/Extension_tag3#default)||||
|扩展标记4|EXTENSION_TAG4|文本，可指定长度|200|[默认规则](module/extension/PSDELogic/value_rule/Extension_tag4#default)||||


## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#PSDELogic_Get)|||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|应用|Apply|用户自定义|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|获取最后运行信息|Get_last_run_info|[实体处理逻辑](module/extension/PSDELogic/logic/get_last_run_info "获取最后运行状态")|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||


## 处理逻辑
| 中文名    | 代码名    | 子类型    | 插件    |  说明  |
| -------- |---------- |----------- |------------|----------|
|[获取最后运行状态](module/extension/PSDELogic/logic/get_last_run_info)|get_last_run_info|无|||



## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[数据查询(DEFAULT)](module/extension/PSDELogic/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/extension/PSDELogic/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/extension/PSDELogic/dataset/Default)|DEFAULT|数据查询|是|||


## 数据权限

##### 全部数据（读写） :id=PSDELogic-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `UPDATE`
* `CREATE`
* `DELETE`






## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_APPLYFLAG_EQ|扩展状态|EQ|
|N_DYNAMODELFLAG_EQ|扩展模型|EQ|
|N_PSDELOGICID_EQ|实体处理逻辑标识|EQ|
|N_PSDELOGICNAME_LIKE|实体处理逻辑名称|LIKE|
|N_PSDEID_EQ|实体|EQ|
|N_PSDENAME_EQ|实体|EQ|
|N_PSDENAME_LIKE|实体|LIKE|
|N_LOGICSUBTYPE_EQ|逻辑子类|EQ|
|N_LOGICSUBTYPE_IN|逻辑子类|IN|
|N_LOGICSUBTYPE_NOTEQ|逻辑子类|NOTEQ|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 新建计划规则 | create_schedule_flow | 计划规则 |无数据|<details><summary>打开视图或向导（模态）</summary>[实体处理逻辑](app/view/PSDELogicquick_create_view_schedule)</details>|否|无||
| 打开配置视图 | open_quick_cfg_view | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[实体处理逻辑](app/view/PSDELogicquick_cfg_view)</details>|否|无||
| 应用扩展模型 | apply | 应用 |单项数据（主键）|<details><summary>后台调用</summary>[Apply](#行为)|是|引用视图或树节点||
| 新建自动化规则 | create_auto_flow | 自动化规则 |无数据|<details><summary>打开视图或向导（模态）</summary>[实体处理逻辑](app/view/PSDELogicquick_create_view_auto_flow)</details>|否|无||

