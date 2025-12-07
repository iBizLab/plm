# 视图主题设置(view_theme_setting)  <!-- {docsify-ignore-all} -->


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|应用标记|APP_TAG|文本，可指定长度|100|是||
|应用视图标记|APP_VIEW_TAG|文本，可指定长度|100|是||
|标题|CAPTION|文本，可指定长度|200|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|是||
|排序值|ORDER_VALUE|整型||是||
|所有者类型|OWNER_TYPE|单项选择(文本值)|30|否||
|过滤条件|SEARCH_CONDS|一对多动态对象|1048576|是||
|系统标记|SYSTEM_TAG|文本，可指定长度|100|是||
|主题模型|THEME_MODEL|长文本，没有长度限制|1048576|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|启用标记|VALID_FLAG|是否逻辑||是||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_VIEW_THEME_SETTING_WORK_ITEM](der/DERCUSTOM_VIEW_THEME_SETTING_WORK_ITEM)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|自定义关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 映射
| 名称col150    | 映射实体col200   | 备注col900  |
| -------- |----------  |----- |
|[实体映射](module/Base/view_theme_setting/demap/DEMap)|[应用视图主题(APP_VIEW_THEME)](module/ebsx/app_view_theme)||

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持|[附加操作](index/action_logic_index#view_theme_setting_Get)|||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|获取过滤条件|fill_search_conds|[实体处理逻辑](module/Base/view_theme_setting/logic/fill_search_conds "获取过滤条件")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[数据去重](module/Base/view_theme_setting/logic/distinctData)|distinctData|无|||
|[获取过滤条件](module/Base/view_theme_setting/logic/fill_search_conds)|fill_search_conds|无|||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/view_theme_setting/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/view_theme_setting/query/View)|VIEW|否|否 |否 ||
|[我的主题设置(my_view_theme_setting)](module/Base/view_theme_setting/query/my_view_theme_setting)|my_view_theme_setting|否|否 |否 ||
|[实体数据关系界面组（同步）(PSMODEL_SYNC)](module/Base/view_theme_setting/query/psmodel_sync)|PSMODEL_SYNC|否|否 |否 |用于定义实体数据关系界面组同步的数据|

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/view_theme_setting/dataset/Default)|DEFAULT|数据查询|是|||
|[当前用户全部（含全局）(CUR_USER_ALL)](module/Base/view_theme_setting/dataset/cur_user_all)|CUR_USER_ALL|数据查询|否|||
|[当前用户全部（含全局去重）(CUR_USER_ALL2)](module/Base/view_theme_setting/dataset/cur_user_all2)|CUR_USER_ALL2|[实体逻辑](module/Base/view_theme_setting/logic/distinctData)|否|||
|[我的主题设置(my_view_theme_setting)](module/Base/view_theme_setting/dataset/my_view_theme_setting)|my_view_theme_setting|数据查询|否|||
|[实体数据关系界面组（同步）(PSMODEL_SYNC)](module/Base/view_theme_setting/dataset/psmodel_sync)|PSMODEL_SYNC|数据查询|否||用于定义实体数据关系界面组同步的数据|

## 数据权限

##### 全部数据（读） :id=view_theme_setting-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=view_theme_setting-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`
* `UPDATE`
* `CREATE`
* `DELETE`



##### 我的主题设置（读写） :id=view_theme_setting-USER_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[我的主题设置(my_view_theme_setting)](module/Base/view_theme_setting#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `UPDATE`
* `READ`
* `DELETE`
* `CREATE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_APP_VIEW_TAG_EQ|应用视图标记|EQ||
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_OWNER_TYPE_EQ|所有者类型|EQ||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/view_theme_setting?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/view_theme_setting?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/view_theme_setting?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/view_theme_setting?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/view_theme_setting?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/view_theme_setting?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/view_theme_setting?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/view_theme_setting?id=搜索模式`">
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