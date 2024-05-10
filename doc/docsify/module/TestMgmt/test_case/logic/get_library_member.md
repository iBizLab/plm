## 获取测试库成员 <!-- {docsify-ignore-all} -->

   获取测试库成员信息，用于判断当前登陆者权限

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
state "开始" as Begin <<start>> [[$./get_library_member#begin {"开始"}]]
state "获取测试库ID并设置过滤条件" as PREPAREPARAM2  [[$./get_library_member#prepareparam2 {"获取测试库ID并设置过滤条件"}]]
state "查询当前用户是否为测试库成员" as DEDATASET3  [[$./get_library_member#dedataset3 {"查询当前用户是否为测试库成员"}]]
state "设置只读参数（true）" as PREPAREPARAM8  [[$./get_library_member#prepareparam8 {"设置只读参数（true）"}]]
state "结束" as END6 <<end>> [[$./get_library_member#end6 {"结束"}]]
state "循环子调用" as LOOPSUBCALL3  [[$./get_library_member#loopsubcall3 {"循环子调用"}]] #green {
state "输出循环参数" as DEBUGPARAM6  [[$./get_library_member#debugparam6 {"输出循环参数"}]]
state "设置只读参数（false）" as PREPAREPARAM9  [[$./get_library_member#prepareparam9 {"设置只读参数（false）"}]]
state "设置只读参数（true）" as PREPAREPARAM10  [[$./get_library_member#prepareparam10 {"设置只读参数（true）"}]]
}


Begin --> PREPAREPARAM2
PREPAREPARAM2 --> DEDATASET3
DEDATASET3 --> LOOPSUBCALL3
LOOPSUBCALL3 --> DEBUGPARAM6
DEBUGPARAM6 --> PREPAREPARAM9 : [[$./get_library_member#debugparam6-prepareparam9{非只读成员} 非只读成员]]
PREPAREPARAM9 --> END6
DEBUGPARAM6 --> PREPAREPARAM10 : [[$./get_library_member#debugparam6-prepareparam10{只读成员} 只读成员]]
PREPAREPARAM10 --> END6
DEDATASET3 --> PREPAREPARAM8 : [[$./get_library_member#dedataset3-prepareparam8{不在测试库中的成员} 不在测试库中的成员]]
PREPAREPARAM8 --> END6


@enduml
```


### 处理步骤说明

#### 输出循环参数 :id=DEBUGPARAM6<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`for_obj(循环临时变量)`的详细信息


#### 设置只读参数（false） :id=PREPAREPARAM9<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`false` 设置给  `user(当前登录人).readonly`

#### 循环子调用 :id=LOOPSUBCALL3<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`members(成员)`，子循环参数使用`for_obj(循环临时变量)`
#### 结束 :id=END6<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `user(当前登录人)`

#### 设置只读参数（true） :id=PREPAREPARAM10<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`true` 设置给  `user(当前登录人).readonly`

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 获取测试库ID并设置过滤条件 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).test_library_id(测试库)` 设置给  `library_info(测试库信息).ID(标识)`
2. 将`Default(传入变量).test_library_id(测试库)` 设置给  `filter(过滤器).N_LIBRARY_ID_EQ`
3. 将`用户全局对象.srfpersonid` 设置给  `filter(过滤器).N_USER_ID_EQ`

#### 查询当前用户是否为测试库成员 :id=DEDATASET3<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [测试库成员(LIBRARY_MEMBER)](module/TestMgmt/library_member.md) 数据集合 [数据集(DEFAULT)](module/TestMgmt/library_member#数据集合) ，查询参数为`filter(过滤器)`

将执行结果返回给参数`members(成员)`

#### 设置只读参数（true） :id=PREPAREPARAM8<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`true` 设置给  `user(当前登录人).readonly`


### 连接条件说明
#### 非只读成员 :id=DEBUGPARAM6-PREPAREPARAM9

`for_obj(循环临时变量).role_id` NOTEQ `reader`
#### 只读成员 :id=DEBUGPARAM6-PREPAREPARAM10

`for_obj(循环临时变量).role_id` EQ `reader`
#### 不在测试库中的成员 :id=DEDATASET3-PREPAREPARAM8

`members(成员).size` EQ `0`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[用例(TEST_CASE)](module/TestMgmt/test_case.md)||
|过滤器|filter|过滤器|||
|循环临时变量|for_obj|数据对象|||
|测试库信息|library_info|数据对象|[测试库(LIBRARY)](module/TestMgmt/library.md)||
|成员|members|分页查询|||
|工单|ticket|数据对象|[用例(TEST_CASE)](module/TestMgmt/test_case.md)||
|当前登录人|user|数据对象|||
|viewctx|viewctx||||
|webctx|webctx||||
