# 实体数据流逻辑(PSDEDataflow)  <!-- {docsify-ignore-all} -->


实体数据流逻辑


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|代码标识|CODENAME|文本，可指定长度|60|否||
|建立时间|CREATEDATE|日期时间型|8|否||
|建立人|CREATEMAN|文本，可指定长度|60|否||
|扩展标记|EXTENSION_TAG|文本，可指定长度|200|是||
|扩展标记2|EXTENSION_TAG2|文本，可指定长度|200|是||
|扩展标记3|EXTENSION_TAG3|文本，可指定长度|200|是||
|扩展标记4|EXTENSION_TAG4|文本，可指定长度|200|是||
|实体|PSDEID|文本，可指定长度|100|否||
|实体处理逻辑标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|PSDELOGICID|全局唯一标识，文本类型，用户不可见|100|否||
|实体处理逻辑名称|PSDELOGICNAME|文本，可指定长度|200|是||
|实体|PSDENAME|文本，可指定长度|100|否||
|更新时间|UPDATEDATE|日期时间型|8|否||
|更新人|UPDATEMAN|文本，可指定长度|60|否||


## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
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
|[数据查询(DEFAULT)](module/extension/PSDEDataflow/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/extension/PSDEDataflow/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/extension/PSDEDataflow/dataset/Default)|DEFAULT|数据查询|是|||

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
<el-anchor-link :href="`#/module/extension/PSDEDataflow?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDEDataflow?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDEDataflow?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDEDataflow?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSDEDataflow?id=搜索模式`">
  搜索模式
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {



      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>