# 企业用户(user)  <!-- {docsify-ignore-all} -->


记录使用PLM系统的用户信息。（无存储，通过外部服务获取用户数据）


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|头像|AVATAR|图片|500|是||
|建立人|CREATE_MAN|文本，可指定长度|100|否||
|建立时间|CREATE_TIME|日期时间型||否||
|部门标识|DEPARTMENT_ID|外键值|100|是||
|部门|DEPARTMENT_NAME|外键值文本|200|否||
|姓名|DISPLAY_NAME|文本，可指定长度|200|否||
|邮箱|EMAIL|电子邮件|100|是||
|工号|EMPLOYEE_NUMBER|文本，可指定长度|100|否||
|标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|ID|全局唯一标识，文本类型，用户不可见|100|否||
|岗位标识|JOB_ID|外键值|100|是||
|职位名称|JOB_NAME|外键值文本|200|是||
|手机号|MOBILE|文本，可指定长度|100|是||
|登录名|NAME|文本，可指定长度|200|否||
|第三方用户标识|OPEN_USER_TAG|文本，可指定长度|100|是||
|组织标识|ORGANIZATION_ID|外键值|100|是||
|组织名称|ORGANIZATION_NAME|外键值文本|200|是||
|密码|PASSWORD|文本，可指定长度|200|是||
|统计|REPORT_FLAG|[是否逻辑](index/dictionary_index#user_report_flag "启停状态")||是||
|状态|STATUS|文本，可指定长度|100|是||
|职位|TITLE|单项选择(文本值)|100|是||
|更新人|UPDATE_MAN|文本，可指定长度|100|否||
|更新时间|UPDATE_TIME|日期时间型||否||
|用户ID|USER_ID|文本，可指定长度|100|是||


## 关系

<el-row>
<el-tabs v-model="show_der">
<el-tab-pane label="主关系" name="major">

| 名称col350     |   从实体col200 | 关系类型col200     |   备注col500  |
| -------- |---------- |------------|----- |
|[DER1N_CUSTOMER_USER_ASSIGNEE_ID](der/DER1N_CUSTOMER_USER_ASSIGNEE_ID)|[客户(CUSTOMER)](module/ProdMgmt/customer)|1:N关系||
|[DER1N_DEPARTMENT_USER_HEAD_ID](der/DER1N_DEPARTMENT_USER_HEAD_ID)|[部门(DEPARTMENT)](module/Base/department)|1:N关系||
|[DER1N_DISCUSS_MEMBER_USER_USER_ID](der/DER1N_DISCUSS_MEMBER_USER_USER_ID)|[协作成员(DISCUSS_MEMBER)](module/Team/discuss_member)|1:N关系||
|[DER1N_EXECUTOR_USER_USER_ID](der/DER1N_EXECUTOR_USER_USER_ID)|[执行人(EXECUTOR)](module/Base/executor)|1:N关系||
|[DER1N_IDEA_USER_ASSIGNEE_ID](der/DER1N_IDEA_USER_ASSIGNEE_ID)|[需求(IDEA)](module/ProdMgmt/idea)|1:N关系||
|[DER1N_INSIGHT_MEMBER_USER_USER_ID](der/DER1N_INSIGHT_MEMBER_USER_USER_ID)|[效能成员(INSIGHT_MEMBER)](module/Insight/insight_member)|1:N关系||
|[DER1N_LIBRARY_MEMBER_USER_USER_ID](der/DER1N_LIBRARY_MEMBER_USER_USER_ID)|[测试库成员(LIBRARY_MEMBER)](module/TestMgmt/library_member)|1:N关系||
|[DER1N_MEMBER_USER_USER_ID](der/DER1N_MEMBER_USER_USER_ID)|[成员(MEMBER)](module/Base/member)|1:N关系||
|[DER1N_PORTFOLIO_MEMBER_USER_USER_ID](der/DER1N_PORTFOLIO_MEMBER_USER_USER_ID)|[文件夹成员(PORTFOLIO_MEMBER)](module/Base/portfolio_member)|1:N关系||
|[DER1N_PRODUCT_MEMBER_USER_USER_ID](der/DER1N_PRODUCT_MEMBER_USER_USER_ID)|[产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member)|1:N关系||
|[DER1N_PROJECT_MEMBER_USER_USER_ID](der/DER1N_PROJECT_MEMBER_USER_USER_ID)|[项目成员(PROJECT_MEMBER)](module/ProjMgmt/project_member)|1:N关系||
|[DER1N_RESOURCE_MEMBER_USER_USER_ID](der/DER1N_RESOURCE_MEMBER_USER_USER_ID)|[资源组件成员(RESOURCE_MEMBER)](module/Base/resource_member)|1:N关系||
|[DER1N_SPACE_MEMBER_USER_USER_ID](der/DER1N_SPACE_MEMBER_USER_USER_ID)|[空间成员(SPACE_MEMBER)](module/Wiki/space_member)|1:N关系||
|[DER1N_TEST_CASE_USER_MAINTENANCE_ID](der/DER1N_TEST_CASE_USER_MAINTENANCE_ID)|[用例(TEST_CASE)](module/TestMgmt/test_case)|1:N关系||
|[DER1N_TICKET_USER_ASSIGNEE_ID](der/DER1N_TICKET_USER_ASSIGNEE_ID)|[工单(TICKET)](module/ProdMgmt/ticket)|1:N关系||
|[DER1N_WORK_ITEM_USER_ASSIGNEE_ID](der/DER1N_WORK_ITEM_USER_ASSIGNEE_ID)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|1:N关系||
|[ROLE_MEMBER_USER_MEMBER_UID](der/ROLE_MEMBER_USER_MEMBER_UID)|[系统角色成员(ROLE_MEMBER)](module/Base/role_member)|自定义关系||


</el-tab-pane>
<el-tab-pane label="从关系" name="minor">

|  名称col350   | 主实体col200   | 关系类型col200   |    备注col500  |
| -------- |---------- |-----------|----- |
|[DER1N_USER_DEPARTMENT_DEPARTMENT_ID](der/DER1N_USER_DEPARTMENT_DEPARTMENT_ID)|[部门(DEPARTMENT)](module/Base/department)|1:N关系||
|[DER1N_USER_JOB_JOB_ID](der/DER1N_USER_JOB_JOB_ID)|[岗位(JOB)](module/Base/job)|1:N关系||
|[DER1N_USER_ORGANIZATION_ORGANIZATION_ID](der/DER1N_USER_ORGANIZATION_ORGANIZATION_ID)|[组织(ORGANIZATION)](module/Base/organization)|1:N关系||

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
|激活用户|Activate|[实体处理逻辑](module/Base/user/logic/Activate "激活用户")|默认|不支持||||
|变更密码|ChangePwd|用户自定义|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|冻结用户|Freeze|[实体处理逻辑](module/Base/user/logic/Freeze "冻结用户")|默认|不支持||||
|获取用户简要信息|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|获取人员全量信息|GetFull|用户自定义|默认|不支持||||
|初始化密码|InitPwd|用户自定义|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|重置密码|ResetPassword|用户自定义|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|取消统计|cancel_report_flag|[实体处理逻辑](module/Base/user/logic/cancel_report_flag "取消统计")|默认|不支持||||
|设置统计|set_report_flag|[实体处理逻辑](module/Base/user/logic/set_report_flag "设置统计")|默认|不支持||||

## 处理逻辑
| 中文名col200    | 代码名col150    | 子类型col150    | 插件col200    |  备注col550  |
| -------- |---------- |----------- |------------|----------|
|[冻结用户](module/Base/user/logic/Freeze)|Freeze|无||冻结用户|
|[取消统计](module/Base/user/logic/cancel_report_flag)|cancel_report_flag|无||取消用户统计状态|
|[激活用户](module/Base/user/logic/Activate)|Activate|无||激活用户|
|[统计过滤](module/Base/user/logic/report_flag_filter)|report_flag_filter|无||排除非统计用户|
|[设置统计](module/Base/user/logic/set_report_flag)|set_report_flag|无||更新用户统计状态|
|[非空间下成员](module/Base/user/logic/not_space_mmeber)|not_space_mmeber|无||非空间下成员|

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
|[非空间下成员(not_space_mmeber)](module/Base/user/dataset/not_space_mmeber)|not_space_mmeber|[实体逻辑](module/Base/user/logic/not_space_mmeber)|否|||
|[未分配部门(unassigned_dept)](module/Base/user/dataset/unassigned_dept)|unassigned_dept|数据查询|否|||
|[当前用户(user)](module/Base/user/dataset/user)|user|数据查询|否|||
|[工时统计(workload)](module/Base/user/dataset/workload)|workload|[实体逻辑](module/Base/user/logic/report_flag_filter)|否|||

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
|N_DEPARTMENT_ID_ISNULL|部门标识|ISNULL||
|N_DEPARTMENT_NAME_EQ|部门|EQ||
|N_DEPARTMENT_NAME_LIKE|部门|LIKE||
|N_DISPLAY_NAME_LIKE|姓名|LIKE||
|N_ID_NOTIN|标识|NOTIN||
|N_ID_EQ|标识|EQ||
|N_JOB_ID_EQ|岗位标识|EQ||
|N_JOB_NAME_EQ|职位名称|EQ||
|N_JOB_NAME_LIKE|职位名称|LIKE||
|N_NAME_LIKE|登录名|LIKE||
|N_ORGANIZATION_ID_EQ|组织标识|EQ||
|N_ORGANIZATION_NAME_EQ|组织名称|EQ||
|N_ORGANIZATION_NAME_LIKE|组织名称|LIKE||
|N_REPORT_FLAG_EQ|统计|EQ||
|N_STATUS_EQ|状态|EQ||
|N_TITLE_EQ|职位|EQ||
|N_USER_ID_NOTEQ|用户ID|NOTEQ||

## 界面行为
|  中文名col200 |  代码名col150 |  标题col100   |     处理目标col100   |    处理类型col200        |  备注col500       |
| --------| --------| -------- |------------|------------|------------|
| 删除部门 | toolbar_choose_mpick_up_view_dept_cm_deuiaction3_click | 删除部门 |单项数据|用户自定义||
| 编辑部门 | toolbar_choose_mpick_up_view_node_cm_deuiaction2_click | 编辑部门 |单项数据|用户自定义||
| 修改密码（表单） | chang_pas | 确认 |无数据|用户自定义||
| 删除部门 | toolbar_tree_exp_view_dept_cm_deuiaction3_click | 删除部门 |单项数据|用户自定义||
| 编辑部门 | toolbar_tree_exp_view_node_cm_deuiaction2_click | 编辑部门 |单项数据|用户自定义||
| 冻结成员 | freeze | 冻结成员 |单项数据（主键）|<details><summary>后台调用</summary>[Freeze](#行为)||
| 新建下级部门 | toolbar_tree_exp_view_node1_cm_deuiaction1_click | 新建下级部门 |单项数据|用户自定义||
| 新建下级部门 | toolbar_choose_mpick_up_view_node1_cm_deuiaction1_click | 新建下级部门 |单项数据|用户自定义||
| 停止统计 | cancel_report_flag | 停止统计 |多项数据（主键）|<details><summary>后台调用</summary>[cancel_report_flag](#行为)||
| 新建下级部门 | toolbar_tree_exp_view_dept_cm_deuiaction1_click | 新建下级部门 |单项数据|用户自定义||
| 开启统计 | set_report_flag | 开启统计 |多项数据（主键）|<details><summary>后台调用</summary>[set_report_flag](#行为)||
| 帐号设置 | account_setting | 帐号设置 |无数据|<details><summary>打开顶级视图</summary>[帐号设置](app/view/user_setting_view)</details>|当前用户帐号设置|
| 修改密码（移动端表单） | mob_chang_pas | 确认 |无数据|用户自定义||
| 主题设置 | theme_setting | 主题设置 |无数据|用户自定义||
| 新建下级部门 | toolbar_choose_mpick_up_view_node_cm_deuiaction1_click | 新建下级部门 |单项数据|用户自定义||
| 删除部门 | toolbar_tree_exp_view_node_cm_deuiaction3_click | 删除部门 |单项数据|用户自定义||
| 打开密码修改页 | open_change_password | 打开密码修改页 |单项数据|<details><summary>打开视图或向导（模态）</summary>[修改密码](app/view/user_change_password_view)</details>||
| 编辑部门 | toolbar_choose_mpick_up_view_dept_cm_deuiaction2_click | 编辑部门 |单项数据|用户自定义||
| 编辑部门 | toolbar_tree_exp_view_dept_cm_deuiaction2_click | 编辑部门 |单项数据|用户自定义||
| 新建下级部门 | toolbar_tree_exp_view_node_cm_deuiaction1_click | 新建下级部门 |单项数据|用户自定义||
| 打开用户设置 | open_user_setting | 打开用户设置 |无数据|<details><summary>打开视图或向导（模态）</summary>[企业用户](app/view/user_custom_setting_view)</details>||
| 新建下级部门 | toolbar_choose_mpick_up_view_dept_cm_deuiaction1_click | 新建下级部门 |单项数据|用户自定义||
| 打开日志列表 | open_log_list | 打开日志列表 |无数据|<details><summary>打开顶级视图</summary>[PLM系统更新日志](app/view/article_page_updated_logs)</details>||
| 激活成员 | activate | 激活成员 |单项数据（主键）|<details><summary>后台调用</summary>[Activate](#行为)||
| 重置密码 | reset_password | 重置密码 |单项数据|<details><summary>后台调用</summary>[ResetPassword](#行为)||
| 编辑组织 | toolbar_tree_exp_view_node1_cm_deuiaction2_click | 编辑组织 |单项数据|用户自定义||
| 删除部门 | toolbar_choose_mpick_up_view_node_cm_deuiaction3_click | 删除部门 |单项数据|用户自定义||
| 打开用户基本信息 | open_user_info | 打开用户基本信息 |无数据|<details><summary>打开视图或向导（模态）</summary>[企业用户](app/view/user_mob_user_info_view)</details>||
| 编辑组织 | toolbar_choose_mpick_up_view_node1_cm_deuiaction2_click | 编辑组织 |单项数据|用户自定义||

## 界面逻辑
|  中文名col200 | 代码名col150 | 备注col900 |
| --------|--------|--------|
|[修改密码（移动端表单）](module/Base/user/uilogic/mob_change_pas)|mob_change_pas|修改密码|
|[修改密码（表单）](module/Base/user/uilogic/change_pas)|change_pas|修改密码|
|[删除部门](module/Base/user/uilogic/trash_dept)|trash_dept||
|[新建下级根部门](module/Base/user/uilogic/new_root_dept)|new_root_dept||
|[新建下级部门](module/Base/user/uilogic/new_dept)|new_dept||
|[编辑组织](module/Base/user/uilogic/edit_org)|edit_org||
|[编辑部门](module/Base/user/uilogic/edit_dept)|edit_dept||

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
<el-anchor-link :href="`#/module/Base/user?id=处理逻辑`">
  处理逻辑
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