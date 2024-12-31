# 用户角色关系(UserRole)  <!-- {docsify-ignore-all} -->


角色成员映射实体


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立时间|CREATEDATE|日期时间型|8|否||
|建立人|CREATEMAN|文本，可指定长度|60|否||
|创建人|CREATEMANNAME|文本，可指定长度|100|是||
|启用标志|ISVALID|是否逻辑|100|是||
|角色|SYS_ROLEID|文本，可指定长度|100|是||
|用户角色关系标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|SYS_USER_ROLEID|全局唯一标识，文本类型，用户不可见|100|否||
|更新时间|UPDATEDATE|日期时间型|8|否||
|更新人|UPDATEMAN|文本，可指定长度|60|否||
|更新人|UPDATEMANNAME|文本，可指定长度|100|是||
|用户标识|USERID|文本，可指定长度|100|是||


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
|[数据查询(DEFAULT)](module/ebsx/UserRole/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ebsx/UserRole/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ebsx/UserRole/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_SYS_USER_ROLEID_EQ|用户角色关系标识|EQ||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ebsx/UserRole?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/UserRole?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/UserRole?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/UserRole?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/UserRole?id=搜索模式`">
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