# 实体处理逻辑节点(PSDELogicNode)  <!-- {docsify-ignore-all} -->


实体处理逻辑节点


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|智能体标识|AIAGENTTAG|文本，可指定长度|100|是||
|代码名称|CODENAME|文本，可指定长度|60|否||
|内容|CONTENT|文本，可指定长度|100|是||
|操作参数|DSTPSDLPARAMID|文本，可指定长度|100|是||
|操作参数|DSTPSDLPARAMNAME|文本，可指定长度|100|是||
|输入流参数|ISPSDLPARAMID|文本，可指定长度|100|是||
|输入流参数|ISPSDLPARAMNAME|文本，可指定长度|100|是||
|逻辑节点子类型|LOGICNODESUBTYPE|文本，可指定长度|40|是||
|逻辑节点类型|LOGICNODETYPE|[单项选择(文本值)](index/dictionary_index#DELogicNodeType3 "实体逻辑处理节点类型(设计)3")|40|否||
|排序属性|ORDERVALUE|整型||是||
|输出流参数|OSPSDLPARAMID|文本，可指定长度|100|是||
|输出流参数|OSPSDLPARAMNAME|文本，可指定长度|100|是||
|循环后续处理|PARALLELOUTPUT|是否逻辑||是||
|参数1|PARAM1|文本，可指定长度|100|是||
|参数10|PARAM10|是否逻辑||是||
|参数11|PARAM11|文本，可指定长度|100|是||
|参数12|PARAM12|文本，可指定长度|100|是||
|参数13|PARAM13|文本，可指定长度|100|是||
|参数4|PARAM4|长文本，没有长度限制|1048576|是||
|参数7|PARAM7|整型||是||
|参数8|PARAM8|整型||是||
|参数9|PARAM9|是否逻辑||是||
|项目标识|PROJECT_ID|外键值|100|是||
|项目名称|PROJECT_NAME|外键值文本|200|是||
|实体处理逻辑|PSDELOGICID|外键值|100|否||
|实体处理逻辑|PSDELOGICNAME|外键值文本|200|否||
|实体处理逻辑节点标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|PSDELOGICNODEID|全局唯一标识，文本类型，用户不可见|100|否||
|逻辑处理名称|PSDELOGICNODENAME|文本，可指定长度|200|否||
|系统AI交谈代理标识|PSSYSAICHATAGENTID|文本，可指定长度|100|是||
|系统AI交谈代理名称|PSSYSAICHATAGENTNAME|文本，可指定长度|100|是||
|系统AI工厂标识|PSSYSAIFACTORYID|文本，可指定长度|100|是||
|系统AI工厂|PSSYSAIFACTORYNAME|文本，可指定长度|100|是||
|消息模板|PSSYSMSGTEMPLID|文本，可指定长度|100|是||
|消息模板|PSSYSMSGTEMPLNAME|文本，可指定长度|100|是||
|返回绑定参数|RETPSDLPARAMID|文本，可指定长度|100|是||
|返回绑定参数|RETPSDLPARAMNAME|文本，可指定长度|100|是||
|源参数|SRCPSDLPARAMID|文本，可指定长度|100|是||
|源参数|SRCPSDLPARAMNAME|文本，可指定长度|100|是||
|标题|TITLE|文本，可指定长度|100|是||
|工作项类型|WORK_ITEM_TYPE_ID|文本，可指定长度|100|是||
|工作项类型|WORK_ITEM_TYPE_NAME|文本，可指定长度|100|是||


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
|[DER1N_PSDELOGICNODE_PROJECT_PROJECT_ID](der/DER1N_PSDELOGICNODE_PROJECT_PROJECT_ID)|[项目(PROJECT)](module/ProjMgmt/project)|1:N关系||
|[DER1N_PSDELOGICNODE_PSDELOGIC_PSDELOGICID](der/DER1N_PSDELOGICNODE_PSDELOGIC_PSDELOGICID)|[实体处理逻辑(PSDELOGIC)](module/extension/PSDELogic)|1:N关系||
|[DERCUSTOM_PSDELOGICNODE_PSDEMSLOGIC_PSDELOGICID](der/DERCUSTOM_PSDELOGICNODE_PSDEMSLOGIC_PSDELOGICID)|[实体主状态迁移逻辑(PSDEMSLOGIC)](module/extension/PSDEMSLogic)|自定义关系||

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
|N_LOGICNODETYPE_EQ|逻辑节点类型|EQ||
|N_PROJECT_ID_EQ|项目标识|EQ||
|N_PROJECT_NAME_EQ|项目名称|EQ||
|N_PROJECT_NAME_LIKE|项目名称|LIKE||
|N_PSDELOGICID_EQ|实体处理逻辑|EQ||
|N_PSDELOGICNAME_EQ|实体处理逻辑|EQ||
|N_PSDELOGICNAME_LIKE|实体处理逻辑|LIKE||
|N_PSDELOGICNODEID_EQ|实体处理逻辑节点标识|EQ||
|N_PSDELOGICNODENAME_LIKE|逻辑处理名称|LIKE||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 添加状态 | addStatus | 添加状态 |无数据|<details><summary>打开视图或向导（模态）</summary>[实体处理逻辑节点](app/view/psdelogicnodequickcreateview_msnode)</details>||

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
<el-anchor-link :href="`#/module/extension/PSDELogicNode?id=界面行为`">
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