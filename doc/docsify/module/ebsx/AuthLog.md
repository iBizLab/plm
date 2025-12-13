# 认证日志(AuthLog)  <!-- {docsify-ignore-all} -->


认证日志信息


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|认证方式|AUTHAGENT|文本，可指定长度|100|是||
|认证结果|AUTHCODE|[单项选择(文本值)](index/dictionary_index#AuthCode "登录结果")|15|是||
|认证时间|AUTHTIME|日期时间型||是||
|域|DOMAINS|文本，可指定长度|100|是||
|IP地址|IPADDR|文本，可指定长度|100|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|LOGID|全局唯一标识，文本类型，用户不可见|100|否||
|MAC地址|MACADDR|文本，可指定长度|100|是||
|用户名称|PERSONNAME|文本，可指定长度|100|是||
|客户端|USERAGENT|文本，可指定长度|500|是||
|用户全局标识|USERID|文本，可指定长度|100|是||
|用户全局名|USERNAME|文本，可指定长度|100|是||


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
|[数据查询(DEFAULT)](module/ebsx/AuthLog/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ebsx/AuthLog/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[当前用户(CurUser)](module/ebsx/AuthLog/dataset/CurUser)|CurUser|数据查询|否|||
|[数据集(DEFAULT)](module/ebsx/AuthLog/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_AUTHCODE_EQ|认证结果|EQ||
|N_LOGID_EQ|标识|EQ||
|N_USERNAME_LIKE|用户全局名|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ebsx/AuthLog?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/AuthLog?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/AuthLog?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/AuthLog?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/AuthLog?id=搜索模式`">
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