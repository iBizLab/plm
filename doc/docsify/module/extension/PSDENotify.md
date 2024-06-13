# 实体通知(PSDENotify)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|开始时间属性|BEGINPSDEFID|文本，可指定长度|100|是||
|开始时间属性|BEGINPSDEFNAME|文本，可指定长度|100|是||
|检查间隔|CHECKTIMER|整型||是||
|代码名称|CODENAME|文本，可指定长度|50|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|自定义条件|CUSTOMCOND|长文本，长度1000|2000|是||
|结束时间属性|ENDPSDEFID|文本，可指定长度|100|是||
|结束时间属性|ENDPSDEFNAME|文本，可指定长度|100|是||
|监控事件集|EVENTS|长文本，没有长度限制|1048576|是||
|监控变化属性集|FIELDS|长文本，没有长度限制|1048576|是||
|通知消息类型|MSGTYPE|[多项选择(数值)](index/dictionary_index#WFInfomMsgType "通知消息类型")||否||
|延后通知间隔|NOTIFYEND|整型||是||
|提前通知间隔|NOTIFYSTART|整型||是||
|通知子类|NOTIFYSUBTYPE|[单项选择(文本值)](index/dictionary_index#DENotifySubType "通知子类")|30|是||
|通知标记|NOTIFYTAG|文本，可指定长度|100|是||
|通知标记2|NOTIFYTAG2|文本，可指定长度|100|是||
|实体数据集|PSDEDSID|文本，可指定长度|100|是||
|实体数据集|PSDEDSNAME|文本，可指定长度|100|是||
|实体|PSDEID|文本，可指定长度|100|否||
|实体|PSDENAME|文本，可指定长度|100|是||
|实体通知标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|PSDENOTIFYID|全局唯一标识，文本类型，用户不可见|100|否||
|实体通知名称|PSDENOTIFYNAME|文本，可指定长度|200|是||
|系统消息队列|PSSYSMSGQUEUEID|文本，可指定长度|100|否||
|系统消息队列|PSSYSMSGQUEUENAME|文本，可指定长度|100|是||
|系统消息模板|PSSYSMSGTEMPLID|文本，可指定长度|100|否||
|系统消息模板|PSSYSMSGTEMPLNAME|文本，可指定长度|100|是||
|附加任务模式|TASKMODE|单项选择(数值)||是||
|定时触发模式|TIMERMODE|是否逻辑||否||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|用户标识|USERTAG|文本，可指定长度|100|是||
|用户标识2|USERTAG2|文本，可指定长度|100|是||
|用户标识3|USERTAG3|文本，可指定长度|50|是||
|用户标识4|USERTAG4|文本，可指定长度|50|是||
|启用|VALIDFLAG|是否逻辑||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_PSDENOTIFYTARGET_PSDENOTIFY_PSDENOTIFYID](der/DER1N_PSDENOTIFYTARGET_PSDENOTIFY_PSDENOTIFYID)|[消息通知目标(PSDENOTIFYTARGET)](module/extension/PSDENotifyTarget)|1:N关系||


</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|应用|apply|用户自定义|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/extension/PSDENotify/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/extension/PSDENotify/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/extension/PSDENotify/dataset/Default)|DEFAULT|数据查询|是|||

## 数据权限

##### 全部数据（读写） :id=PSDENotify-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `UPDATE`
* `READ`
* `CREATE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_NOTIFYSUBTYPE_EQ|通知子类|EQ||
|N_PSDEID_EQ|实体|EQ||
|N_PSDENOTIFYID_EQ|实体通知标识|EQ||
|N_PSDENOTIFYNAME_LIKE|实体通知名称|LIKE||
|N_TASKMODE_EQ|附加任务模式|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 应用扩展模型 | apply | 应用 |单项数据（主键）|<details><summary>后台调用</summary>[apply](#行为)||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/extension/PSDENotify?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDENotify?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDENotify?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDENotify?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDENotify?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDENotify?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDENotify?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDENotify?id=界面行为`">
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


      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>