# 规则模板(template_flow)  <!-- {docsify-ignore-all} -->


用于承载规则模板实体


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|文本，可指定长度|200|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


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

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[同步父子工作项的完成状态](module/Base/template_flow/logic/sync_work_item_finish)|sync_work_item_finish|属性变化处理（运行时支持）||同步父子工作项的完成状态|
|[定时将已完成工作项归档](module/Base/template_flow/logic/turn_work_item_archived)|turn_work_item_archived|定时作业（运行时支持）||通过定时任务，将已完成的工作项归档，结束时间超过三天。|
|[自动创建子任务](module/Base/template_flow/logic/auto_create_sub_work_item)|auto_create_sub_work_item|事件处理（运行时支持）||自动化，自动创建子任务|
|[自动将新团队成员加入团队空间](module/Base/template_flow/logic/auto_add_member_to_space)|auto_add_member_to_space|事件处理（运行时支持）||新成员加入团队后，自动加入到该团队的空间。|
|[自动将新团队成员加入团队项目](module/Base/template_flow/logic/auto_add_member_to_project)|auto_add_member_to_project|事件处理（运行时支持）||新成员加入团队后，自动加入到该团队的项目。|
|[自动设置工作项负责人](module/Base/template_flow/logic/auto_fill_assign_man)|auto_fill_assign_man|事件处理（运行时支持）||自动化，自动设置工作项负责人|
|[自动设置测试计划的启动和完成状态](module/Base/template_flow/logic/test_plan_auto_set_state)|test_plan_auto_set_state|事件处理（运行时支持）||<br>自动设置测试计划的启动和完成状态|
|[项目自动变更状态](module/Base/template_flow/logic/project_automatic_change_state)|project_automatic_change_state|定时作业（运行时支持）||定时执行，当项目的结束时间小于当前日期时，自动将项目状态变更为延期；<br>当项目的结束时间距今不足五天时，自动将项目状态变更为预警；|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/template_flow/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/template_flow/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/template_flow/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|名称|LIKE||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/template_flow?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/template_flow?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/template_flow?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/template_flow?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/template_flow?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/template_flow?id=搜索模式`">
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