## 生成最终评审结果 <!-- {docsify-ignore-all} -->

   评审完成后生成最终的评审结果

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
state "开始" as Begin <<start>> [[$./generate_review_result_finally#begin {"开始"}]]
state "设置通过" as PREPAREPARAM5  [[$./generate_review_result_finally#prepareparam5 {"设置通过"}]]
state "调试逻辑参数" as DEBUGPARAM4  [[$./generate_review_result_finally#debugparam4 {"调试逻辑参数"}]]
state "绑定评审结果" as PREPAREPARAM1  [[$./generate_review_result_finally#prepareparam1 {"绑定评审结果"}]]
state "调试逻辑参数" as DEBUGPARAM3  [[$./generate_review_result_finally#debugparam3 {"调试逻辑参数"}]]
state "结束" as END1 <<end>> [[$./generate_review_result_finally#end1 {"结束"}]]
state "设置拒绝" as PREPAREPARAM6  [[$./generate_review_result_finally#prepareparam6 {"设置拒绝"}]]
state "跳出" as END2 <<end>> [[$./generate_review_result_finally#end2 {"跳出"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./generate_review_result_finally#loopsubcall1 {"循环子调用"}]] #green {
state "调试逻辑参数" as DEBUGPARAM2  [[$./generate_review_result_finally#debugparam2 {"调试逻辑参数"}]]
state "可以生成最终评审结果" as PREPAREPARAM2  [[$./generate_review_result_finally#prepareparam2 {"可以生成最终评审结果"}]]
state "准备参数" as PREPAREPARAM4  [[$./generate_review_result_finally#prepareparam4 {"准备参数"}]]
state "不可生成最终评审结果" as PREPAREPARAM3  [[$./generate_review_result_finally#prepareparam3 {"不可生成最终评审结果"}]]
}


Begin --> DEBUGPARAM4
DEBUGPARAM4 --> PREPAREPARAM1
PREPAREPARAM1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> DEBUGPARAM2
DEBUGPARAM2 --> PREPAREPARAM2 : [[$./generate_review_result_finally#debugparam2-prepareparam2{通过/拒绝} 通过/拒绝]]
PREPAREPARAM2 --> PREPAREPARAM4 : [[$./generate_review_result_finally#prepareparam2-prepareparam4{包含通过} 包含通过]]
DEBUGPARAM2 --> PREPAREPARAM3 : [[$./generate_review_result_finally#debugparam2-prepareparam3{未评审/评审中} 未评审/评审中]]
PREPAREPARAM3 --> END2
LOOPSUBCALL1 --> DEBUGPARAM3 : [[$./generate_review_result_finally#loopsubcall1-debugparam3{可评审} 可评审]]
DEBUGPARAM3 --> PREPAREPARAM5 : [[$./generate_review_result_finally#debugparam3-prepareparam5{最终结果为通过} 最终结果为通过]]
PREPAREPARAM5 --> END1
DEBUGPARAM3 --> PREPAREPARAM6 : [[$./generate_review_result_finally#debugparam3-prepareparam6{最终结果为不通过} 最终结果为不通过]]
PREPAREPARAM6 --> END1


@enduml
```


### 处理步骤说明

#### 设置通过 :id=PREPAREPARAM5<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`1` 设置给  `Default(传入变量).FINAL_STAGE_RESULTS(最终评审结果)`

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 调试逻辑参数 :id=DEBUGPARAM4<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`Default(传入变量)`的详细信息


#### 绑定评审结果 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).STAGE_RESULTS(评审结果)` 绑定给  `stage_results(评审结果)`
2. 将`false` 设置给  `finally_result(最终结果).FINAL_STAGE_RESULTS(最终评审结果)`

#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`stage_results(评审结果)`，子循环参数使用`cur_result(当前结果)`
#### 调试逻辑参数 :id=DEBUGPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`finally_result(最终结果)`的详细信息


#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `Default(传入变量)`

#### 调试逻辑参数 :id=DEBUGPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`cur_result(当前结果)`的详细信息


#### 设置拒绝 :id=PREPAREPARAM6<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`0` 设置给  `Default(传入变量).FINAL_STAGE_RESULTS(最终评审结果)`

#### 跳出 :id=END2<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `跳出循环（BREAK）`

#### 可以生成最终评审结果 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`true` 设置给  `finally_result(最终结果).FINAL_STAGE_RESULTS(最终评审结果)`

#### 不可生成最终评审结果 :id=PREPAREPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`false` 设置给  `finally_result(最终结果).FINAL_STAGE_RESULTS(最终评审结果)`

#### 准备参数 :id=PREPAREPARAM4<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`1` 设置给  `finally_result(最终结果).STAGE_RESULTS(评审结果)`


### 连接条件说明
#### 通过/拒绝 :id=DEBUGPARAM2-PREPAREPARAM2

(`cur_result(当前结果).RESULT_STATE(状态)` EQ `3` OR `cur_result(当前结果).RESULT_STATE(状态)` EQ `4`)
#### 包含通过 :id=PREPAREPARAM2-PREPAREPARAM4

`cur_result(当前结果).RESULT_STATE(状态)` EQ `3`
#### 未评审/评审中 :id=DEBUGPARAM2-PREPAREPARAM3

(`cur_result(当前结果).RESULT_STATE(状态)` EQ `1` OR `cur_result(当前结果).RESULT_STATE(状态)` EQ `2`)
#### 可评审 :id=LOOPSUBCALL1-DEBUGPARAM3

`finally_result(最终结果).FINAL_STAGE_RESULTS(最终评审结果)` NOTEQ `false`
#### 最终结果为通过 :id=DEBUGPARAM3-PREPAREPARAM5

`finally_result(最终结果).STAGE_RESULTS(评审结果)` EQ `1`
#### 最终结果为不通过 :id=DEBUGPARAM3-PREPAREPARAM6

`finally_result(最终结果).STAGE_RESULTS(评审结果)` NOTEQ `1`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content.md)||
|当前结果|cur_result|数据对象|[评审结果(REVIEW_RESULT)](module/TestMgmt/review_result.md)||
|最终结果|finally_result|数据对象|[评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content.md)||
|评审结果|stage_results|数据对象列表|[评审结果(REVIEW_RESULT)](module/TestMgmt/review_result.md)||
|测试用例详情|test_case|数据对象|[用例(TEST_CASE)](module/TestMgmt/test_case.md)||
