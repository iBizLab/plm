# 产品成员(product_member)  <!-- {docsify-ignore-all} -->


记录产品团队中各个成员的角色·，方便管理和协作。


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|姓名|NAME|外键值文本|200|是||
|产品标识|PRODUCT_ID|外键值|100|是||
|产品编号|PRODUCT_IDENTIFIER|外键值附加数据|15|是||
|产品名称|PRODUCT_NAME|外键值文本|200|是||
|角色|ROLE_ID|[单项选择(文本值)](index/dictionary_index#product_role_type "产品角色类型")|60|是||
|职位|TITLE|外键值附加数据|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|登录名|USER_ID|外键值|100|是||

<p class="panel-title"><b>联合主键</b></p>

  * `产品标识(PRODUCT_ID)`
  * `登录名(USER_ID)`

## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_PRODUCT_MEMBER_PRODUCT_PRODUCT_ID](der/DER1N_PRODUCT_MEMBER_PRODUCT_PRODUCT_ID)|[产品(PRODUCT)](module/ProdMgmt/product)|1:N关系||
|[DER1N_PRODUCT_MEMBER_USER_USER_ID](der/DER1N_PRODUCT_MEMBER_USER_USER_ID)|[企业用户(USER)](module/Base/user)|1:N关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持|[附加操作](index/action_logic_index#product_member_Create)|||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持|[附加操作](index/action_logic_index#product_member_Remove)|||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|变更职位|change_position|[实体处理逻辑](module/ProdMgmt/product_member/logic/change_position "变更职位")|默认|不支持||||
|变更角色|change_role|[实体处理逻辑](module/ProdMgmt/product_member/logic/change_role "变更角色")|默认|不支持||||
|新建产品成员|create_product_member|[实体处理逻辑](module/ProdMgmt/product_member/logic/create_product_member "新建产品成员")|默认|不支持||||
|新建产品成员（移动端）|mob_create_product_member|[实体处理逻辑](module/ProdMgmt/product_member/logic/mob_create_product_member "新建产品成员（移动端）")|默认|不支持||||
|无操作|nothing|[实体处理逻辑](module/ProdMgmt/product_member/logic/nothing "无操作")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[变更职位](module/ProdMgmt/product_member/logic/change_position)|change_position|无||批量设置角色身份（position_id）|
|[变更角色](module/ProdMgmt/product_member/logic/change_role)|change_role|无||批量设置角色身份（role_id）|
|[新建产品成员](module/ProdMgmt/product_member/logic/create_product_member)|create_product_member|无||新建产品成员|
|[新建产品成员（移动端）](module/ProdMgmt/product_member/logic/mob_create_product_member)|mob_create_product_member|无|||
|[无操作](module/ProdMgmt/product_member/logic/nothing)|nothing|无||无操作逻辑，用于替换表单的获取数据行为|
|[移除产品成员通知](module/ProdMgmt/product_member/logic/remove_product_member_notify)|remove_product_member_notify|无||移除产品成员时向对应用户发送通知消息|

## 功能配置
| 中文名col200    | 功能类型col150    | 功能实体col200 |  备注col700|
| --------  | :----:    | ---- |----- |
|实体通知设置|通知设置|[通知设置(SYSTEM_EXTENSION_NOTIFY_SETTING)](module/extension/system_extension_notify_setting)||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/ProdMgmt/product_member/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/ProdMgmt/product_member/query/View)|VIEW|否|否 |否 ||
|[当前产品(cur_product)](module/ProdMgmt/product_member/query/cur_product)|cur_product|否|否 |否 ||
|[产品下成员(with_product)](module/ProdMgmt/product_member/query/with_product)|with_product|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/ProdMgmt/product_member/dataset/Default)|DEFAULT|数据查询|是|||
|[当前产品成员(cur_product)](module/ProdMgmt/product_member/dataset/cur_product)|cur_product|数据查询|否|||
|[产品下成员(with_product)](module/ProdMgmt/product_member/dataset/with_product)|with_product|数据查询|否|||

## 数据权限

##### 全部数据（读） :id=product_member-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



## 消息通知

|    中文名col200   | 代码名col150       |  消息队列col200   |  消息模板col200 |  通知目标col150     |  备注col350  |
|------------| -----   |  -------- | -------- |-------- |-------- |
|[产品成员加入通知](module/ProdMgmt/product_member/notify/create_member_notify)|create_member_notify|[默认消息队列](index/notify_index)|[产品通知模板(加入产品成员)](index/notify_index#product_member_create)|选择产品成员 ||
|[产品成员移除通知](module/ProdMgmt/product_member/notify/remove_member_notify)|remove_member_notify|[默认消息队列](index/notify_index)|[产品通知模板(移除产品成员)](index/notify_index#product_member_remove)|产品成员 ||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_ID_EQ|标识|EQ||
|N_NAME_LIKE|姓名|LIKE||
|N_PRODUCT_ID_EQ|产品标识|EQ||
|N_PRODUCT_NAME_EQ|产品名称|EQ||
|N_PRODUCT_NAME_LIKE|产品名称|LIKE||
|N_ROLE_ID_EQ|角色|EQ||
|N_USER_ID_EQ|登录名|EQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 产品添加成员（移动端） | mob_add_member | 添加成员 |无数据|<details><summary>后台调用</summary>[mob_create_product_member](#行为)||
| 设置角色 | setting_role | 设置 |多项数据（主键）|<details><summary>后台调用</summary>[change_role](#行为)||
| 设置角色（移动端） | mob_seting_role | 设置角色 |单项数据（主键）|<details><summary>后台调用</summary>[change_role](#行为)||
| 职位变更 | choose_position | 职位变更 |多项数据（主键）|<details><summary>后台调用</summary>[change_position](#行为)||
| 跳转至成员设置 | jump_to_member_set | 跳转至成员设置 |无数据|用户自定义||
| 移除成员 | remove_member | 移除成员 |单项数据（主键）|<details><summary>后台调用</summary>[Remove](#行为)||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[新建产品默认临时成员](module/ProdMgmt/product_member/uilogic/create_default_temp_members)|create_default_temp_members|创建临时数据，并将当前用户加入到产品临时成员内|
|[跳转至成员设置](module/ProdMgmt/product_member/uilogic/jump_to_member_set)|jump_to_member_set|通过路由跳转至产品成员设置|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/ProdMgmt/product_member?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product_member?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product_member?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product_member?id=处理逻辑`">
  处理逻辑
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product_member?id=功能配置`">
  功能配置
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product_member?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product_member?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product_member?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product_member?id=消息通知`">
  消息通知
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product_member?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product_member?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/ProdMgmt/product_member?id=界面逻辑`">
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