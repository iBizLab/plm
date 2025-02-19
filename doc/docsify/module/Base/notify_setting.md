# 通知设置(notify_setting)  <!-- {docsify-ignore-all} -->


记录个人通知设置信息


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|是||
|所有者标识|OWNER_ID|文本，可指定长度|100|是||
|所有者类型|OWNER_TYPE|单项选择(文本值)|30|否||
|设置模型|SETTING_MODEL|一对多关系数据集合|1048576|是||
|系统标记|SYSTEM_TAG|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DERCUSTOM_NOTIFY_EVENT_NOTIFY_SETTING](der/DERCUSTOM_NOTIFY_EVENT_NOTIFY_SETTING)|[通知事件(NOTIFY_EVENT)](module/extension/notify_event)|自定义关系||


</el-tab-pane>
</el-tabs>
</el-row>

## 映射
| 名称col150    | 映射实体col200   | 备注col900  |
| -------- |----------  |----- |
|[实体映射](module/Base/notify_setting/demap/DEMap)|[通知设置(SYSTEM_EXTENSION_NOTIFY_SETTING)](module/extension/system_extension_notify_setting)||

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
|获取用户设置|get_by_user|[实体处理逻辑](module/Base/notify_setting/logic/get_by_user "获取用户通知设置")|默认|不支持||||
|行为|nothing|[实体处理逻辑](module/Base/notify_setting/logic/nothing "无操作")|默认|不支持||||
|保存配置|save_setting|[实体处理逻辑](module/Base/notify_setting/logic/save_setting "保存设置")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[保存设置](module/Base/notify_setting/logic/save_setting)|save_setting|无||保存通知设置|
|[无操作](module/Base/notify_setting/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[获取用户通知设置](module/Base/notify_setting/logic/get_by_user)|get_by_user|无||获取用户通知设置|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/notify_setting/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/notify_setting/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/notify_setting/dataset/Default)|DEFAULT|数据查询|是|||
|[当前用户(CUR_USER)](module/Base/notify_setting/dataset/cur_user)|CUR_USER|数据查询|否|||

## 数据权限

##### 全部数据（读） :id=notify_setting-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=notify_setting-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `CREATE`
* `UPDATE`
* `READ`



##### 当前用户（读写） :id=notify_setting-USER_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`
* `DELETE`
* `READ`
* `UPDATE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_OWNER_TYPE_EQ|所有者类型|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 还原默认配置并重新加载 | reset | 还原默认设置 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||
| 通知设置 | config | 通知设置 |无数据|用户自定义||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/notify_setting?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/notify_setting?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/notify_setting?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/notify_setting?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/notify_setting?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/notify_setting?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/notify_setting?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/notify_setting?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/notify_setting?id=界面行为`">
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