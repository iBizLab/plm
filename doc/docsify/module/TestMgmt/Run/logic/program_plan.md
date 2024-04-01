## 规划计划 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./program_plan#begin {"开始"}]]
state "绑定参数" as BINDPARAM1  [[$./program_plan#bindparam1 {"绑定参数"}]]
state "结束" as END1 <<end>> [[$./program_plan#end1 {"结束"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./program_plan#loopsubcall1 {"循环子调用"}]] #green {
state "准备参数" as PREPAREPARAM3  [[$./program_plan#prepareparam3 {"准备参数"}]]
state "拷贝参数" as COPYPARAM1  [[$./program_plan#copyparam1 {"拷贝参数"}]]
state "获取测试用例详情" as DEACTION2  [[$./program_plan#deaction2 {"获取测试用例详情"}]]
state "准备参数" as PREPAREPARAM2  [[$./program_plan#prepareparam2 {"准备参数"}]]
state "创建执行用例" as DEACTION1  [[$./program_plan#deaction1 {"创建执行用例"}]]
}


Begin --> BINDPARAM1 : [[$./program_plan#begin-bindparam1{存在principal_id} 存在principal_id]]
BINDPARAM1 --> END1 : [[$./program_plan#bindparam1-end1{不存在选中数据} 不存在选中数据]]
BINDPARAM1 --> LOOPSUBCALL1 : [[$./program_plan#bindparam1-loopsubcall1{存在选中数据} 存在选中数据]]
LOOPSUBCALL1 --> END1
LOOPSUBCALL1 --> PREPAREPARAM3
PREPAREPARAM3 --> COPYPARAM1
COPYPARAM1 --> DEACTION2
DEACTION2 --> PREPAREPARAM2
PREPAREPARAM2 --> DEACTION1
Begin --> END1 : [[$./program_plan#begin-end1{不存在principal_id} 不存在principal_id]]


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 绑定参数 :id=BINDPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[绑定参数]</font></sup>



绑定参数`Default(传入变量)` 到 `selectdata(关联列表)`
#### 创建执行用例 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [执行用例(RUN)](module/TestMgmt/Run.md) 行为 [Create](module/TestMgmt/Run#行为) ，行为参数为`select_create_data(需创建的数据)`

#### 准备参数 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(循环临时变量).ID(标识)` 设置给  `select_create_data(需创建的数据).CASE_ID(测试用例标识)`
2. 将`TEST_CASE_INFO(测试用例信息).STEPS(步骤)` 设置给  `select_create_data(需创建的数据).STEPS(步骤)`
3. 将`用户全局对象.srfpersonid` 设置给  `select_create_data(需创建的数据).CREATE_MAN(建立人)`
4. 将`用户全局对象.srfpersonid` 设置给  `select_create_data(需创建的数据).UPDATE_MAN(更新人)`
5. 将`空值（NULL）` 设置给  `select_create_data(需创建的数据).ID(标识)`
6. 将`Default(传入变量).principal_id` 设置给  `select_create_data(需创建的数据).PLAN_ID(测试计划标识)`

#### 获取测试用例详情 :id=DEACTION2<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [用例(TEST_CASE)](module/TestMgmt/Test_case.md) 行为 [Get](module/TestMgmt/Test_case#行为) ，行为参数为`TEST_CASE_INFO(测试用例信息)`

将执行结果返回给参数`TEST_CASE_INFO(测试用例信息)`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `Default(传入变量)`

#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`selectdata(关联列表)`，子循环参数使用`for_temp_obj(循环临时变量)`
#### 准备参数 :id=PREPAREPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_temp_obj(循环临时变量).ID(标识)` 设置给  `TEST_CASE_INFO(测试用例信息).ID(标识)`

#### 拷贝参数 :id=COPYPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[拷贝参数]</font></sup>



拷贝参数`for_temp_obj(循环临时变量)` 到 `select_create_data(需创建的数据)`


### 连接条件说明
#### 存在principal_id :id=Begin-BINDPARAM1

`Default(传入变量).principal_id` ISNOTNULL
#### 不存在选中数据 :id=BINDPARAM1-END1

`selectdata(关联列表).size` EQ `0`
#### 存在选中数据 :id=BINDPARAM1-LOOPSUBCALL1

`selectdata(关联列表).size` NOTEQ `0`
#### 不存在principal_id :id=Begin-END1

`Default(传入变量).principal_id` ISNULL


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[执行用例(RUN)](module/TestMgmt/Run.md)||
|测试用例信息|TEST_CASE_INFO|数据对象|[用例(TEST_CASE)](module/TestMgmt/Test_case.md)||
|循环临时变量|for_temp_obj|数据对象|[执行用例(RUN)](module/TestMgmt/Run.md)||
|关系对象|relationobj|数据对象|[关联(RELATION)](module/Base/Relation.md)||
|反向关系对象|relationobj2|数据对象|[关联(RELATION)](module/Base/Relation.md)||
|需创建的数据|select_create_data|数据对象|[执行用例(RUN)](module/TestMgmt/Run.md)||
|关联列表|selectdata|数据对象列表|[执行用例(RUN)](module/TestMgmt/Run.md)||
