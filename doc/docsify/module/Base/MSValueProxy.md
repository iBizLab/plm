# 主状态值代理(MSValueProxy)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|颜色|COLOR|文本，可指定长度|100|[默认规则](module/Base/MSValueProxy/value_rule/Color#default)||||
|背景颜色|BKCOLOR|文本，可指定长度|100|[默认规则](module/Base/MSValueProxy/value_rule/BKColor#default)||||
|主状态值代理标识|MSVALUEPROXYID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/Base/MSValueProxy/value_rule/MSValueProxyId#default)||||
|更新人|UPDATEMAN|文本，可指定长度|60|[默认规则](module/Base/MSValueProxy/value_rule/UpdateMan#default)||||
|主状态值代理名称|MSVALUEPROXYNAME|文本，可指定长度|200|[默认规则](module/Base/MSValueProxy/value_rule/MSValueProxyName#default)||√||
|更新时间|UPDATEDATE|日期时间型|8|||||
|建立人|CREATEMAN|文本，可指定长度|60|[默认规则](module/Base/MSValueProxy/value_rule/CreateMan#default)||||
|建立时间|CREATEDATE|日期时间型|8|||||


## 映射
| 名称    | 映射实体   | 备注  |
| -------- |----------  |----- |
|[实体映射](module/Base/MSValueProxy/demap/DEMap)|[工作项状态(WORK_ITEM_STATE)](module/ProjMgmt/Work_item_state)||

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
|[数据查询(DEFAULT)](module/Base/MSValueProxy/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/MSValueProxy/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/MSValueProxy/dataset/Default)|DEFAULT|数据查询|是|||


## 数据权限

##### 全部数据（读） :id=MSValueProxy-ALL_R

<p class="panel-title"><b>数据范围</b></p>


<p class="panel-title"><b>数据能力</b></p>

* `READ`






## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_MSVALUEPROXYID_EQ|主状态值代理标识|EQ|
|N_MSVALUEPROXYNAME_LIKE|主状态值代理名称|LIKE|




