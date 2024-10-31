# 实体主状态迁移逻辑(PSDEMSLogic)  <!-- {docsify-ignore-all} -->


实体主状态迁移逻辑


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|代码标识|CODENAME|文本，可指定长度|60|否||
|建立时间|CREATEDATE|日期时间型|8|否||
|建立人|CREATEMAN|文本，可指定长度|60|否||
|扩展模型|DYNAMODELFLAG|是否逻辑||是||
|扩展标记|EXTENSION_TAG|文本，可指定长度|200|是||
|扩展标记2|EXTENSION_TAG2|文本，可指定长度|200|是||
|扩展标记3|EXTENSION_TAG3|文本，可指定长度|200|是||
|扩展标记4|EXTENSION_TAG4|文本，可指定长度|200|是||
|逻辑类型|LOGICTYPE|文本，可指定长度|50|是||
|实体|PSDEID|文本，可指定长度|100|否||
|实体处理逻辑标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|PSDELOGICID|全局唯一标识，文本类型，用户不可见|100|否||
|逻辑连接|PSDELOGICLINKS|一对多关系数据集合|1048576|是||
|实体处理逻辑名称|PSDELOGICNAME|文本，可指定长度|200|是||
|逻辑节点|PSDELOGICNODES|一对多关系数据集合|1048576|是||
|实体|PSDENAME|文本，可指定长度|100|否||
|更新时间|UPDATEDATE|日期时间型|8|否||
|更新人|UPDATEMAN|文本，可指定长度|60|否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DERCUSTOM_PSDELOGICLINK_PSDEMSLOGIC_PSDELOGICID](der/DERCUSTOM_PSDELOGICLINK_PSDEMSLOGIC_PSDELOGICID)|[实体处理逻辑链接(PSDELOGICLINK)](module/extension/PSDELogicLink)|自定义关系||
|[DERCUSTOM_PSDELOGICNODE_PSDEMSLOGIC_PSDELOGICID](der/DERCUSTOM_PSDELOGICNODE_PSDEMSLOGIC_PSDELOGICID)|[实体处理逻辑节点(PSDELOGICNODE)](module/extension/PSDELogicNode)|自定义关系||


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
|[数据查询(DEFAULT)](module/extension/PSDEMSLogic/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/extension/PSDEMSLogic/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/extension/PSDEMSLogic/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_PSDEID_EQ|实体|EQ||
|N_PSDELOGICID_EQ|实体处理逻辑标识|EQ||
|N_PSDELOGICNAME_LIKE|实体处理逻辑名称|LIKE||
|N_PSDENAME_EQ|实体|EQ||
|N_PSDENAME_LIKE|实体|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/extension/PSDEMSLogic?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDEMSLogic?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDEMSLogic?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDEMSLogic?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDEMSLogic?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDEMSLogic?id=搜索模式`">
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