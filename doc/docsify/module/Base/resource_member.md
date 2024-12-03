# 资源组件成员(resource_member)  <!-- {docsify-ignore-all} -->


存储不同资源组件所包含的成员


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|组件标识|ADDON_ID|外键值|100|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|天容量|DAY_CAPACITY|一对一动态对象|1048576|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|姓名|NAME|外键值文本|200|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|登录名|USER_ID|外键值|100|是||
|周工作日|WEEKDAY|[多项选择(文本值)](index/dictionary_index#weekday "工作日")|4000|是||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_RESOURCE_MEMBER_ADDON_RESOURCE_ADDON_ID](der/DER1N_RESOURCE_MEMBER_ADDON_RESOURCE_ADDON_ID)|[资源组件(ADDON_RESOURCE)](module/Base/addon_resource)|1:N关系||
|[DER1N_RESOURCE_MEMBER_USER_USER_ID](der/DER1N_RESOURCE_MEMBER_USER_USER_ID)|[企业用户(USER)](module/Base/user)|1:N关系||

</el-tab-pane>
</el-tabs>
</el-row>

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
|[数据查询(DEFAULT)](module/Base/resource_member/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/resource_member/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/resource_member/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ADDON_ID_EQ|组件标识|EQ||
|N_ID_EQ|标识|EQ||
|N_NAME_EQ|姓名|EQ||
|N_NAME_LIKE|姓名|LIKE||
|N_USER_ID_EQ|登录名|EQ||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/resource_member?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/resource_member?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/resource_member?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/resource_member?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/resource_member?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/resource_member?id=搜索模式`">
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