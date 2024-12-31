# 组织(SysOrganization)  <!-- {docsify-ignore-all} -->


组织映射实体


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|创建时间|CREATEDATE|日期时间型||是||
|逻辑有效|ENABLE|是否逻辑||是||
|启用标识|ISVALID|是否逻辑||是||
|单位编码|ORGCODE|文本，可指定长度|100|是||
|单位标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ORGID|全局唯一标识，文本类型，用户不可见|60|是||
|名称|ORGNAME|文本，可指定长度|100|是||
|上级单位|PORGID|外键值|60|是||
|上级单位|PORGNAME|外键值文本|100|是||
|单位简称|SHORTNAME|文本，可指定长度|100|是||
|排序|SHOWORDER|整型||是||
|属性|UPDATEDATE|日期时间型||是||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_SYS_ORG_SYS_ORG_PORGID](der/DER1N_SYS_ORG_SYS_ORG_PORGID)|[组织(SYS_ORG)](module/ebsx/SysOrganization)|1:N关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_SYS_ORG_SYS_ORG_PORGID](der/DER1N_SYS_ORG_SYS_ORG_PORGID)|[组织(SYS_ORG)](module/ebsx/SysOrganization)|1:N关系||

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
|[数据查询(DEFAULT)](module/ebsx/SysOrganization/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ebsx/SysOrganization/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ebsx/SysOrganization/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ORGID_EQ|单位标识|EQ||
|N_ORGNAME_LIKE|名称|LIKE||
|N_PORGID_EQ|上级单位|EQ||
|N_PORGNAME_EQ|上级单位|EQ||
|N_PORGNAME_LIKE|上级单位|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ebsx/SysOrganization?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/SysOrganization?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/SysOrganization?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/SysOrganization?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/SysOrganization?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ebsx/SysOrganization?id=搜索模式`">
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