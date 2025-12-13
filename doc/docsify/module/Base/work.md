# 工作(work)  <!-- {docsify-ignore-all} -->


用于查看及管理项目集所包含的具体项目清单。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|是||
|关联主体标识|PILOT_ID|文本，可指定长度|100|是||
|文件夹标识|PORTFOLIO_ID|外键值|100|是||
|关联主体标识|PRINCIPAL_ID|文本，可指定长度|100|是||
|关联主体类型|PRINCIPAL_TYPE|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||

<p class="panel-title"><b>联合主键</b></p>

  * `文件夹标识(PORTFOLIO_ID)`
  * `关联主体标识(PRINCIPAL_ID)`

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_WORK_PORTFOLIO_PORTFOLIO_ID](der/DER1N_WORK_PORTFOLIO_PORTFOLIO_ID)|[文件夹(PORTFOLIO)](module/Base/portfolio)|1:N关系||
|[DERCUSTOM_WORK_PROJECT_PILOT_ID](der/DERCUSTOM_WORK_PROJECT_PILOT_ID)|[项目(PROJECT)](module/ProjMgmt/project)|自定义关系||

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
|添加项目|add_project|[实体处理逻辑](module/Base/work/logic/add_project "添加项目")|默认|不支持||||
|添加项目集|add_project_portfolio|[实体处理逻辑](module/Base/work/logic/add_project_portfolio "添加项目集")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[添加项目](module/Base/work/logic/add_project)|add_project|无||项目集下添加子项目|
|[添加项目集](module/Base/work/logic/add_project_portfolio)|add_project_portfolio|无||项目集下添加子项目集。注：只可选择无子项目集的，预防反复嵌套|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/work/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/work/query/View)|VIEW|否|否 |否 ||
|[项目集下的工作(item_set_owner)](module/Base/work/query/item_set_owner)|item_set_owner|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/work/dataset/Default)|DEFAULT|数据查询|是|||
|[项目集下的工作(item_set_owner)](module/Base/work/dataset/item_set_owner)|item_set_owner|数据查询|否|||

## 数据权限

##### 操作用户(写) :id=work-USER_W

<p class="panel-title"><b>数据范围</b></p>

* `无`

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_PILOT_ID_EQ|关联主体标识|EQ||
|N_PORTFOLIO_ID_EQ|文件夹标识|EQ||
|N_PRINCIPAL_ID_EQ|关联主体标识|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 选择项目集 | choose_item_set | 选择项目集 |无数据|<details><summary>后台调用</summary>[add_project_portfolio](#行为)||
| 选择项目 | choose_project | 选择项目 |无数据|<details><summary>后台调用</summary>[add_project](#行为)||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/work?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/work?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/work?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/work?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/work?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/work?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/work?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/work?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/work?id=界面行为`">
  界面行为
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