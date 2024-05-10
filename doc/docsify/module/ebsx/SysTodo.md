# 待办(SysTodo)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|业务数据标识|BIZKEY|文本，可指定长度|100|是||
|业务对象|BIZTYPE|文本，可指定长度|100|是||
|长文本参数01|CLOBPARAM01|长文本，没有长度限制|1048576|是||
|长文本参数02|CLOBPARAM02|长文本，没有长度限制|1048576|是||
|内容|CONTENT|长文本，没有长度限制|1048576|是||
|创建时间|CREATEDATE|日期时间型||是||
|创建人|CREATEMAN|文本，可指定长度|100|是||
|上一环节处理人|CREATEMANNAME|文本，可指定长度|100|是||
|租户系统标识|DCSYSTEMID|文本，可指定长度|100|是||
|租户系统名称|DCSYSTEMNAME|文本，可指定长度|100|是||
|过期时间|DUEDATE|日期时间型||是||
|是否已读|ISREAD|是否逻辑||是||
|连接地址|LINKURL|文本，可指定长度|300|是||
|业务单号|NUM|文本，可指定长度|100|是||
|组织机构标识|ORGID|文本，可指定长度|60|是||
|参数01|PARAM01|文本，可指定长度|100|是||
|参数02|PARAM02|文本，可指定长度|100|是||
|参数03|PARAM03|文本，可指定长度|100|是||
|参数04|PARAM04|文本，可指定长度|100|是||
|参数05|PARAM05|文本，可指定长度|100|是||
|参数06|PARAM06|文本，可指定长度|100|是||
|参数07|PARAM07|文本，可指定长度|100|是||
|参数08|PARAM08|文本，可指定长度|100|是||
|参数09|PARAM09|文本，可指定长度|200|是||
|处理时间|PROCESSDATE|日期时间型||是||
|标题|TITLE|文本，可指定长度|200|否||
|待办标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|TODOID|全局唯一标识，文本类型，用户不可见|60|否||
|待办状态|TODOSTATE|单项选择(文本值)|100|是||
|待办子类|TODOSUBTYPE|文本，可指定长度|100|是||
|待办类型|TODOTYPE|文本，可指定长度|100|是||
|待办地址类型|TODOURLTYPE|单项选择(文本值)|60|是||
|更新时间|UPDATEDATE|日期时间型||是||
|更新人|UPDATEMAN|文本，可指定长度|100|是||
|更新人|UPDATEMANNAME|文本，可指定长度|100|是||
|待办用户标识|USERID|文本，可指定长度|100|否||


## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|GetLinkUrl|GetLinkUrl|用户自定义|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[当前用户数据(CurUser)](module/ebsx/SysTodo/query/CurUser)|CurUser|否|否 |否 ||
|[数据查询(DEFAULT)](module/ebsx/SysTodo/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ebsx/SysTodo/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[当前用户数据(CurUser)](module/ebsx/SysTodo/dataset/CurUser)|CurUser|数据查询|否|||
|[数据集(DEFAULT)](module/ebsx/SysTodo/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_TITLE_LIKE|标题|LIKE||
|N_TODOID_EQ|待办标识|EQ||
|N_TODOSTATE_EQ|待办状态|EQ||
|N_TODOURLTYPE_EQ|待办地址类型|EQ||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ebsx/SysTodo?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/SysTodo?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/SysTodo?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/SysTodo?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/SysTodo?id=搜索模式`">
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