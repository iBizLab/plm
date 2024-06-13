# 实体处理逻辑节点(PSDELogicNode)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|实体处理逻辑|PSDELOGICID|外键值|100|否||
|实体处理逻辑|PSDELOGICNAME|外键值文本|200|否||
|实体处理逻辑节点标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|PSDELOGICNODEID|全局唯一标识，文本类型，用户不可见|100|否||
|逻辑处理名称|PSDELOGICNODENAME|文本，可指定长度|200|否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_PSDELOGICLINK_PSDELOGICNODE_DSTPSDELOGICNODEID](der/DER1N_PSDELOGICLINK_PSDELOGICNODE_DSTPSDELOGICNODEID)|[实体处理逻辑链接(PSDELOGICLINK)](module/extension/PSDELogicLink)|1:N关系||
|[DER1N_PSDELOGICLINK_PSDELOGICNODE_SRCPSDELOGICNODEID](der/DER1N_PSDELOGICLINK_PSDELOGICNODE_SRCPSDELOGICNODEID)|[实体处理逻辑链接(PSDELOGICLINK)](module/extension/PSDELogicLink)|1:N关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_PSDELOGICNODE_PSDELOGIC_PSDELOGICID](der/DER1N_PSDELOGICNODE_PSDELOGIC_PSDELOGICID)|[实体处理逻辑(PSDELOGIC)](module/extension/PSDELogic)|1:N关系||

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
|[数据查询(DEFAULT)](module/extension/PSDELogicNode/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/extension/PSDELogicNode/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/extension/PSDELogicNode/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_PSDELOGICID_EQ|实体处理逻辑|EQ||
|N_PSDELOGICNAME_EQ|实体处理逻辑|EQ||
|N_PSDELOGICNAME_LIKE|实体处理逻辑|LIKE||
|N_PSDELOGICNODEID_EQ|实体处理逻辑节点标识|EQ||
|N_PSDELOGICNODENAME_LIKE|逻辑处理名称|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/extension/PSDELogicNode?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDELogicNode?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDELogicNode?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDELogicNode?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDELogicNode?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDELogicNode?id=搜索模式`">
  搜索模式
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