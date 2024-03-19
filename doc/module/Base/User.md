# 企业用户(User)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|显示名称|DISPLAY_NAME|文本，可指定长度|200|[默认规则](module/Base/User/value_rule/Display_name#default)||||
|邮箱|EMAIL|电子邮件|100|[默认规则](module/Base/User/value_rule/Email#default)||||
|手机号|MOBILE|文本，可指定长度|100|[默认规则](module/Base/User/value_rule/Mobile#default)||||
|密码|PASSWORD|文本，可指定长度|200|[默认规则](module/Base/User/value_rule/Password#default)||||
|工号|EMPLOYEE_NUMBER|文本，可指定长度|100|[默认规则](module/Base/User/value_rule/Employee_number#default)||||
|头像|AVATAR|图片|500|[默认规则](module/Base/User/value_rule/Avatar#default)||||
|状态|STATUS|文本，可指定长度|100|[默认规则](module/Base/User/value_rule/Status#default)||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/Base/User/value_rule/Id#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/Base/User/value_rule/Name#default)||||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/Base/User/value_rule/Create_man#default)||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/Base/User/value_rule/Update_man#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|部门标识|DEPARTMENT_ID|外键值|100|[默认规则](module/Base/User/value_rule/Department_id#default)||||
|岗位标识|JOB_ID|外键值|100|[默认规则](module/Base/User/value_rule/Job_id#default)||||
|职位名称|JOB_NAME|外键值文本|200|[默认规则](module/Base/User/value_rule/Job_name#default)||||
|部门名称|DEPARTMENT_NAME|外键值文本|200|[默认规则](module/Base/User/value_rule/Department_name#default)||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DER1N_CUSTOMER_USER_ASSIGNEE_ID](der/DER1N_CUSTOMER_USER_ASSIGNEE_ID)|[客户(CUSTOMER)](module/ProdMgmt/Customer)|1:N关系||
|[DER1N_DEPARTMENT_USER_HEAD_ID](der/DER1N_DEPARTMENT_USER_HEAD_ID)|[部门(DEPARTMENT)](module/Base/Department)|1:N关系||
|[DER1N_IDEA_USER_ASSIGNEE_ID](der/DER1N_IDEA_USER_ASSIGNEE_ID)|[需求(IDEA)](module/ProdMgmt/Idea)|1:N关系||
|[DER1N_LIBRARY_MEMBER_USER_USER_ID](der/DER1N_LIBRARY_MEMBER_USER_USER_ID)|[测试库成员(LIBRARY_MEMBER)](module/TestMgmt/Library_member)|1:N关系||
|[DER1N_PORTFOLIO_MEMBER_USER_USER_ID](der/DER1N_PORTFOLIO_MEMBER_USER_USER_ID)|[文件夹成员(PORTFOLIO_MEMBER)](module/Base/Portfolio_member)|1:N关系||
|[DER1N_PRODUCT_MEMBER_USER_USER_ID](der/DER1N_PRODUCT_MEMBER_USER_USER_ID)|[产品成员(PRODUCT_MEMBER)](module/ProdMgmt/Product_member)|1:N关系||
|[DER1N_PROJECT_MEMBER_USER_USER_ID](der/DER1N_PROJECT_MEMBER_USER_USER_ID)|[项目成员(PROJECT_MEMBER)](module/ProjMgmt/Project_member)|1:N关系||
|[DER1N_SPACE_MEMBER_USER_USER_ID](der/DER1N_SPACE_MEMBER_USER_USER_ID)|[空间成员(SPACE_MEMBER)](module/Wiki/Space_member)|1:N关系||
|[DER1N_TEST_CASE_USER_MAINTENANCE_ID](der/DER1N_TEST_CASE_USER_MAINTENANCE_ID)|[用例(TEST_CASE)](module/TestMgmt/Test_case)|1:N关系||
|[DER1N_TICKET_USER_ASSIGNEE_ID](der/DER1N_TICKET_USER_ASSIGNEE_ID)|[工单(TICKET)](module/ProdMgmt/Ticket)|1:N关系||
|[DER1N_WORK_ITEM_USER_ASSIGNEE_ID](der/DER1N_WORK_ITEM_USER_ASSIGNEE_ID)|[工作项(WORK_ITEM)](module/ProjMgmt/Work_item)|1:N关系||

#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_USER_DEPARTMENT_DEPARTMENT_ID](der/DER1N_USER_DEPARTMENT_DEPARTMENT_ID)|[部门(DEPARTMENT)](module/Base/Department)|1:N关系||
|[DER1N_USER_JOB_JOB_ID](der/DER1N_USER_JOB_JOB_ID)|[岗位(JOB)](module/Base/Job)|1:N关系||
<!-- tabs:end -->

## 映射
| 名称    | 映射实体   | 备注  |
| -------- |----------  |----- |
|[ebsx_mapping](module/Base/User/demap/ebsx_mapping)|[人员(SYS_EMP)](module/ebsx/SysEmployee)||
|[ibizsysmgr人员映射](module/Base/User/demap/ibizsysmgr)|[人员(SYS_PERSON)](module/ibizsysmgr/Sys_person)||

## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|变更密码|ChangePwd|用户自定义|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|初始化密码|InitPwd|用户自定义|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||




## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[数据查询(DEFAULT)](module/Base/User/query/Default)|DEFAULT|是|否 |否 ||
|[未分配部门(unassigned_dept)](module/Base/User/query/Unassigned_dept)|unassigned_dept|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/Base/User/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/Base/User/dataset/Default)|DEFAULT|数据查询|是|||
|[未分配部门(unassigned_dept)](module/Base/User/dataset/Unassigned_dept)|unassigned_dept|数据查询|否|||


## 数据权限

##### 全部数据（读） :id=User-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 全部数据（读写） :id=User-ALL_RW

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `UPDATE`
* `READ`
* `CREATE`
* `DELETE`



##### 当前部门（读） :id=User-CURDEPT_R

<p class="panel-title"><b>数据范围</b></p>

* `部门范围` ： <i class="fa fa-check-square"/></i> 当前部门

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 当前部门（读写） :id=User-CURDEPT_RW

<p class="panel-title"><b>数据范围</b></p>

* `部门范围` ： <i class="fa fa-check-square"/></i> 当前部门

<p class="panel-title"><b>数据能力</b></p>

* `DELETE`
* `UPDATE`
* `READ`
* `CREATE`



##### 当前组织（读） :id=User-CURORG_R

<p class="panel-title"><b>数据范围</b></p>

* `组织范围` ： <i class="fa fa-check-square"/></i> 当前组织

<p class="panel-title"><b>数据能力</b></p>

* `READ`



##### 当前组织（读写） :id=User-CURORG_RW

<p class="panel-title"><b>数据范围</b></p>

* `组织范围` ： <i class="fa fa-check-square"/></i> 当前组织

<p class="panel-title"><b>数据能力</b></p>

* `CREATE`
* `READ`
* `UPDATE`
* `DELETE`






## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_DISPLAY_NAME_LIKE|显示名称|LIKE|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|名称|LIKE|
|N_DEPARTMENT_ID_EQ|部门标识|EQ|
|N_JOB_ID_EQ|岗位标识|EQ|
|N_JOB_NAME_EQ|职位名称|EQ|
|N_JOB_NAME_LIKE|职位名称|LIKE|
|N_DEPARTMENT_NAME_EQ|部门名称|EQ|
|N_DEPARTMENT_NAME_LIKE|部门名称|LIKE|




