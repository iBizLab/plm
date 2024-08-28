# 实体处理逻辑(PSDELogic)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|扩展状态|APPLYFLAG|[单项选择(数值)](index/dictionary_index#extension_status "扩展状态")||是||
|附加到指定行为|ATTACHTOPSDEACTIONID|文本，可指定长度|100|是||
|附加到指定行为|ATTACHTOPSDEACTIONNAME|文本，可指定长度|100|是||
|附加到指定数据集|ATTACHTOPSDEDATASETID|文本，可指定长度|100|是||
|附加到指定数据集|ATTACHTOPSDEDATASETNAME|文本，可指定长度|100|是||
|代码标识|CODENAME|文本，可指定长度|60|是||
|建立时间|CREATEDATE|日期时间型|8|否||
|建立人|CREATEMAN|文本，可指定长度|60|否||
|扩展模型|DYNAMODELFLAG|是否逻辑||是||
|事件模型|EVENTMODEL|长文本，没有长度限制|1048576|是||
|监控事件|EVENTS|[多项选择(文本值)](index/dictionary_index#enable_action "可供选择的触发器")|500|是||
|扩展标记|EXTENSION_TAG|文本，可指定长度|200|是||
|扩展标记2|EXTENSION_TAG2|文本，可指定长度|200|是||
|扩展标记3|EXTENSION_TAG3|文本，可指定长度|200|是||
|扩展标记4|EXTENSION_TAG4|文本，可指定长度|200|是||
|失败率|FAILURE_PER|数值||是||
|失败率|FAILURE_RATE|数值||是||
|忽略异常|IGNOREEXCEPTION|是否逻辑||是||
|最后运行时间|LAST_START_AT|日期时间型||是||
|最后运行状态|LAST_STATE|[单项选择(文本值)](index/dictionary_index#log_state "日志状态")|200|是||
|逻辑子类|LOGICSUBTYPE|[单项选择(文本值)](index/dictionary_index#DELogicSubType "逻辑子类")|30|否||
|逻辑标记|LOGICTAG|文本，可指定长度|60|是||
|逻辑标记2|LOGICTAG2|文本，可指定长度|60|是||
|逻辑标记3|LOGICTAG3|文本，可指定长度|60|是||
|逻辑标记4|LOGICTAG4|文本，可指定长度|60|是||
|逻辑类型|LOGICTYPE|文本，可指定长度|50|是||
|备注|MEMO|长文本，长度1000|2000|是||
|附加次序|ORDERVALUE|整型||是||
|实体|PSDEID|文本，可指定长度|100|否||
|实体处理逻辑标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|PSDELOGICID|全局唯一标识，文本类型，用户不可见|100|否||
|逻辑连接|PSDELOGICLINKS|一对多关系数据集合|1048576|是||
|规则名称|PSDELOGICNAME|文本，可指定长度|200|否||
|逻辑节点|PSDELOGICNODES|一对多关系数据集合|1048576|是||
|逻辑参数|PSDELOGICPARAMS|一对多动态对象|1048576|是||
|实体|PSDENAME|文本，可指定长度|100|是||
|成功率|SUCCESS_PER|数值||是||
|成功率|SUCCESS_RATE|数值||是||
|线程模式|THREADMODE|文本，可指定长度|100|是||
|定时触发策略|TIMERPOLICY|文本，可指定长度|100|是||
|更新时间|UPDATEDATE|日期时间型|8|否||
|更新人|UPDATEMAN|文本，可指定长度|60|否||
|用户标记|USERTAG|文本，可指定长度|200|是||
|用户标记2|USERTAG2|文本，可指定长度|200|是||
|用户标记3|USERTAG3|文本，可指定长度|50|是||
|用户标记4|USERTAG4|文本，可指定长度|50|是||
|启用|VALIDFLAG|是否逻辑||是||
|WebHook地址|WEBHOOKURL|长文本，没有长度限制|1048576|是||


###### 属性组

<el-row>
<el-tabs v-model="show_field_group">

<el-tab-pane label="属性组" name="field_group_DEFGroup">

|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|扩展标记|EXTENSION_TAG|文本，可指定长度|200|是||
|扩展模型|DYNAMODELFLAG|是否逻辑||是||
|实体|PSDENAME|文本，可指定长度|100|是||
|更新人|UPDATEMAN|文本，可指定长度|60|否||
|逻辑子类|LOGICSUBTYPE|[单项选择(文本值)](index/dictionary_index#DELogicSubType "逻辑子类")|30|否||
|附加到指定行为|ATTACHTOPSDEACTIONNAME|文本，可指定长度|100|是||
|最后运行状态|LAST_STATE|[单项选择(文本值)](index/dictionary_index#log_state "日志状态")|200|是||
|备注|MEMO|长文本，长度1000|2000|是||
|更新时间|UPDATEDATE|日期时间型|8|否||
|最后运行时间|LAST_START_AT|日期时间型||是||
|附加到指定行为|ATTACHTOPSDEACTIONID|文本，可指定长度|100|是||
|定时触发策略|TIMERPOLICY|文本，可指定长度|100|是||
|附加到指定数据集|ATTACHTOPSDEDATASETID|文本，可指定长度|100|是||
|启用|VALIDFLAG|是否逻辑||是||
|监控事件|EVENTS|[多项选择(文本值)](index/dictionary_index#enable_action "可供选择的触发器")|500|是||
|建立时间|CREATEDATE|日期时间型|8|否||
|代码标识|CODENAME|文本，可指定长度|60|是||
|扩展标记3|EXTENSION_TAG3|文本，可指定长度|200|是||
|扩展标记4|EXTENSION_TAG4|文本，可指定长度|200|是||
|线程模式|THREADMODE|文本，可指定长度|100|是||
|实体处理逻辑标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|PSDELOGICID|全局唯一标识，文本类型，用户不可见|100|否||
|扩展状态|APPLYFLAG|[单项选择(数值)](index/dictionary_index#extension_status "扩展状态")||是||
|实体|PSDEID|文本，可指定长度|100|否||
|规则名称|PSDELOGICNAME|文本，可指定长度|200|否||
|附加到指定数据集|ATTACHTOPSDEDATASETNAME|文本，可指定长度|100|是||
|扩展标记2|EXTENSION_TAG2|文本，可指定长度|200|是||
|建立人|CREATEMAN|文本，可指定长度|60|否||
|逻辑类型|LOGICTYPE|文本，可指定长度|50|是||
|忽略异常|IGNOREEXCEPTION|是否逻辑||是||

</el-tab-pane>

</el-tabs>
</el-row>

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_PSDELOGICLINK_PSDELOGIC_PSDELOGICID](der/DER1N_PSDELOGICLINK_PSDELOGIC_PSDELOGICID)|[实体处理逻辑链接(PSDELOGICLINK)](module/extension/PSDELogicLink)|1:N关系||
|[DER1N_PSDELOGICNODE_PSDELOGIC_PSDELOGICID](der/DER1N_PSDELOGICNODE_PSDELOGIC_PSDELOGICID)|[实体处理逻辑节点(PSDELOGICNODE)](module/extension/PSDELogicNode)|1:N关系||


</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|应用|apply|用户自定义|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|CreateTemp|CreateTemp|内置方法|默认|不支持||||
|CreateTempMajor|CreateTempMajor|内置方法|默认|不支持||||
|禁用|disable|用户自定义|默认|不支持||||
|启用|enable|用户自定义|默认|不支持||||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#PSDELogic_Get)|||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|GetDraftTemp|GetDraftTemp|内置方法|默认|不支持||||
|GetDraftTempMajor|GetDraftTempMajor|内置方法|默认|不支持||||
|GetTemp|GetTemp|内置方法|默认|不支持||||
|GetTempMajor|GetTempMajor|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|RemoveTemp|RemoveTemp|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|UpdateTemp|UpdateTemp|内置方法|默认|不支持||||
|UpdateTempMajor|UpdateTempMajor|内置方法|默认|不支持||||
|从模板建立规则|create_by_template|[实体处理逻辑](module/extension/PSDELogic/logic/create_by_template "从模板建立规则")|默认|不支持||||
|获取最后运行信息|get_last_run_info|[实体处理逻辑](module/extension/PSDELogic/logic/get_last_run_info "获取最后运行状态")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[WebHook地址](module/extension/PSDELogic/logic/WebHook)|WebHook|属性逻辑|||
|[从模板建立规则](module/extension/PSDELogic/logic/create_by_template)|create_by_template|无||从模板建立规则|
|[切换启用状态](module/extension/PSDELogic/logic/valid)|valid|属性逻辑|||
|[失败率计算](module/extension/PSDELogic/logic/failure_per)|failure_per|属性逻辑|||
|[获取最后运行状态](module/extension/PSDELogic/logic/get_last_run_info)|get_last_run_info|无||获取最后运行状态|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/extension/PSDELogic/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/extension/PSDELogic/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/extension/PSDELogic/dataset/Default)|DEFAULT|数据查询|是|||

## 数据权限

##### 全部数据（读写） :id=PSDELogic-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `READ`
* `UPDATE`
* `CREATE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_APPLYFLAG_EQ|扩展状态|EQ||
|N_DYNAMODELFLAG_EQ|扩展模型|EQ||
|N_LOGICSUBTYPE_EQ|逻辑子类|EQ||
|N_LOGICSUBTYPE_IN|逻辑子类|IN||
|N_LOGICSUBTYPE_NOTEQ|逻辑子类|NOTEQ||
|N_PSDEID_EQ|实体|EQ||
|N_PSDELOGICID_EQ|实体处理逻辑标识|EQ||
|N_PSDELOGICNAME_LIKE|规则名称|LIKE||
|N_PSDENAME_EQ|实体|EQ||
|N_PSDENAME_LIKE|实体|LIKE||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 根据模板标识建立 | create_by_template | 建立 |无数据|<details><summary>后台调用</summary>[create_by_template](#行为)||
| 新建计划规则 | create_schedule_flow | 计划规则 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建规则](app/view/psdelogicquick_create_view_schedule)</details>||
| 打开配置视图 | open_quick_cfg_view | 编辑 |单项数据（主键）|<details><summary>打开视图或向导（模态）</summary>[实体处理逻辑](app/view/psdelogicquick_cfg_view)</details>||
| 应用扩展模型 | apply | 应用 |单项数据（主键）|<details><summary>后台调用</summary>[apply](#行为)||
| 新建自动化规则 | create_auto_flow | 自动化规则 |无数据|<details><summary>打开视图或向导（模态）</summary>[新建规则](app/view/psdelogicquick_create_view_auto_flow)</details>||
| 打开全部日志 | open_all_log | 全部日志 |无数据|<details><summary>打开视图或向导（模态）</summary>[全部日志](app/view/psde_logic_all_log_grid_view)</details>||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/extension/PSDELogic?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDELogic?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDELogic?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDELogic?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDELogic?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDELogic?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDELogic?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDELogic?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDELogic?id=界面行为`">
  界面行为
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
show_der:'major',
show_field_group:'field_group_DEFGroup',

      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>