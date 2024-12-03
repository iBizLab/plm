# 组件(addon)  <!-- {docsify-ignore-all} -->


存储系统子产品中的组件信息，例如：客户、需求、工作项等


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|组件类型|ADDON_TYPE|文本，可指定长度|100|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|描述|DESCRIPTION|长文本，长度1000|2000|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|启用|IS_ENABLED|是否逻辑||是||
|名称|NAME|文本，可指定长度|200|是||
|排序|ORDER_VALUE|整型||是||
|所属标识|OWNER_ID|文本，可指定长度|100|是||
|所属子类型|OWNER_SUBTYPE|文本，可指定长度|100|是||
|所属类型|OWNER_TYPE|文本，可指定长度|100|是||
|配置模型|SETTING_MODEL|长文本，没有长度限制|1048576|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||

<p class="panel-title"><b>联合主键</b></p>

  * `组件类型(ADDON_TYPE)`
  * `所属类型(OWNER_TYPE)`
  * `所属子类型(OWNER_SUBTYPE)`
  * `所属标识(OWNER_ID)`

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_ADDON_ROLE_MEMBER_ADDON_ADDON_ID](der/DER1N_ADDON_ROLE_MEMBER_ADDON_ADDON_ID)|[组件权限成员(ADDON_ROLE_MEMBER)](module/Base/addon_role_member)|1:N关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_ADDON_LIBRARY_OWNER_ID](der/DERCUSTOM_ADDON_LIBRARY_OWNER_ID)|[测试库(LIBRARY)](module/TestMgmt/library)|自定义关系||
|[DERCUSTOM_ADDON_PORTFOLIO_OWNER_ID](der/DERCUSTOM_ADDON_PORTFOLIO_OWNER_ID)|[文件夹(PORTFOLIO)](module/Base/portfolio)|自定义关系||
|[DERCUSTOM_ADDON_PRODUCT_OWNER_ID](der/DERCUSTOM_ADDON_PRODUCT_OWNER_ID)|[产品(PRODUCT)](module/ProdMgmt/product)|自定义关系||
|[DERCUSTOM_ADDON_PROJECT_OWNER_ID](der/DERCUSTOM_ADDON_PROJECT_OWNER_ID)|[项目(PROJECT)](module/ProjMgmt/project)|自定义关系||
|[DERCUSTOM_ADDON_SPACE_OWNER_ID](der/DERCUSTOM_ADDON_SPACE_OWNER_ID)|[空间(SPACE)](module/Wiki/space)|自定义关系||

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
|组件权限|addon_authority|[实体处理逻辑](module/Base/addon/logic/addon_authority "组件权限计数器")|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/Base/addon/logic/nothing "无操作")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[无操作](module/Base/addon/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[组件权限计数器](module/Base/addon/logic/addon_authority)|addon_authority|无||获取组件权限计数器是数值|
|[获取视图消息](module/Base/addon/logic/get_view_msg)|get_view_msg|无||获取视图消息|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/addon/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/addon/query/View)|VIEW|否|否 |否 ||
|[当前所有者(cur_owner)](module/Base/addon/query/cur_owner)|cur_owner|否|否 |否 ||
|[预定义组件(predefine)](module/Base/addon/query/predefine)|predefine|否|否 |否 ||
|[实体数据关系界面组（同步）(PSMODEL_SYNC)](module/Base/addon/query/psmodel_sync)|PSMODEL_SYNC|否|否 |否 |用于定义实体数据关系界面组同步的数据|

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/addon/dataset/Default)|DEFAULT|数据查询|是|||
|[当前所有者及系统预定义(cur_owner_sys)](module/Base/addon/dataset/cur_owner_sys)|cur_owner_sys|数据查询|否|||
|[实体数据关系界面组（同步）(PSMODEL_SYNC)](module/Base/addon/dataset/psmodel_sync)|PSMODEL_SYNC|数据查询|否||用于定义实体数据关系界面组同步的数据|

## 数据权限

##### 全部数据（读） :id=addon-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=addon-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`
* `DELETE`
* `UPDATE`
* `READ`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ADDON_TYPE_EQ|组件类型|EQ||
|N_ID_NOTEQ|标识|NOTEQ||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_OWNER_ID_EQ|所属标识|EQ||
|N_OWNER_ID_ISNULL|所属标识|ISNULL||
|N_OWNER_SUBTYPE_EQ|所属子类型|EQ||
|N_OWNER_TYPE_EQ|所属类型|EQ||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/addon?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/addon?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/addon?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/addon?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/addon?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/addon?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/addon?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/addon?id=搜索模式`">
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