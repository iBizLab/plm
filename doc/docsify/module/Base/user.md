# 企业用户(user)  <!-- {docsify-ignore-all} -->


记录使用PLM系统的用户信息。（无存储，通过外部服务获取用户数据）


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|头像|AVATAR|图片|500|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|部门标识|DEPARTMENT_ID|外键值|100|是||
|部门名称|DEPARTMENT_NAME|外键值文本|200|是||
|显示名称|DISPLAY_NAME|文本，可指定长度|200|是||
|邮箱|EMAIL|电子邮件|100|是||
|工号|EMPLOYEE_NUMBER|文本，可指定长度|100|是||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|岗位标识|JOB_ID|外键值|100|是||
|职位名称|JOB_NAME|外键值文本|200|是||
|手机号|MOBILE|文本，可指定长度|100|是||
|名称|NAME|文本，可指定长度|200|是||
|密码|PASSWORD|文本，可指定长度|200|是||
|状态|STATUS|文本，可指定长度|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_CUSTOMER_USER_ASSIGNEE_ID](der/DER1N_CUSTOMER_USER_ASSIGNEE_ID)|[客户(CUSTOMER)](module/ProdMgmt/customer)|1:N关系||
|[DER1N_DEPARTMENT_USER_HEAD_ID](der/DER1N_DEPARTMENT_USER_HEAD_ID)|[部门(DEPARTMENT)](module/Base/department)|1:N关系||
|[DER1N_IDEA_USER_ASSIGNEE_ID](der/DER1N_IDEA_USER_ASSIGNEE_ID)|[需求(IDEA)](module/ProdMgmt/idea)|1:N关系||
|[DER1N_LIBRARY_MEMBER_USER_USER_ID](der/DER1N_LIBRARY_MEMBER_USER_USER_ID)|[测试库成员(LIBRARY_MEMBER)](module/TestMgmt/library_member)|1:N关系||
|[DER1N_MEMBER_USER_USER_ID](der/DER1N_MEMBER_USER_USER_ID)|[成员(MEMBER)](module/Base/member)|1:N关系||
|[DER1N_PORTFOLIO_MEMBER_USER_USER_ID](der/DER1N_PORTFOLIO_MEMBER_USER_USER_ID)|[文件夹成员(PORTFOLIO_MEMBER)](module/Base/portfolio_member)|1:N关系||
|[DER1N_PRODUCT_MEMBER_USER_USER_ID](der/DER1N_PRODUCT_MEMBER_USER_USER_ID)|[产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member)|1:N关系||
|[DER1N_PROJECT_MEMBER_USER_USER_ID](der/DER1N_PROJECT_MEMBER_USER_USER_ID)|[项目成员(PROJECT_MEMBER)](module/ProjMgmt/project_member)|1:N关系||
|[DER1N_SPACE_MEMBER_USER_USER_ID](der/DER1N_SPACE_MEMBER_USER_USER_ID)|[空间成员(SPACE_MEMBER)](module/Wiki/space_member)|1:N关系||
|[DER1N_TEST_CASE_USER_MAINTENANCE_ID](der/DER1N_TEST_CASE_USER_MAINTENANCE_ID)|[用例(TEST_CASE)](module/TestMgmt/test_case)|1:N关系||
|[DER1N_TICKET_USER_ASSIGNEE_ID](der/DER1N_TICKET_USER_ASSIGNEE_ID)|[工单(TICKET)](module/ProdMgmt/ticket)|1:N关系||
|[DER1N_WORK_ITEM_USER_ASSIGNEE_ID](der/DER1N_WORK_ITEM_USER_ASSIGNEE_ID)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|1:N关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_USER_DEPARTMENT_DEPARTMENT_ID](der/DER1N_USER_DEPARTMENT_DEPARTMENT_ID)|[部门(DEPARTMENT)](module/Base/department)|1:N关系||
|[DER1N_USER_JOB_JOB_ID](der/DER1N_USER_JOB_JOB_ID)|[岗位(JOB)](module/Base/job)|1:N关系||

</el-tab-pane>
</el-tabs>
</el-row>

## 映射
| 名称col150    | 映射实体col200   | 备注col900  |
| -------- |----------  |----- |
|[ebsx_mapping](module/Base/user/demap/ebsx_mapping)|[人员(SYS_EMP)](module/ebsx/SysEmployee)||
|[ibizsysmgr人员映射](module/Base/user/demap/ibizsysmgr)|[人员(SYS_PERSON)](module/ibizsysmgr/sys_person)||

## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|变更密码|ChangePwd|用户自定义|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|初始化密码|InitPwd|用户自定义|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||

## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/Base/user/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/user/query/View)|VIEW|否|否 |否 ||
|[未分配部门(unassigned_dept)](module/Base/user/query/unassigned_dept)|unassigned_dept|否|否 |否 ||
|[当前用户(user)](module/Base/user/query/user)|user|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/user/dataset/Default)|DEFAULT|数据查询|是|||
|[未分配部门(unassigned_dept)](module/Base/user/dataset/unassigned_dept)|unassigned_dept|数据查询|否|||
|[当前用户(user)](module/Base/user/dataset/user)|user|数据查询|否|||

## 数据权限

##### 全部数据（读） :id=user-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=user-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `UPDATE`
* `READ`
* `CREATE`
* `DELETE`



##### 当前部门（读） :id=user-CURDEPT_R

<p class="panel-title"><b>数据范围</b></p>

* `部门范围` ： <i class="fa fa-check-square"/></i> 当前部门

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 当前部门（读写） :id=user-CURDEPT_RW

<p class="panel-title"><b>数据范围</b></p>

* `部门范围` ： <i class="fa fa-check-square"/></i> 当前部门

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `UPDATE`
* `READ`
* `CREATE`



##### 当前组织（读） :id=user-CURORG_R

<p class="panel-title"><b>数据范围</b></p>

* `组织范围` ： <i class="fa fa-check-square"/></i> 当前组织

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 当前组织（读写） :id=user-CURORG_RW

<p class="panel-title"><b>数据范围</b></p>

* `组织范围` ： <i class="fa fa-check-square"/></i> 当前组织

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`
* `READ`
* `UPDATE`
* `DELETE`



##### 当前用户（读写） :id=user-USER_RW

<p class="panel-title"><b>数据范围</b></p>

* `数据集合` ：[当前用户(user)](module/Base/user#数据集合)

<p class="panel-title"><b>数据能力</b></p>

* `UPDATE`
* `READ`




## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_DEPARTMENT_ID_EQ|部门标识|EQ||
|N_DEPARTMENT_NAME_EQ|部门名称|EQ||
|N_DEPARTMENT_NAME_LIKE|部门名称|LIKE||
|N_DISPLAY_NAME_LIKE|显示名称|LIKE||
|N_ID_EQ|标识|EQ||
|N_JOB_ID_EQ|岗位标识|EQ||
|N_JOB_NAME_EQ|职位名称|EQ||
|N_JOB_NAME_LIKE|职位名称|LIKE||
|N_NAME_LIKE|名称|LIKE||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 帐号设置 | account_setting | 帐号设置 |无数据|<details><summary>打开顶级视图</summary>[帐号设置](app/view/user_setting_view)</details>|当前用户帐号设置|
| 修改密码（表单） | chang_pas | 确认 |无数据|用户自定义||
| 打开日志列表 | open_log_list | 打开日志列表 |无数据|<details><summary>打开顶级视图</summary>[PLM系统更新日志](app/view/article_page_updated_logs)</details>||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[修改密码（表单）](module/Base/user/uilogic/change_pas)|change_pas|修改密码|

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/Base/user?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/user?id=关系`">
  关系
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/user?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/user?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/user?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/user?id=数据权限`">
  数据权限
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/user?id=搜索模式`">
  搜索模式
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/user?id=界面行为`">
  界面行为
</el-anchor-link>
<el-anchor-link :href="`#/module/Base/user?id=界面逻辑`">
  界面逻辑
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