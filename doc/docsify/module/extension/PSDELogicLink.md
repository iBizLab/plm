# 实体处理逻辑链接(PSDELogicLink)  <!-- {docsify-ignore-all} -->


实体处理逻辑链接


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|目标节点|DSTPSDELOGICNODEID|外键值|100|否||
|目标节点|DSTPSDELOGICNODENAME|外键值文本|200|否||
|实体处理逻辑|PSDELOGICID|外键值|100|否||
|实体处理逻辑链接标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|PSDELOGICLINKID|全局唯一标识，文本类型，用户不可见|100|否||
|连接名称|PSDELOGICLINKNAME|文本，可指定长度|200|否||
|实体处理逻辑|PSDELOGICNAME|外键值文本|200|否||
|源节点|SRCPSDELOGICNODEID|外键值|100|否||
|源节点|SRCPSDELOGICNODENAME|外键值文本|200|否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_PSDELOGICLINK_PSDELOGICNODE_DSTPSDELOGICNODEID](der/DER1N_PSDELOGICLINK_PSDELOGICNODE_DSTPSDELOGICNODEID)|[实体处理逻辑节点(PSDELOGICNODE)](module/extension/PSDELogicNode)|1:N关系||
|[DER1N_PSDELOGICLINK_PSDELOGICNODE_SRCPSDELOGICNODEID](der/DER1N_PSDELOGICLINK_PSDELOGICNODE_SRCPSDELOGICNODEID)|[实体处理逻辑节点(PSDELOGICNODE)](module/extension/PSDELogicNode)|1:N关系||
|[DER1N_PSDELOGICLINK_PSDELOGIC_PSDELOGICID](der/DER1N_PSDELOGICLINK_PSDELOGIC_PSDELOGICID)|[实体处理逻辑(PSDELOGIC)](module/extension/PSDELogic)|1:N关系||
|[DERCUSTOM_PSDELOGICLINK_PSDEMSLOGIC_PSDELOGICID](der/DERCUSTOM_PSDELOGICLINK_PSDEMSLOGIC_PSDELOGICID)|[实体主状态迁移逻辑(PSDEMSLOGIC)](module/extension/PSDEMSLogic)|自定义关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|CreateTemp|CreateTemp|内置方法|默认|不支持||||
|CreateTempMajor|CreateTempMajor|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|GetDraftTemp|GetDraftTemp|内置方法|默认|不支持||||
|GetDraftTempMajor|GetDraftTempMajor|内置方法|默认|不支持||||
|GetTemp|GetTemp|内置方法|默认|不支持||||
|GetTempMajor|GetTempMajor|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|RemoveTemp|RemoveTemp|内置方法|默认|支持||||
|RemoveTempMajor|RemoveTempMajor|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|UpdateTemp|UpdateTemp|内置方法|默认|不支持||||
|UpdateTempMajor|UpdateTempMajor|内置方法|默认|不支持||||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[目标节点相关连线(CurItemByDscNode)](module/extension/PSDELogicLink/query/CurItemByDscNode)|CurItemByDscNode|否|否 |否 ||
|[源节点相关连线(CurItemBySrcNode)](module/extension/PSDELogicLink/query/CurItemBySrcNode)|CurItemBySrcNode|否|否 |否 ||
|[数据查询(DEFAULT)](module/extension/PSDELogicLink/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/extension/PSDELogicLink/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[目标节点相关连线(CurItemByDscNode)](module/extension/PSDELogicLink/dataset/CurItemByDscNode)|CurItemByDscNode|数据查询|否|||
|[源节点相关连线(CurItemBySrcNode)](module/extension/PSDELogicLink/dataset/CurItemBySrcNode)|CurItemBySrcNode|数据查询|否|||
|[数据集(DEFAULT)](module/extension/PSDELogicLink/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_DSTPSDELOGICNODEID_EQ|目标节点|EQ||
|N_DSTPSDELOGICNODENAME_EQ|目标节点|EQ||
|N_DSTPSDELOGICNODENAME_LIKE|目标节点|LIKE||
|N_PSDELOGICID_EQ|实体处理逻辑|EQ||
|N_PSDELOGICLINKID_EQ|实体处理逻辑链接标识|EQ||
|N_PSDELOGICLINKNAME_LIKE|连接名称|LIKE||
|N_PSDELOGICNAME_EQ|实体处理逻辑|EQ||
|N_PSDELOGICNAME_LIKE|实体处理逻辑|LIKE||
|N_SRCPSDELOGICNODEID_EQ|源节点|EQ||
|N_SRCPSDELOGICNODENAME_EQ|源节点|EQ||
|N_SRCPSDELOGICNODENAME_LIKE|源节点|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/extension/PSDELogicLink?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDELogicLink?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDELogicLink?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDELogicLink?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDELogicLink?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDELogicLink?id=搜索模式`">
  搜索模式
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
show_der:'minor',


      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>