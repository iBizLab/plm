# 核心产品(PSCorePrd)  <!-- {docsify-ignore-all} -->


管理查看应用市场产品


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|图标路径|AVATARURL|文本，可指定长度|500|是||
|产品标签|CATEGORY|长文本，长度1000|2000|是||
|变更日志|CHANGELOG|长文本，没有长度限制|1048576|是||
|建立时间|CREATEDATE|日期时间型|8|否||
|建立人|CREATEMAN|文本，可指定长度|60|否||
|当前版本|CURRENTVERSION|文本，可指定长度|100|是||
|部署数据源|DEPLOY_DATA_SOURCE_ID|文本，可指定长度|100|是||
|部署版本|DEPLOY_PRDVER_ID|文本，可指定长度|100|是||
|部署节点|DEPLOY_SERVICE_HUB_ID|文本，可指定长度|100|是||
|部署应用名|DEPLOY_SYSTEM_CODE|文本，可指定长度|100|是||
|完全名称|FULLNAME|文本，可指定长度|1000|是||
|完全路径|FULLPATH|文本，可指定长度|1000|是||
|Http仓库地址|HTTPURLTOREPO|长文本，长度1000|1000|是||
|详细信息|INFO|长文本，没有长度限制|1048576|是||
|备注|MEMO|长文本，长度1000|4000|是||
|路径|PATH|文本，可指定长度|200|是||
|安装包路径|PKGFOLDER|文本，可指定长度|250|是||
|产品编号|PRDSN|文本，可指定长度|100|是||
|产品标记|PRDTAG|文本，可指定长度|200|是||
|产品标记2|PRDTAG2|文本，可指定长度|200|是||
|产品分类|PSCOREPRDCATID|文本，可指定长度|100|是||
|产品分类|PSCOREPRDCATNAME|文本，可指定长度|100|是||
|产品分类路径|PSCOREPRDCATPATH|文本，可指定长度|100|是||
|核心产品标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|PSCOREPRDID|全局唯一标识，文本类型，用户不可见|100|否||
|产品名称|PSCOREPRDNAME|文本，可指定长度|200|是||
|设置|SETTINGS|文本，可指定长度|500|是||
|设置地址|SETTINGURL|文本，可指定长度|500|是||
|更新时间|UPDATEDATE|日期时间型|8|否||
|更新人|UPDATEMAN|文本，可指定长度|60|否||
|可用版本|VERS|文本，可指定长度|500|是||


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
|[数据查询(DEFAULT)](module/extension/PSCorePrd/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/extension/PSCorePrd/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/extension/PSCorePrd/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_PSCOREPRDCATID_EQ|产品分类|EQ||
|N_PSCOREPRDCATID_IN|产品分类|IN||
|N_PSCOREPRDID_EQ|核心产品标识|EQ||
|N_PSCOREPRDNAME_LIKE|产品名称|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/extension/PSCorePrd?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSCorePrd?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSCorePrd?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSCorePrd?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSCorePrd?id=搜索模式`">
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