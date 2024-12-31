# 效能成员(insight_member)  <!-- {docsify-ignore-all} -->


存储效能视图对应的成员


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|名称|NAME|外键值文本|200|是||
|效能标识|OWNER_ID|外键值|100|是||
|所属对象子类型|OWNER_SUBTYPE|文本，可指定长度|100|是||
|所属数据对象|OWNER_TYPE|文本，可指定长度|100|是||
|角色|ROLE_ID|[单项选择(文本值)](index/dictionary_index#role_type "角色类型")|60|是||
|职位|TITLE|外键值附加数据|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|用户标识|USER_ID|外键值|100|是||

<p class="panel-title"><b>联合主键</b></p>

  * `效能标识(OWNER_ID)`
  * `用户标识(USER_ID)`
  * `所属数据对象(OWNER_TYPE)`

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_INSIGHT_MEMBER_INSIGHT_VIEW_OWNER_ID](der/DER1N_INSIGHT_MEMBER_INSIGHT_VIEW_OWNER_ID)|[效能视图(INSIGHT_VIEW)](module/Insight/insight_view)|1:N关系||
|[DER1N_INSIGHT_MEMBER_USER_USER_ID](der/DER1N_INSIGHT_MEMBER_USER_USER_ID)|[企业用户(USER)](module/Base/user)|1:N关系||

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
|变更角色|change_role|[实体处理逻辑](module/Insight/insight_member/logic/change_role "变更角色")|默认|不支持||||
|变更职位|choose_position|[实体处理逻辑](module/Insight/insight_member/logic/change_position "变更职位")|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/Insight/insight_member/logic/nothing "无操作")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[变更职位](module/Insight/insight_member/logic/change_position)|change_position|无||批量设置角色身份（position_id）|
|[变更角色](module/Insight/insight_member/logic/change_role)|change_role|无||批量设置角色身份（role_id）|
|[无操作](module/Insight/insight_member/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Insight/insight_member/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Insight/insight_member/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Insight/insight_member/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_EQ|名称|EQ||
|N_NAME_LIKE|名称|LIKE||
|N_OWNER_ID_EQ|效能标识|EQ||
|N_OWNER_TYPE_EQ|所属数据对象|EQ||
|N_ROLE_ID_EQ|角色|EQ||
|N_USER_ID_EQ|用户标识|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 设置角色 | setting_role | 设置角色 |多项数据（主键）|<details><summary>后台调用</summary>[change_role](#行为)||
| 选择职位 | choose_position | 选择职位 |多项数据（主键）|<details><summary>后台调用</summary>[choose_position](#行为)||
| 移除成员 | remove_member | 移除成员 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[新建视图默认临时成员](module/Insight/insight_member/uilogic/create_default_temp_members)|create_default_temp_members|创建临时数据，并将当前用户加入到视图临时成员内|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Insight/insight_member?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Insight/insight_member?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Insight/insight_member?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Insight/insight_member?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/Insight/insight_member?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Insight/insight_member?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Insight/insight_member?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Insight/insight_member?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Insight/insight_member?id=界面逻辑`">
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