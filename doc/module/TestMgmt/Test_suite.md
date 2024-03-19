# 用例模块(Test_suite)  <!-- {docsify-ignore-all} -->



## 属性
|    中文名 | 属性名称           | 类型     | 长度     |值规则   |  序列     | 快速搜索     |  备注  |
| --------   |------------| -----  | -----  | ----- | -----  | :---:   |  -------- |
|序号|SEQUENCE|数值|0|||||
|模块路径|SUITES|文本，可指定长度|500|[默认规则](module/TestMgmt/Test_suite/value_rule/Suites#default)||||
|是否叶子节点|IS_LEAF|是否逻辑|0|||||
|标识|ID|全局唯一标识，文本类型，用户不可见|100|[默认规则](module/TestMgmt/Test_suite/value_rule/Id#default)||||
|建立时间|CREATE_TIME|日期时间型|0|||||
|更新时间|UPDATE_TIME|日期时间型|0|||||
|更新人|UPDATE_MAN|文本，可指定长度|100|[默认规则](module/TestMgmt/Test_suite/value_rule/Update_man#default)||||
|名称|NAME|文本，可指定长度|200|[默认规则](module/TestMgmt/Test_suite/value_rule/Name#default)||√||
|建立人|CREATE_MAN|文本，可指定长度|100|[默认规则](module/TestMgmt/Test_suite/value_rule/Create_man#default)||||
|测试库标识|LIBRARY_ID|外键值|100|[默认规则](module/TestMgmt/Test_suite/value_rule/Library_id#default)||||
|父标识|PID|外键值|100|[默认规则](module/TestMgmt/Test_suite/value_rule/Pid#default)||||
|名称|PNAME|外键值文本|200|[默认规则](module/TestMgmt/Test_suite/value_rule/Pname#default)||||
|测试库名称|LIBRARY_NAME|外键值文本|200|[默认规则](module/TestMgmt/Test_suite/value_rule/Library_name#default)||||


## 关系
<!-- tabs:start -->


#### **主关系**
| 名称     |   从实体 | 关系类型     |   备注  |
| -------- |---------- |------------|----- |
|[DER1N_TEST_CASE_TEST_SUITE_SUITE_ID](der/DER1N_TEST_CASE_TEST_SUITE_SUITE_ID)|[用例(TEST_CASE)](module/TestMgmt/Test_case)|1:N关系||
|[DER1N_TEST_SUITE_TEST_SUITE_PID](der/DER1N_TEST_SUITE_TEST_SUITE_PID)|[用例模块(TEST_SUITE)](module/TestMgmt/Test_suite)|1:N关系||

#### **从关系**
|  名称   | 主实体   | 关系类型   |    备注  |
| -------- |---------- |-----------|----- |
|[DER1N_TEST_SUITE_LIBRARY_LIBRARY_ID](der/DER1N_TEST_SUITE_LIBRARY_LIBRARY_ID)|[测试库(LIBRARY)](module/TestMgmt/Library)|1:N关系||
|[DER1N_TEST_SUITE_TEST_SUITE_PID](der/DER1N_TEST_SUITE_TEST_SUITE_PID)|[用例模块(TEST_SUITE)](module/TestMgmt/Test_suite)|1:N关系||
<!-- tabs:end -->

## 行为
| 中文名    | 代码名    | 类型    | 事务   | 批处理   | 附加操作  | 插件    |  备注  |
| -------- |---------- |----------- |------------|----------|---------| ----- | ----- |
|Create|Create|内置方法|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Save|Save|内置方法|默认|不支持||||




## 数据查询
| 中文名    | 代码名    | 默认查询 | 是否权限使用 | 自定义SQL |  备注|
| --------  | --------   | :---:  | :---:  | :---:  |----- |
|[数据查询(DEFAULT)](module/TestMgmt/Test_suite/query/Default)|DEFAULT|是|否 |否 ||
|[无父类(no_parent)](module/TestMgmt/Test_suite/query/No_parent)|no_parent|否|否 |否 ||
|[正常(normal)](module/TestMgmt/Test_suite/query/Normal)|normal|否|否 |否 ||
|[顶级模块(root)](module/TestMgmt/Test_suite/query/Root)|root|否|否 |否 ||
|[默认（全部数据）(VIEW)](module/TestMgmt/Test_suite/query/View)|VIEW|否|否 |否 ||


## 数据集合
| 中文名  | 代码名  | 类型 | 默认集合 |   插件|   备注|
| --------  | --------   | --------   | :---:   | ----- |----- |
|[数据集(DEFAULT)](module/TestMgmt/Test_suite/dataset/Default)|DEFAULT|数据查询|是|||
|[无父类(no_parent)](module/TestMgmt/Test_suite/dataset/No_parent)|no_parent|数据查询|否|||
|[正常(normal)](module/TestMgmt/Test_suite/dataset/Normal)|normal|数据查询|否|||
|[顶级模块(root)](module/TestMgmt/Test_suite/dataset/Root)|root|数据查询|否|||


## 数据权限

##### 全部数据（读） :id=Test_suite-ALL_R

<p class="panel-title"><b>数据范围</b></p>

* `全部数据`

<p class="panel-title"><b>数据能力</b></p>

* `READ(测试库(READ))`






## 搜索模式
|   搜索表达式   |    属性名    |    搜索模式        |
| -------- |------------|------------|
|N_ID_EQ|标识|EQ|
|N_NAME_LIKE|名称|LIKE|
|N_LIBRARY_ID_EQ|测试库标识|EQ|
|N_PID_EQ|父标识|EQ|
|N_PNAME_EQ|名称|EQ|
|N_PNAME_LIKE|名称|LIKE|
|N_LIBRARY_NAME_EQ|测试库名称|EQ|
|N_LIBRARY_NAME_LIKE|测试库名称|LIKE|




## 界面行为
|  中文名 |  代码名 |  标题   |     处理目标   |    处理类型        |  操作提示        |  刷新页面        |  附加操作       |
| --------| --------| -------- |------------|------------|------------|----------|----------|
| 删除 | toolbar_tree_exp_viewnode_2_cm_deuiaction2_click | 删除 |单项数据|用户自定义|否|无||
| 编辑 | toolbar_tree_exp_viewnode_1_cm_deuiaction1_click | 编辑 |单项数据|用户自定义|否|无||
| 删除 | toolbar_tree_exp_viewnode_3_cm_deuiaction2_click | 删除 |单项数据|用户自定义|否|无||
| 删除 | toolbar_tree_exp_viewnode_1_cm_deuiaction2_click | 删除 |单项数据|用户自定义|否|无||
| 编辑 | toolbar_tree_exp_viewnode_2_cm_deuiaction1_click | 编辑 |单项数据|用户自定义|否|无||
| 新建模块 | toolbar_tree_exp_viewtreeexpbar_toolbar_deuiaction1_click | 新建模块 |单项数据|用户自定义|否|无||
| 编辑 | toolbar_tree_exp_viewnode_3_cm_deuiaction1_click | 编辑 |单项数据|用户自定义|否|无||


## 界面逻辑
|  中文名 | 代码名 |
| --------|--------|
|[新建类别](module/TestMgmt/Test_suite/uilogic/create_category)|create_category|
|[新建分组](module/TestMgmt/Test_suite/uilogic/create_section)|create_section|
|[删除类别或分组](module/TestMgmt/Test_suite/uilogic/remove_section_or_category)|remove_section_or_category|
|[编辑类别或分组](module/TestMgmt/Test_suite/uilogic/edit_section_or_category)|edit_section_or_category|
