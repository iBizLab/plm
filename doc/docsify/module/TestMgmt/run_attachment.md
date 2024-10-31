# 执行用例结果附件(run_attachment)  <!-- {docsify-ignore-all} -->


执行用例中产出的具体成果物，包括文档、软件代码、报告等。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|文件标识|FILE_ID|文件|500|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|是||
|所属数据标识|OWNER_ID|文本，可指定长度|100|是||
|所属对象子类型|OWNER_SUBTYPE|文本，可指定长度|100|是||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|是||
|标题|TITLE|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DERCUSTOM_RUN_RUN_ATTACHMENT](der/DERCUSTOM_RUN_RUN_ATTACHMENT)|[执行用例(RUN)](module/TestMgmt/run)|自定义关系||

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

## 主状态控制

<p class="panel-title"><b>控制属性</b></p>

* `名称(NAME)` 



> 控制属性未配置代码表，或者代码表未配置代码项

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/TestMgmt/run_attachment/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/TestMgmt/run_attachment/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/TestMgmt/run_attachment/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_NAME_EQ|名称|EQ||
|N_OWNER_ID_EQ|所属数据标识|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 附件下载 | download | 下载 |单项数据|用户自定义||
| 附件删除（移动端） | mob_attachment_delete | 删除 |单项数据（主键）|用户自定义||
| 添加附件 | add_attachments | 添加附件 |无数据|用户自定义||
| 添加附件(移动端) | mob_add_attachments | 添加附件 |无数据|用户自定义||
| 删除 | del | 删除 |单项数据（主键）|用户自定义||
| 上传附件 | upload_attachment | 上传 |无数据|用户自定义||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[删除](module/TestMgmt/run_attachment/uilogic/del)|del|执行删除方法，并根据条件隐藏表格（数据为空）|
|[添加附件数据](module/TestMgmt/run_attachment/uilogic/add_attachment)|add_attachment|调用附件上传行为，添加附件数据|
|[添加附件数据（移动端）](module/TestMgmt/run_attachment/uilogic/mob_add_attachment)|mob_add_attachment|调用附件上传行为，添加附件数据|
|[获取移动端结果附件总条数](module/TestMgmt/run_attachment/uilogic/get_mob_run_attachment)|get_mob_run_attachment||
|[获取结果附件总条数](module/TestMgmt/run_attachment/uilogic/get_run_attachment_total)|get_run_attachment_total|获取结果附件总条数|
|[附件删除（移动端）](module/TestMgmt/run_attachment/uilogic/mob_remove_attachment)|mob_remove_attachment|自动判断为列表或表单附件，按类别删除|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/TestMgmt/run_attachment?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/run_attachment?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/run_attachment?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/run_attachment?id=主状态控制`">
  主状态控制
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/run_attachment?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/run_attachment?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/run_attachment?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/run_attachment?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/TestMgmt/run_attachment?id=界面逻辑`">
  界面逻辑
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