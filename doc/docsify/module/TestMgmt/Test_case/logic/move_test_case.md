## 移动用例 <!-- {docsify-ignore-all} -->

   

### 处理过程

```plantuml
@startuml
hide empty description
<style>
root {
  HyperlinkColor #42b983
}
</style>

hide empty description
state "开始" as Begin <<start>> [[$./move_test_case#begin {"开始"}]]
state "绑定参数" as BINDPARAM1  [[$./move_test_case#bindparam1 {"绑定参数"}]]
state "绑定参数" as BINDPARAM2  [[$./move_test_case#bindparam2 {"绑定参数"}]]
state "结束" as END1 <<end>> [[$./move_test_case#end1 {"结束"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./move_test_case#loopsubcall1 {"循环子调用"}]] #green {
state "重新建立参数" as RENEWPARAM1  [[$./move_test_case#renewparam1 {"重新建立参数"}]]
state "实体行为" as DEACTION2  [[$./move_test_case#deaction2 {"实体行为"}]]
state "准备参数" as PREPAREPARAM1  [[$./move_test_case#prepareparam1 {"准备参数"}]]
state "准备参数" as PREPAREPARAM2  [[$./move_test_case#prepareparam2 {"准备参数"}]]
state "调试逻辑参数" as DEBUGPARAM2  [[$./move_test_case#debugparam2 {"调试逻辑参数"}]]
state "Update" as DEACTION1  [[$./move_test_case#deaction1 {"Update"}]]
}


Begin --> BINDPARAM1
BINDPARAM1 --> BINDPARAM2
BINDPARAM2 --> LOOPSUBCALL1
LOOPSUBCALL1 --> END1
LOOPSUBCALL1 --> RENEWPARAM1
RENEWPARAM1 --> DEACTION2
DEACTION2 --> PREPAREPARAM1
PREPAREPARAM1 --> PREPAREPARAM2 : [[$./move_test_case#prepareparam1-prepareparam2{连接名称} 连接名称]]
PREPAREPARAM2 --> DEBUGPARAM2
DEBUGPARAM2 --> DEACTION1
PREPAREPARAM1 --> DEBUGPARAM2 : [[$./move_test_case#prepareparam1-debugparam2{连接名称} 连接名称]]


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 绑定参数 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `srfactionparam(选中的数据对象)`
#### 绑定参数 :id=BINDPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `id(要更改状态的主键)`
#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`srfactionparam(选中的数据对象)`，子循环参数使用`for_temp_obj(循环临时变量)`
#### 重新建立参数 :id=RENEWPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[重新建立参数]</font></sup>



重建参数```temp_obj(临时变量)```
#### 实体行为 :id=DEACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [用例(TEST_CASE)](module/TestMgmt/Test_case.md) 行为 [Get](module/TestMgmt/Test_case#行为) ，行为参数为`id(要更改状态的主键)`

将执行结果返回给参数`temp_obj(临时变量)`

#### 准备参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(循环临时变量).TARGET_LIBRARY_ID(目标测试库)` 设置给  `temp_obj(临时变量).TEST_LIBRARY_ID(测试库标识)`
2. 将` ==> temp_obj[IDENTIFIER]` 设置给  `temp_obj(临时变量).IDENTIFIER(编号)`
3. 将`id(要更改状态的主键)` 设置给  `temp_obj(临时变量).ID(标识)`

#### 准备参数 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(循环临时变量).SUITE_ID(用例模块标识)` 设置给  `temp_obj(临时变量).SUITE_ID(用例模块标识)`

#### 调试逻辑参数 :id=DEBUGPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`temp_obj(临时变量)`的详细信息


#### Update :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [用例(TEST_CASE)](module/TestMgmt/Test_case.md) 行为 [Update](module/TestMgmt/Test_case#行为) ，行为参数为`temp_obj(临时变量)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*


### 连接条件说明
#### 连接名称 :id=PREPAREPARAM1-PREPAREPARAM2

`for_temp_obj(循环临时变量).suite_id(用例模块标识)` ISNOTNULL
#### 连接名称 :id=PREPAREPARAM1-DEBUGPARAM2

`for_temp_obj(循环临时变量).suite_id(用例模块标识)` ISNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[用例(TEST_CASE)](module/TestMgmt/Test_case.md)||
|循环临时变量|for_temp_obj|数据对象|[用例(TEST_CASE)](module/TestMgmt/Test_case.md)||
|要更改状态的主键|id|简单数据|||
|选中工作项的主键|ids|简单数据列表|||
|选中的数据对象|srfactionparam|数据对象列表|[用例(TEST_CASE)](module/TestMgmt/Test_case.md)||
|临时变量|temp_obj|数据对象|[用例(TEST_CASE)](module/TestMgmt/Test_case.md)||
